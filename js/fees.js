/* ==============================================================
   fees.js – Star Shia Quran Academy (Fee Structure)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- WEEKLY PLANS DATA -----
    // Prices are per month
    // Base: $20 for 1 day/week, +$5 for each additional day
    const weeklyPlans = [
        {
            days: 1,
            sessionsPerMonth: 4,
            priceUSD: 20,
            priceAUD: 20,
            priceGBP: 13,
            priceEUR: 15,
            popular: false
        },
        {
            days: 2,
            sessionsPerMonth: 8,
            priceUSD: 25,
            priceAUD: 25,
            priceGBP: 16,
            priceEUR: 18,
            popular: false
        },
        {
            days: 3,
            sessionsPerMonth: 12,
            priceUSD: 30,
            priceAUD: 30,
            priceGBP: 20,
            priceEUR: 20,
            popular: true
        },
        {
            days: 4,
            sessionsPerMonth: 16,
            priceUSD: 35,
            priceAUD: 35,
            priceGBP: 22,
            priceEUR: 22,
            popular: false
        },
        {
            days: 5,
            sessionsPerMonth: 20,
            priceUSD: 40,
            priceAUD: 40,
            priceGBP: 25,
            priceEUR: 25,
            popular: false
        }
    ];

    // ----- WEEKEND PLANS DATA -----
    // Saturday: $30/month, Sunday: $30/month, Both: $50/month
    const weekendPlans = [
        {
            name: 'Saturday Only',
            days: 'Saturday',
            sessionsPerMonth: 4,
            priceUSD: 30,
            priceAUD: 30,
            priceGBP: 20,
            priceEUR: 20,
            icon: 'fa-calendar-day'
        },
        {
            name: 'Sunday Only',
            days: 'Sunday',
            sessionsPerMonth: 4,
            priceUSD: 30,
            priceAUD: 30,
            priceGBP: 20,
            priceEUR: 20,
            icon: 'fa-calendar-day'
        },
        {
            name: 'Saturday & Sunday',
            days: 'Both Days',
            sessionsPerMonth: 8,
            priceUSD: 50,
            priceAUD: 50,
            priceGBP: 33,
            priceEUR: 33,
            icon: 'fa-calendar-weekend',
            popular: true
        }
    ];

        // ----- Render Weekly Plans -----
    function renderWeeklyPlans() {
        const row1Container = document.getElementById('weeklyRow1');
        const row2Container = document.getElementById('weeklyRow2');
        if (!row1Container || !row2Container) return;

        // Separate plans into two rows
        const row1Plans = weeklyPlans.slice(0, 3); // 1st, 2nd, 3rd day
        const row2Plans = weeklyPlans.slice(3, 5); // 4th, 5th day

        // Render Row 1 (1st, 2nd, 3rd day)
        let htmlRow1 = '';
        row1Plans.forEach(function(plan) {
            const popularClass = plan.popular ? 'popular' : '';
            const badgeHtml = plan.popular ? '<div class="popular-badge">Most Popular</div>' : '';

            htmlRow1 += `
                <div class="pricing-card ${popularClass}">
                    ${badgeHtml}
                    <div class="plan-days">${plan.days} Day${plan.days > 1 ? 's' : ''} / Week</div>
                    <div class="plan-name">${plan.sessionsPerMonth} Sessions / Month</div>
                    <div class="plan-duration">30 min per session</div>
                    <div class="plan-price">$${plan.priceUSD}<span>/mo</span></div>
                    <ul class="plan-currency-list">
                        <li><span class="currency">🇺🇸 USA & CAD</span> <span class="amount">$${plan.priceUSD}/mo</span></li>
                        <li><span class="currency">🇦🇺 AUD</span> <span class="amount">$${plan.priceAUD}/mo</span></li>
                        <li><span class="currency">🇬🇧 UK</span> <span class="amount">£${plan.priceGBP}/mo</span></li>
                        <li><span class="currency">🇪🇺 Europe</span> <span class="amount">€${plan.priceEUR}/mo</span></li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Enroll Now</a>
                </div>
            `;
        });
        row1Container.innerHTML = htmlRow1;

        // Render Row 2 (4th, 5th day)
        let htmlRow2 = '';
        row2Plans.forEach(function(plan) {
            const popularClass = plan.popular ? 'popular' : '';
            const badgeHtml = plan.popular ? '<div class="popular-badge">Most Popular</div>' : '';

            htmlRow2 += `
                <div class="pricing-card ${popularClass}">
                    ${badgeHtml}
                    <div class="plan-days">${plan.days} Day${plan.days > 1 ? 's' : ''} / Week</div>
                    <div class="plan-name">${plan.sessionsPerMonth} Sessions / Month</div>
                    <div class="plan-duration">30 min per session</div>
                    <div class="plan-price">$${plan.priceUSD}<span>/mo</span></div>
                    <ul class="plan-currency-list">
                        <li><span class="currency">🇺🇸 USA & CAD</span> <span class="amount">$${plan.priceUSD}/mo</span></li>
                        <li><span class="currency">🇦🇺 AUD</span> <span class="amount">$${plan.priceAUD}/mo</span></li>
                        <li><span class="currency">🇬🇧 UK</span> <span class="amount">£${plan.priceGBP}/mo</span></li>
                        <li><span class="currency">🇪🇺 Europe</span> <span class="amount">€${plan.priceEUR}/mo</span></li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Enroll Now</a>
                </div>
            `;
        });
        row2Container.innerHTML = htmlRow2;
    }

    // ----- Render Weekend Plans -----
    function renderWeekendPlans() {
        const container = document.getElementById('weekendPlans');
        if (!container) return;

        let html = '';
        weekendPlans.forEach(function(plan) {
            const popularClass = plan.popular ? 'popular' : '';

            html += `
                <div class="pricing-card ${popularClass}">
                    ${plan.popular ? '<div class="popular-badge">Best Value</div>' : ''}
                    <div class="plan-days"><i class="fas ${plan.icon}"></i> ${plan.name}</div>
                    <div class="plan-name">${plan.sessionsPerMonth} Sessions / Month</div>
                    <div class="plan-duration">${plan.days} • 30 min per session</div>
                    <div class="plan-price">$${plan.priceUSD}<span>/mo</span></div>
                    <ul class="plan-currency-list">
                        <li><span class="currency">🇺🇸 USA & CAD</span> <span class="amount">$${plan.priceUSD}/mo</span></li>
                        <li><span class="currency">🇦🇺 AUD</span> <span class="amount">$${plan.priceAUD}/mo</span></li>
                        <li><span class="currency">🇬🇧 UK</span> <span class="amount">£${plan.priceGBP}/mo</span></li>
                        <li><span class="currency">🇪🇺 Europe</span> <span class="amount">€${plan.priceEUR}/mo</span></li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Enroll Now</a>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    // ----- Initialize -----
    renderWeeklyPlans();
    renderWeekendPlans();
});

    // ==========================================================
    // FAQ SECTION
    // ==========================================================

    // ----- FAQ Data -----
    const faqData = [
        {
            question: 'What is included in the monthly fee?',
            answer: `
                <p>The monthly fee includes:</p>
                <ul>
                    <li><strong>Live 30-minute sessions</strong> with a certified Shia teacher</li>
                    <li><strong>Personalized learning plan</strong> tailored to your level and goals</li>
                    <li><strong>Access to course materials</strong> and resources</li>
                    <li><strong>Progress tracking</strong> and regular feedback</li>
                    <li><strong>Flexible scheduling</strong> within our working hours</li>
                    <li><strong>Free trial class</strong> for new students</li>
                </ul>
                <p>All sessions are conducted online via video conferencing platforms like Zoom or Google Meet.</p>
            `
        },
        {
            question: 'Are there any additional fees or hidden charges?',
            answer: `
                <p>No, there are <strong>no hidden charges</strong> at Star Shia Quran Academy. The monthly fee covers everything you need for your Quran learning journey.</p>
                <p>We believe in transparent pricing so you can focus on learning without worrying about unexpected costs.</p>
            `
        },
        {
            question: 'How does the family discount work?',
            answer: `
                <p>Our family discount is designed to help families learn together:</p>
                <ul>
                    <li><strong>3 or more family members</strong> receive <strong>20% off</strong> the total monthly fees</li>
                    <li>Can be applied to <strong>any plan</strong> (weekly or weekend)</li>
                    <li>Family members can have <strong>different schedules</strong> and <strong>different teachers</strong></li>
                    <li>Discount applies to <strong>all members</strong> of the same family</li>
                </ul>
                <p>For example: 3 family members on the 3 Days/Week Plan ($40 each) would normally cost $120/month. With the family discount, it's only <strong>$96/month</strong> – a savings of $24/month!</p>
            `
        },
        {
            question: 'Can I change my plan after enrollment?',
            answer: `
                <p>Yes, you can <strong>change your plan at any time</strong> with one month's notice. If you want to increase or decrease the number of sessions per week, simply contact our team and we'll adjust your plan accordingly.</p>
                <p>We understand that your needs may change, and we're flexible to accommodate your evolving schedule and learning goals.</p>
            `
        },
        {
            question: 'What payment methods do you accept?',
            answer: `
                <p>We accept multiple payment methods for your convenience:</p>
                <ul>
                    <li><strong>Bank Transfer</strong> – Direct bank transfers (for all countries)</li>
                    <li><strong>Credit/Debit Cards</strong> – Visa, Mastercard, and American Express</li>
                    <li><strong>Online Payment Platforms</strong> – PayPal, Stripe, and other major platforms</li>
                    <li><strong>Crypto</strong> – Bitcoin and other cryptocurrencies (upon request)</li>
                </ul>
                <p>All payments are processed securely through our payment partners.</p>
            `
        },
        {
            question: 'Is there a free trial class available?',
            answer: `
                <p>Yes! We offer a <strong>free trial class</strong> for all new students. This allows you to:</p>
                <ul>
                    <li>Experience our teaching methodology</li>
                    <li>Meet your potential teacher</li>
                    <li>Assess your level and learning needs</li>
                    <li>Get a feel for our online platform</li>
                </ul>
                <p>To book your free trial, please <a href="contact.html">contact us</a> or fill out the enrollment form. There's <strong>no obligation</strong> to continue after the trial.</p>
            `
        },
        {
            question: 'What if I need to cancel or pause my enrollment?',
            answer: `
                <p>We offer flexible cancellation and pause options:</p>
                <ul>
                    <li><strong>Cancel anytime</strong> – No long-term contracts or lock-in periods</li>
                    <li><strong>Pause your membership</strong> – Up to 3 months per year</li>
                    <li><strong>Full refund</strong> – Within 7 days of enrollment if no classes attended</li>
                    <li><strong>Partial refunds</strong> – Available on a case-by-case basis for extenuating circumstances</li>
                </ul>
                <p>Simply contact our team and we'll handle the rest with minimal hassle.</p>
            `
        },
        {
            question: 'Do you offer scholarships or financial aid?',
            answer: `
                <p>Yes, we believe that everyone should have access to Quranic education regardless of their financial situation.</p>
                <p>We offer <strong>limited scholarships</strong> and <strong>financial aid</strong> for deserving students. Our financial aid program is need-based and reviewed on a case-by-case basis.</p>
                <p>To apply, please <a href="contact.html">contact us</a> with details about your situation, and our team will guide you through the application process.</p>
            `
        },
        {
            question: 'How do I enroll in a course?',
            answer: `
                <p>Enrolling at Star Shia Quran Academy is simple:</p>
                <ul>
                    <li><strong>Step 1:</strong> Choose your preferred plan from our pricing options above</li>
                    <li><strong>Step 2:</strong> Click the "Enroll Now" button on your chosen plan</li>
                    <li><strong>Step 3:</strong> Fill out the enrollment form with your details</li>
                    <li><strong>Step 4:</strong> Schedule your free trial class</li>
                    <li><strong>Step 5:</strong> Start learning with your certified Shia teacher!</li>
                </ul>
                <p>You can also <a href="contact.html">contact us</a> directly, and our team will assist you with the enrollment process.</p>
            `
        },
        {
            question: 'What qualifications do your teachers have?',
            answer: `
                <p>All our teachers at Star Shia Quran Academy are <strong>highly qualified</strong> and <strong>certified Shia scholars</strong>:</p>
                <ul>
                    <li><strong>Ijazah</strong> in Quranic recitation and Tajweed</li>
                    <li><strong>Certified</strong> in Tafseer and Islamic studies</li>
                    <li><strong>Experience</strong> – 5+ years of teaching experience</li>
                    <li><strong>Background checked</strong> – Thorough screening process</li>
                    <li><strong>Native Arabic speakers</strong> or fluent in Arabic</li>
                </ul>
                <p>You can view our <a href="teachers.html">teachers page</a> for more information about each instructor.</p>
            `
        }
    ];

    // ----- Render FAQ -----
    function renderFAQ() {
        const container = document.getElementById('faqContainer');
        if (!container) return;

        let html = '';
        faqData.forEach(function(item, index) {
            const isActive = index === 0 ? 'active' : ''; // First FAQ open by default
            html += `
                <div class="faq-item ${isActive}">
                    <div class="faq-question" data-index="${index}">
                        <h3>${item.question}</h3>
                        <span class="faq-toggle"><i class="fas fa-chevron-down"></i></span>
                    </div>
                    <div class="faq-answer">
                        ${item.answer}
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        // ----- FAQ Toggle Functionality -----
        const faqItems = container.querySelectorAll('.faq-item');
        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(function(otherItem) {
                    otherItem.classList.remove('active');
                });
                
                // Toggle the clicked item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // ----- Initialize FAQ -----
    renderFAQ();