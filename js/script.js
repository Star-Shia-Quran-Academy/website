/* ==============================================================
   script.js – Star Shia Quran Academy
   Interactive functionality for the homepage
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----------------------------------------------------------
    // 1. MOBILE NAVIGATION (Hamburger)
    // ----------------------------------------------------------
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

    if (hamburger && navList) {
        hamburger.addEventListener('click', function () {
            const isOpen = navList.classList.toggle('open');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is clicked (optional but user-friendly)
        navList.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navList.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ----------------------------------------------------------
    // 2. TESTIMONIAL SLIDER
    // ----------------------------------------------------------
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');

    if (track && prevBtn && nextBtn && dotsContainer) {
        const slides = track.children;
        const totalSlides = slides.length;
        let currentIndex = 0;
        let autoPlayInterval = null;
        const AUTO_PLAY_DELAY = 5000; // 5 seconds

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
            dot.dataset.index = i;
            dotsContainer.appendChild(dot);
        }

        const dots = dotsContainer.querySelectorAll('.dot');

        // Update slider position and active dot
        function updateSlider(index) {
            // Clamp index
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentIndex = index;

            // Move track
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

            // Update dots
            dots.forEach(function (dot, i) {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        // Navigate to a specific slide (from dot click)
        function goToSlide(index) {
            updateSlider(index);
            resetAutoPlay();
        }

        // Next / Previous
        function nextSlide() {
            updateSlider(currentIndex + 1);
            resetAutoPlay();
        }

        function prevSlide() {
            updateSlider(currentIndex - 1);
            resetAutoPlay();
        }

        // Auto-play
        function startAutoPlay() {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
        }

        function resetAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
            startAutoPlay();
        }

        // Event listeners for buttons
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Event listeners for dots
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                const index = parseInt(this.dataset.index, 10);
                goToSlide(index);
            });
        });

        // Pause auto-play when user hovers over the slider
        const sliderContainer = document.querySelector('.testimonial-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', function () {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = null;
                }
            });
            sliderContainer.addEventListener('mouseleave', function () {
                startAutoPlay();
            });
        }

        // Initialize slider
        updateSlider(0);
        startAutoPlay();
    }

    // ----------------------------------------------------------
    // 3. ANIMATED NUMBER COUNTERS (scroll-triggered)
    // ----------------------------------------------------------
    const counters = document.querySelectorAll('.stat-number[data-count]');

    if (counters.length > 0) {
        // Use Intersection Observer to trigger counting when element is visible
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    // Prevent recounting if already animated
                    if (el.dataset.animated === 'true') return;

                    const target = parseInt(el.getAttribute('data-count'), 10);
                    if (isNaN(target) || target <= 0) return;

                    // Mark as animated
                    el.dataset.animated = 'true';

                    // Animation duration (ms)
                    const duration = 2000;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const currentValue = Math.floor(eased * target);
                        el.textContent = currentValue.toLocaleString();

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            el.textContent = target.toLocaleString();
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    // Unobserve after triggering to save resources
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.5 // trigger when 50% visible
        });

        counters.forEach(function (counter) {
            observer.observe(counter);
        });
    }

    // ----------------------------------------------------------
    // 4. SMOOTH SCROLL FOR ANCHOR LINKS (optional but nice)
    // ----------------------------------------------------------
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
});