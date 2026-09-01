/* ==========================================================================
   LEELA KRISHNA KURRA - PORTFOLIO INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Typing Effect for Hero Section Role
    const typedTextSpan = document.getElementById('typed-text');
    const roles = [
        "B.Tech CSE Student at VIT Vellore",
        "Aspiring AI & ML Engineer",
        "Software Testing Enthusiast",
        "Python & Web Developer"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 90;
    const deletingSpeed = 40;
    const delayBetweenRoles = 2000;

    function typeEffect() {
        if (!typedTextSpan) return;
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenRoles);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 400);
        } else {
            setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    typeEffect();

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 3. Navbar Blur & Back-To-Top Button on Scroll
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (backToTopBtn) {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    // 4. ScrollSpy - Active Nav Link Tracking
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });

    // 5. Project Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 6. Scroll Reveal Observer for Cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .timeline-item, .cert-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // CSS Helper for revealed elements
    const style = document.createElement('style');
    style.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// 7. Helper: Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 8. Helper: Copy Text to Clipboard
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.createElement('div');
        toast.className = 'form-toast success';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.zIndex = '3000';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> Email address copied to clipboard!`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }).catch(err => {
        console.error('Copy failed', err);
    });
}

// 9. Helper: Handle Contact Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const toast = document.getElementById('form-toast');

    if (name && email && message) {
        toast.className = 'form-toast success';
        toast.innerHTML = `<i class="fas fa-paper-plane"></i> Thank you ${name}! Your message has been sent successfully. I will get back to you soon!`;
        toast.classList.remove('hidden');

        // Reset Form
        document.getElementById('contact-form').reset();

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    }
}

// 10. Project Modal Details Launcher
const projectDetails = {
    'ai-analyzer': {
        title: 'AI Code Quality & Bug Analyzer',
        category: 'AI & ML',
        description: 'An advanced code evaluation platform designed to scan Python code scripts, parse Abstract Syntax Trees (AST), detect anti-patterns and performance bottlenecks, and leverage NLP algorithms to recommend code improvements.',
        tech: ['Python', 'NLP', 'AST Parser', 'Scikit-learn', 'Flask'],
        highlights: [
            'Automated AST parsing for syntax and logic flaw detection',
            'ML model trained on open-source code quality metrics',
            'Generates readable PDF/HTML diagnostic summary reports'
        ]
    },
    'test-suite': {
        title: 'Automated Software Test Framework',
        category: 'Software Testing',
        description: 'A scalable automated QA testing suite built for web applications. Employs Page Object Model (POM) architecture using Python, Selenium WebDriver, and PyTest for automated cross-browser testing.',
        tech: ['Python', 'Selenium WebDriver', 'PyTest', 'Allure Reports', 'QA Workflow'],
        highlights: [
            'Implemented Page Object Model for maintainable test cases',
            'Automated functional regression and edge-case execution',
            'Integrated HTML reporting with screenshot attachments on test failures'
        ]
    },
    'student-predictor': {
        title: 'Student Academic Performance Predictor',
        category: 'Machine Learning & Data',
        description: 'A data science and machine learning regression model built to analyze historical academic data, study habits, attendance records, and assessment scores to forecast final student performance.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
        highlights: [
            'Feature engineering and data cleaning pipeline using Pandas',
            'Evaluated Random Forest and Linear Regression algorithms',
            'Visualized correlation matrices and predictive trend charts'
        ]
    }
};

function showModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">${data.title}</h2>
        <span class="project-tag" style="position: static; display: inline-block; margin-bottom: 1rem;">${data.category}</span>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.2rem;">${data.description}</p>
        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Key Highlights & Features:</h4>
        <ul style="color: var(--text-secondary); margin-left: 1.2rem; margin-bottom: 1.2rem;">
            ${data.highlights.map(h => `<li style="margin-bottom: 0.4rem;">${h}</li>`).join('')}
        </ul>
        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Tech Stack:</h4>
        <div class="tech-stack" style="margin-bottom: 1.5rem;">
            ${data.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <a href="https://github.com/leelakrishnakurra97" target="_blank" class="btn primary-btn btn-sm"><i class="fab fa-github"></i> View GitHub Repository</a>
    `;

    modal.classList.remove('hidden');
}

function closeModal(event) {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}
