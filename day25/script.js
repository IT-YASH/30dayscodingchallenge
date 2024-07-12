document.addEventListener('DOMContentLoaded', () => {
    const showToastButton = document.getElementById('show-toast');
    const toast = document.getElementById('toast');
    const toastAction = toast.querySelector('.toast-action');

    showToastButton.addEventListener('click', () => {
        toast.style.display = 'flex';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 5000);
    });

    toastAction.addEventListener('click', () => {
        alert('Action clicked!');
        toast.style.display = 'none';
    });
});
