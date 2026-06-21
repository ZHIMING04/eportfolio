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
        let mm = gsap.matchMedia();

        mm.add("(min-width: 901px)", () => {
            // Calculate the total width needed based on panels
            const totalWidth = panels.length * 80; // 80vw per panel
            horizontalContainer.style.width = `${totalWidth}vw`;

            let scrollTween = gsap.to(panels, {
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

            return () => {
                // Cleanup inline styles when matching ends (resizing to mobile)
                horizontalContainer.style.width = "";
            };
        });
    }


    // --- Individual Element Fade Up (More robust than bulk staggers) ---
    const fadeUpSections = [
        ".skills-bento-grid", 
        ".projects-grid", 
        ".split-layout", 
        ".startup-grid",
        ".footer-grid" // Added footer here for robustness
    ];

    fadeUpSections.forEach(selector => {
        const elements = document.querySelectorAll(`${selector} > *`);
        elements.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Trigger when the top of the element hits 85% of viewport
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });
    });

    // --- Footer Links ---
    gsap.utils.toArray(".social-link").forEach(link => {
        gsap.from(link, {
            scrollTrigger: {
                trigger: link,
                start: "top bottom", // Trigger exactly when it enters the viewport
                toggleActions: "play none none none"
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.2)"
        });
    });

    // Refresh ScrollTrigger after all images load to fix layout shifts from pinned sections
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
});
