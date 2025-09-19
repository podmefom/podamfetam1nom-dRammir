
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

function updateWatchlistCount() {
    const watchlistCount = document.querySelector('.watchlist-count');
    if (watchlistCount) {
        watchlistCount.textContent = watchlist.length;
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

function createFlyingCard(imageSrc, startX, startY, endX, endY) {
    const flyingCard = document.createElement('div');
    flyingCard.className = 'flying-card';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    flyingCard.appendChild(img);

    flyingCard.style.left = startX + 'px';
    flyingCard.style.top = startY + 'px';
    flyingCard.style.transform = 'scale(0.5)';
    flyingCard.style.opacity = '0';
    
    document.body.appendChild(flyingCard);

    setTimeout(() => {
        flyingCard.style.opacity = '1';
        flyingCard.style.transform = 'scale(1)';

        setTimeout(() => {
            flyingCard.style.left = endX + 'px';
            flyingCard.style.top = endY + 'px';
            flyingCard.style.transform = 'scale(0.3)';
            flyingCard.style.opacity = '0.5';

            setTimeout(() => {
                flyingCard.remove();
                const watchlistCount = document.querySelector('.watchlist-count');
                if (watchlistCount) {
                    watchlistCount.classList.add('highlight');
                    setTimeout(() => watchlistCount.classList.remove('highlight'), 1000);
                }
            }, 1000);
        }, 300);
    }, 50);
    
    return flyingCard;
}

function addToWatchlist(movieData) {
    const existingIndex = watchlist.findIndex(item => item.title === movieData.title);
    
    if (existingIndex === -1) {
        watchlist.push(movieData);
        updateWatchlistCount();
        return true;
    }
    return false;
}