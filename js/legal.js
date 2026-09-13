/* ==============================================================
   legal.js – Star Shia Quran Academy (Legal Pages)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- Scroll to top of page on load (optional) -----
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // ----- Smooth scroll for internal anchor links -----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ----- Add a "Back to Top" button functionality if needed -----
    // This is optional but good UX for long pages
});