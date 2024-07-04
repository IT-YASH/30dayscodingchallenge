document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const dropContainer = document.querySelector('.drop-container');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    dropContainer.addEventListener('dragover', e => {
        e.preventDefault();
    });

    dropContainer.addEventListener('drop', e => {
        const draggable = document.querySelector('.dragging');
        dropContainer.appendChild(draggable);
    });
});
