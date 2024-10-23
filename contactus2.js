document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = document.querySelectorAll('.background-image');
    const contactSection = document.querySelector('.contact-section');
    const formGroups = document.querySelectorAll('.form-group');
    let currentBg = 0;

    // Function to change background
    function changeBackground() {
        backgrounds[currentBg].style.opacity = '0';
        currentBg = (currentBg + 1) % backgrounds.length;
        backgrounds[currentBg].style.opacity = '1';
    }

    // Set initial background
    backgrounds[0].style.opacity = '1';

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);

    // Show contact section with animation
    setTimeout(() => {
        contactSection.classList.add('show');
    }, 500);

    // Animate form groups
    formGroups.forEach((group, index) => {
        setTimeout(() => {
            group.classList.add('show');
        }, 1000 + index * 200);
    });

    // Form submission animation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animate button
        const button = form.querySelector('button');
        button.textContent = 'Sending...';
        button.disabled = true;

        // Simulate form submission (replace with actual form submission logic)
        setTimeout(() => {
            gsap.to(form, {
                opacity: 0,
                y: -50,
                duration: 0.5,
                onComplete: () => {
                    form.innerHTML = '<h2>Thank you for your message!</h2><p>We\'ll get back to you soon.</p>';
                    gsap.fromTo(form, 
                        {opacity: 0, y: 50},
                        {opacity: 1, y: 0, duration: 0.5}
                    );
                }
            });
        }, 2000);
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        backgrounds.forEach((bg) => {
            bg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    });

    // Animate navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {scale: 1.1, duration: 0.3});
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {scale: 1, duration: 0.3});
        });
    });
});