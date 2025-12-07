// ===== Smooth Scrolling Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .about-image, .about-text');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===== Typing Effect for Home Section (Optional Enhancement) =====
const homeSubtitle = document.querySelector('.home-subtitle');
if (homeSubtitle) {
    const text = homeSubtitle.textContent;
    homeSubtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            homeSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
}

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 100 ? '%' : '+');
        }
    }

    updateCounter();
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const targets = [10, 5, 100]; // Adjust these values as needed
                setTimeout(() => {
                    animateCounter(stat, targets[index], 2000);
                }, index * 200);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ===== Parallax Effect for Background =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home-section::before');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== Initialize on Page Load =====
window.addEventListener('load', () => {
    // Set initial active link
    setActiveLink();

    // Add loaded class to body for animations
    document.body.classList.add('loaded');
});

// ===== Smooth Reveal on Scroll =====
const revealElements = document.querySelectorAll('.section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ===== Add Gradient Animation to Profile Image =====
// Gradient Animation Removed

// ===== Freelance File Toggle =====
const viewFilesBtn = document.getElementById('view-files-btn');
const fileListContainer = document.querySelector('.file-list-container');

if (viewFilesBtn && fileListContainer) {
    viewFilesBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent jump if it's an anchor, though it's a button
        fileListContainer.classList.toggle('active');
        const isActive = fileListContainer.classList.contains('active');

        // Update button text/icon
        if (isActive) {
            viewFilesBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Documents';
        } else {
            viewFilesBtn.innerHTML = '<i class="fas fa-eye"></i> View Documents';
        }
    });
}

console.log('Portfolio initialized successfully! 🚀');
