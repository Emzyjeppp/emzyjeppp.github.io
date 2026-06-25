// Minimalist & Clean Portfolio Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Premium Theme Switcher Engine
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themesList = ['dark', 'light', 'dracula', 'cyberpunk', 'nord', 'monokai', 'gemini'];

    const updateGithubStatsTheme = (theme) => {
        const statsCard = document.getElementById('github-stats-card');
        const langsCard = document.getElementById('github-langs-card');
        if (!statsCard || !langsCard) return;

        let githubTheme = 'react';
        let titleColor = '6366f1';
        let iconColor = '6366f1';
        let textColor = 'a1a1aa';

        if (theme === 'light') {
            githubTheme = 'default';
            titleColor = '4f46e5';
            iconColor = '4f46e5';
            textColor = '4b5563';
        } else if (theme === 'dracula') {
            githubTheme = 'dracula';
            titleColor = 'bd93f9';
            iconColor = 'bd93f9';
            textColor = 'f8f8f2';
        } else if (theme === 'cyberpunk') {
            githubTheme = 'tokyonight';
            titleColor = 'fcee0a';
            iconColor = '00f0ff';
            textColor = '00f0ff';
        } else if (theme === 'nord') {
            githubTheme = 'nord';
            titleColor = '88c0d0';
            iconColor = '88c0d0';
            textColor = 'd8dee9';
        } else if (theme === 'monokai') {
            githubTheme = 'monokai';
            titleColor = 'a6e22e';
            iconColor = 'a6e22e';
            textColor = 'f8f8f2';
        } else if (theme === 'gemini') {
            githubTheme = 'discord_theme';
            titleColor = 'a78bfa';
            iconColor = 'a78bfa';
            textColor = 'c7d2fe';
        }

        statsCard.src = `https://github-stats-extended.vercel.app/api?username=Emzyjeppp&show_icons=true&theme=${githubTheme}&hide_border=true&bg_color=00000000&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}`;
        langsCard.src = `https://github-stats-extended.vercel.app/api/top-langs/?username=Emzyjeppp&layout=compact&theme=${githubTheme}&hide_border=true&bg_color=00000000&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}`;
    };

    const setTheme = (theme) => {
        if (!themesList.includes(theme)) return;
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateGithubStatsTheme(theme);
    };

    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
        let nextIndex = (themesList.indexOf(currentTheme) + 1) % themesList.length;
        if (nextIndex === -1) nextIndex = 0;
        setTheme(themesList[nextIndex]);
    };

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // 2. Copy Email to Clipboard Feature
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyBtnText = document.getElementById('copy-btn-text');
    const emailAddress = 'jefryoconner49@gmail.com';

    if (copyEmailBtn && copyBtnText) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(emailAddress)
                .then(() => {
                    const originalText = copyBtnText.textContent;
                    copyBtnText.textContent = currentLang === 'en' ? 'Email Copied!' : 'Email Berhasil Disalin!';
                    copyEmailBtn.style.borderColor = 'var(--accent)';
                    copyEmailBtn.style.color = 'var(--accent)';
                    
                    setTimeout(() => {
                        copyBtnText.textContent = originalText;
                        copyEmailBtn.style.borderColor = '';
                        copyEmailBtn.style.color = '';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy email: ', err);
                });
        });
    }

    // 3. i18n Translation Engine & Dictionary
    let currentLang = localStorage.getItem('lang') || 'en';

    const translations = {
        en: {
            nav_services: 'Services',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_experience: 'Experience',
            nav_certifications: 'Certifications',
            nav_contact: 'Contact',
            hero_badge: 'Informatics Student & Developer',
            hero_subtitle: 'Informatics (S1) Student at Universitas Teknologi Digital Indonesia (UTDI). Focusing on backend systems, data analytics, and machine learning solutions.',
            hero_status: 'Currently studying at Universitas Teknologi Digital Indonesia - Semester 2 (S1)',
            hero_btn_projects: 'View Projects',
            hero_btn_cv: 'View CV (ATS)',
            services_title: 'What I Do',
            service1_desc: 'Designing backend architecture, working with databases, and building robust scripts using Python.',
            service2_title: 'Web & Mobile Dev',
            service2_desc: 'Building responsive web solutions and mobile-first applications based on clean design principles and business logic.',
            service3_title: 'Automation Scripts',
            service3_desc: 'Automating workflows, file management, and system tasks with custom Windows Batch files and automation tools.',
            skills_title: 'Skills & Focus',
            skills_core_title: 'Core Technologies',
            skills_focus_title: 'Current Focus',
            focus1_title: 'Cybersecurity & Threat Intelligence',
            focus1_desc: 'Studying vulnerability assessments, cryptography, and network security protocols.',
            focus2_title: 'Data Visualization & Analytics',
            focus2_desc: 'Transforming complex datasets into clear, actionable visual dashboards and charts.',
            focus3_title: 'Native Android Development',
            focus3_desc: 'Continuing mobile learning with modern declarative UI using Jetpack Compose.',
            projects_title: 'Selected Work',
            project1_desc: 'Modern clipboard history manager built with Python and CustomTkinter.',
            project2_desc: 'Pocket money tracking prototype integrated with an interactive map to locate budget-friendly student dining spots.',
            project3_desc: 'Collection of useful Windows Batch utilities for cleaning, organizing, and automation.',
            project4_desc: 'Web-based public aspiration and feedback system for dance studios in Yogyakarta. (D3 Final Project)',
            experience_title: 'Experience & Education',
            exp1_degree: 'Bachelor\'s Degree (S1) in Informatika - Rekognisi Pembelajaran Lampau (RPL)',
            exp1_desc: 'Advancing computer science fundamentals, focusing on intelligent systems, distributed computing, and data analytics. Maintaining academic excellence with a strong interest in machine learning workflows.',
            verify_pddikti: 'Verify on PDDIKTI',
            coursework_completed: 'Completed Coursework:',
            coursework_current: 'Current Semester:',
            exp2_title: 'Independent Scripting & Automation Projects',
            exp2_subtitle: 'Self-employed Developer',
            exp2_desc: 'Developing diverse software projects across multiple platforms, including lightweight desktop GUI utilities (Python/CustomTkinter), system command-line automation scripts (Batchfile), native Android mobile applications (Kotlin/Jetpack Compose), and responsive web platforms (PHP/MySQL) like unidaily-asisten-mahasiswa and Pengaduan-Fasilitas-Kampus for coursework and personal exploration.',
            view_location: 'View Location',
            exp3_subtitle: 'IT & Multimedia Intern',
            exp3_desc: 'Supported administrative planning, coordinated inter-departmental programs, and managed multimedia content. Designed the official "Sa\'ijaan Unggul" rice seed logo, edited departmental activity videos, configured public videotron displays, and handled document archiving.',
            exp4_degree: 'Associate Degree (D3) in Application Software Engineering (RPLA) — A.Md.Kom.',
            exp4_desc: 'Focused on the design, development, and implementation of business-oriented web and mobile information systems. Mastered database modeling, software engineering principles, and human-computer interaction workflows. Final Project: Aspirasi Masyarakat Terhadap Sanggar Tari Di-Yogyakarta Dengan Menggunakan Framework Bootstrap (Publications).',
            coursework_core: 'Core Coursework:',
            exp5_subtitle: 'Administration & IT Intern (Vocational PKL)',
            exp5_desc: 'Assisted the General Affairs Head (Kabag Sium) in administrative operations. Managed incoming and outgoing official correspondence, recorded document logging numbers, and streamlined general clerical office workflows.',
            exp6_subtitle: 'Vocational High School Diploma in Rekayasa Perangkat Lunak (Software Engineering)',
            exp6_desc: 'Introduced to computer science and software development fundamentals. Developed initial coding projects, database schemas, and static website designs using HTML, CSS, and basic programming languages.',
            certifications_title: 'Certifications',
            cert_btn_view: 'View',
            cert_btn_verify: 'Verify',
            terminal_title: 'Dev Sandbox',
            term_welcome: 'Welcome to Jeppp\'s Interactive Terminal.',
            term_help_prompt: 'Type help to view all available commands.',
            contact_title: 'Let\'s Connect',
            contact_text: 'I\'m open to collaborations or conversations. Feel free to connect with me on social media or copy my email address.',
            contact_btn_email: 'Send an Email',
            contact_btn_copy: 'Copy Email Address',
            footer_rights: 'All rights reserved.',
            modal_features_title: 'Key Accomplishments & Features:',
            modal_btn_repo: 'View Repository'
        },
        id: {
            nav_services: 'Layanan',
            nav_skills: 'Keahlian',
            nav_projects: 'Proyek',
            nav_experience: 'Pengalaman',
            nav_certifications: 'Sertifikasi',
            nav_contact: 'Kontak',
            hero_badge: 'Mahasiswa Informatika & Developer',
            hero_subtitle: 'Mahasiswa Informatika (S1) di Universitas Teknologi Digital Indonesia (UTDI). Berfokus pada sistem backend, analisis data, dan solusi machine learning.',
            hero_status: 'Saat ini kuliah di Universitas Teknologi Digital Indonesia - Semester 2 (S1)',
            hero_btn_projects: 'Lihat Proyek',
            hero_btn_cv: 'Lihat CV (ATS)',
            services_title: 'Fokus Saya',
            service1_desc: 'Merancang arsitektur backend, mengelola database, dan menulis skrip otomatisasi yang handal menggunakan Python.',
            service2_title: 'Dev Web & Mobile',
            service2_desc: 'Membangun aplikasi web responsif dan aplikasi mobile berbasis prinsip desain bersih dan logika bisnis.',
            service3_title: 'Skrip Otomatisasi',
            service3_desc: 'Mengotomatiskan alur kerja, pengelolaan berkas, dan tugas sistem dengan Windows Batch file kustom dan alat otomatisasi.',
            skills_title: 'Keahlian & Fokus',
            skills_core_title: 'Teknologi Utama',
            skills_focus_title: 'Fokus Saat Ini',
            focus1_title: 'Keamanan Siber & Intelijen Ancaman',
            focus1_desc: 'Mempelajari penilaian kerentanan siber, kriptografi, dan protokol keamanan jaringan.',
            focus2_title: 'Visualisasi & Analisis Data',
            focus2_desc: 'Mengolah kumpulan data kompleks menjadi dasbor visual dan grafik interaktif yang mudah dipahami.',
            focus3_title: 'Pengembangan Android Native',
            focus3_desc: 'Melanjutkan pembelajaran aplikasi mobile dengan UI deklaratif modern menggunakan Jetpack Compose.',
            projects_title: 'Proyek Pilihan',
            project1_desc: 'Pengelola riwayat clipboard modern yang dibangun dengan Python dan CustomTkinter.',
            project2_desc: 'Prototipe pencatat anggaran saku mahasiswa yang terintegrasi dengan peta interaktif untuk mencari warung makan murah.',
            project3_desc: 'Kumpulan utilitas Windows Batch yang berguna untuk pembersihan sistem, pengorganisasian berkas, dan otomatisasi.',
            project4_desc: 'Sistem umpan balik dan aspirasi publik berbasis web untuk sanggar tari di Yogyakarta. (Tugas Akhir D3)',
            experience_title: 'Pengalaman & Pendidikan',
            exp1_degree: 'Sarjana (S1) Informatika - Rekognisi Pembelajaran Lampau (RPL)',
            exp1_desc: 'Memperdalam dasar-dasar ilmu komputer, berfokus pada sistem cerdas, komputasi terdistribusi, dan analisis data. Mempertahankan keunggulan akademik dengan minat besar pada alur kerja machine learning.',
            verify_pddikti: 'Verifikasi di PDDIKTI',
            coursework_completed: 'Mata Kuliah Selesai:',
            coursework_current: 'Semester Sekarang:',
            exp2_title: 'Proyek Otomatisasi & Skrip Independen',
            exp2_subtitle: 'Pengembang Mandiri',
            exp2_desc: 'Mengembangkan berbagai proyek perangkat lunak di berbagai platform, termasuk utilitas desktop GUI ringan (Python/CustomTkinter), skrip otomatisasi terminal sistem (Batchfile), aplikasi mobile Android native (Kotlin/Jetpack Compose), dan platform web responsif (PHP/MySQL) seperti unidaily-asisten-mahasiswa dan Pengaduan-Fasilitas-Kampus untuk tugas kuliah maupun eksplorasi pribadi.',
            view_location: 'Lihat Lokasi',
            exp3_subtitle: 'Magang IT & Multimedia',
            exp3_desc: 'Membantu perencanaan administratif, koordinasi program antardepartemen, dan mengelola konten multimedia. Mendesain logo resmi benih padi "Sa\'ijaan Unggul", mengedit video kegiatan dinas, mengonfigurasi videotron publik, dan mengelola kearsipan dokumen.',
            exp4_degree: 'Diploma Tiga (D3) Rekayasa Perangkat Lunak Aplikasi (RPLA) — A.Md.Kom.',
            exp4_desc: 'Berfokus pada perancangan, pengembangan, dan implementasi sistem informasi web dan mobile berorientasi bisnis. Menguasai pemodelan database, prinsip rekayasa perangkat lunak, dan alur kerja interaksi manusia-komputer. Tugas Akhir: Aspirasi Masyarakat Terhadap Sanggar Tari Di-Yogyakarta Dengan Menggunakan Framework Bootstrap (Publikasi).',
            coursework_core: 'Mata Kuliah Utama:',
            exp5_subtitle: 'Magang Administrasi & IT (PKL SMK)',
            exp5_desc: 'Membantu Kepala Urusan Umum (Kabag Sium) dalam operasi administrasi. Mengelola surat masuk dan keluar resmi, mencatat nomor agenda dokumen, dan merampingkan alur kerja kearsipan kantor umum.',
            exp6_subtitle: 'Diploma SMK Rekayasa Perangkat Lunak',
            exp6_desc: 'Diperkenalkan pada dasar-dasar ilmu komputer dan pengembangan perangkat lunak. Mengembangkan proyek pengkodean awal, skema database, dan desain situs web statis menggunakan HTML, CSS, dan bahasa pemrograman dasar.',
            certifications_title: 'Sertifikasi',
            cert_btn_view: 'Lihat',
            cert_btn_verify: 'Verifikasi',
            terminal_title: 'Terminal Sandbox',
            term_welcome: 'Selamat datang di Terminal Interaktif Jeppp.',
            term_help_prompt: 'Ketik help untuk melihat semua perintah yang tersedia.',
            contact_title: 'Mari Terhubung',
            contact_text: 'Saya terbuka untuk kolaborasi atau diskusi. Silakan hubungi saya melalui media sosial atau salin alamat email saya.',
            contact_btn_email: 'Kirim Email',
            contact_btn_copy: 'Salin Alamat Email',
            footer_rights: 'Hak cipta dilindungi undang-undang.',
            modal_features_title: 'Pencapaian & Fitur Utama:',
            modal_btn_repo: 'Lihat Repositori'
        }
    };

    const projectsData = {
        clipboard: {
            title: 'clipboard-manager',
            tags: ['Python', 'CustomTkinter', 'GUI'],
            en: {
                description: 'Modern clipboard history manager built with Python and CustomTkinter. It runs silently in the background and saves your clipboard logs securely, allowing you to access previously copied items via a beautiful desktop interface.',
                features: [
                    'Lightweight background process running in system tray.',
                    'Responsive GUI built using CustomTkinter components.',
                    'Persistent storage keeping track of text logs.',
                    'Instant click-to-copy back to clipboard functionality.'
                ]
            },
            id: {
                description: 'Aplikasi pengelola riwayat clipboard modern yang dibangun menggunakan Python dan CustomTkinter. Aplikasi berjalan di latar belakang dan menyimpan riwayat salinan teks Anda dengan aman, sehingga dapat diakses kembali melalui antarmuka desktop yang indah.',
                features: [
                    'Proses latar belakang yang ringan dan berjalan di system tray.',
                    'GUI responsif yang dibangun dengan komponen CustomTkinter.',
                    'Penyimpanan persisten untuk mencatat log riwayat teks.',
                    'Fungsi klik instan untuk menyalin kembali item ke clipboard.'
                ]
            },
            repo: 'https://github.com/Emzyjeppp/clipboard-manager'
        },
        uangku: {
            title: 'Uangku-HematMahasiswa',
            tags: ['HTML', 'CSS', 'JavaScript'],
            en: {
                description: 'A frontend prototype project created for a Human-Computer Interaction course. It provides budget tracking utilities tailored for college students, integrated with an interactive map mockup to search for cheap student dining spots (warung murah) around campus.',
                features: [
                    'Clean semantic interface designed with a focus on usability.',
                    'Pocket money budget calculator and spending manager.',
                    'Interactive maps integration for locating budget-friendly food stalls.',
                    'Full mobile responsiveness.'
                ]
            },
            id: {
                description: 'Proyek prototipe frontend yang dibuat untuk mata kuliah Interaksi Manusia & Komputer. Menyediakan alat pencatatan anggaran belanja yang disesuaikan untuk mahasiswa, terintegrasi dengan mockup peta interaktif untuk mencari warung makan murah di sekitar kampus.',
                features: [
                    'Antarmuka semantik bersih yang dirancang dengan fokus pada kemudahan penggunaan.',
                    'Kalkulator anggaran uang saku dan pengelola pengeluaran harian.',
                    'Integrasi peta interaktif untuk mencari lokasi warung makan ramah kantong mahasiswa.',
                    'Responsif penuh pada perangkat mobile.'
                ]
            },
            repo: 'https://github.com/Emzyjeppp/Uangku-HematMahasiswa'
        },
        wintools: {
            title: 'windows-tools',
            tags: ['Batchfile', 'Windows Scripting'],
            en: {
                description: 'A robust utility toolbox written in Windows Batch command lines. It automates common maintenance chores, manages quick directory folder actions, cleans trash folders, and automates environment preparation.',
                features: [
                    'Folder lock and unlock scripting utility.',
                    'System temp and prefetch cache cleaner script.',
                    'One-click organization utility mapping files into directories.',
                    'Safe shell execution using native Windows command lines.'
                ]
            },
            id: {
                description: 'Kotak peralatan utilitas tangguh yang ditulis dengan baris perintah Windows Batch. Berguna untuk mengotomatiskan tugas pemeliharaan sistem harian, mengelola aksi folder direktori cepat, membersihkan folder sampah temp, dan mengotomatiskan penyiapan lingkungan dev.',
                features: [
                    'Utilitas skrip untuk mengunci dan membuka kunci folder.',
                    'Skrip pembersih tembolok (cache) sistem temp dan prefetch.',
                    'Utilitas pengatur sekali klik untuk merapikan berkas ke dalam direktori.',
                    'Eksekusi shell yang aman menggunakan baris perintah native Windows.'
                ]
            },
            repo: 'https://github.com/Emzyjeppp/windows-tools'
        },
        aspirasi: {
            title: 'aspirasi-sanggar-tari',
            tags: ['PHP', 'MySQL', 'Bootstrap', 'Web'],
            en: {
                description: 'A web-based public feedback and aspiration system for dance studios in Yogyakarta. Developed as a D3 Final Project, it aims to enhance community engagement, improve administrative transparency, and speed up responsiveness from studio administrators.',
                features: [
                    'Web-based community aspiration and complaint management system.',
                    'MySQL database integration for structured recording and tracking of public feedback.',
                    'Responsive interface powered by the Bootstrap framework for mobile accessibility.',
                    'Dedicated admin dashboard for managing and responding to public aspirations.'
                ]
            },
            id: {
                description: 'Sistem aspirasi dan umpan balik publik berbasis web untuk sanggar tari di Yogyakarta. Dikembangkan sebagai Tugas Akhir D3, bertujuan meningkatkan keterlibatan komunitas, transparansi administrasi, dan mempercepat respons dari administrator sanggar.',
                features: [
                    'Sistem pengelolaan pengaduan dan aspirasi komunitas berbasis web.',
                    'Integrasi database MySQL untuk pencatatan dan pelacakan umpan balik publik secara terstruktur.',
                    'Antarmuka responsif ditenagai oleh framework Bootstrap untuk aksesibilitas mobile.',
                    'Dashboard admin khusus untuk mengelola dan membalas aspirasi masyarakat.'
                ]
            },
            repo: 'https://eprints.utdi.ac.id/10601/'
        }
    };

    const setLanguage = (lang) => {
        if (!translations[lang]) return;
        currentLang = lang;
        htmlElement.setAttribute('lang', lang);
        localStorage.setItem('lang', lang);

        // Update all data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // If it is copy-email btn and has temporary text, skip updating it or let it update
                if (el.id === 'copy-btn-text' && el.textContent === 'Email Copied!') return;
                if (el.id === 'copy-btn-text' && el.textContent === 'Email Berhasil Disalin!') return;
                el.textContent = translations[lang][key];
            }
        });

        // Update toggle button text
        const langToggleText = document.querySelector('#lang-toggle .lang-text');
        if (langToggleText) {
            langToggleText.textContent = lang.toUpperCase();
        }
    };

    // Toggle Language on button click
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'en' ? 'id' : 'en';
            setLanguage(nextLang);
        });
    }

    // Set initial language
    setLanguage(currentLang);

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDesc = document.getElementById('modal-desc');
    const modalFeaturesList = document.getElementById('modal-features-list');
    const modalRepoLink = document.getElementById('modal-repo-link');
    const modalCloseBtn = modal ? modal.querySelector('.modal-close') : null;
    const modalOverlay = modal ? modal.querySelector('.modal-overlay') : null;

    const openModal = (projectKey) => {
        const data = projectsData[projectKey];
        if (!data || !modal) return;

        // Set text values
        modalTitle.textContent = data.title;
        modalDesc.textContent = data[currentLang].description;
        modalRepoLink.setAttribute('href', data.repo);

        // Populate tags
        modalTags.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            modalTags.appendChild(span);
        });

        // Populate features
        modalFeaturesList.innerHTML = '';
        data[currentLang].features.forEach(feat => {
            const li = document.createElement('li');
            li.textContent = feat;
            modalFeaturesList.appendChild(li);
        });

        // Show Modal
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Disable page scrolling
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Enable page scrolling
    };

    // Card click events
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            openModal(projectKey);
        });
    });

    // Close click events
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Escape key press to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // 4. Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNavLink = () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);

    // 5. Interactive Dev Terminal Sandbox
    const terminalContainer = document.querySelector('.terminal-container');
    const terminalBody = document.getElementById('terminal-body');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    const terminalInputDisplay = document.getElementById('terminal-input-display');
    const terminalCursor = document.getElementById('terminal-cursor');

    let commandHistory = [];
    let historyIndex = -1;

    if (terminalContainer && terminalInput && terminalBody) {
        // Snake Game Variables
        let isPlayingSnake = false;
        let snakeGameLoop = null;
        let snakeCanvas, ctx;
        let snake = [];
        let food = {};
        let dx = 12;
        let dy = 0;
        let score = 0;
        const gridCellSize = 12;
        const gridCount = 20;

        // Hoisted function declaration to avoid ReferenceError in startSnakeGame
        function appendTerminalLine(text, className = 'system-out') {
            const line = document.createElement('div');
            line.className = `terminal-output-line ${className}`;
            line.textContent = text;
            terminalOutput.appendChild(line);
        }

        const startSnakeGame = () => {
            isPlayingSnake = true;
            terminalBody.classList.add('game-active');
            terminalCursor.style.display = 'none';
            terminalInputDisplay.textContent = 'Playing Snake... (Press ESC to exit)';
            
            appendTerminalLine('--- RETRO ARCADE SNEK ---', 'diag-out');
            appendTerminalLine('Control using Arrow Keys or WASD. Eat red dots. Press ESC to quit.', 'system-out');

            const canvasContainer = document.createElement('div');
            canvasContainer.id = 'snake-container';
            canvasContainer.style.display = 'flex';
            canvasContainer.style.flexDirection = 'column';
            canvasContainer.style.alignItems = 'center';
            canvasContainer.style.margin = '1rem 0';
            canvasContainer.innerHTML = `
                <div style="color: #22c55e; font-family: monospace; font-size: 1rem; margin-bottom: 0.5rem; display: flex; gap: 2rem;">
                    <span>SCORE: <span id="snake-score">0</span></span>
                    <span>HIGH SCORE: <span id="snake-highscore">${localStorage.getItem('snake_highscore') || 0}</span></span>
                </div>
                <canvas id="snake-canvas" width="240" height="240" style="border: 1px solid var(--border-color); background-color: #050505; border-radius: 4px;"></canvas>
            `;
            terminalOutput.appendChild(canvasContainer);

            snakeCanvas = document.getElementById('snake-canvas');
            ctx = snakeCanvas.getContext('2d');
            
            snake = [
                {x: 120, y: 120},
                {x: 108, y: 120},
                {x: 96, y: 120}
            ];
            dx = 12;
            dy = 0;
            score = 0;
            placeFood();

            terminalInput.focus();
            
            setTimeout(() => {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }, 20);

            if (snakeGameLoop) clearInterval(snakeGameLoop);
            snakeGameLoop = setInterval(gameStep, 100);
        };

        const placeFood = () => {
            food.x = Math.floor(Math.random() * gridCount) * gridCellSize;
            food.y = Math.floor(Math.random() * gridCount) * gridCellSize;
            snake.forEach(part => {
                if (part.x === food.x && part.y === food.y) placeFood();
            });
        };

        const gameStep = () => {
            const head = {x: snake[0].x + dx, y: snake[0].y + dy};

            if (head.x < 0 || head.x >= 240 || head.y < 0 || head.y >= 240 || checkSelfCollision(head)) {
                gameOver();
                return;
            }

            snake.unshift(head);

            const ateFood = head.x === food.x && head.y === food.y;
            if (ateFood) {
                score += 10;
                document.getElementById('snake-score').textContent = score;
                const highScore = parseInt(localStorage.getItem('snake_highscore') || '0', 10);
                if (score > highScore) {
                    localStorage.setItem('snake_highscore', score);
                    document.getElementById('snake-highscore').textContent = score;
                }
                placeFood();
            } else {
                snake.pop();
            }

            drawGame();
        };

        const checkSelfCollision = (head) => {
            for (let i = 1; i < snake.length; i++) {
                if (snake[i].x === head.x && snake[i].y === head.y) return true;
            }
            return false;
        };

        const drawGame = () => {
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, 240, 240);

            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(food.x + 6, food.y + 6, 5, 0, 2 * Math.PI);
            ctx.fill();

            snake.forEach((part, index) => {
                ctx.fillStyle = index === 0 ? '#22c55e' : '#166534';
                ctx.fillRect(part.x + 1, part.y + 1, 10, 10);
            });
        };

        const gameOver = () => {
            clearInterval(snakeGameLoop);
            snakeGameLoop = null;

            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(0, 0, 240, 240);

            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 1.25rem monospace';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', 120, 80);

            ctx.fillStyle = '#a1a1aa';
            ctx.font = '0.9rem monospace';
            ctx.fillText(`Final Score: ${score}`, 120, 115);
            ctx.fillText('Press ENTER to replay', 120, 150);
            ctx.fillText('Press ESC to exit', 120, 175);
        };

        const exitSnakeGame = () => {
            isPlayingSnake = false;
            terminalBody.classList.remove('game-active');
            if (snakeGameLoop) {
                clearInterval(snakeGameLoop);
                snakeGameLoop = null;
            }
            terminalCursor.style.display = '';
            terminalInput.value = '';
            terminalInputDisplay.textContent = '';
            appendTerminalLine('Returned to console.', 'system-out');
            setTimeout(() => {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }, 20);
        };

        terminalBody.addEventListener('click', () => {
            terminalInput.focus();
        });

        terminalInput.addEventListener('input', () => {
            if (!isPlayingSnake) {
                terminalInputDisplay.textContent = terminalInput.value;
            }
        });

        terminalInput.addEventListener('blur', () => {
            terminalCursor.classList.add('blurred');
        });
        terminalInput.addEventListener('focus', () => {
            terminalCursor.classList.remove('blurred');
        });

        terminalInput.addEventListener('keydown', (e) => {
            if (isPlayingSnake) {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    exitSnakeGame();
                    return;
                }
                
                if (!snakeGameLoop) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const oldContainer = document.getElementById('snake-container');
                        if (oldContainer) oldContainer.remove();
                        startSnakeGame();
                    }
                    return;
                }

                if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
                    e.preventDefault();
                    if (dy === 0) { dx = 0; dy = -gridCellSize; }
                } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
                    e.preventDefault();
                    if (dy === 0) { dx = 0; dy = gridCellSize; }
                } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                    e.preventDefault();
                    if (dx === 0) { dx = -gridCellSize; dy = 0; }
                } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                    e.preventDefault();
                    if (dx === 0) { dx = gridCellSize; dy = 0; }
                }
                return;
            }

            if (e.key === 'Enter') {
                const fullCommand = terminalInput.value.trim();
                
                appendTerminalLine(`guest@jeppp-terminal:~$ ${fullCommand}`, 'cmd-echo');
                
                if (fullCommand) {
                    if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== fullCommand) {
                        commandHistory.push(fullCommand);
                    }
                }
                historyIndex = -1;
                
                if (fullCommand) {
                    processCommand(fullCommand);
                }
                
                terminalInput.value = '';
                terminalInputDisplay.textContent = '';
                
                setTimeout(() => {
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                }, 10);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (commandHistory.length > 0) {
                    if (historyIndex === -1) {
                        historyIndex = commandHistory.length - 1;
                    } else if (historyIndex > 0) {
                        historyIndex--;
                    }
                    terminalInput.value = commandHistory[historyIndex];
                    terminalInputDisplay.textContent = commandHistory[historyIndex];
                    
                    setTimeout(() => {
                        terminalInput.selectionStart = terminalInput.selectionEnd = terminalInput.value.length;
                    }, 0);
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex !== -1) {
                    if (historyIndex < commandHistory.length - 1) {
                        historyIndex++;
                        terminalInput.value = commandHistory[historyIndex];
                        terminalInputDisplay.textContent = commandHistory[historyIndex];
                    } else {
                        historyIndex = -1;
                        terminalInput.value = '';
                        terminalInputDisplay.textContent = '';
                    }
                }
            }
        });

        const processCommand = (fullCmd) => {
            const tokens = fullCmd.trim().split(/\s+/);
            const cmd = tokens[0].toLowerCase();
            const args = tokens.slice(1);

            if (currentLang === 'en') {
                switch (cmd) {
                    case 'help':
                        appendTerminalLine('Available commands:', 'system-out');
                        appendTerminalLine('  about     - Print a brief bio', 'system-out');
                        appendTerminalLine('  projects  - List repository highlights', 'system-out');
                        appendTerminalLine('  skills    - Show core programming skill set', 'system-out');
                        appendTerminalLine('  contact   - Show contact and social links', 'system-out');
                        appendTerminalLine('  quote     - Print my favorite motivational quote', 'system-out');
                        appendTerminalLine('  theme     - Cycle themes or set one (e.g., "theme dracula")', 'system-out');
                        appendTerminalLine('  play      - Play a retro arcade Snake game!', 'diag-out');
                        appendTerminalLine('  cv        - Open printable ATS CV in a new tab', 'system-out');
                        appendTerminalLine('  github    - Open GitHub profile in a new tab', 'system-out');
                        appendTerminalLine('  linkedin  - Open LinkedIn profile in a new tab', 'system-out');
                        appendTerminalLine('  instagram - Open Instagram profile in a new tab', 'system-out');
                        appendTerminalLine('  clear     - Clear terminal screen', 'system-out');
                        appendTerminalLine('  help      - Show this help message', 'system-out');
                        break;
                    case 'about':
                        appendTerminalLine('Muhammad Jepri, A.Md.Kom.', 'system-out');
                        appendTerminalLine('Informatics S1 Student at UTDI Yogyakarta.', 'system-out');
                        appendTerminalLine('Specializing in Backend Systems, Python Automation, and Native Android.', 'system-out');
                        break;
                    case 'projects':
                        appendTerminalLine('- clipboard-manager (Python, CustomTkinter)', 'system-out');
                        appendTerminalLine('- windows-tools (Batchfile automation)', 'system-out');
                        appendTerminalLine('- Uangku-HematMahasiswa (Web prototype)', 'system-out');
                        appendTerminalLine('- aspirasi-sanggar-tari (D3 Final Project - Bootstrap/PHP/MySQL)', 'system-out');
                        appendTerminalLine('- unidaily-asisten-mahasiswa (Web client/server)', 'system-out');
                        appendTerminalLine('- Pengaduan-Fasilitas-Kampus (PHP/MySQL)', 'system-out');
                        break;
                    case 'skills':
                        appendTerminalLine('Core Programming Skills:', 'system-out');
                        appendTerminalLine('  - Backend: Python, PHP, Kotlin, Batchfile Scripting', 'system-out');
                        appendTerminalLine('  - Frontend/Mobile: HTML5, CSS3, JavaScript, Jetpack Compose, Bootstrap', 'system-out');
                        appendTerminalLine('  - Databases & Tools: MySQL, Git, GitHub, System Admin', 'system-out');
                        break;
                    case 'contact':
                        appendTerminalLine('Contact Details:', 'system-out');
                        appendTerminalLine('  - Email: jefryoconner49@gmail.com', 'system-out');
                        appendTerminalLine('  - Phone: 082251090558', 'system-out');
                        appendTerminalLine('  - GitHub: github.com/Emzyjeppp', 'system-out');
                        appendTerminalLine('  - LinkedIn: linkedin.com/in/muhammadjepri', 'system-out');
                        break;
                    case 'quote':
                    case 'quotes':
                    case 'motivasi':
                    case 'kata':
                        appendTerminalLine('"Tidak ada kata terlambat untuk memulai, semua orang punya garis start masing-masing."', 'diag-out');
                        break;
                    case 'clear':
                        terminalOutput.innerHTML = '';
                        break;
                    case 'theme':
                        if (args.length > 0) {
                            const targetTheme = args[0].toLowerCase();
                            if (themesList.includes(targetTheme)) {
                                appendTerminalLine(`Setting theme to "${targetTheme}"...`, 'system-out');
                                setTheme(targetTheme);
                            } else {
                                appendTerminalLine(`Theme "${targetTheme}" not found. Available: ${themesList.join(', ')}`, 'error-out');
                            }
                        } else {
                            appendTerminalLine('Cycling website theme...', 'system-out');
                            toggleTheme();
                        }
                        break;
                    case 'play':
                    case 'snake':
                    case 'game':
                        startSnakeGame();
                        break;
                    case 'cv':
                        appendTerminalLine('Opening ATS CV in new tab...', 'system-out');
                        window.open('cv.html', '_blank');
                        break;
                    case 'github':
                        appendTerminalLine('Opening GitHub profile...', 'system-out');
                        window.open('https://github.com/Emzyjeppp', '_blank');
                        break;
                    case 'linkedin':
                        appendTerminalLine('Opening LinkedIn profile...', 'system-out');
                        window.open('https://www.linkedin.com/in/muhammadjepri/', '_blank');
                        break;
                    case 'instagram':
                        appendTerminalLine('Opening Instagram...', 'system-out');
                        window.open('https://www.instagram.com/emzyjeppp/', '_blank');
                        break;
                    default:
                        appendTerminalLine(`Command not found: ${cmd}. Type 'help' for options.`, 'error-out');
                }
            } else {
                // Indonesian output
                switch (cmd) {
                    case 'help':
                        appendTerminalLine('Perintah yang tersedia:', 'system-out');
                        appendTerminalLine('  about     - Menampilkan bio singkat', 'system-out');
                        appendTerminalLine('  projects  - Menampilkan daftar repositori utama', 'system-out');
                        appendTerminalLine('  skills    - Menampilkan keahlian pemrograman utama', 'system-out');
                        appendTerminalLine('  contact   - Menampilkan kontak & tautan sosial', 'system-out');
                        appendTerminalLine('  quote     - Menampilkan kutipan motivasi favorit saya', 'system-out');
                        appendTerminalLine('  theme     - Berganti tema atau atur tema (contoh: "theme dracula")', 'system-out');
                        appendTerminalLine('  play      - Mainkan game arcade retro Snake!', 'diag-out');
                        appendTerminalLine('  cv        - Buka ATS CV siap cetak di tab baru', 'system-out');
                        appendTerminalLine('  github    - Buka profil GitHub di tab baru', 'system-out');
                        appendTerminalLine('  linkedin  - Buka profil LinkedIn di tab baru', 'system-out');
                        appendTerminalLine('  instagram - Buka Instagram di tab baru', 'system-out');
                        appendTerminalLine('  clear     - Bersihkan layar terminal', 'system-out');
                        appendTerminalLine('  help      - Menampilkan pesan bantuan ini', 'system-out');
                        break;
                    case 'about':
                        appendTerminalLine('Muhammad Jepri, A.Md.Kom.', 'system-out');
                        appendTerminalLine('Mahasiswa Informatika S1 di UTDI Yogyakarta.', 'system-out');
                        appendTerminalLine('Spesialisasi di Sistem Backend, Otomatisasi Python, dan Android Native.', 'system-out');
                        break;
                    case 'projects':
                        appendTerminalLine('- clipboard-manager (Python, CustomTkinter)', 'system-out');
                        appendTerminalLine('- windows-tools (Otomatisasi Batchfile)', 'system-out');
                        appendTerminalLine('- Uangku-HematMahasiswa (Prototipe Web)', 'system-out');
                        appendTerminalLine('- aspirasi-sanggar-tari (Tugas Akhir D3 - Bootstrap/PHP/MySQL)', 'system-out');
                        appendTerminalLine('- unidaily-asisten-mahasiswa (Klien/server web)', 'system-out');
                        appendTerminalLine('- Pengaduan-Fasilitas-Kampus (PHP/MySQL)', 'system-out');
                        break;
                    case 'skills':
                        appendTerminalLine('Keahlian Pemrograman Utama:', 'system-out');
                        appendTerminalLine('  - Backend: Python, PHP, Kotlin, Batchfile Scripting', 'system-out');
                        appendTerminalLine('  - Frontend/Mobile: HTML5, CSS3, JavaScript, Jetpack Compose, Bootstrap', 'system-out');
                        appendTerminalLine('  - Database & Tools: MySQL, Git, GitHub, Admin Sistem', 'system-out');
                        break;
                    case 'contact':
                        appendTerminalLine('Detail Kontak:', 'system-out');
                        appendTerminalLine('  - Email: jefryoconner49@gmail.com', 'system-out');
                        appendTerminalLine('  - Telepon: 082251090558', 'system-out');
                        appendTerminalLine('  - GitHub: github.com/Emzyjeppp', 'system-out');
                        appendTerminalLine('  - LinkedIn: linkedin.com/in/muhammadjepri', 'system-out');
                        break;
                    case 'quote':
                    case 'quotes':
                    case 'motivasi':
                    case 'kata':
                        appendTerminalLine('"Tidak ada kata terlambat untuk memulai, semua orang punya garis start masing-masing."', 'diag-out');
                        break;
                    case 'clear':
                        terminalOutput.innerHTML = '';
                        break;
                    case 'theme':
                        if (args.length > 0) {
                            const targetTheme = args[0].toLowerCase();
                            if (themesList.includes(targetTheme)) {
                                appendTerminalLine(`Mengatur tema ke "${targetTheme}"...`, 'system-out');
                                setTheme(targetTheme);
                            } else {
                                appendTerminalLine(`Tema "${targetTheme}" tidak ditemukan. Tersedia: ${themesList.join(', ')}`, 'error-out');
                            }
                        } else {
                            appendTerminalLine('Mengganti tema situs web...', 'system-out');
                            toggleTheme();
                        }
                        break;
                    case 'play':
                    case 'snake':
                    case 'game':
                        startSnakeGame();
                        break;
                    case 'cv':
                        appendTerminalLine('Membuka ATS CV di tab baru...', 'system-out');
                        window.open('cv.html', '_blank');
                        break;
                    case 'github':
                        appendTerminalLine('Membuka profil GitHub...', 'system-out');
                        window.open('https://github.com/Emzyjeppp', '_blank');
                        break;
                    case 'linkedin':
                        appendTerminalLine('Membuka profil LinkedIn...', 'system-out');
                        window.open('https://www.linkedin.com/in/muhammadjepri/', '_blank');
                        break;
                    case 'instagram':
                        appendTerminalLine('Membuka Instagram...', 'system-out');
                        window.open('https://www.instagram.com/emzyjeppp/', '_blank');
                        break;
                    default:
                        appendTerminalLine(`Perintah tidak ditemukan: ${cmd}. Ketik 'help' untuk melihat bantuan.`, 'error-out');
                }
            }
        };
    }

    // 3D Tilt Hover Effect for Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--y', `${(y / rect.height) * 100}%`);

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = ((y - centerY) / centerY) * 12;
            const tiltY = -((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // 6. Back to Top Button Interaction
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 7. Subtle Scroll Reveal Animation Observer
    const revealSections = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealSections.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Reveal once
                }
            });
        }, {
            threshold: 0.15, // Trigger when 15% of the section is visible
            rootMargin: '0px 0px -50px 0px' // Margins to trigger slightly early/late
        });

        revealSections.forEach(sec => revealObserver.observe(sec));
    } else {
        // Fallback for older browsers
        revealSections.forEach(sec => sec.classList.add('active'));
    }
});


