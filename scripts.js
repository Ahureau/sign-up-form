const button = document.getElementById("formButton");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const errorText = document.getElementsByClassName("errorText");

function passwordCheck() {
    if (passwordConfirm.value !== password.value) {
        passwordConfirm.setCustomValidity("The password doesn't match.");
    } else passwordConfirm.setCustomValidity("");
}

passwordConfirm.addEventListener("focusout", passwordCheck);