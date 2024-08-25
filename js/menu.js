document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        // Toggle the class to show or hide the nav links
        navLinks.classList.toggle('active');
    });
});
