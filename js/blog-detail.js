/* ==============================================================
   blog-detail.js – Star Shia Quran Academy (Article Detail)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- Blog Data with authorImage added -----
    const blogPosts = [
        {
            id: 'tajweed-importance',
            title: 'The Importance of Tajweed in Shia Tradition',
            category: 'tajweed',
            date: 'May 15, 2026',
            author: 'Maulana Hassan Jafri',
            authorImage: 'teacher-2.webp',    // <-- NEW: teacher image filename
            image: 'tajweed-importance.webp',
            excerpt: 'Discover why Tajweed is essential in Shia Islam and how it enhances the beauty and meaning of Quranic recitation.',
            content: `
                <p>Tajweed, the science of proper Quranic recitation, holds a special place in Shia tradition. The Imams (AS) emphasized reciting the Quran with beauty and correctness, as it reflects the divine nature of the revelation.</p>
                <p>In this article, we explore the spiritual and practical aspects of Tajweed, from the correct pronunciation of letters (Makharij) to the rules of elongation and pause. We also discuss the role of Tajweed in preserving the Quran's original message.</p>
                <h2>Why Tajweed Matters</h2>
                <p>Reciting the Quran with Tajweed is not merely an aesthetic exercise; it is an act of worship. The Prophet (PBUH) said: "Adorn the Quran with your voices." The Imams (AS) further elaborated that each letter should be given its due right, which includes proper articulation and characteristics.</p>
                <p>For Shia Muslims, learning Tajweed is also a way to connect with the Ahlul Bayt (AS), who were the living embodiments of the Quran. Their recitation was a model for all believers.</p>
                <h3>Practical Tips for Learning Tajweed</h3>
                <ul>
                    <li>Start with a qualified teacher who can correct your mistakes.</li>
                    <li>Practice regularly, even if only a few verses a day.</li>
                    <li>Listen to the recitation of renowned Qaris and try to imitate.</li>
                    <li>Learn the theoretical rules, but focus on practical application.</li>
                </ul>
                <p>At Star Shia Quran Academy, we offer dedicated Tajweed courses for all levels. Our teachers are certified Qaris who can guide you step by step.</p>
            `
        },
        {
            id: 'choose-academy',
            title: 'How to Choose the Right Shia Quran Academy',
            category: 'online-learning',
            date: 'April 28, 2026',
            author: 'Dr. Syed Abbas',
            authorImage: 'founder.webp',    // <-- NEW
            image: 'choose-academy.webp',
            excerpt: 'Key factors to consider when selecting an online Quran academy for your family\'s Islamic education.',
            content: `
                <p>With the rise of online education, choosing the right Shia Quran Academy can be overwhelming. This article provides a comprehensive guide to help you make an informed decision.</p>
                <h2>What to Look For</h2>
                <ul>
                    <li><strong>Qualified Teachers:</strong> Ensure the teachers are certified Shia scholars with proper Ijazah.</li>
                    <li><strong>Authentic Curriculum:</strong> The curriculum should be rooted in the teachings of the Ahlul Bayt (AS).</li>
                    <li><strong>Flexible Scheduling:</strong> Look for academies that offer classes at times convenient for you.</li>
                    <li><strong>Student Support:</strong> Good academies provide progress tracking, regular feedback, and a supportive community.</li>
                    <li><strong>Affordability:</strong> Compare fees and ensure there are no hidden costs.</li>
                </ul>
                <h3>Red Flags to Avoid</h3>
                <p>Be wary of academies that promise unrealistic results, lack transparency, or have negative reviews. Always ask for a trial class before committing.</p>
                <p>Star Shia Quran Academy ticks all these boxes – we invite you to experience our quality firsthand.</p>
            `
        },
        {
            id: 'ahlul-bayt-tafseer',
            title: 'The Role of Ahlul Bayt in Quranic Interpretation',
            category: 'tafseer',
            date: 'April 10, 2026',
            author: 'Maulana Hassan Raza',
            authorImage: 'principal.webp',    // <-- NEW
            image: 'ahlul-bayt-tafseer.webp',
            excerpt: 'Explore how the teachings of the Ahlul Bayt (AS) provide a unique and profound understanding of the Quran.',
            content: `
                <p>The Quran is the primary source of guidance for Muslims, but its interpretation requires deep knowledge and spiritual insight. The Ahlul Bayt (AS) are the divinely appointed interpreters of the Quran, as affirmed by the Prophet (PBUH) in the Hadith of Thaqalayn.</p>
                <p>This article delves into the principles of Tafseer from the Shia perspective, highlighting the role of the Imams in explaining the hidden meanings, the abrogation of verses, and the practical application of Quranic teachings.</p>
                <h2>The Imams as Living Tafseer</h2>
                <p>Imam Ali (AS) said: "The Quran is a book between two covers; it does not speak; it must be interpreted by men." The Imams (AS) were the embodiment of the Quran's values, and their sayings and actions provide the clearest exegesis.</p>
                <p>We also discuss the importance of referring to reliable Hadith from the Ahlul Bayt when studying Tafseer, and how this safeguards against misinterpretation.</p>
                <h3>Key Themes in Shia Tafseer</h3>
                <ul>
                    <li>Imamate and leadership in the Quran.</li>
                    <li>The concept of justice and oppression.</li>
                    <li>The Hereafter and moral accountability.</li>
                    <li>The unity of God and His attributes.</li>
                </ul>
            `
        },
        {
            id: 'shia-quran-education',
            title: 'The Unique Approach of Shia Quran Education',
            category: 'islamic-studies',
            date: 'March 22, 2026',
            author: 'Ustadha Zahra Naqvi',
            authorImage: 'head-teacher.webp',    // <-- NEW
            image: 'shia-quran-education.webp',
            excerpt: 'Understanding the holistic approach to Quran education in the Shia tradition, combining spiritual, intellectual, and ethical dimensions.',
            content: `
                <p>Shia Quran education goes beyond mere recitation; it aims to transform the individual spiritually, intellectually, and morally. This article explores the distinctive features of Shia pedagogy, including the integration of Ahlul Bayt teachings, the emphasis on practical ethics, and the cultivation of a deep love for the Quran.</p>
                <h2>Holistic Development</h2>
                <p>In Shia tradition, Quran learning is not isolated from other aspects of faith. It is intertwined with Aqeedah, Fiqh, and Akhlaq. Students are taught to apply Quranic principles in their daily lives, from prayer to social interactions.</p>
                <h3>The Role of the Teacher</h3>
                <p>A Shia Quran teacher is not just an instructor but a mentor who guides students on their spiritual journey. The teacher-student relationship is rooted in mutual respect and love for the Ahlul Bayt.</p>
                <p>At Star Shia Quran Academy, we embody this approach, ensuring that our students receive a well-rounded Islamic education.</p>
            `
        },
        {
            id: 'arabic-quran-connection',
            title: 'Arabic – The Key to a Deeper Quran Connection',
            category: 'arabic',
            date: 'March 5, 2026',
            author: 'Ustadha Fatima Zaidi',
            authorImage: 'teacher-3.webp',    // <-- NEW
            image: 'arabic-quran-connection.webp',
            excerpt: 'Why learning Arabic is essential for understanding the Quran directly and how our academy makes it accessible.',
            content: `
                <p>The Quran was revealed in Arabic, and its linguistic beauty and precision are unmatched. While translations are helpful, they cannot fully capture the depth of meaning. This article highlights the importance of learning Arabic for a more profound connection with the Quran.</p>
                <h2>Benefits of Learning Arabic</h2>
                <ul>
                    <li>Direct understanding of the Quran without intermediary.</li>
                    <li>Ability to appreciate the eloquence and rhetorical devices.</li>
                    <li>Access to classical Islamic texts and scholarship.</li>
                    <li>Enhanced concentration and awe during prayer and recitation.</li>
                </ul>
                <h3>How We Teach Arabic</h3>
                <p>Our Arabic courses are designed for beginners and intermediate learners, focusing on Quranic vocabulary, grammar (Nahw), and morphology (Sarf). We use practical examples from the Quran to make learning relevant and engaging.</p>
                <p>With our structured curriculum and experienced teachers, you can achieve proficiency in Arabic and unlock the Quran's treasures.</p>
            `
        },
        {
            id: 'online-quran-benefits',
            title: 'The Benefits of Online Quran Learning for Shia Families',
            category: 'online-learning',
            date: 'February 18, 2026',
            author: 'Dr. Syed Abbas',
            authorImage: 'founder.webp',    // <-- NEW (same as founder)
            image: 'online-quran-benefits.webp',
            excerpt: 'Discover the advantages of online Quran education, from flexibility to access to qualified teachers, especially for Shia families living in the West.',
            content: `
                <p>For many Shia families, especially those in non-Muslim countries, accessing authentic Islamic education can be challenging. Online Quran academies have emerged as a viable solution, offering numerous benefits.</p>
                <h2>Key Advantages</h2>
                <ul>
                    <li><strong>Accessibility:</strong> Learn from anywhere in the world, as long as you have an internet connection.</li>
                    <li><strong>Flexibility:</strong> Schedule classes at times that suit your family's routine.</li>
                    <li><strong>Quality Teachers:</strong> Access to qualified Shia scholars who may not be available locally.</li>
                    <li><strong>Safe Environment:</strong> Learn from the comfort and safety of your home.</li>
                    <li><strong>Cost-Effective:</strong> Often more affordable than physical classes.</li>
                </ul>
                <h3>Overcoming Challenges</h3>
                <p>We also address common concerns such as screen time, engagement, and maintaining Islamic etiquette in a digital setting. Our academy employs interactive methods and personalized attention to ensure effective learning.</p>
                <p>Star Shia Quran Academy is proud to serve Shia families globally, helping them stay connected to their faith through quality online education.</p>
            `
        }
    ];

    // ----- Get article ID from URL -----
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const wrapper = document.getElementById('blogDetailWrapper');

    if (!postId) {
        wrapper.innerHTML = `<p class="error">No article selected. <a href="blog.html">Browse all articles</a>.</p>`;
        return;
    }

    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
        wrapper.innerHTML = `<p class="error">Article not found. <a href="blog.html">View all articles</a>.</p>`;
        return;
    }

    // Update page title & meta
    document.title = `${post.title} – Star Shia Quran Academy`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt);
    }

    // ----- Build the article HTML (UPDATED author avatar line) -----
    const html = `
        <div class="blog-article">
            <div class="article-header">
                <span class="article-category">${post.category}</span>
                <h1>${post.title}</h1>
                <div class="article-meta">
                    <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                </div>
            </div>
            <div class="article-featured-image">
                <img src="images/blog/${post.image}" alt="${post.title}" />
            </div>
            <div class="article-body">
                ${post.content}
            </div>
            <div class="article-footer">
                <div class="article-author">
                    <!-- ✅ UPDATED: Now uses the authorImage from the blog post data -->
                    <img src="images/teachers/${post.authorImage}" alt="${post.author}" />
                    <div class="author-info">
                        <strong>${post.author}</strong>
                        <span>Scholar at Star Shia Quran Academy</span>
                    </div>
                </div>
                <div class="article-share">
                    <a href="#" aria-label="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Share on Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Share by Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
    `;

    wrapper.innerHTML = html;
});