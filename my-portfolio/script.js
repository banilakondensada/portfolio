// JavaScript Code
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Scroll Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });
    
    // Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    // Formspree will handle the submission, so we don't need to prevent default
    // Just show a loading state or confirmation
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Reset button after 3 seconds (in case form takes time)
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 3000);
});

// Optional: Add confirmation message when form is successfully submitted
contactForm.addEventListener('formspree:success', function() {
    alert('Thank you! Your message has been sent successfully.');
    contactForm.reset();
});

contactForm.addEventListener('formspree:error', function() {
    alert('Sorry, there was an error sending your message. Please try again.');
});
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Text Disappearing Effect on Scroll
    const homeTextElements = document.querySelectorAll('#home h1, #home h2, #home p, #home .btn');
    
    const disappearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, { threshold: 0.1 });
    
    homeTextElements.forEach(element => {
        disappearOnScroll.observe(element);
    });
    
    // Add click sound effect to buttons (optional)
    const buttons = document.querySelectorAll('.btn, .submit-btn, .skill, .project-link');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Create a simple click sound using Web Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        });
    });
});

// Minecraft click effect
document.addEventListener('click', function(e) {
    // Create click effect
    const clickEffect = document.createElement('div');
    clickEffect.style.position = 'fixed';
    clickEffect.style.left = e.clientX + 'px';
    clickEffect.style.top = e.clientY + 'px';
    clickEffect.style.width = '8px';
    clickEffect.style.height = '8px';
    clickEffect.style.backgroundColor = '#5A7D32';
    clickEffect.style.border = '1px solid #4A6622';
    clickEffect.style.pointerEvents = 'none';
    clickEffect.style.zIndex = '9999';
    clickEffect.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(clickEffect);
    
    // Animate and remove
    setTimeout(() => {
        clickEffect.style.transform = 'scale(1.5)';
        clickEffect.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        document.body.removeChild(clickEffect);
    }, 300);
});