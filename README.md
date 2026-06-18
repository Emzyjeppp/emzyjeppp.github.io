# Muhammad Jepri | Personal Portfolio & ATS CV

Personal minimalist portfolio website & ATS-compliant CV built with semantic HTML, CSS (Vanilla), and JavaScript. Pushed live to GitHub Pages.

## 🌐 Live URL
- **Web Portfolio**: [emzyjeppp.github.io](https://emzyjeppp.github.io)
- **ATS CV Page**: [emzyjeppp.github.io/cv.html](https://emzyjeppp.github.io/cv.html)

---

## ✨ Features

### 🖥️ Web Portfolio (`index.html`)
- **Minimalist & Clean Layout**: Focuses on professional readability, typography, and rapid load times.
- **Light/Dark Mode Toggle**: Supports instant theme switching with state persistence via `localStorage`.
- **Interactive Developer Sandbox Terminal**: 
  - Allows users to type interactive CLI commands (like `help`, `about`, `projects`, `skills`, `contact`, `quote`, `theme`, `clear`) to interact with the profile.
  - Supports blinking animations, scroll anchoring, and custom output formatting.
- **Project Detail Modals**: Custom-built responsive modals for project specifications.
- **Dynamic GitHub Stats**: Auto-theming GitHub README stats and top languages cards that match the active website theme (default light / react dark).
- **Academic Verification Links**: Direct integration of official PDDIKTI verification badges.
- **Floating Scroll Button**: Smooth-scrolling "Back to Top" floating button that triggers after `300px` scroll height.
- **Fully Responsive**: Mobile-first design system utilizing flexbox and grid components.

### 📄 ATS-Compliant CV (`cv.html` & Pre-renders)
- **Perfect Spacing & Layout**: Enforced alignment for label-colon columns using structured tabular grids.
- **Multiple Formats**: Direct header downloads for clean, pre-rendered versions:
  - **[Download PDF](https://emzyjeppp.github.io/assets/CV_Muhammad_Jepri.pdf)**: Headless browser printed PDF omitting interactive controls.
  - **[Download Word (.docx)](https://emzyjeppp.github.io/assets/CV_Muhammad_Jepri.docx)**: Custom-built borderless layout document generated using `python-docx`.

---

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+), Phosphor Icons
- **CV Pre-rendering**: Python (`python-docx`), Microsoft Edge Headless Print
- **Hosting**: GitHub Pages
