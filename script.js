// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Initial Load Animations ---
    const tlHero = gsap.timeline();
    
    tlHero.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
    })
    .from(".hero-titles .role-tag", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.8")
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
    .from(".hero-visual", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
    }, "-=1.2");


    // --- Background Shapes Parallax (Mouse move) ---
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to(".shape-1", {
            x: (x - 0.5) * 50,
            y: (y - 0.5) * 50,
            ease: "power2.out"
        });
        gsap.to(".shape-2", {
            x: (x - 0.5) * -70,
            y: (y - 0.5) * -70,
            ease: "power2.out"
        });
    });


    // --- Generic Section Title Reveals ---
    const sectionTitles = gsap.utils.toArray(".section-title:not(.hero-title)");
    sectionTitles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });


    // --- HORIZONTAL SCROLL FOR ACADEMIC JOURNEY ---
    const horizontalContainer = document.querySelector(".horizontal-scroll-container");
    const panels = gsap.utils.toArray(".journey-panel");

    if (horizontalContainer && panels.length > 0) {
        // Calculate the total width needed based on panels
        const totalWidth = panels.length * 80; // 80vw per panel
        horizontalContainer.style.width = `${totalWidth}vw`;

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1), // Move left
            ease: "none", // Important for scrub
            scrollTrigger: {
                trigger: ".journey-section", // Pin the whole section instead of just the wrapper
                pin: true, 
                scrub: 1, // Smooth scrubbing
                start: "top top", // Start pinning exactly at the top. The CSS padding-top handles the navbar clearance!
                snap: 1 / (panels.length - 1),
                end: () => "+=" + horizontalContainer.offsetWidth
            }
        });
    }


    // --- Cards Staggered Fade Up ---
    const fadeUpSections = [
        ".skills-bento-grid", 
        ".projects-grid", 
        ".split-layout", 
        ".startup-grid"
    ];

    fadeUpSections.forEach(selector => {
        const elements = document.querySelectorAll(`${selector} > *`);
        if (elements.length > 0) {
            gsap.from(elements, {
                scrollTrigger: {
                    trigger: selector,
                    start: "top 80%"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }
    });

    // --- Footer Links Hover Stagger ---
    gsap.from(".social-link", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)"
    });
});
