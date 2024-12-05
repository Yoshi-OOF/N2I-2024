// animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const images = document.querySelectorAll('img');
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    const interactiveButton = document.getElementById('interactiveButton');

    // Fonction pour animer les images
    const animateImages = () => {
        images.forEach((image, index) => {
            image.style.transition = 'transform 1s ease-in-out';
            image.style.transform = `scale(${1 + index * 0.05})`;
        });
    };

    // Fonction pour animer les éléments de texte
    const animateText = () => {
        textElements.forEach((text, index) => {
            text.style.transition = 'opacity 1s ease-in-out';
            text.style.opacity = 1;
            text.style.transitionDelay = `${index * 0.2}s`;
        });
    };

    // Fonction pour animer le bouton interactif avec GSAP
    const animateButton = () => {
        gsap.to(interactiveButton, {
            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    };

    // Écouteurs d'événements pour les animations interactives
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power1.out" });
        });

        image.addEventListener('mouseout', () => {
            gsap.to(image, { scale: 1, duration: 0.5, ease: "power1.in" });
        });
    });

    textElements.forEach(text => {
        text.addEventListener('mouseover', () => {
            gsap.to(text, { color: '#004d40', duration: 0.3 });
        });

        text.addEventListener('mouseout', () => {
            gsap.to(text, { color: '', duration: 0.3 });
        });
    });

    // Initialiser les animations
    animateImages();
    animateText();
    animateButton();

    // Initialiser tsParticles
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#00aaff", "#0077ff", "#0044ff"] // Variété de bleus pour un effet plus dynamique
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.6,
                random: false
            },
            size: {
                value: 3,
                random: { enable: true, minimumValue: 1 }
            },
            move: {
                enable: true,
                speed: 1.5, // Vitesse légèrement augmentée
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out"
                },
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 120,
                    duration: 0.4
                },
                push: {
                    quantity: 6
                }
            }
        },
        detectRetina: true
    });

    // Initialiser AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });

    // Animations GSAP avec ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Exemple: Animation de la section Témoignages
    gsap.from("#testimonials .carousel-item", {
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });
});
