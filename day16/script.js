document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const lowSrc = img.dataset.lowsrc;
                const highSrc = img.dataset.src;
                const placeholder = img.nextElementSibling;

                img.src = lowSrc;
                img.onload = () => {
                    img.classList.add('loaded');
                    placeholder.classList.add('hidden');

                    const highResImg = new Image();
                    highResImg.src = highSrc;
                    highResImg.onload = () => {
                        img.src = highSrc;
                        img.classList.add('loaded');
                        placeholder.classList.add('hidden');
                    };
                };

                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
});
