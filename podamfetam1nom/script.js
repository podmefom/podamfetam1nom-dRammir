document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('[data-button="login"]');
    const registerBtn = document.querySelector('[data-button="register"]');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authModal = document.querySelector('.auth-modal');

    const loginLine = loginBtn.closest('.auth-tabs').querySelector('.auth-button-line');
    const registerLine = registerBtn.closest('.auth-tabs').querySelector('.auth-button-line');

    const profileIcon = document.getElementById('profile-icon')
    const closeAuth = document.querySelector('.close-auth')

    authModal.style.opacity = "0";

    registerForm.style.display = "none";
    loginBtn.classList.add('active');
    loginLine.classList.add('active');


    profileIcon.addEventListener("click", () => {
        authModal.style.display = "flex"
        setTimeout(() => {
            authModal.style.opacity = "1";
        }, 10);
        
    })

    if (closeAuth) {
        closeAuth.addEventListener("click", () => {
            authModal.style.opacity = "0";
            setTimeout(() => {
                authModal.style.display = "none";
            }, 100)
        })
    }

    loginBtn.addEventListener("click", () => {
        if (loginBtn.classList.contains('active')) return;
        
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        loginLine.classList.add('active');
        registerLine.classList.remove('active');
        
        registerForm.style.opacity = "0";
        setTimeout(() => {
            registerForm.style.display = "none";
            loginForm.style.display = "flex";
            setTimeout(() => {
                loginForm.style.opacity = "1";
                const modalHeight = document.querySelector('.auth-modal-content').scrollHeight + loginForm.scrollHeight + 30;
                authModal.style.height = modalHeight + 'px';
            }, 50);
        }, 300);
    });

    registerBtn.addEventListener("click", () => {
        if (registerBtn.classList.contains('active')) return;
        
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        registerLine.classList.add('active');
        loginLine.classList.remove('active');
        
        loginForm.style.opacity = "0";
        setTimeout(() => {
            loginForm.style.display = "none";
            registerForm.style.display = "flex";
            setTimeout(() => {
                registerForm.style.opacity = "1";
                const modalHeight = document.querySelector('.auth-modal-content').scrollHeight + registerForm.scrollHeight + 30;
                authModal.style.height = modalHeight + 'px';
            }, 50);
        }, 300);
    });
});