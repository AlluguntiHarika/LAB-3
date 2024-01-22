let email = document.getElementById("txtEmail");
let password = document.getElementById("txtPwd");
let form = document.querySelector("form");

function validateInput() {
    // Check if email and password are filled
    if (email.value.trim() === "") {
        setErrorFor(email, "Email cannot be empty");
        return;
    } else {
        setSuccessFor(email);
    }

    if (password.value.trim() === "") {
        setErrorFor(password, "Password cannot be empty");
        return;
    } else {
        setSuccessFor(password);
    }

    // Validate email
    if (!isValidEmail(email.value.trim())) {
        setErrorFor(email, "Invalid email address");
        return;
    } else {
        setSuccessFor(email);
    }

    // Validate password
    if (!isValidPassword(password.value.trim())) {
        setErrorFor(password, "Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one special character");
        return;
    } else {
        setSuccessFor(password);
    }

    // Display success message
    alert("Sign In Successful!");
}

function setErrorFor(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");

    small.innerText = message;
    parent.className = "form-control error";
}

function setSuccessFor(input) {
    let parent = input.parentElement;
    parent.className = "form-control success";
}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPassword(password) {
    // Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one special character
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
