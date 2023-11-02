const loginModal = document.getElementById("loginModal");
const loginNavButton = document.getElementById("loginNavButton");
const loginButton = document.getElementById("loginButton");
const closeModal = document.getElementById("closeModal");
const showRegister = document.getElementById("showRegister");
const registerButton = document.getElementById("registerButton");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginNavButton.addEventListener("click", showLoginModal);
closeModal.addEventListener("click", closeModalHandler);
loginButton.addEventListener("click", login);
showRegister.addEventListener("click", showRegisterModal);
registerButton.addEventListener("click", register);

function showLoginModal() {
    loginModal.style.display = "block";
    registerForm.style.display = "none";
    resetForms();
}

function closeModalHandler() {
    loginModal.style.display = "none";
}

function showRegisterModal(){
    loginForm.style.display = "none";
    registerForm.style.display = "block";
}
function resetForms() {
    loginForm.style.display = "block";
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
    clearError("loginEmail");
    clearError("loginPassword");

    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("repeatPassword").value = "";
    document.getElementById("terms").checked = false;
    clearError("registerEmail");
    clearError("registerPassword");
    clearError("repeatPassword");
}

function validateEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
}

function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    inputElement.style.color = "red";
    const errorMessageElement = document.createElement("p");
    errorMessageElement.className = "error-message";
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = "red";
    inputElement.parentNode.appendChild(errorMessageElement);
}

function clearError(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.style.color = "";
    const errorMessageElement = inputElement.parentNode.querySelector(".error-message");
    if (errorMessageElement) {
        errorMessageElement.remove();
    }
}

function login() {
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    clearError("loginEmail");
    clearError("loginPassword");

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!validateEmail(email)) {
        showError("loginEmail", "Invalid email address");
    } else if (!password) {
        showError("loginPassword", "Password is required");
    } else {
        alert("Log in successful");
        closeModalHandler();
    }
}

function register() {
    const emailInput = document.getElementById("registerEmail");
    const passwordInput = document.getElementById("registerPassword");
    const passwordInputRepeat = document.getElementById("repeatPassword");
    const termsCheckbox = document.getElementById("terms");

    clearError("registerEmail");
    clearError("registerPassword");
    clearError("repeatPassword");

    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordRep = passwordInputRepeat.value;
    const termsAccepted = termsCheckbox.checked;

    if (!validateEmail(email)) {
        showError("registerEmail", "Invalid email address");
    } else if (!password) {
        showError("registerPassword", "Password is required");
    } else if (password !== passwordRep) {
        showError("repeatPassword", "Passwords do not match");
    }else if (!termsAccepted) {
        showError("terms", "You must accept the terms of use");
    }
    else {
        alert("Sign up successful");
        closeModalHandler();
    }
}
