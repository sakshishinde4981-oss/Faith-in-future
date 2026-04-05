function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
}

function openlogin() {
    document.getElementById("loginPopup").style.display = "block";
}

function closelogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signForm").style.display = "block";
}

function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signForm").style.display = "none";
}

function ValidateEmail() {
    const email = document.getElementById("emailfield").value;
    const error = document.getElementById("emailerror");

    if (email.includes("@") && email.includes(".")) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }
}

function ValidatePhone() {
    const phone = document.getElementById("phonefield").value;
    const error = document.getElementById("phoneError");

    if (phone.length === 10) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }
}

function checkPassword() {
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirmpassword").value;
    const error = document.getElementById("passError");

    if (pass === confirm) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }
}

function toggleInput() {
    const type = document.getElementById("logintype").value;
    const emailField = document.getElementById("emailfield");
    const phoneField = document.getElementById("phonefield");

    if (type === "email") {
        emailField.style.display = "block";
        phoneField.style.display = "none";
    } else {
        emailField.style.display = "none";
        phoneField.style.display = "block";
    }
}

function forgotPassword() {
    alert("Password reset link will be sent!");
}

window.onclick = function(event) {
    const popup = document.getElementById("loginPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};