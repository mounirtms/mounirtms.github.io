// MAB Modules - GitHub Pages Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Pricing Tab Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    const pricingContents = document.querySelectorAll('.pricing-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            pricingContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and module cards
    document.querySelectorAll('.feature-card, .module-card, .pricing-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Form submission handler (if not using formsubmit.co)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form will submit to formsubmit.co
            // You can add additional validation here
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Add animation delay to cards
    document.querySelectorAll('.features-grid .feature-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.modules-grid .module-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.pricing-grid .pricing-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});
