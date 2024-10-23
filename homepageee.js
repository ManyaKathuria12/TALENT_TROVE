

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.content').forEach(content => {
    observer.observe(content);
});



// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Searching for jobs... This feature is not implemented in this demo.');
});

// GSAP Animations

// Logo animation
gsap.fromTo("#logo", {
    scale: 0.8,
    opacity: 0,
    rotation: -45
}, {
    scale: 1,
    opacity: 1,
    rotation: 0,
    duration: 1.5,
    ease: "bounce.out"
});

// Tagline animation with delay
gsap.to("#tagline", {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#tagline",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});



document.addEventListener('DOMContentLoaded', () => {
const logo = document.querySelector('.logo');
let isHovered = false;
let rotationSpeed = 20;

logo.addEventListener('mouseover', () => {
isHovered = true;
updateRotation();
});

logo.addEventListener('mouseout', () => {
isHovered = false;
updateRotation();
});

function updateRotation() {
if (isHovered) {
    rotationSpeed = 5;
} else {
    rotationSpeed = 20;
}
logo.style.animation = `rotate ${rotationSpeed}s linear infinite`;
}

logo.addEventListener('click', () => {
const circles = document.querySelectorAll('.circle');
circles.forEach((circle, index) => {
    setTimeout(() => {
        circle.style.transform = 'scale(1.1)';
        setTimeout(() => {
            circle.style.transform = 'scale(1)';
        }, 200);
    }, index * 100);
});
});
});