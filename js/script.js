// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .about-content > div, .skills, section h2, section p, .btn');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
};

// Initial check for elements in viewport
window.addEventListener('load', animateOnScroll);

// Check for elements in viewport on scroll
window.addEventListener('scroll', animateOnScroll);


// Add animation delays to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        project.classList.add(`delay-${(index % 3) + 1}`);
    });

    // Add animation to hero content
    const heroContent = document.querySelector('.hero .container > *');
    if (heroContent) {
        heroContent.classList.add('animate');
    }
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const updateActiveNav = () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveNav);
updateActiveNav(); // Initialize on page load
