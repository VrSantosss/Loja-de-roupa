document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const loginButton = document.querySelector('.login-button');
    const registerButton = document.querySelector('.register-button');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerButton.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Validação do formulário de login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Aqui você pode adicionar a lógica de validação do formulário de login
        console.log('E-mail:', email);
        console.log('Senha:', password);
    });

    // Validação do formulário de cadastro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Aqui você pode adicionar a lógica de validação do formulário de cadastro
        console.log('Nome:', name);
        console.log('E-mail:', email);
        console.log('Senha:', password);
        console.log('Confirmar Senha:', confirmPassword);
    });
});
