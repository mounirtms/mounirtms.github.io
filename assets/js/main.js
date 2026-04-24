// MAB Modules - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initLanguage();

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // Pricing Tab Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    const pricingContents = document.querySelectorAll('.pricing-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            pricingContents.forEach(content => content.classList.remove('active'));

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
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Close mobile menu if open
            if (mobileMenu) mobileMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const spans = this.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }

    // Scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation class to cards
    document.querySelectorAll('.feature-card, .module-card, .pricing-card, .stat-box').forEach(card => {
        card.classList.add('animate-on-scroll');
        observer.observe(card);
    });

    // Stagger animation delays
    document.querySelectorAll('.features-grid .feature-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.modules-grid .module-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.pricing-grid .pricing-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Contact form with Firebase Firestore
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const statusEl = document.getElementById('form-status');
            const nameEl = document.getElementById('name');
            const emailEl = document.getElementById('email');
            const companyEl = document.getElementById('company');
            const modulesEl = document.getElementById('contact-modules');
            const messageEl = document.getElementById('message');

            const name = nameEl.value.trim();
            const email = emailEl.value.trim();
            const company = companyEl.value.trim();
            const message = messageEl.value.trim();
            const selectedModules = Array.from(modulesEl.selectedOptions).map(o => o.value);

            // Validate
            if (!name || !email || !message) {
                statusEl.className = 'form-status error';
                statusEl.textContent = 'Please fill in all required fields.';
                statusEl.style.display = 'block';
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                statusEl.className = 'form-status error';
                statusEl.textContent = 'Please enter a valid email address.';
                statusEl.style.display = 'block';
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
            statusEl.style.display = 'none';

            try {
                // Wait for Firebase to be initialized
                await waitForFirebase();

                const { addDoc, collection, serverTimestamp } = await import(
                    "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js"
                );

                await addDoc(collection(window.firebaseDb, 'contact_submissions'), {
                    name: name,
                    email: email,
                    company: company || null,
                    modules: selectedModules,
                    message: message,
                    source: 'website',
                    locale: document.documentElement.lang,
                    createdAt: serverTimestamp()
                });

                // Success
                statusEl.className = 'form-status success';
                statusEl.textContent = 'Message sent successfully! We will get back to you soon.';
                statusEl.style.display = 'block';
                contactForm.reset();
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;

                // Hide status after 5 seconds
                setTimeout(() => {
                    statusEl.style.display = 'none';
                }, 5000);

            } catch (error) {
                console.error('Error submitting form:', error);
                statusEl.className = 'form-status error';
                statusEl.textContent = 'Failed to send message. Please try again or email us directly.';
                statusEl.style.display = 'block';
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
            }
        });
    }
});

// Helper: Wait for Firebase to be initialized
function waitForFirebase() {
    return new Promise((resolve) => {
        if (window.firebaseDb) {
            resolve();
        } else {
            const check = setInterval(() => {
                if (window.firebaseDb) {
                    clearInterval(check);
                    resolve();
                }
            }, 50);
            // Timeout after 5 seconds
            setTimeout(() => {
                clearInterval(check);
                resolve();
            }, 5000);
        }
    });
}
