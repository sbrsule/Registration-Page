const usernameField = document.querySelector('#username');
const emailField = document.querySelector('#email');
const passwordField1 = document.querySelector('#password');
const passwordField2 = document.querySelector('#password2');
const submitButton = document.querySelector('#submitButton');
const form = document.querySelector('#form');


function showError(field, errorString) {
    let formControl = field.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = errorString
}

function showSuccess(field) {
    let formControl = field.parentElement;
    formControl.className = 'form-control success';
}

function checkEmpty(field) {
    if (field.value === '') {
        return true;
    }
    else {
        return false;
    }
}

function checkUsername(usernameField) {
    if (checkEmpty(usernameField)) {
        showError(usernameField, "Username is required");
    }
    else {
        showSuccess(usernameField);
    }
}

function checkEmail(emailField) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailField.value === '') {
        showError(emailField, "Email is required")
    }
    else if (re.test(String(emailField.value).toLowerCase())) {
        showSuccess(emailField);
    }
    else {
        showError(emailField, "Email is not valid");
    }
}

function checkPassword(passwordField1, passwordField2) {
    if (checkEmpty(passwordField1) || checkEmpty(passwordField2)) {
        if (checkEmpty(passwordField1)) {
            showError(passwordField1, "Password is required");
        }
        if (checkEmpty(passwordField2)) {
            showError(passwordField2, "Password Confirmation is required");
        }
        return; 
    }
    else if (passwordField1.value === passwordField2.value) {
        showSuccess(passwordField1);
        showSuccess(passwordField2);
    }
    else {
        showError(passwordField1, "Passwords do not match");
        showError(passwordField2, "Passwords do not match");
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkUsername(usernameField, "Username");
    checkEmail(emailField);
    checkPassword(passwordField1, passwordField2);
})