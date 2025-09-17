document.addEventListener('DOMContentLoaded', function() {
     // ----- МОДАЛЬНОЕ ОКНО РЕГИСТРАЦИИ ------ //
    const loginBtn = document.querySelector('[data-button="login"]');
    const registerBtn = document.querySelector('[data-button="register"]');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authModal = document.querySelector('.auth-modal');
    const authContainer = document.querySelector('.auth-container');

    const loginLine = loginBtn.closest('.auth-tabs').querySelector('.auth-button-line');
    const registerLine = registerBtn.closest('.auth-tabs').querySelector('.auth-button-line');

    const profileIcon = document.getElementById('profile-icon')
    const closeAuth = document.querySelector('.close-auth')

    // ----- МОДАЛЬНОЕ ОКНО ИНФЫ О ФИЛЬМАХ ------ //
   




                        // ----- МОДАЛЬНОЕ ОКНО РЕГИСТРАЦИИ ------ //
    authModal.style.opacity = "0";
    authContainer.style.opacity = "0";

    registerForm.style.display = "none";
    loginBtn.classList.add('active');
    loginLine.classList.add('active');


    profileIcon.addEventListener("click", () => {
        authModal.style.pointerEvents = "all";
        authModal.style.display = "flex"
        authContainer.style.display = "flex"
        setTimeout(() => {
            authModal.style.opacity = "1";
            authContainer   .style.opacity = "1";
        }, 10);
        
    })

    if (closeAuth) {
        closeAuth.addEventListener("click", () => {
            authModal.style.pointerEvents = "none";
            authModal.style.opacity = "0"; 
            authContainer.style.opacity = "0";
            setTimeout(() => {
                authModal.style.display = "none";
                authContainer.style.display = "none";
            }, 100)
        })
    }

    if (authContainer) {
        authContainer.addEventListener("click", () => {
            authModal.style.pointerEvents = "none";
            authModal.style.opacity = "0";
            authContainer.style.opacity = "0";
            setTimeout(() => {
                authModal.style.display = "none";
                authContainer.style.display = "none";
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

                         // ----- МОДАЛЬНОЕ ОКНО ИНФЫ О ФИЛЬМАХ ------ //
    const modalMore = document.querySelector('.modal-movie-more')
    const buttonsMore =  document.querySelectorAll('[data-button="movie-more"]');
    const closeMore = document.querySelector('.close-more')


    console.log(buttonsMore)

    modalMore.style.opacity = "0";

    buttonsMore.forEach(button => {
        button.addEventListener("click", () => {
            modalMore.style.pointerEvents = "all";
            modalMore.style.display = "flex";
            authContainer.style.display = "flex";
            
            setTimeout(() => {
                modalMore.style.opacity = "1";
                authContainer.style.opacity = "1";
            }, 10);
        });
    });

    if (closeMore) {
        closeMore.addEventListener("click", () => {
            modalMore.style.pointerEvents = "none";
            modalMore.style.opacity = "0"; 
            authContainer.style.opacity = "0";
            setTimeout(() => {
                modalMore.style.display = "none";
                authContainer.style.display = "none";
            }, 100)
        })
    }

    if (authContainer) {
        authContainer.addEventListener("click", () => {
            modalMore.style.pointerEvents = "none";
            modalMore.style.opacity = "0";
            authContainer.style.opacity = "0";
            setTimeout(() => {
                modalMore.style.display = "none";
                authContainer.style.display = "none";
            }, 100)
        })
    }

});

   