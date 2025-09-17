const myForm = document.getElementById('new_user');
const inputFields = myForm.querySelectorAll('[required]');
const registrationSubmitButton = document.getElementById('new_user_registration');
const loginSubmitButton = document.getElementById('new_user_session');
const passwordResetSubmitButton = document.getElementById('password_reset_submit');
const emailField = document.getElementById('user_email');
const EmailValidationHint = document.getElementById('email-warning');
const EmailValidationCheckIcon = document.getElementById('email-correct');
const EmailValidationAlertIcon = document.getElementById('email-alert');
const passwordField = document.getElementById('user_password');
const passwordConfirmationField = document.getElementById('user_password_confirmation');
const showHidePasswordIcon = document.getElementById('display-password');
const passwordValidation = document.getElementById('password-feedback');

function validateForm() {
    let allFieldsFilled = true;
    inputFields.forEach(field => {
        if (field.value.trim() === '') { 
            allFieldsFilled = false;
        }
    });
    if( registrationSubmitButton !== null ){
        registrationSubmitButton.disabled = !allFieldsFilled;
    } else if( loginSubmitButton !== null ){
        loginSubmitButton.disabled = !allFieldsFilled;
    } else if( passwordResetSubmitButton !== null){
        passwordResetSubmitButton.disabled = !allFieldsFilled;
    }
}

inputFields.forEach(field => {
    field.addEventListener('keyup', validateForm);
});

function emailIsValid (event) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(event.target.value)){
        EmailValidationHint.setAttribute("hidden","true");
        emailField.classList.remove("invalid-email");
        EmailValidationCheckIcon.classList.remove("icon-display");
        EmailValidationAlertIcon.classList.add("icon-display");
    } else {
        EmailValidationHint.removeAttribute("hidden");
        emailField.classList.add("invalid-email");
        EmailValidationAlertIcon.classList.remove("icon-display");
        EmailValidationCheckIcon.classList.add("icon-display");
    }
}



emailField.addEventListener('keyup', emailIsValid);

showHidePasswordIcon.addEventListener('click', function(){
    const type = passwordField.getAttribute('type');
    if ( type === 'password'){
        passwordField.setAttribute('type', 'text');
    } else {
        passwordField.setAttribute('type', 'password');
    }
});

function validatePassword(password) {
    let feedback = [];

    if (password.length < 8) {
        feedback.push("Password must be at least 8 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
        feedback.push("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        feedback.push("Password must contain at least one lowercase letter.");
    }

    if (!/[0-9]/.test(password)) {
        feedback.push("Password must contain at least one number.");
    }

    if (!/[!@#$%^&*()]/.test(password)) {
        feedback.push("Password must contain at least one special character.");
    }

    return feedback;
}

passwordField.addEventListener('keyup', function(){
    const messages = validatePassword(passwordField.value);
    if (messages.length > 0) {
        passwordValidation.innerHTML = messages.map(msg => `<p class="invalid">${msg}</p>`).join('');
    } else {
        passwordValidation.innerHTML = '';
    }
});

// passwordConfirmationField.addEventListener('keyup', function(){
//     const messages = validatePassword(passwordConfirmationField.value);
//     if (messages.length > 0) {
//         passwordValidation.innerHTML = messages.map(msg => `<p class="invalid">${msg}</p>`).join('');
//     } else {
//         passwordValidation.innerHTML = '';
//     }
// });

