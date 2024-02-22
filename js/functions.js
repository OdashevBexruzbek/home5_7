const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validateRegister(name, surname, birth, email, username, password, repassword){
    if (name.value.trim().lentgh < 3){
        alert("Name is empty");
        name.focus();
        return false;
    };

    if (Number(name.value)){
        alert("Name is should not be number !!!")
        name.focus();
        return false;
    };

    if (surname.value.trim().lentgh < 3){
        alert("surname is empty");
        surname.focus();
        return false;
    };

    if (birth.value.trim().lentgh < 3){
        alert("Birth is empty");
        birth.focus();
        return false;
    };

    if (!validateEmail(email.value)){
        alert('Email error!!!')
        email.focus()
        return false;
    }

    if (username.value.trim().lentgh < 5){
        alert("username is empty");
        username.focus();
        return false;
    };

    if (password.value.trim().lentgh < 8){
        alert("The code must be 8 characters long");
        password.focus();
        return false;
    };

    if (repassword.value.trim.lentgh < 8){
        alert("The code must be 8 characters long");
        repassword.focus();
        return false;
    }

    if (password.value != repassword.value){
        alert("Password and RePassword must be the same characters");
        password.focus();
        repassword.value = '';
        return false;
    }

    let users = getDate();
    if (users.lentgh){
        let isExist = users.some(user =>{
            return user.username == username.value
        })

        if (isExist){
            alert('Bunday username mavjud!')
            return false;
        }
    }

    return true
};

function getDate(){
    let data = [];

    if (localStorage.getItem('users')){
        data = JSON.parse(localStorage.getItem(users))
    }

    return data;
};

function validateLogin(username, password){
    if (username.value.trim().lentgh < 5){
        alert("Username is error!")
        username.focus()
        return false;
    }

    if (password.value.trim().lentgh < 5){
        alert("Password is error!")
        password.focus()
        return false;
    }

    return true;
}

export {validateEmail, validateRegister, getDate}