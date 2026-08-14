/**
 * Curcuma Caesia - Malaysian Royal Gold
 * Main JavaScript file strictly conforming to AGENT.md
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS (Animate On Scroll) if loaded
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            easing: "ease-out",
            once: true,
            offset: 80
        });
    }

    // Dynamically calculate header height to fit hero section to viewport
    const headerMain = document.querySelector(".header-main");
    function setHeaderHeight() {
        if (headerMain) {
            document.documentElement.style.setProperty("--header-height", `${headerMain.offsetHeight}px`);
        }
    }
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            headerMain?.classList.add("shadow");
        } else {
            headerMain?.classList.remove("shadow");
        }
    });

    // Cart state management
    let cartCount = 0;
    const cartBadge = document.getElementById("cartCountBadge");
    
    window.updateCartCount = function(newCount) {
        cartCount = newCount;
        if (cartBadge) {
            cartBadge.textContent = cartCount;
        }
    };

    // Endless Auto-Looping Testimonial Carousel
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll("#testimonialDots .dot-item");
    const container = document.getElementById("testimonialSliderCard");
    let currentSlide = 0;
    let autoLoopInterval;

    function goToSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle("active", idx === index);
        });
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function startAutoLoop() {
        stopAutoLoop();
        autoLoopInterval = setInterval(nextSlide, 3500); // Endless loop every 3.5s
    }

    function stopAutoLoop() {
        if (autoLoopInterval) {
            clearInterval(autoLoopInterval);
        }
    }

    if (slides.length > 0) {
        startAutoLoop();

        // Pause loop when user hovers over card
        if (container) {
            container.addEventListener("mouseenter", stopAutoLoop);
            container.addEventListener("mouseleave", startAutoLoop);
        }

        // Clickable pagination dots
        dots.forEach((dot, idx) => {
            dot.addEventListener("click", () => {
                goToSlide(idx);
                startAutoLoop();
            });
        });
    }

    console.log("Malaysian Royal Gold - Navbar & Testimonial Endless Loop initialized successfully.");
});

