document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const textElements = document.querySelectorAll('p, h1, h2');

    // Function to animate images
    const animateImages = () => {
        images.forEach((image, index) => {
            image.style.transition = 'transform 1s ease-in-out';
            image.style.transform = `scale(${1 + index * 0.1})`;
        });
    };

    // Function to animate text elements
    const animateText = () => {
        textElements.forEach((text, index) => {
            text.style.transition = 'opacity 1s ease-in-out';
            text.style.opacity = 1;
            text.style.transitionDelay = `${index * 0.2}s`;
        });
    };

    // Event listeners for interactive animations
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    textElements.forEach(text => {
        text.addEventListener('mouseover', () => {
            text.style.color = '#004d40';
        });

        text.addEventListener('mouseout', () => {
            text.style.color = '#00796b';
        });
    });

    // Initial animations
    animateImages();
    animateText();
});
