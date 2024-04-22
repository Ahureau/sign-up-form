

// Global variables

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passwordConfirm = document.getElementById("passwordConfirm");
const form = document.querySelector(".formFields .theForm");
const fields = document.querySelectorAll("input");

// Only submit if all is valid

form.addEventListener("submit", (event) => {
    let isInvalid = false;
    fields.forEach(element => {
            if (element.validity.invalid || element.validity.typeMismatch || element.validity.valueMissing) {
                isInvalid = true;
            }
        }
    );
    if (isInvalid === true || passwordConfirm.parentNode.querySelector(".errorContainer .errorText").classList.contains("visible")) {
        event.preventDefault();
    }
});


// Input check functions

function firstNameCheck() {
    const firstNameError = document.querySelector("#firstName + .errorContainer .errorText");
    const firstNameContainer = document.querySelector("#firstName");
    if (!firstName.validity.valid) {
        firstNameError.classList.add("visible");
        firstNameContainer.classList.add("userInvalid");
        return false;
    } else {
        firstNameError.classList.remove("visible");
        firstNameContainer.classList.remove("userInvalid");
        return true;
    }
}

function lastNameCheck() {
    const lastNameError = document.querySelector("#lastName + .errorContainer .errorText");
    const lastNameContainer = document.querySelector("#lastName");
    if (!lastName.validity.valid) {
        lastNameError.classList.add("visible");
        lastNameContainer.classList.add("userInvalid");
        return false;
    } else {
        lastNameError.classList.remove("visible");
        lastNameContainer.classList.remove("userInvalid");
        return true;
    }
}

function emailCheck() {
    const emailError = document.querySelector("#email + .errorContainer .errorText");
    const emailContainer = document.querySelector("#email");
    if (!email.validity.valid) {
        emailError.classList.add("visible");
        emailContainer.classList.add("userInvalid");
        return false;
    } else {
        emailError.classList.remove("visible");
        emailContainer.classList.remove("userInvalid");
        return true;
    }
}

function phoneCheck() {
    const phoneError = document.querySelector("#phone + .errorContainer .errorText");
    const phoneContainer = document.querySelector("#phone");
    if (!phone.validity.valid) {
        phoneError.classList.add("visible");
        phoneContainer.classList.add("userInvalid");
        return false;
    } else {
        phoneError.classList.remove("visible");
        phoneContainer.classList.remove("userInvalid");
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


firstName.addEventListener("input", firstNameCheck);
lastName.addEventListener("input", lastNameCheck);
email.addEventListener("input", emailCheck);
phone.addEventListener("input", phoneCheck);
password.addEventListener("input", () => { confirmCheck(); passwordCheck() });
passwordConfirm.addEventListener("input", confirmCheck);