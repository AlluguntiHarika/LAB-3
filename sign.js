let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let phone = document.getElementById("txtPhone"); 
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let form = document.querySelector("form");

function validateInput() {
    // check username is empty 
    if (userName.value.trim() === "") {
        onError(userName, "User Name cannot be empty");
    } else {
        onSuccess(userName);
    }
    
    if (email.value.trim() === "") {
        onError(email, "Email cannot be empty");
    } else {
        if (!isValidEmail(email.value.trim())) {
            onError(email, "Email is not valid");
        } else {
            onSuccess(email);
        }
    }

    // phone number
    if (phone.value.trim() === "") {
        onError(phone, "Phone Number cannot be empty");
    } else {
        if (!isValidPhoneNumber(phone.value.trim())) {
            onError(phone, "Invalid Phone Number");
        } else {
            onSuccess(phone);
        }
    }

    // password
    if (pwd.value.trim() === "") {
        onError(pwd, "Password cannot be empty");
    } else {
        if (!isValidPassword(pwd.value.trim())) {
            onError(pwd, "Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one special character");
        } else {
            onSuccess(pwd);
        }
    }

    if (conPwd.value.trim() === "") {
        onError(conPwd, "Confirm password cannot be empty");
    } else {
        if (pwd.value.trim() !== conPwd.value.trim()) {
            onError(conPwd, "Password & Confirm password not matching");
        } else {
            onSuccess(conPwd);
        }
    }

    // Check if all fields are successful, then show login success
    if (document.querySelectorAll(".success").length === 5) {
        alert("Registration Successful!");
        // You can redirect to a different page or perform other actions here
    }
}

document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
});

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    // Phone number should start with 6, 7, 8, or 9, and all numbers should not be the same
    return /^[6-9]\d{9}$/.test(phoneNumber) && !/(.)\1{9}/.test(phoneNumber);
}

function isValidPassword(password) {
    // Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one special character
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
