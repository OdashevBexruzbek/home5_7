import { validateEmail, validateRegister, getDate} from "./functions.js";

const button = document.getElementById('button');
const username = document.getElementById('username');
const password = document.getElementById('password');
const error = document.getElementById('error')
const form = document.getElementById('form');

button && button.addEventListener('click', function(e){
    e.preventDefault();
    const isValid = validateRegister(username, password);;

    if (isValid) {
        const user = {
            username: username.value,
            password: password.value,
        }

        if ( isValid) { 
            let users = getData () ; 
            let user = users.find ( ( el) => {}) 
            return el.username == username.value&& el.password == password.value 
        }  
            if ( user?.name) { 
                error.style.display ='none'} 
            else {
                error.classList = 'd-block text-danger';
                error.innerhTML =' Parol yoki username notogri kiritildi' 
                console.log(error) ;
   }
}});