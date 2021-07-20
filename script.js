const usernameField = document.querySelector('#username');
const emailField = document.querySelector('#email');
const passwordField1 = document.querySelector('#password');
const passwordField2 = document.querySelector('#password2');
const submitButton = document.querySelector('#username');
const form = document.querySelector('#form');

function showError(field, fieldName) {
    let formControl = field.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = fieldName + " is required"
}

function showSuccess(field) {
    let formControl = field.parentElement;
    formControl.className = 'form-control success';
}

function checkEmpty(field, fieldName) {
    if (field.value === '') {
        showError(field, fieldName);
    }
    else {
        showSuccess(field);
    }
}

function checkPassword(passwordField1, passwordField2) {
    if (passwordField1.value == passwordField2.value) {
        checkEmpty(passwordField1, 'Password');
        checkEmpty(passwordField2, 'Password');
    }
    else {
        let formControl1 = passwordField1.parentElement;
        let formControl2 = passwordField2.parentElement;
        formControl1.className = 'form-control error';
        formControl2.className = 'form-control error';
        let small1 = formControl1.querySelector('small');
        let small2 = formControl2.querySelector('small');
        small1.innerText = 'Passwords must match';
        small2.innerText = 'Passwords must match';

    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkEmpty(usernameField, "Username");
    checkEmpty(emailField, "Email");
    checkPassword(passwordField1, passwordField2);
})