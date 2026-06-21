// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Theme Toggle Logic ---
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const themeIcon = themeBtn.querySelector('i');

    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('ph-moon');
            themeIcon.classList.add('ph-sun');
        } else {
            themeIcon.classList.remove('ph-sun');
            themeIcon.classList.add('ph-moon');
        }
    }

    // --- Hero Section Animation (on load) ---
    const tlHero = gsap.timeline();
    
    tlHero.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    })
    .from(".hero-titles", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".hero-intro", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".hero-cta .btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.6")
    .from(".avatar-placeholder", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)"
    }, "-=1");

    // --- Generic Section Reveals ---
    const sections = gsap.utils.toArray(".section:not(.hero-section)");
    
    sections.forEach(section => {
        const header = section.querySelector(".section-header");
        
        if (header) {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        }
    });

    // --- Academic Journey Animation ---
    const yearCards = gsap.utils.toArray(".year-card");
    yearCards.forEach((yearCard) => {
        const yearHeader = yearCard.querySelector(".year-header");
        const semesterCards = yearCard.querySelectorAll(".semester-card");
        
        const tlYear = gsap.timeline({
            scrollTrigger: {
                trigger: yearCard,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        tlYear.from(yearHeader, {
            x: -30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        if (semesterCards.length > 0) {
            tlYear.from(semesterCards, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.4");
        }
    });

    // --- Skills Animation ---
    gsap.from(".skill-category", {
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
    });

    // --- Projects Animation ---
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects-section",
            start: "top 80%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // --- Experience & Achievements Animation ---
    gsap.from(".timeline-card", {
        scrollTrigger: {
            trigger: ".experience-section",
            start: "top 80%"
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.from(".achievement-list li", {
        scrollTrigger: {
            trigger: "#achievements",
            start: "top 80%"
        },
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
    });

    // --- Startup Animation ---
    gsap.from(".startup-card", {
        scrollTrigger: {
            trigger: ".startup-section",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".startup-block", {
        scrollTrigger: {
            trigger: ".startup-grid",
            start: "top 85%"
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.2)"
    });
});
