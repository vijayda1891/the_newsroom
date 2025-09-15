const myForm = document.getElementById('new_user');
const inputFields = myForm.querySelectorAll('[required]');
const registrationSubmitButton = document.getElementById('new_user_registration');
const loginSubmitButton = document.getElementById('new_user_session');
const passwordResetSubmitButton = document.getElementById('password_reset_submit');
const emailField = document.getElementById('user_email');
const sessionEmailValidationHint = document.getElementById('session-email-warning');
const registrationEmailValidationHint = document.getElementById('registration-email-warning');
const passwordEmailValidationHint = document.getElementById('password-email-warning');

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
    if(sessionEmailValidationHint !== null){
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (pattern.test(event.target.value)){
            sessionEmailValidationHint.setAttribute("hidden","true");
            emailField.classList.remove("invalid-email");
        } else {
            sessionEmailValidationHint.removeAttribute("hidden");
            emailField.classList.add("invalid-email");
        }
    } else if (registrationEmailValidationHint !== null){
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (pattern.test(event.target.value)){
            registrationEmailValidationHint.setAttribute("hidden","true");
            emailField.classList.remove("invalid-email");
        } else {
            registrationEmailValidationHint.removeAttribute("hidden");
            emailField.classList.add("invalid-email");
        }
    } else if (passwordEmailValidationHint !== null){
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (pattern.test(event.target.value)){
            passwordEmailValidationHint.setAttribute("hidden","true");
            emailField.classList.remove("invalid-email");
        } else {
            passwordEmailValidationHint.removeAttribute("hidden");
            emailField.classList.add("invalid-email");
        }
    }
}



emailField.addEventListener('keyup', emailIsValid);
