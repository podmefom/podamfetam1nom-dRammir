document.addEventListener('DOMContentLoaded', function() {
    updateWatchlistCount();
    
    document.querySelectorAll('.movie-card .button-watchlist').forEach(button => {
        button.addEventListener('click', function() {
            const movieCard = this.closest('.movie-card');
            const title = movieCard.querySelector('h3').textContent;
            const category = movieCard.querySelector('p').textContent;
            const imageSrc = movieCard.querySelector('img').src;
            const rating = movieCard.getAttribute('data-rating') || '0.0';
            
            const movieData = {
                title: title,
                category: category,
                rating: rating,
                image: imageSrc,
                addedDate: new Date().toISOString()
            };
            
            const added = addToWatchlist(movieData);
            
            if (added) {
                const buttonRect = this.getBoundingClientRect();
                const watchlistIcon = document.querySelector('.header-watchlate');
                const iconRect = watchlistIcon.getBoundingClientRect();
                
                createFlyingCard(
                    imageSrc,
                    buttonRect.left + buttonRect.width / 2,
                    buttonRect.top + buttonRect.height / 2,
                    iconRect.left + iconRect.width / 2,
                    iconRect.top + iconRect.height / 2
                );
                
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Добавлено!';
                this.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                }, 2000);
            } else {
                alert(`Фильм "${title}" уже в вашем списке!`);
            }
        });
    });
});