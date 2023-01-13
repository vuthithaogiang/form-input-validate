const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');
let id = (id) => document.getElementById(id);

let formName = id("form-username");
let formEmail = id("form-email");
let formPassword = id("form-password");
let formConfirmPassWord = id("form-confirm-password");

let enterUserName = id("enter-username");
let enterEmail = id("enter-email");
let enterPassword = id("enter-password");
let enterConfirmPassword = id("enter-confirm-password");

const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(usernameEl)) {
        showError(usernameEl, "Username cannot be blank.");
        formName.style.border = "2px solid red";

    }
    else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, 'Username must be between (min, max) characters');
        formName.style.border = "2px solid red";

    }
    else {
        showSuccess(usernameEl);
        valid = true;
        formName.style.border = "2px solid green";
        enterUserName.style.color = "white";
    }

    return valid;

};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank');

        formEmail.style.border = "2px solid red";

    }
    else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid');
        formEmail.style.border = "2px solid red";

    }
    else {
        showSuccess(emailEl);
        valid = true;
        formEmail.style.border = "2px solid green";
        enterEmail.style.color = "white";

    }

    return valid;
};

const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
        formPassword.style.border = "2px solid red";

    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password not valid');
        formPassword.style.border = "2px solid red";

    }
    else {
        showSuccess(passwordEl);
        valid = true;
        formPassword.style.border = "2px solid green";
        enterPassword.style.color = "white";


    }

    return valid;

};

const checkConfirmPassword = () => {

    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();

    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter password again!');
        formConfirmPassWord.style.border = "2px solid red";
        

    }
    else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
        formConfirmPassWord.style.border = "2px solid red";
       


    }
    else {
        showSuccess(confirmPasswordEl);
        valid = true;
        formConfirmPassWord.style.border = "2px solid green";
      
        enterConfirmPassword.style.color = "white";



    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);

}

const isPasswordSecure = (password) => {

    const re = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {

    }

});

const debounce = (fn, delay = 1) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(null, args)

        }, delay);

    };

};

form.addEventListener('input', debounce(function (e) {

    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;

    }

}));


