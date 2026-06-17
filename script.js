// Minimalist & Clean Portfolio Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Light/Dark Mode Switcher
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
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
                    copyBtnText.textContent = 'Email Copied!';
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

    // 3. Dynamic Project Modals
    const projectsData = {
        clipboard: {
            title: 'clipboard-manager',
            tags: ['Python', 'CustomTkinter', 'GUI'],
            description: 'Modern clipboard history manager built with Python and CustomTkinter. It runs silently in the background and saves your clipboard logs securely, allowing you to access previously copied items via a beautiful desktop interface.',
            features: [
                'Lightweight background process running in system tray.',
                'Responsive GUI built using CustomTkinter components.',
                'Persistent storage keeping track of text logs.',
                'Instant click-to-copy back to clipboard functionality.'
            ],
            repo: 'https://github.com/Emzyjeppp/clipboard-manager'
        },
        uangku: {
            title: 'Uangku-HematMahasiswa',
            tags: ['HTML', 'CSS', 'JavaScript'],
            description: 'A frontend prototype project created for a Human-Computer Interaction course. It provides budget tracking utilities tailored for college students, integrated with an interactive map mockup to search for cheap student dining spots (warung murah) around campus.',
            features: [
                'Clean semantic interface designed with a focus on usability.',
                'Pocket money budget calculator and spending manager.',
                'Interactive maps integration for locating budget-friendly food stalls.',
                'Full mobile responsiveness.'
            ],
            repo: 'https://github.com/Emzyjeppp/Uangku-HematMahasiswa'
        },
        wintools: {
            title: 'windows-tools',
            tags: ['Batchfile', 'Windows Scripting'],
            description: 'A robust utility toolbox written in Windows Batch command lines. It automates common maintenance chores, manages quick directory folder actions, cleans trash folders, and automates environment preparation.',
            features: [
                'Folder lock and unlock scripting utility.',
                'System temp and prefetch cache cleaner script.',
                'One-click organization utility mapping files into directories.',
                'Safe shell execution using native Windows command lines.'
            ],
            repo: 'https://github.com/Emzyjeppp/windows-tools'
        },
        aspirasi: {
            title: 'aspirasi-sanggar-tari',
            tags: ['PHP', 'MySQL', 'Bootstrap', 'Web'],
            description: 'A web-based public feedback and aspiration system for dance studios in Yogyakarta. Developed as a D3 Final Project, it aims to enhance community engagement, improve administrative transparency, and speed up responsiveness from studio administrators.',
            features: [
                'Web-based community aspiration and complaint management system.',
                'MySQL database integration for structured recording and tracking of public feedback.',
                'Responsive interface powered by the Bootstrap framework for mobile accessibility.',
                'Dedicated admin dashboard for managing and responding to public aspirations.'
            ],
            repo: 'https://eprints.utdi.ac.id/10601/'
        }
    };

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
        modalDesc.textContent = data.description;
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
        data.features.forEach(feat => {
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
});
