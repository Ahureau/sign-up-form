// Global variables

const passwordConfirm = document.getElementById("passwordConfirm");
const password = document.getElementById("password");
const form = document.querySelector(".formFields .theForm");

// Only submit if all is valid

form.addEventListener("submit", (event) => {
    if (password.parentNode.querySelector(".errorContainer .errorText").classList.contains("visible")) {
        confirmCheck();
        event.preventDefault();
    }
});


// Password & password check functions

function confirmCheck() {
    const confirmError = document.querySelector("#passwordConfirm + .errorContainer .errorText");
    const confirmContainer = document.querySelector("#passwordConfirm");
    if (passwordConfirm.value !== password.value) {
        confirmError.classList.add("visible");
        confirmContainer.classList.add("userInvalid");
        return false;
    } else {
        confirmError.classList.remove("visible");
        confirmContainer.classList.remove("userInvalid");
        return true;
    }
}

function passwordCheck() {
    const passwordError = document.querySelector("#password + .errorContainer .errorText");
    const passwordContainer = document.querySelector("#password");
    if (!password.validity.valid) {
        passwordError.classList.add("visible");
        passwordContainer.classList.add("userInvalid");
        return false;
    } else {
        passwordError.classList.remove("visible");
        passwordContainer.classList.remove("userInvalid");
        return true;
    }
}

passwordConfirm.addEventListener("focusout", confirmCheck);
password.addEventListener("focusout", () => {confirmCheck(); passwordCheck()});