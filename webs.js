// Web Directory - Muhammad Jepri (Emzyjeppp)
// Renders, sorts, and filters 35 active GitHub Pages projects (excluding requested repos)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Premium Theme Switcher Engine
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themesList = ['dark', 'light', 'dracula', 'cyberpunk', 'nord', 'monokai', 'gemini'];

    const setTheme = (theme) => {
        if (!themesList.includes(theme)) return;
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
        let nextIndex = (themesList.indexOf(currentTheme) + 1) % themesList.length;
        if (nextIndex === -1) nextIndex = 0;
        setTheme(themesList[nextIndex]);
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // 2. Database of 35 Web Projects (with exact creation dates)
    const websData = [
        {
            name: "PresensiPanitiaMUBESXXI-Himaforka",
            owner: "AyyrielRamadhan",
            repo_url: "https://github.com/AyyrielRamadhan/PresensiPanitiaMUBESXXI-Himaforka",
            pages_url: "https://ayyrielramadhan.github.io/PresensiPanitiaMUBESXXI-Himaforka/",
            description: "Sistem Presensi Panitia untuk Musyawarah Besar XXI Himpunan Mahasiswa Informatika.",
            tags: ["HTML", "CSS", "JavaScript", "Collab"],
            category: "collab",
            created_at: "2026-07-29T04:20:40Z"
        },
        {
            name: "AShortStory",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/AShortStory",
            pages_url: "https://emzyjeppp.github.io/AShortStory/",
            description: "Interactive visual novel or storytelling web project depicting short narratives.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2025-02-14T19:25:35Z"
        },
        {
            name: "bdayforwho",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/bdayforwho",
            pages_url: "https://emzyjeppp.github.io/bdayforwho/",
            description: "Halaman web interaktif ucapan selamat ulang tahun kustom yang unik dan estetik.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2023-12-23T23:13:47Z"
        },
        {
            name: "belajargit",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/belajargit",
            pages_url: "https://emzyjeppp.github.io/belajargit/",
            description: "Dokumentasi interaktif dan media pembelajaran awal untuk memahami Git & GitHub.",
            tags: ["HTML", "CSS"],
            category: "web",
            created_at: "2023-04-14T01:25:54Z"
        },
        {
            name: "cafestudy_utdihackatonclub",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/cafestudy_utdihackatonclub",
            pages_url: "https://emzyjeppp.github.io/cafestudy_utdihackatonclub/",
            description: "Landing page study club berbasis web untuk pencarian kafe belajar bagi mahasiswa UTDI.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-04T04:12:22Z"
        },
        {
            name: "CodingCamp-27July26-muhammadjepri",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/CodingCamp-27July26-muhammadjepri",
            pages_url: "https://emzyjeppp.github.io/CodingCamp-27July26-muhammadjepri/",
            description: "Proyek kelulusan program CodingCamp yang di-host di GitHub Pages.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-28T13:49:07Z"
        },
        {
            name: "concert-tracker-web",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/concert-tracker-web",
            pages_url: "https://emzyjeppp.github.io/concert-tracker-web/",
            description: "Sistem pelacakan jadwal konser musik interaktif bagi para penggemar.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-06-24T03:22:40Z"
        },
        {
            name: "flipcardsap",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/flipcardsap",
            pages_url: "https://emzyjeppp.github.io/flipcardsap/",
            description: "Permainan interaktif Flip Cards (Memory Match Game) dengan visual yang menarik.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2025-02-14T19:54:25Z"
        },
        {
            name: "for-mutialifah-sephira",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/for-mutialifah-sephira",
            pages_url: "https://emzyjeppp.github.io/for-mutialifah-sephira/",
            description: "Halaman web kustom apresiasi interaktif yang dipersembahkan untuk Mutialifah Sephira.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-08T11:49:28Z"
        },
        {
            name: "form-perlengkapan-mubes",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/form-perlengkapan-mubes",
            pages_url: "https://emzyjeppp.github.io/form-perlengkapan-mubes/",
            description: "Mockup formulir manajemen inventarisasi perlengkapan Musyawarah Besar XXI Himaforka.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-29T09:33:43Z"
        },
        {
            name: "github-achievements-farmer",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/github-achievements-farmer",
            pages_url: "https://emzyjeppp.github.io/github-achievements-farmer/",
            description: "Skrip panduan dan simulasi visual untuk mendapatkan badge prestasi (achievements) di GitHub.",
            tags: ["HTML", "CSS", "Python", "Guide"],
            category: "python",
            created_at: "2026-06-19T20:55:19Z"
        },
        {
            name: "github-wrapped",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/github-wrapped",
            pages_url: "https://emzyjeppp.github.io/github-wrapped/",
            description: "Simulasi rekap tahunan aktivitas kontribusi GitHub Anda dengan tampilan yang menarik.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-06-22T19:42:51Z"
        },
        {
            name: "instagram-unfollow-detector",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/instagram-unfollow-detector",
            pages_url: "https://emzyjeppp.github.io/instagram-unfollow-detector/",
            description: "Aplikasi web statis untuk mendeteksi siapa yang tidak mem-followback Anda di Instagram dengan memproses file data ekspor JSON.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-24T09:57:18Z"
        },
        {
            name: "jaringan-nirkabel-web",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/jaringan-nirkabel-web",
            pages_url: "https://emzyjeppp.github.io/jaringan-nirkabel-web/",
            description: "Media pembelajaran interaktif mengenai konsep, frekuensi, dan konfigurasi Jaringan Nirkabel.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-13T19:11:42Z"
        },
        {
            name: "JKT48-Ticket-Monitor-Dashboard",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/JKT48-Ticket-Monitor-Dashboard",
            pages_url: "https://emzyjeppp.github.io/JKT48-Ticket-Monitor-Dashboard/",
            description: "Dasbor analitik penjualan tiket teater JKT48 yang divisualisasikan dengan grafis modern.",
            tags: ["HTML", "CSS", "JavaScript", "Analytics"],
            category: "web",
            created_at: "2026-06-15T14:03:48Z"
        },
        {
            name: "jokjoker48-form",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/jokjoker48-form",
            pages_url: "https://emzyjeppp.github.io/jokjoker48-form/",
            description: "Formulir interaktif hiburan meme kustom bagi kalangan fans JKT48.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-06-16T04:21:24Z"
        },
        {
            name: "LanauticaMonthly",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/LanauticaMonthly",
            pages_url: "https://emzyjeppp.github.io/LanauticaMonthly/",
            description: "Landing page informasi bulanan untuk rilis majalah digital komunitas Lanautica.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-04-09T13:30:45Z"
        },
        {
            name: "lanaverse",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/lanaverse",
            pages_url: "https://emzyjeppp.github.io/lanaverse/",
            description: "Halaman interaktif visualisasi semesta karakter fiksi kustom (lanaverse).",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-08T20:52:50Z"
        },
        {
            name: "lyricspenjagahati",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/lyricspenjagahati",
            pages_url: "https://emzyjeppp.github.io/lyricspenjagahati/",
            description: "Floating lyrics web concept showing synchronized subtitles for the song Penjaga Hati.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2023-11-04T13:27:08Z"
        },
        {
            name: "math-english-logic-test",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/math-english-logic-test",
            pages_url: "https://emzyjeppp.github.io/math-english-logic-test/",
            description: "Aplikasi kuis logika matematika dan bahasa inggris interaktif berbasis web.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-15T10:08:54Z"
        },
        {
            name: "pjbl-visdata-dashboard",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/pjbl-visdata-dashboard",
            pages_url: "https://emzyjeppp.github.io/pjbl-visdata-dashboard/",
            description: "Dasbor visualisasi data terpadu untuk proyek PjBL mata kuliah Visualisasi Data.",
            tags: ["HTML", "CSS", "JavaScript", "Charts"],
            category: "web",
            created_at: "2026-07-07T18:21:30Z"
        },
        {
            name: "profilsaya",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/profilsaya",
            pages_url: "https://emzyjeppp.github.io/profilsaya/",
            description: "Desain layout profil web sederhana tugas pengenalan pemrograman web.",
            tags: ["HTML", "CSS"],
            category: "web",
            created_at: "2023-09-18T11:23:30Z"
        },
        {
            name: "revou-codingcamp-day1",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/revou-codingcamp-day1",
            pages_url: "https://emzyjeppp.github.io/revou-codingcamp-day1/",
            description: "Tugas praktikum hari pertama di RevoU Coding Camp, berisi halaman statis responsif.",
            tags: ["HTML", "CSS"],
            category: "web",
            created_at: "2026-07-27T12:59:12Z"
        },
        {
            name: "SakuKita",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/SakuKita",
            pages_url: "https://emzyjeppp.github.io/SakuKita/",
            description: "Prototipe dompet digital mahasiswa untuk mengelola uang bulanan secara otomatis.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-06-25T14:12:12Z"
        },
        {
            name: "Simulasi_BST_SIF25202T",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/Simulasi_BST_SIF25202T",
            pages_url: "https://emzyjeppp.github.io/Simulasi_BST_SIF25202T/",
            description: "Aplikasi simulasi interaktif Binary Search Tree (BST) untuk visualisasi penambahan dan pencarian node.",
            tags: ["HTML", "CSS", "JavaScript", "Visualisasi"],
            category: "web",
            created_at: "2026-07-13T07:13:53Z"
        },
        {
            name: "survival-anak-kos",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/survival-anak-kos",
            pages_url: "https://emzyjeppp.github.io/survival-anak-kos/",
            description: "Mini text-based game interaktif berbasis pilihan keputusan tentang bertahan hidup sebagai anak kos.",
            tags: ["HTML", "CSS", "JavaScript", "Game"],
            category: "web",
            created_at: "2026-07-18T06:49:58Z"
        },
        {
            name: "tbo-web",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/tbo-web",
            pages_url: "https://emzyjeppp.github.io/tbo-web/",
            description: "Situs visualisasi mesin automata (DFA/NFA) untuk mendukung praktikum Teori Bahasa & Otomata.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-13T18:52:36Z"
        },
        {
            name: "teamup",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/teamup",
            pages_url: "https://emzyjeppp.github.io/teamup/",
            description: "Web portal kolaboratif pembagian kelompok belajar mahasiswa secara acak dan seimbang.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-06-20T12:29:38Z"
        },
        {
            name: "twitter-unfollow-detector",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/twitter-unfollow-detector",
            pages_url: "https://emzyjeppp.github.io/twitter-unfollow-detector/",
            description: "Aplikasi web mandiri untuk memproses data ekspor Twitter/X guna mencari tahu siapa yang berhenti mengikuti.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-06-18T05:30:20Z"
        },
        {
            name: "uas-imk-uangku",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/uas-imk-uangku",
            pages_url: "https://emzyjeppp.github.io/uas-imk-uangku/",
            description: "Halaman prototipe Uangku untuk kebutuhan UAS Interaksi Manusia & Komputer.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-13T18:27:36Z"
        },
        {
            name: "UAS-Matematika-Komputasi-IF-1",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/UAS-Matematika-Komputasi-IF-1",
            pages_url: "https://emzyjeppp.github.io/UAS-Matematika-Komputasi-IF-1/",
            description: "Kalkulator matriks, permutasi, kombinasi, dan relasi tugas UAS Matematika Komputasi.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-13T17:26:45Z"
        },
        {
            name: "wish-alana-jkt48",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/wish-alana-jkt48",
            pages_url: "https://emzyjeppp.github.io/wish-alana-jkt48/",
            description: "Situs web interaktif ucapan selamat ulang tahun bertema Alana JKT48.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-11T13:53:24Z"
        },
        {
            name: "wonderlana",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/wonderlana",
            pages_url: "https://emzyjeppp.github.io/wonderlana/",
            description: "Situs portal visualisasi kreatif fans club komunitas digital.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2026-07-12T15:59:41Z"
        },
        {
            name: "Yippie18th",
            owner: "Emzyjeppp",
            repo_url: "https://github.com/Emzyjeppp/Yippie18th",
            pages_url: "https://emzyjeppp.github.io/Yippie18th/",
            description: "Situs web ucapan hari jadi ke-18 tahun interaktif bertema kustom.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "web",
            created_at: "2024-01-09T01:49:13Z"
        },
        {
            name: "Raport-Ayo-Renang",
            owner: "sofiyahauliah24-lab",
            repo_url: "https://github.com/sofiyahauliah24-lab/Raport-Ayo-Renang",
            pages_url: "http://ayorenang.my.id/",
            description: "Sistem pelaporan raport renang siswa di sekolah renang Ayo Renang.",
            tags: ["HTML", "CSS", "JavaScript", "Collab"],
            category: "collab",
            created_at: "2026-08-04T14:27:45Z"
        }
    ];

    // Sort repositories by creation date descending (newest first)
    websData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // 3. Render Cards Logic
    const grid = document.getElementById('webs-grid');
    const searchInput = document.getElementById('directory-search');
    const noResults = document.getElementById('no-results-message');
    const filterTabs = document.querySelectorAll('.filter-tab');

    let currentFilter = 'all';
    let searchQuery = '';

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const render = () => {
        grid.innerHTML = '';
        let count = 0;

        websData.forEach(p => {
            const matchesFilter = (currentFilter === 'all') || 
                                  (currentFilter === 'collab' && p.category === 'collab') ||
                                  (currentFilter === 'web' && p.category === 'web') ||
                                  (currentFilter === 'backend' && p.category === 'backend') ||
                                  (currentFilter === 'python' && p.category === 'python');

            const text = `${p.name} ${p.description} ${p.tags.join(' ')}`.toLowerCase();
            const matchesSearch = text.includes(searchQuery.toLowerCase());

            if (matchesFilter && matchesSearch) {
                count++;
                const card = document.createElement('article');
                card.className = 'project-card';
                card.style.cursor = 'default';
                
                // Construct tags HTML
                const tagsHTML = p.tags.map(t => `<span>${t}</span>`).join('');
                
                // Collaboration Badge
                const collabBadge = p.owner !== "Emzyjeppp" ? 
                    `<span class="collab-badge"><i class="ph ph-users"></i> ${p.owner}</span>` : '';

                // Created Date Badge
                const dateBadge = `<span class="collab-badge" style="background-color: rgba(99, 102, 241, 0.05); color: var(--text-muted); border-color: var(--border-color); font-size: 0.72rem; font-weight: normal;"><i class="ph ph-calendar"></i> ${formatDate(p.created_at)}</span>`;

                card.innerHTML = `
                    <div class="card-glare"></div>
                    <div class="project-info" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
                                <h3 class="project-name" style="margin: 0; font-size: 1.25rem;">${p.name}</h3>
                                <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                                    ${collabBadge}
                                    ${dateBadge}
                                </div>
                            </div>
                            <p class="project-desc" style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.4; margin-bottom: 1rem; margin-top: 0.5rem;">
                                ${p.description}
                            </p>
                        </div>
                        <div>
                            <div class="project-tags" style="margin-bottom: 1.5rem;">
                                ${tagsHTML}
                            </div>
                            <div style="display: flex; gap: 0.8rem;">
                                <a href="${p.pages_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; padding: 0.6rem 1rem; font-size: 0.85rem; text-align: center; display: inline-flex; justify-content: center; align-items: center; gap: 0.4rem; border-radius: 6px;">
                                    Demo <i class="ph ph-arrow-square-out"></i>
                                </a>
                                <a href="${p.repo_url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1; padding: 0.6rem 1rem; font-size: 0.85rem; text-align: center; display: inline-flex; justify-content: center; align-items: center; gap: 0.4rem; border-radius: 6px;">
                                    Repo <i class="ph ph-github-logo"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            }
        });

        // Update count text on the tabs
        updateFilterCounts(count);

        // 3D Tilt Effect on dynamically added cards
        init3DTilt();

        if (count === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    };

    const updateFilterCounts = (visibleCount) => {
        // Find active tab and update display if needed
        // Dynamically recalculate all category counts
        const allCount = websData.length;
        const collabCount = websData.filter(p => p.category === 'collab').length;
        const webCount = websData.filter(p => p.category === 'web').length;
        const backendCount = websData.filter(p => p.category === 'backend').length;
        const pythonCount = websData.filter(p => p.category === 'python').length;

        document.querySelector('[data-filter="all"]').textContent = `Semua (${allCount})`;
        document.querySelector('[data-filter="web"]').textContent = `Web Front-end (${webCount})`;
        document.querySelector('[data-filter="backend"]').textContent = `Database & PHP (${backendCount})`;
        document.querySelector('[data-filter="python"]').textContent = `Python & GUI (${pythonCount})`;
        document.querySelector('[data-filter="collab"]').textContent = `Kolaborasi / Fork (${collabCount})`;
    };

    // Filter Switcher
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.getAttribute('data-filter');
            render();
        });
    });

    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            render();
        });
    }

    // 3D Tilt Function
    const init3DTilt = () => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--y', `${(y / rect.height) * 100}%`);

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const tiltX = ((y - centerY) / centerY) * 8;
                const tiltY = -((x - centerX) / centerX) * 8;

                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.style.transition = 'transform 0.15s ease, box-shadow 0.15s ease';

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    };

    // Back to Top Button
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

    // Initial load
    render();
});
