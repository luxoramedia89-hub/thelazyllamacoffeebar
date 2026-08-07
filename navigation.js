document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    
    if (toggle) {
        toggle.addEventListener('click', function() {
            links.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});