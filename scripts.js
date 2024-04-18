const button = document.getElementById("formButton");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordError = document.querySelector("#password + .errorContainer .errorText");

function passwordCheck() {
    if (passwordConfirm.value !== password.value) {
        passwordError.classList.add("visible");
    } else {
        passwordError.classList.remove("visible");
    }
}

passwordConfirm.addEventListener("focusout", passwordCheck);