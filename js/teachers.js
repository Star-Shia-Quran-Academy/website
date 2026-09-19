/* ==============================================================
   teachers.js – Star Shia Quran Academy (Teacher Listing)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- Teacher Data (6 teachers) -----
    const teachers = [
        {
            id: 'syed-abbas',
            name: 'Dr. Syed Abbas',
            title: 'Founder & Chief Scholar',
            image: 'founder.webp',
            bio: 'PhD in Islamic Studies with 20+ years of experience in teaching Quran and Shia theology.',
            fullBio: 'Dr. Syed Abbas is a renowned Islamic scholar with a PhD from the University of Qom. He has dedicated his life to teaching the Quran and Islamic sciences, with a special focus on Tafseer and Aqeedah. He is the founder of Star Shia Quran Academy and oversees all academic programs.',
            experience: '20+ years',
            studentsTaught: '500+',
            specialties: ['Tafseer', 'Aqeedah', 'Islamic Philosophy', 'Hadith']
        },
        {
            id: 'hassan-raza',
            name: 'Maulana Hassan Raza',
            title: 'Principal & Head of Tafseer',
            image: 'principal.webp',
            bio: 'Renowned Tafseer scholar with Ijazah from Qom and 15 years of teaching experience.',
            fullBio: 'Maulana Hassan Raza studied at the Hawza Ilmiyya of Qom and holds Ijazah in Tafseer. He is the principal of the academy and leads the Tafseer department. His deep knowledge of Quranic exegesis and his ability to connect with students make him a beloved teacher.',
            experience: '15 years',
            studentsTaught: '400+',
            specialties: ['Tafseer', 'Quranic Sciences', 'Arabic Grammar']
        },
        {
            id: 'zahra-naqvi',
            name: 'Ustadha Zahra Naqvi',
            title: 'Head Teacher – Women\'s Division',
            image: 'head-teacher.webp',
            bio: 'Specialist in Tajweed and Quranic Arabic with a focus on women\'s education.',
            fullBio: 'Ustadha Zahra Naqvi is a certified Qaria with Ijazah in Tajweed. She has been teaching for over 12 years and is passionate about empowering women through Islamic education. She leads the women\'s division and specializes in making Quran learning accessible for sisters.',
            experience: '12 years',
            studentsTaught: '300+',
            specialties: ['Tajweed', 'Quranic Arabic', 'Women\'s Education']
        },
        {
            id: 'hassan-jafri',
            name: 'Maulana Hassan Jafri',
            title: 'Tajweed & Qira\'at Specialist',
            image: 'teacher-2.webp',
            bio: 'Certified Qari with Ijazah in multiple Qira\'at and 12 years of teaching experience.',
            fullBio: 'Maulana Hassan Jafri is a master of the ten Qira\'at and has taught Tajweed to hundreds of students. He is known for his meticulous approach to pronunciation and his ability to correct even the smallest errors in recitation.',
            experience: '12 years',
            studentsTaught: '250+',
            specialties: ['Tajweed', 'Qira\'at', 'Recitation Improvement']
        },
        {
            id: 'fatima-zaidi',
            name: 'Ustadha Fatima Zaidi',
            title: 'Arabic & Islamic Studies',
            image: 'teacher-3.webp',
            bio: 'Expert in Arabic grammar and Shia Fiqh with a focus on holistic Islamic education.',
            fullBio: 'Ustadha Fatima Zaidi holds a Master\'s in Arabic Literature and has studied Fiqh under prominent scholars. She is dedicated to teaching Arabic as a key to understanding the Quran and Islamic texts. Her courses are known for their clarity and practical application.',
            experience: '10 years',
            studentsTaught: '200+',
            specialties: ['Arabic Grammar', 'Shia Fiqh', 'Islamic Ethics']
        },
        {
            id: 'ali-ridha',
            name: 'Maulana Ali Ridha',
            title: 'Hadith & History Specialist',
            image: 'teacher-1.webp',
            bio: 'Expert in Shia Hadith sciences and Islamic history, with a focus on the Sirah of the Imams.',
            fullBio: 'Maulana Ali Ridha has spent years studying the Hadith collections of the Ahlul Bayt and teaching Islamic history. He brings historical narratives to life, connecting the past to contemporary Islamic practice.',
            experience: '14 years',
            studentsTaught: '280+',
            specialties: ['Hadith Sciences', 'Islamic History', 'Seerah']
        }
    ];

    // ----- DOM refs -----
    const grid = document.getElementById('teachersGrid');

    // ----- Render function -----
    function renderTeachers() {
        let html = '';
        teachers.forEach(teacher => {
            html += `
                <div class="teacher-card">
                    <div class="teacher-image">
                        <img src="images/teachers/${teacher.image}" alt="${teacher.name} – Shia Quran Academy" loading="lazy" />
                    </div>
                    <div class="teacher-info">
                        <h3>${teacher.name}</h3>
                        <span class="teacher-title">${teacher.title}</span>
                        <p>${teacher.bio}</p>
                        <a href="teacher-detail.html?id=${teacher.id}" class="btn btn-outline btn-sm">View ${teacher.name} <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        });
        grid.innerHTML = html;
    }

    renderTeachers();
});