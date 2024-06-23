document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;

        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';

        header.classList.toggle('active');
    });
});
