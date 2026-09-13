/* ==============================================================
   teacher-detail.js – Star Shia Quran Academy (Teacher Profile)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- Teacher Data (same as teachers.js) -----
    const teachers = [
        {
    id: 'syed-abbas',
    name: 'Dr. Syed Abbas',
    title: 'Founder & Chief Scholar',
    image: 'founder.webp',
    bio: 'PhD in Islamic Studies with 20+ years of experience in teaching Quran and Shia theology.',
    fullBio: `
        <p><strong>Dr. Syed Abbas</strong> is a distinguished Islamic scholar with a PhD from the University of Qom, one of the most prestigious centers of <strong>Shia Quran</strong> scholarship. With over 20 years of dedicated teaching experience, he has become a leading figure in <strong>online Quran Academy</strong> education.</p>
        
        <p>As the founder of <strong>Star Shia Quran Academy</strong>, Dr. Abbas has pioneered innovative approaches to teaching the Quran and Islamic sciences online. His expertise spans Tafseer, Aqeedah, and Islamic Philosophy, and he has guided hundreds of students on their spiritual and academic journeys.</p>
        
        <p>Dr. Abbas is deeply committed to making authentic <strong>Shia Quran</strong> education accessible to students worldwide. His teaching methodology combines traditional Islamic scholarship with modern pedagogical techniques, ensuring that students not only learn but deeply understand and connect with the Quranic teachings.</p>
        
        <p>He has authored several articles on Tafseer and Islamic thought and is a sought-after speaker at international Islamic conferences. His vision for <strong>Star Shia Quran Academy</strong> is to create a global community of learners who embody the values of the Ahlul Bayt (AS).</p>
    `,
    experience: '20+ years',
    studentsTaught: '500+',
    specialties: ['Tafseer', 'Aqeedah', 'Islamic Philosophy', 'Hadith', 'Quranic Sciences']
},
        {
    id: 'hassan-raza',
    name: 'Maulana Hassan Raza',
    title: 'Principal & Head of Tafseer',
    image: 'principal.webp',
    bio: 'Renowned Tafseer scholar with Ijazah from Qom and 15 years of teaching experience.',
    fullBio: `
        <p><strong>Maulana Hassan Raza</strong> is a highly respected Tafseer scholar who completed his advanced studies at the Hawza Ilmiyya of Qom, where he earned his Ijazah in Tafseer and Quranic Sciences. As the Principal of <strong>Star Shia Quran Academy</strong>, he oversees all academic programs and ensures the highest quality of education.</p>
        
        <p>With over 15 years of teaching experience, Maulana Raza has developed a unique ability to make complex Quranic concepts accessible to students of all levels. His expertise in Tafseer is deeply rooted in the teachings of the Ahlul Bayt (AS), providing students with an authentic <strong>Shia Quran</strong> perspective.</p>
        
        <p>As Head of Tafseer, he leads a team of dedicated scholars in delivering comprehensive exegesis courses that explore the Quran's meanings, historical context, and contemporary relevance. His students consistently praise his clarity, patience, and ability to connect the Quran's timeless wisdom to modern challenges.</p>
        
        <p>Maulana Raza has also contributed to several Tafseer translations and is actively involved in interfaith dialogue, representing the rich tradition of <strong>Shia Quran</strong> scholarship on international platforms.</p>
    `,
    experience: '15 years',
    studentsTaught: '400+',
    specialties: ['Tafseer', 'Quranic Sciences', 'Arabic Grammar', 'Islamic History', 'Aqeedah']
},
        {
    id: 'zahra-naqvi',
    name: 'Ustadha Zahra Naqvi',
    title: 'Head Teacher – Women\'s Division',
    image: 'head-teacher.webp',
    bio: 'Specialist in Tajweed and Quranic Arabic with a focus on women\'s education.',
    fullBio: `
        <p><strong>Ustadha Zahra Naqvi</strong> is a certified Qaria with Ijazah in Tajweed and Quranic recitation. She holds advanced certifications in Quranic Arabic and has dedicated her career to empowering women through Islamic education at <strong>Star Shia Quran Academy</strong>.</p>
        
        <p>With over 12 years of teaching experience, Ustadha Naqvi has become a trusted name in women's <strong>online Quran Academy</strong> education. She specializes in making Quran learning accessible, enjoyable, and spiritually enriching for sisters of all ages and backgrounds.</p>
        
        <p>As the Head of the Women's Division, she has developed a comprehensive curriculum that addresses the unique learning needs of women, including courses in Tajweed, Quranic Arabic, and women's fiqh. Her classes are known for their warm, supportive atmosphere where students feel comfortable asking questions and progressing at their own pace.</p>
        
        <p>Ustadha Naqvi is passionate about nurturing the next generation of female <strong>Shia Quran</strong> scholars. She regularly conducts workshops and seminars on women's education in Islam and is a role model for many of her students.</p>
    `,
    experience: '12 years',
    studentsTaught: '300+',
    specialties: ['Tajweed', 'Quranic Arabic', 'Women\'s Education', 'Tafseer', 'Islamic Ethics']
},
        {
    id: 'hassan-jafri',
    name: 'Maulana Hassan Jafri',
    title: 'Tajweed & Qira\'at Specialist',
    image: 'teacher-2.webp',
    bio: 'Certified Qari with Ijazah in multiple Qira\'at and 12 years of teaching experience.',
    fullBio: `
        <p><strong>Maulana Hassan Jafri</strong> is a master of the ten Qira'at and a highly respected Qari at <strong>Star Shia Quran Academy</strong>. He holds multiple Ijazah in Quranic recitation and has trained under some of the most renowned Qaris of our time.</p>
        
        <p>With 12 years of dedicated teaching experience, Maulana Jafri has helped countless students improve their recitation skills. His meticulous approach to Tajweed and Qira'at ensures that every student achieves precision in their recitation, whether they are beginners or advanced learners.</p>
        
        <p>As the head of our <strong>online Quran Academy</strong> Tajweed department, he has developed a structured curriculum that covers everything from basic Makharij to advanced Qira'at. His teaching style is patient and encouraging, with a focus on practical application and regular feedback.</p>
        
        <p>Maulana Jafri is also a sought-after reciter who has led Taraweeh prayers and Quranic recitation events internationally. He is passionate about preserving the oral tradition of the Quran and passing it on to the next generation of <strong>Shia Quran</strong> reciters.</p>
    `,
    experience: '12 years',
    studentsTaught: '250+',
    specialties: ['Tajweed', 'Qira\'at', 'Recitation Improvement', 'Makharij', 'Quranic Pronunciation']
},
        {
    id: 'fatima-zaidi',
    name: 'Ustadha Fatima Zaidi',
    title: 'Arabic & Islamic Studies',
    image: 'teacher-3.webp',
    bio: 'Expert in Arabic grammar and Shia Fiqh with a focus on holistic Islamic education.',
    fullBio: `
        <p><strong>Ustadha Fatima Zaidi</strong> holds a Master's degree in Arabic Literature and has studied Shia Fiqh under prominent scholars at the Hawza Ilmiyya. She brings a wealth of knowledge and passion to her teaching at <strong>Star Shia Quran Academy</strong>.</p>
        
        <p>With over 10 years of teaching experience, Ustadha Zaidi has become one of the most beloved instructors in our <strong>online Quran Academy</strong>. She specializes in making Arabic grammar accessible and enjoyable, helping students unlock the linguistic beauty of the Quran.</p>
        
        <p>Her courses in Shia Fiqh are known for their clarity and practical application, making complex jurisprudential concepts understandable for students of all backgrounds. She believes in a holistic approach to Islamic education that integrates Quranic studies, Arabic, and Fiqh into a cohesive learning experience.</p>
        
        <p>Ustadha Zaidi is particularly passionate about teaching ethics (Akhlaq) and has developed a popular course that explores the moral teachings of the Ahlul Bayt (AS). Her students consistently praise her warm demeanor and ability to connect Islamic teachings to everyday life.</p>
    `,
    experience: '10 years',
    studentsTaught: '200+',
    specialties: ['Arabic Grammar', 'Shia Fiqh', 'Islamic Ethics', 'Tafseer', 'Quranic Arabic']
},
        {
    id: 'ali-ridha',
    name: 'Maulana Ali Ridha',
    title: 'Hadith & History Specialist',
    image: 'teacher-1.webp',
    bio: 'Expert in Shia Hadith sciences and Islamic history, with a focus on the Sirah of the Imams.',
    fullBio: `
        <p><strong>Maulana Ali Ridha</strong> is a distinguished scholar of Hadith sciences and Islamic history. He has spent years studying the rich tradition of Hadith literature and the historical narratives of the Ahlul Bayt (AS), making him an invaluable asset to <strong>Star Shia Quran Academy</strong>.</p>
        
        <p>With 14 years of teaching experience, Maulana Ridha has developed a reputation for bringing historical narratives to life. His courses on the Sirah of the Imams (AS) and Islamic history are among the most popular in our <strong>online Quran Academy</strong>, attracting students who want to understand the deep connections between history and contemporary Islamic practice.</p>
        
        <p>As the head of our Hadith department, he has designed a comprehensive curriculum that covers the science of Hadith, authentication, and the practical application of Hadith in Shia jurisprudence. His teaching style emphasizes critical thinking and encourages students to engage deeply with primary sources.</p>
        
        <p>Maulana Ridha is also actively involved in research and has published several articles on Hadith sciences and Islamic history. His passion for teaching and his ability to make complex historical concepts accessible has made him a favorite among advanced students.</p>
    `,
    experience: '14 years',
    studentsTaught: '280+',
    specialties: ['Hadith Sciences', 'Islamic History', 'Seerah', 'Imamate Studies', 'Quranic Sciences']
}
    ];

    // ----- Get teacher ID from URL -----
    const urlParams = new URLSearchParams(window.location.search);
    const teacherId = urlParams.get('id');

    const wrapper = document.getElementById('teacherDetailWrapper');

    if (!teacherId) {
        wrapper.innerHTML = `<p class="error">No teacher selected. <a href="teachers.html">Browse all teachers</a>.</p>`;
        return;
    }

    const teacher = teachers.find(t => t.id === teacherId);

    if (!teacher) {
        wrapper.innerHTML = `<p class="error">Teacher not found. <a href="teachers.html">View all teachers</a>.</p>`;
        return;
    }

    // Update page title & meta description dynamically
    document.title = `${teacher.name} – Star Shia Quran Academy`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `Learn about ${teacher.name}, ${teacher.title} at Star Shia Quran Academy. ${teacher.bio}`);
    }

    // Build the detail HTML
    const specialtiesHtml = teacher.specialties.map(s => `<li>${s}</li>`).join('');

const html = `
    <div class="teacher-detail-content">
        <!-- Teacher Header -->
        <div class="detail-header">
            <div class="detail-header-content">
                <span class="section-tag">Teacher</span>
                <h1>${teacher.name}</h1>
                <span class="detail-title">${teacher.title}</span>
                <div class="detail-meta">
                    <span><i class="fas fa-briefcase"></i> ${teacher.experience} experience</span>
                    <span><i class="fas fa-user-graduate"></i> ${teacher.studentsTaught} students taught</span>
                </div>
            </div>
        </div>

        <!-- Teacher Image - Full Width -->
        <div class="detail-image-full">
            <img src="images/teachers/${teacher.image}" alt="${teacher.name} – Shia Quran Academy Teacher" />
        </div>

        <!-- Teacher Content - Full Width -->
        <div class="detail-content-full">
            <div class="detail-description-full">
                <p>${teacher.fullBio}</p>
                
                <div class="detail-specialties">
                    <h3><i class="fas fa-check-circle"></i> Specialties</h3>
                    <ul>
                        ${specialtiesHtml}
                    </ul>
                </div>
                
               <!-- Additional Content Section - Teacher Specific -->
<div class="teacher-additional">
    <h3>Why Learn with ${teacher.name.split(' ').slice(1).join(' ')}?</h3>
    <p>
        ${teacher.id === 'syed-abbas' ? 
            'As the founder of <strong>Star Shia Quran Academy</strong>, Dr. Abbas brings unparalleled expertise and vision to every class. His deep understanding of Tafseer and Aqeedah makes him an exceptional guide for students seeking a profound connection with the Quran. With over 20 years of experience, he has mentored hundreds of students and continues to inspire a new generation of <strong>Shia Quran</strong> scholars.' :
        teacher.id === 'hassan-raza' ?
            'Maulana Raza\'s expertise in Tafseer and Quranic Sciences is unmatched. His ability to make complex Quranic concepts accessible and relevant makes him one of the most sought-after teachers at our <strong>online Quran Academy</strong>. With 15 years of experience, he has guided countless students in developing a deeper relationship with the Quran.' :
        teacher.id === 'zahra-naqvi' ?
            'Ustadha Naqvi creates a supportive and empowering learning environment that encourages women to excel in their Quranic studies. Her specialization in Tajweed and Quranic Arabic, combined with her focus on women\'s education, makes her a beloved teacher at <strong>Star Shia Quran Academy</strong>.' :
        teacher.id === 'hassan-jafri' ?
            'Maulana Jafri\'s expertise in multiple Qira\'at and Tajweed makes him the perfect guide for students who want to perfect their recitation. His patient and encouraging teaching style helps students of all levels achieve their recitation goals at our <strong>online Quran Academy</strong>.' :
        teacher.id === 'fatima-zaidi' ?
            'Ustadha Zaidi\'s passion for Arabic grammar and Islamic studies inspires students to develop a deeper appreciation for the Arabic language. Her holistic approach to education makes her a favorite among students seeking a well-rounded <strong>Shia Quran</strong> education.' :
        teacher.id === 'ali-ridha' ?
            'Maulana Ridha\'s deep knowledge of Hadith sciences and Islamic history brings the traditions of the Ahlul Bayt to life. His engaging teaching style makes him a popular teacher for advanced students at <strong>Star Shia Quran Academy</strong>.' :
            ''
        }
    </p>
    <ul>
        <li><strong>Personalized Learning:</strong> Tailored lessons to meet your individual needs and goals.</li>
        <li><strong>Authentic Teachings:</strong> Rooted in the teachings of the Ahlul Bayt (AS).</li>
        <li><strong>Interactive Sessions:</strong> Engaging discussions and practical application.</li>
        <li><strong>Flexible Scheduling:</strong> Classes that fit your busy lifestyle.</li>
    </ul>
</div>
`;

    wrapper.innerHTML = html;
});