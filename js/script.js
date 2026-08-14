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

    // =========================================================================
    //  Smooth Scrolling for Anchor Links
    // =========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") return;
            
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const headerOffset = headerMain ? headerMain.offsetHeight : 0;
                const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 10;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // =========================================================================
    //  Cart System
    // =========================================================================
    let cartItems = [];
    const cartBadge = document.getElementById("cartCountBadge");
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cartSubtotal = document.getElementById("cartSubtotal");
    const checkoutBtn = document.getElementById("checkoutBtn");

    // Empty cart HTML template
    const emptyCartHTML = `
        <div class="text-center py-5 text-muted">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mb-3 opacity-50">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <p class="mb-0 fs-6">Your cart is currently empty.</p>
        </div>
    `;

    function renderCart() {
        if (!cartItemsContainer) return;

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = emptyCartHTML;
            if (cartSubtotal) cartSubtotal.textContent = "₹0.00";
            if (checkoutBtn) checkoutBtn.disabled = true;
            if (cartBadge) cartBadge.textContent = "0";
            return;
        }

        let totalItems = 0;
        let totalPrice = 0;
        let html = "";

        cartItems.forEach((item, index) => {
            totalItems += item.qty;
            totalPrice += item.price;
            html += `
                <div class="cart-item d-flex align-items-start gap-3 py-3 ${index > 0 ? 'border-top' : ''}">
                    <div class="cart-item-icon flex-shrink-0 d-flex align-items-center justify-content-center rounded-3" style="width: 56px; height: 56px; background: #faf3e8;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#710000" stroke-width="1.5">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="mb-1 fw-bold text-dark fs-7">${item.name}</h6>
                        <p class="mb-1 text-muted fs-8">Qty: ${item.qty} bottle${item.qty > 1 ? 's' : ''}</p>
                        <span class="fw-bold text-dark">₹${item.price.toFixed(2)}</span>
                    </div>
                    <button class="btn btn-sm btn-outline-secondary border-0 p-1" onclick="removeFromCart(${index})" aria-label="Remove item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        if (cartSubtotal) cartSubtotal.textContent = `₹${totalPrice.toFixed(2)}`;
        if (checkoutBtn) checkoutBtn.disabled = false;
        if (cartBadge) cartBadge.textContent = totalItems.toString();
    }

    // Global addToCart function called by bundle SELECT buttons
    window.addToCart = function(name, qty, price) {
        // Check if this exact bundle is already in cart — replace it
        const existingIndex = cartItems.findIndex(item => item.name === name);
        if (existingIndex !== -1) {
            cartItems[existingIndex].qty = qty;
            cartItems[existingIndex].price = price;
        } else {
            cartItems.push({ name, qty, price });
        }
        renderCart();

        // Open cart offcanvas to show the added item
        const cartOffcanvas = document.getElementById("cartOffcanvas");
        if (cartOffcanvas && typeof bootstrap !== "undefined") {
            const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvas);
            bsOffcanvas.show();
        }

        // Brief visual feedback on the button
        showAddedFeedback(name);
    };

    // Global removeFromCart function
    window.removeFromCart = function(index) {
        cartItems.splice(index, 1);
        renderCart();
    };

    // Keep updateCartCount for backward compat (now delegates to addToCart)
    window.updateCartCount = function(count) {
        const prices = { 1: 159.90, 2: 299.90, 3: 399.90 };
        const name = `Black Turmeric Capsules - ${count} Bottle${count > 1 ? 's' : ''}`;
        window.addToCart(name, count, prices[count] || count * 159.90);
    };

    // Show brief "Added!" text on button
    function showAddedFeedback(name) {
        const buttons = document.querySelectorAll(".btn-bundle-select");
        buttons.forEach(btn => {
            if (btn.closest(".bundle-card")) {
                const cardTitle = btn.closest(".bundle-card").querySelector(".bundle-title");
                if (cardTitle && name.includes(cardTitle.textContent.trim())) {
                    const originalText = btn.textContent;
                    btn.textContent = "✓ ADDED!";
                    btn.classList.add("btn-added");
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.classList.remove("btn-added");
                    }, 1500);
                }
            }
        });
    }

    // Checkout Button handler
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (cartItems.length === 0) return;
            const total = cartItems.reduce((sum, item) => sum + item.price, 0);
            alert(`Thank you for your order!\n\nOrder Summary:\n${cartItems.map(item => `• ${item.name}: ₹${item.price.toFixed(2)}`).join('\n')}\n\nTotal: ₹${total.toFixed(2)}\n\nYou will be redirected to secure checkout.`);
        });
    }

    // =========================================================================
    //  Account Modal Sign-In
    // =========================================================================
    const signInForm = document.getElementById("accountSignInForm");
    const signInFeedback = document.getElementById("signInFeedback");

    if (signInForm) {
        signInForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            if (!email || !password) {
                showSignInFeedback("Please fill in all fields.", "danger");
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showSignInFeedback("Please enter a valid email address.", "danger");
                return;
            }

            if (password.length < 6) {
                showSignInFeedback("Password must be at least 6 characters.", "danger");
                return;
            }

            // Simulate sign-in success
            showSignInFeedback("Welcome back! Signing you in...", "success");

            setTimeout(() => {
                const accountModal = document.getElementById("accountModal");
                if (accountModal && typeof bootstrap !== "undefined") {
                    bootstrap.Modal.getInstance(accountModal)?.hide();
                }
                signInForm.reset();
                if (signInFeedback) {
                    signInFeedback.classList.add("d-none");
                }
            }, 2000);
        });
    }

    function showSignInFeedback(message, type) {
        if (!signInFeedback) return;
        signInFeedback.className = `mt-3 text-center alert alert-${type} py-2 fs-7`;
        signInFeedback.textContent = message;
        signInFeedback.classList.remove("d-none");
    }

    // =========================================================================
    //  Search Modal Functionality
    // =========================================================================
    const searchModal = document.getElementById("searchModal");
    if (searchModal) {
        // Focus search input when modal opens
        searchModal.addEventListener("shown.bs.modal", () => {
            const searchInput = searchModal.querySelector("input[type='text']");
            if (searchInput) searchInput.focus();
        });

        // Search button handler
        const searchBtn = searchModal.querySelector(".btn-primary-red");
        const searchInput = searchModal.querySelector("input[type='text']");
        if (searchBtn && searchInput) {
            searchBtn.addEventListener("click", () => {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`Searching for: "${query}"\n\nThis feature will be available soon!`);
                }
            });

            searchInput.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    searchBtn.click();
                }
            });
        }

        // Popular search badge clicks
        const badges = searchModal.querySelectorAll(".badge");
        badges.forEach(badge => {
            badge.style.cursor = "pointer";
            badge.addEventListener("click", () => {
                if (searchInput) {
                    searchInput.value = badge.textContent;
                    searchInput.focus();
                }
            });
        });
    }

    // =========================================================================
    //  FAQ Accordion Chevron Animation
    // =========================================================================
    document.querySelectorAll('.faq-toggle-btn').forEach(btn => {
        btn.addEventListener("click", function () {
            // Toggle the chevron rotation on collapse toggle
            const chevron = this.querySelector('.faq-chevron');
            if (chevron) {
                const target = this.getAttribute("data-bs-target");
                const collapseEl = document.querySelector(target);
                if (collapseEl) {
                    collapseEl.addEventListener("shown.bs.collapse", () => {
                        chevron.style.transform = "rotate(180deg)";
                    }, { once: true });
                    collapseEl.addEventListener("hidden.bs.collapse", () => {
                        chevron.style.transform = "rotate(0deg)";
                    }, { once: true });
                }
            }
        });
    });

    // =========================================================================
    //  Endless Auto-Looping Testimonial Carousel
    // =========================================================================
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

    // =========================================================================
    //  Footer Newsletter / Year update
    // =========================================================================
    const copyrightText = document.querySelector(".copyright-text");
    if (copyrightText) {
        const currentYear = new Date().getFullYear();
        copyrightText.innerHTML = copyrightText.innerHTML.replace(/2024/, currentYear);
    }

    console.log("Malaysian Royal Gold - All systems initialized successfully.");
});
