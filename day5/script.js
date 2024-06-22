window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
});
