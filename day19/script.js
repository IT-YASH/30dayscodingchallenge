document.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('progress');
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loader.style.display = 'none';
            content.style.display = 'block';
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }, 50);
});
