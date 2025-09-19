document.addEventListener('DOMContentLoaded', function() {
    const watchlistContent = document.getElementById('watchlist-content');
    const watchlistTotal = document.getElementById('watchlist-total');
    
    updateWatchlistCount(); 
    
    function getPluralForm(number) {
        if (number % 10 === 1 && number % 100 !== 11) return 'фильм';
        if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) return 'фильма';
        return 'фильмов';
    }
    
    function renderWatchlist() {
        if (watchlist.length === 0) {
            watchlistContent.innerHTML = `
                <div class="empty-watchlist">
                    <i class="far fa-clock fa-3x"></i>
                    <h3>Список "Смотреть позже" пуст</h3>
                    <p>Добавьте фильмы, чтобы посмотреть их позже</p>
                </div>
            `;
            return;
        }
        
        watchlistTotal.textContent = `Всего: ${watchlist.length} ${getPluralForm(watchlist.length)}`;
        
        watchlistContent.innerHTML = watchlist.map((movie, index) => `
            <div class="watchlist-movie" data-index="${index}">
                <img src="${movie.image}" alt="${movie.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSI gaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4='">
                <hr>
                <h3 class="movie-name">${movie.title}</h3>
                <hr>
                <h3 class="movie-time">${movie.category}</h3>
                <hr>
                <div class="movie-actions">
                    <button class="watchlist-start">Начать просмотр</button>
                    <button class="remove-from-watchlist" data-index="${index}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.remove-from-watchlist').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const removedMovie = watchlist[index];
                
                watchlist.splice(index, 1);
                updateWatchlistCount(); 
                renderWatchlist();
                
                alert(`Фильм "${removedMovie.title}" удален из списка`);
            });
        });
        
        document.querySelectorAll('.watchlist-start').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.closest('.watchlist-movie').getAttribute('data-index'));
                const movie = watchlist[index];
                alert(`Начинаем просмотр фильма: ${movie.title}`);
            });
        });
    }
    
    renderWatchlist();
    
    window.addEventListener('storage', function(e) {
        if (e.key === 'watchlist') {
            watchlist = JSON.parse(e.newValue) || [];
            updateWatchlistCount();
            renderWatchlist();
        }
    });
});