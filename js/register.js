import { validateEmail, validateRegister, getDate} from "./functions.js";

const button = document.getElementById('button');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const birth = document.getElementById('birth');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const form = document.getElementById('form');

button && button.addEventListener('click', function(e){
    e.preventDefault();
    const isValid = validateRegister(name, surname, birth, email, username, password, repassword);;

    if (isValid) {
        const user = {
            name: name.value,
            surname: surname.value,
            birth: birth.value,
            email: email.value,
            username: username.value,
            password: password.value,
        }

        let users = getDate();
        users.push(user)
        localStorage.setItem('users', JSON.stringify(user));
        form.reset();
        let index = window.location.href.search('pages')
        let baseUrl = window.location.href.substring(0, index)
        window.location.assign(`${baseUrl}pages/login.html`)
    }
});