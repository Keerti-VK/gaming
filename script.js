// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect on the home section
    const homeSection = document.getElementById('home');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Adjust the background position based on scroll position for parallax effect
        homeSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    });

    // Add more JavaScript code for other interactive elements or animations as needed
});
// script.js

/*document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect on the home section
    const homeSection = document.getElementById('home');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Adjust the background position based on scroll position for parallax effect
        homeSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    });

    // Interactive game showcase with tooltips
    const gameItems = document.querySelectorAll('.game-item');

    gameItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.opacity = '1';
        });

        item.addEventListener('mouseout', function() {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.opacity = '0';
        });
    });

    // Responsive navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Add more JavaScript code for other interactive elements or animations as needed
});

