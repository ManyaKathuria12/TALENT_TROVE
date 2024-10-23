// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP animations for sections when they enter the viewport
gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-title", {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".category-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".categories-grid",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".company-card", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".companies-grid",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".job-item", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".jobs-list",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Hover effects for company cards
document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, duration: 0.3, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" });
    });
});

// Animation for logo on hover
const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        gsap.to(logo, { rotation: 360, duration: 1, ease: "elastic.out(1, 0.75)" });
    });
    logo.addEventListener('mouseleave', () => {
        gsap.to(logo, { rotation: 0, duration: 1, ease: "elastic.out(1, 0.75)" });
    });
}

// Animation for tagline on load
gsap.from("#tagline", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.5,
    ease: "bounce.out"
});

// Footer bounce animation on load
gsap.from("footer", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: "bounce.out"
});
