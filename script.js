// Minimalist & Clean Portfolio Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Premium Theme Switcher Engine
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themesList = ['dark', 'light', 'dracula', 'cyberpunk', 'nord', 'monokai'];

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
        }

        statsCard.src = `https://github-readme-stats.vercel.app/api?username=Emzyjeppp&show_icons=true&theme=${githubTheme}&hide_border=true&bg_color=00000000&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}`;
        langsCard.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=Emzyjeppp&layout=compact&theme=${githubTheme}&hide_border=true&bg_color=00000000&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}`;
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
                    if (dy === 0) { dx = 0; dy = -15; }
                } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
                    e.preventDefault();
                    if (dy === 0) { dx = 0; dy = 15; }
                } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                    e.preventDefault();
                    if (dx === 0) { dx = -15; dy = 0; }
                } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                    e.preventDefault();
                    if (dx === 0) { dx = 15; dy = 0; }
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


