"use strict";
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 78) {
            console.log('scroll > 78');
            document.getElementById('navbar_top').classList.remove('c-navbar');
            document.getElementById('navbar_top').classList.add('c-fixed-top');
        }
        else {
            console.log('scroll < 78');
            document.getElementById('navbar_top').classList.remove('c-fixed-top');
            document.getElementById('navbar_top').classList.add('c-navbar');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
