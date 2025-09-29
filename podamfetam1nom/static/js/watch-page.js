document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('movie-iframe');
    const playerTitle = document.getElementById('player-movie-title');
    const errorDiv = document.getElementById('movie-player-error');

    // Рабочая ссылка с dopebox.to
    const defaultUrl = 'https://dopebox.to/watch-movie/watch-the-silence-of-the-lambs-online-hd-8603.11550043';

    // Попытка загрузки
    iframe.src = defaultUrl;
    playerTitle.textContent = 'The Silence of the Lambs';
    document.querySelector('.modal-movie-player').style.display = 'flex';

    // Проверка загрузки iframe (простая проверка через таймаут)
    setTimeout(() => {
        if (!iframe.src || iframe.src === 'about:blank') {
            document.querySelector('.modal-movie-player').style.display = 'none';
            errorDiv.style.display = 'block';
        }
    }, 5000); // 5 секунд на загрузку
});

// Закрытие плеера
document.querySelector('.close-player').addEventListener('click', () => {
    document.querySelector('.modal-movie-player').style.display = 'none';
    document.getElementById('movie-iframe').src = ''; // Сбрасываем iframe
});