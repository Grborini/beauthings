let currentSlide = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel img');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

// Inicializa el carrusel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel img');
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });
});
