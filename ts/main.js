"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Listen to scroll event to fix navbar position to top and change its style.
    window.addEventListener('scroll', function () {
        if (window.scrollY > 78) {
            console.log('scroll > 78');
            // Remove navbar from carousel and position it to top
            document.getElementById('navbar_top').classList.remove('c-navbar', 'navbar-dark', 'bg-dark');
            document.getElementById('navbar_top').classList.add('c-fixed-top', 'shadow', 'navbar-light', 'bg-light');
        }
        else {
            console.log('scroll < 78');
            // Position navbar over the carousel again
            document.getElementById('navbar_top').classList.remove('c-fixed-top', 'shadow', 'navbar-light', 'bg-light');
            document.getElementById('navbar_top').classList.add('c-navbar', 'navbar-dark', 'bg-dark');
            // Remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
