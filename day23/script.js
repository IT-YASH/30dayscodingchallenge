document.addEventListener('DOMContentLoaded', () => {
    const fab = document.querySelector('.fab');
    const fabMenu = document.querySelector('.fab-menu');

    fab.addEventListener('click', () => {
        fabMenu.style.display = fabMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
        if (!fab.contains(e.target) && !fabMenu.contains(e.target)) {
            fabMenu.style.display = 'none';
        }
    });
});
