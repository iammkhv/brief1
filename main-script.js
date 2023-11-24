function showLoginForm() {
    var container = document.getElementById('container');
    var loginForm = document.getElementById('login-form');
    container.querySelector(':before').style.display = 'block';
    loginForm.style.display = 'block';
}

function closeLoginForm() {
    var container = document.getElementById('container');
    var loginForm = document.getElementById('login-form');
    container.querySelector(':before').style.display = 'none';
    loginForm.style.display = 'none';
}
