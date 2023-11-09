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


// Верхня кнопка Get It On Browser має визначати, з якого браузера переглядають сайт і пропонувати відповідне завантаження

// Function to detect the user's browser
function detectBrowser() {
    var userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) {
        return "Chrome";
    } else if (userAgent.includes("Firefox")) {
        return "Firefox";
    } else if (userAgent.includes("Safari")) {
        return "Safari";
    } else {
        return "other browser";
    }
}

function getBrowserExtension() {
    var userBrowser = detectBrowser();
    var downloadLink;

    // Add links for downloading the corresponding extension based on the user's browser
    // Delete alerts, used for testing purposes
    if (userBrowser === "Chrome") {
        alert("Link to Chrome extension");
        downloadLink = "https://httpbin.org/image/png";
    } else if (userBrowser === "Firefox") {
        alert("Link to Firefox extension");
        downloadLink = "https://httpbin.org/image/jpeg";
    } else if (userBrowser === "Safari") {
        alert("Link to Safari extension");
        downloadLink = "Link to Safari extension";
    } else {
        alert("Link to the general download option");
        downloadLink = "Link to the general download option";
    }

    // Redirect the user to the page for downloading the respective extension
    window.location.href = downloadLink;
}

var getItOnBrowserButton = document.querySelector('.home-btn');
getItOnBrowserButton.addEventListener('click', getBrowserExtension);


//Використати HTTPBin (https://httpbin.org/#/) у якості заглушки бекенду.
// Програма мінімум: звернутися до (Response Formats -> JSON) /json, відобразити отримані дані десь на сторінці.

// Функція для виконання AJAX-запиту до HTTPBin та обробки відповіді
function fetchData() {
    // Отримати посилання для запиту до /json на HTTPBin
    const url = 'https://httpbin.org/json';

    // Виконати AJAX-запит за допомогою Fetch API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при отриманні даних з сервера.');
            }
            return response.json();
        })
        .then(json => displayData(json))
        .catch(error => console.error(error));
}
// Функція для відображення отриманих даних на сторінці
function displayData(data) {
    const resultDiv = document.getElementById('result');
    const jsonString = JSON.stringify(data, null, 2);
    resultDiv.innerHTML = `<pre>${jsonString}</pre>`;}

// Отримати посилання на кнопку та додати обробник події для натискання
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchData);
