/* ==============================================================
   about.js – Star Shia Quran Academy (About Page)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----------------------------------------------------------
    // 1. MISSION / VISION TABS
    // ----------------------------------------------------------
    const tabButtons = document.querySelectorAll('.mv-tab-btn');
    const tabContents = document.querySelectorAll('.mv-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                // Remove active class from all buttons and contents
                tabButtons.forEach(function (b) {
                    b.classList.remove('active');
                });
                tabContents.forEach(function (c) {
                    c.classList.remove('active');
                });

                // Add active class to clicked button
                this.classList.add('active');

                // Show the corresponding content
                const tabId = this.getAttribute('data-tab');
                const targetContent = document.getElementById('tab-' + tabId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // ----------------------------------------------------------
    // 2. FADE-IN TIMELINE ITEMS ON SCROLL (optional)
    //    Uses Intersection Observer for a subtle entrance effect.
    // ----------------------------------------------------------
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, index) {
                if (entry.isIntersecting) {
                    // Add a staggered delay based on index
                    const delay = index * 150;
                    setTimeout(function () {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.4
        });

        timelineItems.forEach(function (item, i) {
            // Set initial state for animation
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    }
});