// Function to toggle between the Login and Signup forms
function toggleForm() {
    var loginContainer = document.getElementById('login-container');
    var signupContainer = document.getElementById('signup-container');

    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    }
}

// Login function (add logic later)
function login() {
    // For now, just an alert to simulate login action
    alert('Login functionality not implemented yet.');
}

// Signup function (add logic later)
function signup() {
    // For now, just an alert to simulate signup action
    alert('Signup functionality not implemented yet.');
}

