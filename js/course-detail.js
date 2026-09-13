/* ==============================================================
   course-detail.js – Star Shia Quran Academy (Course Detail)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- Course Data (same as courses.js) -----
    const courses = [
        {
            id: 'tajweed',
            title: 'Quran Tajweed',
            category: 'quran',
            level: 'beginner',
            duration: '12 weeks',
            instructor: 'Maulana Hassan Jafri',
            image: 'tajweed.webp',
            shortDesc: 'Master the rules of Quranic recitation with proper pronunciation and articulation.',
            fullDesc: `
    <h2>Master the Art of Quranic Recitation</h2>
    <p>
        The <strong>Quran Tajweed</strong> course at <strong>Star Shia Quran Academy</strong> is designed to help students perfect their Quranic recitation according to the rules of Tajweed. As a leading <strong>online Quran Academy</strong>, we provide comprehensive training in the proper pronunciation and articulation of every Arabic letter.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Makharij (Articulation Points):</strong> Master the correct pronunciation of each Arabic letter from its proper origin.</li>
        <li><strong>Sifaat (Characteristics of Letters):</strong> Understand the inherent and circumstantial qualities of letters that affect pronunciation.</li>
        <li><strong>Rules of Noon and Meem:</strong> Learn the rules of Ikhfa, Idgham, Izhar, and Iqlab for perfect recitation.</li>
        <li><strong>Rules of Madd (Elongation):</strong> Master the rules of prolonging vowels in different contexts.</li>
        <li><strong>Practical Application:</strong> Apply all Tajweed rules through guided practice and recitation of Quranic verses.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our certified <strong>Shia Quran</strong> teachers provide personalized attention to each student. Whether you are a beginner or looking to refine your recitation, this course offers:
    </p>
    <ul>
        <li><strong>One-on-one sessions</strong> with certified Qaris</li>
        <li><strong>Interactive learning</strong> with screen sharing and real-time feedback</li>
        <li><strong>Flexible scheduling</strong> to fit your busy lifestyle</li>
        <li><strong>Progress tracking</strong> with regular assessments</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is ideal for students of all ages who want to recite the Quran with precision and beauty. Whether you are a beginner or have prior knowledge, our <strong>online Quran Academy</strong> caters to all levels.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 12 weeks (customizable based on progress)</li>
        <li><strong>Session Length:</strong> 30-45 minutes per session</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular evaluations and feedback</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Join the leading <strong>Shia Quran Academy</strong> and transform your Quranic recitation. <a href="contact.html">Contact us</a> for a free trial class and experience the difference of learning with certified Shia scholars.
    </p>
`,
            highlights: ['Correct pronunciation', 'Application of Tajweed rules', 'Sifaat and Makharij', 'Practical recitation']
        },
        {
            id: 'tafseer',
            title: 'Tafseer & Quranic Exegesis',
            category: 'quran',
            level: 'intermediate',
            duration: '16 weeks',
            instructor: 'Maulana Hassan Raza',
            image: 'tafseer.webp',
            shortDesc: 'Deep dive into the meanings of the Quran with Tafseer from the perspective of the Ahlul Bayt (AS).',
            fullDesc: `
    <h2>Deepen Your Understanding of the Quran</h2>
    <p>
        The <strong>Tafseer & Quranic Exegesis</strong> course at <strong>Star Shia Quran Academy</strong> offers an in-depth exploration of the meanings and messages of the Quran. As a premier <strong>online Quran Academy</strong>, we provide Tafseer from the perspective of the Ahlul Bayt (AS), ensuring authentic and profound understanding.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Tafseer of Selected Surahs:</strong> Study the meanings, context, and lessons of key Surahs.</li>
        <li><strong>Historical Context:</strong> Understand the Asbab al-Nuzul (reasons for revelation) and historical background.</li>
        <li><strong>Linguistic Nuances:</strong> Explore the Arabic language and rhetorical devices used in the Quran.</li>
        <li><strong>Ahlul Bayt Perspective:</strong> Learn the interpretations of the Imams (AS) and their application.</li>
        <li><strong>Contemporary Relevance:</strong> Apply Quranic teachings to modern-day challenges.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars bring years of expertise in Quranic exegesis. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> rooted in the Ahlul Bayt (AS)</li>
        <li><strong>Interactive discussions</strong> and Q&A sessions</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and resources</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is perfect for students who want to go beyond recitation and understand the deeper meanings of the Quran. Ideal for intermediate to advanced learners seeking a comprehensive <strong>Quran Academy</strong> experience.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 16 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45-60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Weekly reflections and discussions</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Begin your journey into the depths of the Quran with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class and experience authentic Shia Tafseer education.
    </p>
`,
            highlights: ['Tafseer of selected Surahs', 'Ahlul Bayt perspective', 'Historical context', 'Contemporary application']
        },
        {
            id: 'arabic',
            title: 'Arabic for Quran',
            category: 'arabic',
            level: 'beginner',
            duration: '20 weeks',
            instructor: 'Ustadha Fatima Zaidi',
            image: 'arabic.webp',
            shortDesc: 'Build a strong foundation in Arabic grammar and vocabulary to understand the Quran directly.',
            fullDesc: `
    <h2>Unlock the Language of the Quran</h2>
    <p>
        The <strong>Arabic for Quran</strong> course at <strong>Star Shia Quran Academy</strong> is designed to help students understand the Quran directly without translation. As a leading <strong>online Quran Academy</strong>, we focus on Quranic Arabic to build a strong foundation for understanding the divine message.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Arabic Grammar (Nahw):</strong> Master the rules of sentence structure and syntax.</li>
        <li><strong>Morphology (Sarf):</strong> Understand word formation and conjugation.</li>
        <li><strong>Quranic Vocabulary:</strong> Learn the most frequently used words in the Quran.</li>
        <li><strong>Reading Comprehension:</strong> Practice reading and understanding Quranic verses.</li>
        <li><strong>Basic Translation:</strong> Develop skills to translate Quranic verses with confidence.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our certified <strong>Shia Quran</strong> teachers make Arabic learning accessible and engaging. This course offers:
    </p>
    <ul>
        <li><strong>Practical learning</strong> with real Quranic examples</li>
        <li><strong>Interactive sessions</strong> with speaking and writing practice</li>
        <li><strong>Flexible scheduling</strong> to fit your routine</li>
        <li><strong>Progress tracking</strong> with regular assessments</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is ideal for beginners who want to learn Arabic specifically for Quranic understanding. Whether you are a student, professional, or parent, this <strong>Quran Academy</strong> course will empower you to connect with the Quran directly.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 20 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular quizzes and exercises</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Unlock the language of the Quran with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class and start your Arabic learning journey.
    </p>
`,
            highlights: ['Arabic grammar', 'Quranic vocabulary', 'Reading comprehension', 'Basic translation']
        },
        {
            id: 'islamic-studies',
            title: 'Shia Islamic Studies',
            category: 'islamic',
            level: 'intermediate',
            duration: '24 weeks',
            instructor: 'Dr. Syed Abbas',
            image: 'islamic-studies.webp',
            shortDesc: 'Comprehensive study of Aqeedah, Fiqh, history, and ethics according to the teachings of the Twelve Imams.',
            fullDesc: `
    <h2>Comprehensive Islamic Education for Shia Muslims</h2>
    <p>
        The <strong>Shia Islamic Studies</strong> course at <strong>Star Shia Quran Academy</strong> provides a holistic education in Shia beliefs, jurisprudence, history, and ethics. As a premier <strong>online Quran Academy</strong>, we offer a well-rounded curriculum rooted in the teachings of the Ahlul Bayt (AS).
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Shia Aqeedah:</strong> Understand the core beliefs of Shia Islam, including Tawhid, Prophethood, and Imamate.</li>
        <li><strong>Shia Fiqh (Jurisprudence):</strong> Study the rules of worship and daily life according to the Ja'fari school.</li>
        <li><strong>Islamic History:</strong> Explore the history of Islam from the Prophet (PBUH) to the present.</li>
        <li><strong>Ethics and Morality:</strong> Develop moral character based on the teachings of the Imams (AS).</li>
        <li><strong>Contemporary Issues:</strong> Address modern challenges from an Islamic perspective.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars provide authentic and comprehensive education. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> from qualified Shia scholars</li>
        <li><strong>Interactive discussions</strong> and Q&A sessions</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and resources</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is perfect for students of all ages who want a comprehensive understanding of Shia Islam. Ideal for families, reverts, and anyone seeking a deeper connection with their faith through a trusted <strong>Quran Academy</strong>.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 24 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45-60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular assignments and discussions</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Build a strong foundation in Shia Islam with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class and begin your journey.
    </p>
`,
            highlights: ['Shia Aqeedah', 'Fiqh (Jurisprudence)', 'Islamic history', 'Ethics and morality']
        },
        {
            id: 'kids-quran',
            title: 'Quran for Kids',
            category: 'quran',
            level: 'beginner',
            duration: '10 weeks',
            instructor: 'Ustadha Zahra Naqvi',
            image: 'kids-quran.webp',
            shortDesc: 'Engaging Quran lessons for children with fun activities and age-appropriate Tafseer.',
            fullDesc: `
    <h2>Comprehensive Islamic Education for Shia Muslims</h2>
    <p>
        The <strong>Shia Islamic Studies</strong> course at <strong>Star Shia Quran Academy</strong> provides a holistic education in Shia beliefs, jurisprudence, history, and ethics. As a premier <strong>online Quran Academy</strong>, we offer a well-rounded curriculum rooted in the teachings of the Ahlul Bayt (AS).
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Shia Aqeedah:</strong> Understand the core beliefs of Shia Islam, including Tawhid, Prophethood, and Imamate.</li>
        <li><strong>Shia Fiqh (Jurisprudence):</strong> Study the rules of worship and daily life according to the Ja'fari school.</li>
        <li><strong>Islamic History:</strong> Explore the history of Islam from the Prophet (PBUH) to the present.</li>
        <li><strong>Ethics and Morality:</strong> Develop moral character based on the teachings of the Imams (AS).</li>
        <li><strong>Contemporary Issues:</strong> Address modern challenges from an Islamic perspective.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars provide authentic and comprehensive education. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> from qualified Shia scholars</li>
        <li><strong>Interactive discussions</strong> and Q&A sessions</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and resources</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is perfect for students of all ages who want a comprehensive understanding of Shia Islam. Ideal for families, reverts, and anyone seeking a deeper connection with their faith through a trusted <strong>Quran Academy</strong>.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 24 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45-60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular assignments and discussions</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Build a strong foundation in Shia Islam with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class and begin your journey.
    </p>
`,
            highlights: ['Fun learning', 'Basic Tajweed', 'Simple Tafseer', 'Interactive activities']
        },
        {
            id: 'fiqh',
            title: 'Shia Fiqh (Jurisprudence)',
            category: 'fiqh-hadith',
            level: 'intermediate',
            duration: '18 weeks',
            instructor: 'Maulana Hassan Raza',
            image: 'fiqh.webp',
            shortDesc: 'Study the rules of Islamic jurisprudence according to the Jaʿfari school of thought.',
            fullDesc: `
    <h2>Understanding Islamic Law According to the Ja'fari School</h2>
    <p>
        The <strong>Shia Fiqh</strong> course at <strong>Star Shia Quran Academy</strong> provides a comprehensive study of Islamic jurisprudence according to the Ja'fari school of thought. As a premier <strong>online Quran Academy</strong>, we offer authentic Fiqh education rooted in the teachings of the Ahlul Bayt (AS).
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Acts of Worship (Ibadaat):</strong> Study the rules of Salah, Fasting, Zakat, Khums, and Hajj.</li>
        <li><strong>Transactions (Mu'amalat):</strong> Understand Islamic law related to business, marriage, and inheritance.</li>
        <li><strong>Contemporary Issues:</strong> Address modern challenges from a Fiqh perspective.</li>
        <li><strong>Practical Application:</strong> Learn how to apply Fiqh rules in daily life.</li>
        <li><strong>Comparative Fiqh:</strong> Understand differences between the Ja'fari and other schools.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars provide in-depth Fiqh education. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> from qualified scholars</li>
        <li><strong>Interactive discussions</strong> and case studies</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and references</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is perfect for students who want to understand Islamic law in depth. Ideal for adults, students of knowledge, and anyone seeking a trusted <strong>Quran Academy</strong> for Fiqh studies.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 18 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45-60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular assignments and discussions</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Deepen your understanding of Islamic law with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class and start your Fiqh journey.
    </p>
`,
            highlights: ['Jaʿfari Fiqh', 'Worship (Ibadat)', 'Transactions', 'Contemporary issues']
        },
        {
            id: 'hadith',
            title: 'Hadith Sciences & Studies',
            category: 'fiqh-hadith',
            level: 'advanced',
            duration: '20 weeks',
            instructor: 'Dr. Syed Abbas',
            image: 'hadith.webp',
            shortDesc: 'Explore the collection, authenticity, and interpretation of Shia Hadith literature.',
            fullDesc: `
    <h2>Exploring the Sciences of Hadith in Shia Tradition</h2>
    <p>
        The <strong>Hadith Sciences & Studies</strong> course at <strong>Star Shia Quran Academy</strong> provides a comprehensive understanding of Hadith literature in Shia tradition. As a leading <strong>online Quran Academy</strong>, we offer authentic education in the collection, authentication, and interpretation of Hadith.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Hadith Classification:</strong> Understand the categories of Hadith (Sahih, Hasan, Da'if, etc.).</li>
        <li><strong>Chain of Narration (Isnad):</strong> Study the principles of narrators and transmission.</li>
        <li><strong>Major Hadith Collections:</strong> Explore the primary Shia Hadith books.</li>
        <li><strong>Practical Application:</strong> Learn how Hadith is used to derive Islamic law.</li>
        <li><strong>Contemporary Relevance:</strong> Apply Hadith teachings to modern issues.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars bring years of expertise in Hadith sciences. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> from qualified scholars</li>
        <li><strong>Interactive discussions</strong> and critical analysis</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and references</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is ideal for advanced students who want to study Hadith in depth. Perfect for those seeking a trusted <strong>Quran Academy</strong> for Hadith sciences.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 20 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45-60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular assignments and discussions</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Dive into the rich tradition of Hadith sciences with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class.
    </p>
`,
            highlights: ['Hadith classification', 'Narration chains', 'Shia Hadith collections', 'Practical application']
        },
        {
            id: 'qiraat',
            title: 'Qira’at & Quranic Recitation Styles',
            category: 'quran',
            level: 'advanced',
            duration: '16 weeks',
            instructor: 'Maulana Hassan Jafri',
            image: 'qiraat.webp',
            shortDesc: 'Learn the seven Qira’at (recitation styles) with proper rules and application.',
            fullDesc: `
    <h2>Master the Seven Qira'at of the Quran</h2>
    <p>
        The <strong>Qira'at & Quranic Recitation Styles</strong> course at <strong>Star Shia Quran Academy</strong> offers advanced training in the seven Qira'at. As a premier <strong>online Quran Academy</strong>, we provide authentic instruction in the various recitation styles of the Quran.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>The Seven Qira'at:</strong> Study the different recitation styles and their origins.</li>
        <li><strong>Rules of Qira'at:</strong> Learn the principles governing each recitation style.</li>
        <li><strong>Practical Application:</strong> Practice reciting in different Qira'at.</li>
        <li><strong>Comparison:</strong> Understand the differences and similarities between Qira'at.</li>
        <li><strong>History:</strong> Explore the historical development of Qira'at.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our certified <strong>Shia Quran</strong> Qaris provide expert instruction. This course offers:
    </p>
    <ul>
        <li><strong>Expert teachers</strong> with Ijazah in Qira'at</li>
        <li><strong>Interactive sessions</strong> with practical recitation</li>
        <li><strong>Flexible scheduling</strong> to fit your routine</li>
        <li><strong>Progress tracking</strong> with regular evaluations</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is perfect for advanced reciters who want to master multiple Qira'at. Ideal for those seeking a comprehensive <strong>Quran Academy</strong> experience.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 16 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45-60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular recitation evaluations</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Master the beautiful recitation styles of the Quran with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class.
    </p>
`,
            highlights: ['Seven Qira’at', 'Recitation styles', 'Rules of Qira’at', 'Practical application']
        },
        {
            id: 'dua-ziyarat',
            title: 'Du’a & Ziyarat',
            category: 'spiritual',
            level: 'beginner',
            duration: '8 weeks',
            instructor: 'Ustadha Zahra Naqvi',
            image: 'dua-ziyarat.webp',
            shortDesc: 'Learn the meanings and etiquettes of important Shia supplications and Ziyarat.',
            fullDesc: `
    <h2>Connecting with the Divine Through Du'a and Ziyarat</h2>
    <p>
        The <strong>Du'a & Ziyarat</strong> course at <strong>Star Shia Quran Academy</strong> focuses on the spiritual traditions of supplication and visiting the holy shrines. As a leading <strong>online Quran Academy</strong>, we teach the meanings, etiquettes, and spiritual significance of these important practices.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Du'as of the Ahlul Bayt:</strong> Study the supplications taught by the Imams (AS).</li>
        <li><strong>Ziyarat Etiquettes:</strong> Learn the proper manners of visiting the holy shrines.</li>
        <li><strong>Spiritual Significance:</strong> Understand the deeper meanings and benefits of Du'a and Ziyarat.</li>
        <li><strong>Practical Recitation:</strong> Practice reciting Du'as and Ziyarat with correct pronunciation.</li>
        <li><strong>Application:</strong> Apply these practices to enhance your spiritual life.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars provide authentic and inspiring instruction. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> from qualified scholars</li>
        <li><strong>Interactive sessions</strong> with discussion and reflection</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including text and translations</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is ideal for students of all ages who want to deepen their spiritual connection. Perfect for those seeking a trusted <strong>Quran Academy</strong> for spiritual growth.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 8 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 30-45 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular reflections and practice</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Strengthen your spiritual connection with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class.
    </p>
`,
            highlights: ['Du’as of Ahlul Bayt', 'Ziyarat etiquettes', 'Spiritual significance', 'Practical recitation']
        },
        {
            id: 'akhlaq',
            title: 'Islamic Ethics (Akhlaq)',
            category: 'islamic',
            level: 'intermediate',
            duration: '14 weeks',
            instructor: 'Ustadha Fatima Zaidi',
            image: 'akhlaq.webp',
            shortDesc: 'Develop moral character and spiritual excellence based on the teachings of the Imams.',
            fullDesc: `
    <h2>Developing Moral Character Through Islamic Ethics</h2>
    <p>
        The <strong>Islamic Ethics (Akhlaq)</strong> course at <strong>Star Shia Quran Academy</strong> focuses on developing moral character based on the teachings of the Quran and Ahlul Bayt (AS). As a premier <strong>online Quran Academy</strong>, we offer comprehensive education in Islamic ethics and self-purification.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Principles of Akhlaq:</strong> Understand the foundations of Islamic ethics.</li>
        <li><strong>Self-Purification (Tazkiyah):</strong> Learn how to purify the soul and develop virtues.</li>
        <li><strong>Virtues and Vices:</strong> Study the characteristics of a righteous believer.</li>
        <li><strong>Practical Application:</strong> Apply ethical teachings in daily life.</li>
        <li><strong>Role Models:</strong> Learn from the examples of the Prophet (PBUH) and Imams (AS).</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars provide inspiring and practical instruction. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> from qualified scholars</li>
        <li><strong>Interactive discussions</strong> and real-life applications</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and resources</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is ideal for students of all ages who want to develop good character. Perfect for those seeking a holistic <strong>Quran Academy</strong> experience.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 14 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular reflections and practice</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Begin your journey to moral excellence with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class.
    </p>
`,
            highlights: ['Moral character', 'Self-purification', 'Virtues and vices', 'Spiritual development']
        },
        {
            id: 'seerah',
            title: 'Seerah of Prophet Muhammad (PBUH)',
            category: 'islamic',
            level: 'intermediate',
            duration: '16 weeks',
            instructor: 'Dr. Syed Abbas',
            image: 'seerah.webp',
            shortDesc: 'Study the life of the Prophet (PBUH) from a Shia perspective, with emphasis on his mission and household.',
            fullDesc:`
    <h2>Exploring the Life of the Prophet Muhammad (PBUH)</h2>
    <p>
        The <strong>Seerah of Prophet Muhammad (PBUH)</strong> course at <strong>Star Shia Quran Academy</strong> provides a comprehensive study of the Prophet's life from a Shia perspective. As a leading <strong>online Quran Academy</strong>, we explore his mission, teachings, and the role of his Ahlul Bayt (AS).
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Biography:</strong> Study the life of the Prophet (PBUH) from birth to death.</li>
        <li><strong>Prophetic Mission:</strong> Understand the message and mission of the Prophet.</li>
        <li><strong>Role of Ahlul Bayt:</strong> Explore the role of the Prophet's family in preserving his message.</li>
        <li><strong>Lessons for Today:</strong> Apply the teachings of the Seerah to contemporary life.</li>
        <li><strong>Historical Context:</strong> Understand the social, political, and religious context of the Prophet's time.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars provide authentic and inspiring instruction. This course offers:
    </p>
    <ul>
        <li><strong>Authentic teachings</strong> from qualified scholars</li>
        <li><strong>Interactive discussions</strong> and critical analysis</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and resources</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is perfect for students of all ages who want to learn about the Prophet's life. Ideal for those seeking a trusted <strong>Quran Academy</strong> for Seerah studies.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 16 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 45-60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Regular discussions and reflections</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Discover the life and legacy of the Prophet Muhammad (PBUH) with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class.
    </p>
`,
            highlights: ['Prophet’s biography', 'Shia perspective', 'Role of Ahlul Bayt', 'Lessons for today']
        },
        {
            id: 'advanced-tafseer',
            title: 'Advanced Tafseer (Thematic)',
            category: 'quran',
            level: 'advanced',
            duration: '24 weeks',
            instructor: 'Maulana Hassan Raza',
            image: 'advanced-tafseer.webp',
            shortDesc: 'Thematic Tafseer exploring major Quranic themes with deep analysis of Shia exegesis.',
            fullDesc: `
    <h2>In-Depth Thematic Tafseer of the Quran</h2>
    <p>
        The <strong>Advanced Tafseer (Thematic)</strong> course at <strong>Star Shia Quran Academy</strong> offers a deep dive into major Quranic themes from the Shia perspective. As a premier <strong>online Quran Academy</strong>, we provide advanced analysis of key concepts like Imamate, Justice, and the Hereafter.
    </p>
    
    <h3>What You Will Learn</h3>
    <ul>
        <li><strong>Thematic Tafseer:</strong> Study major Quranic themes across different Surahs.</li>
        <li><strong>Imamate in the Quran:</strong> Understand the concept of leadership in the Quran.</li>
        <li><strong>Justice and Hereafter:</strong> Explore the Quranic teachings on justice and the afterlife.</li>
        <li><strong>Advanced Analysis:</strong> Analyze Quranic verses with depth and nuance.</li>
        <li><strong>Contemporary Relevance:</strong> Apply Quranic teachings to modern issues.</li>
    </ul>
    
    <h3>Why Choose This Course?</h3>
    <p>
        At <strong>Star Shia Quran Academy</strong>, our <strong>Shia Quran</strong> scholars provide expert instruction in Tafseer. This course offers:
    </p>
    <ul>
        <li><strong>Expert teachers</strong> with deep knowledge of Tafseer</li>
        <li><strong>Interactive discussions</strong> and critical analysis</li>
        <li><strong>Flexible learning</strong> with one-on-one and group options</li>
        <li><strong>Comprehensive materials</strong> including notes and references</li>
    </ul>
    
    <h3>Who Is This Course For?</h3>
    <p>
        This course is designed for advanced students who want to study the Quran in depth. Perfect for those seeking a comprehensive <strong>Quran Academy</strong> experience.
    </p>
    
    <h3>Course Structure</h3>
    <ul>
        <li><strong>Duration:</strong> 24 weeks (customizable)</li>
        <li><strong>Session Length:</strong> 60 minutes</li>
        <li><strong>Frequency:</strong> Choose from 1-5 days per week</li>
        <li><strong>Assessment:</strong> Research papers and discussions</li>
    </ul>
    
    <h3>Enroll Today</h3>
    <p>
        Unlock the deeper meanings of the Quran with <strong>Star Shia Quran Academy</strong>. <a href="contact.html">Contact us</a> for a free trial class.
    </p>
`,
            highlights: ['Thematic Tafseer', 'Imamate in Quran', 'Justice and Hereafter', 'Advanced analysis']
        }
    ];

    // ----- Get course ID from URL -----
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    const wrapper = document.getElementById('courseDetailWrapper');

    if (!courseId) {
        wrapper.innerHTML = `<p class="error">No course selected. <a href="courses.html">Browse our courses</a>.</p>`;
        return;
    }

    const course = courses.find(c => c.id === courseId);

    if (!course) {
        wrapper.innerHTML = `<p class="error">Course not found. <a href="courses.html">View all courses</a>.</p>`;
        return;
    }

    // Update page title & meta description dynamically
    document.title = `${course.title} – Star Shia Quran Academy`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `${course.shortDesc} Enroll now at Star Shia Quran Academy.`);
    }

    // Build the detail HTML
    const highlightsHtml = course.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('');

 const html = `
    <div class="course-detail-content">
        <!-- Course Header -->
        <div class="detail-header">
            <div class="detail-header-content">
                <span class="section-tag">${course.category}</span>
                <h1>${course.title}</h1>
                <div class="detail-meta">
                    <span><i class="far fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-user-graduate"></i> ${course.instructor}</span>
                    <span><i class="fas fa-signal"></i> ${course.level}</span>
                </div>
            </div>
        </div>

        <!-- Course Image - Full Width -->
        <div class="detail-image-full">
            <img src="images/courses/${course.image}" alt="${course.title}" />
        </div>

        <!-- Course Content - Full Width -->
        <div class="detail-content-full">
            <div class="detail-description-full">
                ${course.fullDesc}
            </div>
            <div class="detail-cta">
                <a href="contact.html" class="btn btn-primary btn-large">Enroll Now <i class="fas fa-arrow-right"></i></a>
                <a href="courses.html" class="btn btn-outline">Browse All Courses</a>
            </div>
        </div>
    </div>
`;

    wrapper.innerHTML = html;
});