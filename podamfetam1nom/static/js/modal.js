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

    const closeMoreBtn = document.querySelector('.close-more');
    const movieTitle = document.getElementById('modal-movie-title');
    const movieDescription = document.getElementById('modal-movie-description');
    const movieRating = document.getElementById('modal-movie-rating');
    const movieCategory = document.getElementById('modal-movie-category');
    const movieYear = document.getElementById('modal-movie-year');
    const movieDuration = document.getElementById('modal-movie-duration');
    const movieFormat = document.getElementById('modal-movie-format');
    const movieImg = document.getElementById('modal-movie-img');

    // Данные о фильмах
    const moviesData = {
        'Марвел': {
            description: 'Захватывающая история о команде супергероев, объединившихся для спасения мира от космической угрозы.',
            rating: '4.5',
            category: 'Экшн',
            year: '2023',
            duration: '145 мин',
            format: '4K Ultra HD',
            image: 'img/marvel.png'
        },
        'Дыхание шторма': {
            description: 'Пронзительная история о молодой скрипачке, потерявшей слух в результате несчастного случая.',
            rating: '3.5',
            category: 'Драма',
            year: '2022',
            duration: '128 мин',
            format: 'Full HD',
            image: 'img/breathofstorm.png'
        },
        'Молачние Ягнят': {
            description: 'Легендарный психологический триллер о стажерке ФБР Клариссе Старлинг.',
            rating: '4.8',
            category: 'Триллер',
            year: '1991',
            duration: '118 мин',
            format: 'Full HD',
            image: 'img/SilenceLambs.png'
        },
        'Гнев человеческий': {
            description: 'Жесткий и беспощадный боевик о таинственном мужчине, устраивающемся на работу в инкассаторскую компанию.',
            rating: '4.3',
            category: 'Боевик',
            year: '2021',
            duration: '136 мин',
            format: '4K Ultra HD',
            image: 'img/gnevppl.png'
        },
        'Достать ножи': {
            description: 'Остроумный детектив с элементами комедии о расследовании смерти известного писателя.',
            rating: '4.6',
            category: 'Детектив',
            year: '2019',
            duration: '131 мин',
            format: 'Full HD',
            image: 'img/KnivesOut.jpg'
        },
        'Изгой': {
            description: 'Захватывающая история выживания курьера авиакомпании на необитаемом острове.',
            rating: '4.2',
            category: 'Приключения',
            year: '2000',
            duration: '143 мин',
            format: 'Full HD',
            image: 'img/outcast.png'
        },
        'Куриоса': {
            description: 'Романтическая драма о любовном треугольнике в Париже конца XIX века.',
            rating: '3.9',
            category: 'Мелодрама',
            year: '2019',
            duration: '107 мин',
            format: 'Full HD',
            image: 'img/Kurios.png'
        },
        'Шальная Карта': {
            description: 'Адреналиновый боевик о бывшем агенте спецслужб, вынужденном вернуться к старой жизни.',
            rating: '3.7',
            category: 'Боевик',
            year: '2022',
            duration: '122 мин',
            format: 'Full HD',
            image: 'img/crazycard.png'
        },
        'Переводчик': {
            description: 'Напряженный боевик о военном переводчике, который случайно становится свидетелем подготовки теракта.',
            rating: '4.1',
            category: 'Боевик',
            year: '2023',
            duration: '134 мин',
            format: '4K Ultra HD',
            image: 'img/translater.png'
        },
        'Стрелок': {
            description: 'История отставного снайпера морской пехоты, которого втягивают в заговор высокого уровня.',
            rating: '4.0',
            category: 'Боевик',
            year: '2022',
            duration: '129 мин',
            format: 'Full HD',
            image: 'img/sniper.png'
        }
    };


    document.querySelectorAll('.button-more').forEach(button => {
        button.addEventListener('click', function() {
            const movieCard = this.closest('.movie-card');
            const title = movieCard.querySelector('h3').textContent;
            const imgSrc = movieCard.querySelector('img').src;
            
            const movie = moviesData[title] || {
                description: 'Описание отсутствует',
                rating: '0.0',
                category: movieCard.querySelector('p').textContent,
                year: '2024',
                duration: '120 мин',
                format: 'Full HD',
                image: imgSrc
            };

            movieTitle.textContent = title;
            movieDescription.textContent = movie.description;
            movieRating.innerHTML = `<i class="fas fa-star"></i> ${movie.rating}`;
            movieCategory.textContent = movie.category;
            movieYear.textContent = movie.year;
            movieDuration.textContent = movie.duration;
            movieFormat.textContent = movie.format;
            

            const img = new Image();
            img.onload = function() {
                movieImg.src = movie.image;
                movieImg.style.opacity = '1';
            };
            img.onerror = function() {
                movieImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
                movieImg.style.opacity = '0.7';
            };
            img.src = movie.image;
            

            modalMore.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    

    closeMoreBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modalMore) closeModal();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalMore.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modalMore.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});


   