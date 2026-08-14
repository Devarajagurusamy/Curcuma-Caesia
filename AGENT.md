# AGENT.md

You are an expert frontend engineer specializing in high-converting, premium single-product e-commerce websites.

Your task is to build a production-quality **single-page e-commerce website** using only:

- HTML5
- CSS3
- Bootstrap 5 via CDN
- Vanilla JavaScript
- AOS (Animate On Scroll) via CDN

The website should be visually premium, responsive, conversion-focused, fast, accessible, and easy to maintain.

---

# 1. Project Overview

We are building a **single-page e-commerce product website** inspired by the supplied reference design.

The reference direction is a premium wellness/supplement brand with:

- Luxury visual language
- White + deep red + gold palette
- Premium product photography
- Strong product-focused hero section
- Trust and certification signals
- Customer reviews
- Clear purchase CTAs
- Scientific/purity messaging
- Elegant typography
- Smooth scroll animations

The website should feel like a real commercial brand website rather than a generic Bootstrap template.

## Primary Goal

The primary goal is:

> Convert visitors into product buyers.

Every major section should support one or more of:

- Trust
- Product understanding
- Desire
- Social proof
- Objection handling
- Conversion

Do not add sections only because they look visually interesting.

---

# 2. Design Reference

Use the supplied reference image as the primary visual direction.

The design language should include:

- Premium wellness/luxury aesthetic
- Deep red as the primary brand color
- Gold as the premium accent
- White/cream as the main background
- Elegant serif display typography for major headings
- Clean sans-serif typography for navigation and body text
- Large product-focused hero composition
- Gold borders and subtle ornamental elements
- Rounded cards where appropriate
- Strong whitespace
- High visual hierarchy
- Premium product presentation

Do not copy the reference website's exact branding, text, logo, or proprietary assets unless they are explicitly provided for this project.

Use the reference for:

- Layout inspiration
- Visual hierarchy
- Color direction
- Product presentation
- Trust-building patterns
- CTA placement
- Section rhythm

---

# 3. Technology Stack

## Core

```txt
HTML5
CSS3
Vanilla JavaScript
```

## UI Framework

```txt
Bootstrap 5.x via CDN
```

Bootstrap should be used for:

- Grid system
- Responsive containers
- Navbar
- Buttons
- Cards
- Modal
- Offcanvas
- Accordion
- Utility classes
- Responsive spacing
- Flexbox utilities

## Animation

```txt
AOS (Animate On Scroll) via CDN
```

Use AOS for:

- Hero content entrance
- Product image entrance
- Trust badges
- Feature cards
- Story sections
- Science sections
- Reviews
- FAQ
- CTA sections

Do not overuse animations.

## JavaScript

Use:

```txt
Vanilla JavaScript
```

Do not introduce:

- React
- Vue
- Angular
- jQuery
- TypeScript
- Redux
- Node.js
- Express.js
- Tailwind CSS
- Sass
- unnecessary JavaScript frameworks

---

# 4. CDN Rule

External libraries must be loaded through official/stable CDN URLs.

Expected external dependencies:

```txt
Bootstrap CSS
Bootstrap JS Bundle
AOS CSS
AOS JS
```

Do not add another package/library without explicit approval.

If another library appears necessary:

1. Explain why it is needed.
2. Explain the alternative using the current stack.
3. Explain the bundle/performance impact.
4. Ask for permission.
5. Wait for approval.

Never install or introduce additional libraries automatically.

---

# 5. Project Structure

Use a simple static structure.

```txt
project-root/

├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── README.md
```

Do not create unnecessary folders.

For a small single-page website, avoid overengineering.

---

# 6. Page Architecture

The website should be a single-page experience.

Recommended structure:

```txt
index.html

├── Announcement Bar
├── Navbar
├── Hero Section
├── Trust / Certification Strip
├── Product Benefits
├── Product Story
├── Science / Purity Section
├── How It Works / Usage
├── Product Details
├── Customer Reviews
├── FAQ
├── Final CTA
└── Footer
```

The exact number of sections may change based on the product requirements.

Do not add unnecessary sections.

---

# 7. Header / Announcement Bar

Create a premium announcement bar at the top.

Possible messaging patterns:

```txt
100% Authentic
Lab Tested
Made in [Country]
Free Shipping Over [Amount]
```

The announcement bar should:

- Be visually compact
- Use the brand colors
- Remain readable on mobile
- Avoid excessive text
- Support trust and purchase confidence

Do not make unsupported claims.

---

# 8. Navigation

The navbar should contain:

```txt
Logo
Shop / Product
Our Story
Science
Reviews
FAQ
Contact
Search
Cart
```

For a single-product website, navigation links should scroll to sections rather than open unnecessary pages.

Use:

```html
<a href="#science">Science</a>
```

instead of creating unnecessary HTML pages.

## Navbar Requirements

Desktop:

- Clean horizontal navigation
- Premium logo placement
- Strong whitespace
- Cart icon/state

Mobile:

- Bootstrap responsive navbar
- Hamburger menu
- Touch-friendly links
- Easy access to purchase CTA

---

# 9. Hero Section

The hero is the most important section.

It must immediately communicate:

1. What the product is
2. Why it is valuable
3. Why the visitor should trust it
4. What action to take

Recommended structure:

```txt
Small eyebrow text

Main headline

Supporting headline

Short product description

Trust/benefit badges

Rating / social proof

Primary CTA
Secondary CTA

Product image
```

Example visual hierarchy:

```txt
AUTHENTIC. PURE. POWERFUL.

BLACK TURMERIC
CURCUMA CAESIA

100% Pure | Single Ingredient | Lab Tested

Premium product description...

★★★★★ 4.6/5
482+ Verified Reviews

[ SHOP NOW ] [ LEARN MORE ]
```

The actual copy must be adapted to the real product.

Never invent medical or scientific claims.

---

# 10. Hero Product Image

The product must be visually dominant.

Preferred composition:

```txt
Left:
Content + CTA

Right:
Large product image

Background:
Premium subtle gradient / decorative shapes / product environment
```

The product image should:

- Have high resolution
- Have proper contrast
- Maintain aspect ratio
- Never appear stretched
- Remain visually dominant
- Be responsive

Use:

```css
object-fit: contain;
```

when appropriate.

Do not distort product images.

---

# 11. Trust Signals

Trust signals are critical for e-commerce conversion.

Use visual signals such as:

```txt
100% Pure
Lab Tested
Single Ingredient
Premium Quality
No Fillers
Made in [Country]
GMP Certified
HACCP Certified
ISO Certified
Third Party Tested
```

Only display certifications or claims that are actually supported by the business.

Do not fabricate:

- Certifications
- Customer numbers
- Lab results
- Reviews
- Medical benefits
- Awards
- Statistics

If information is unavailable, use neutral placeholders or request the real data.

---

# 12. Product Benefits

Create a section that explains the product's key benefits.

Use 3–6 benefit cards.

Example:

```txt
Pure Ingredients
Lab Tested
Easy Daily Use
Premium Quality
Carefully Sourced
No Unnecessary Additives
```

Each card should contain:

- Icon/visual
- Short heading
- 1–2 sentence explanation

Avoid large paragraphs.

---

# 13. Product Story

Create a brand/product story section.

Purpose:

- Explain where the product comes from
- Explain sourcing
- Explain quality process
- Build emotional connection
- Increase perceived value

Use a split layout:

```txt
Image | Story
```

or:

```txt
Story | Image
```

Keep the copy concise and credible.

---

# 14. Science / Purity Section

The science section should build trust without making unsupported medical claims.

Recommended content:

```txt
Ingredient
Source
Processing
Testing
Purity
Quality Control
```

Use visual hierarchy rather than large amounts of text.

If scientific claims are supplied by the client, present them accurately.

Do not independently create medical claims.

---

# 15. Product Details

Include a clear product information section.

Possible fields:

```txt
Product Name
Size
Quantity
Ingredients
Serving Size
Usage
Storage
Country of Origin
Price
Discount
Availability
```

The purchase information must be easy to scan.

---

# 16. Pricing Section

Pricing must be visually prominent.

Recommended structure:

```txt
Product Name

Original Price
Current Price
Discount

Quantity Selector

[ ADD TO CART ]

Shipping / Delivery Information
```

Use clear price hierarchy.

Example:

```txt
₹1999
₹1499
SAVE 25%
```

Only use real pricing supplied by the business.

Never invent prices.

---

# 17. Cart Functionality

Because this is a single-page e-commerce website, cart functionality should remain lightweight.

Use Vanilla JavaScript.

Recommended features:

```txt
Add to Cart
Increase Quantity
Decrease Quantity
Remove Item
Cart Count
Cart Total
```

Use Bootstrap Offcanvas or Modal for the cart.

Example:

```txt
Cart
----------------
Product
Quantity
Price

Subtotal

[ CHECKOUT ]
```

For a static frontend prototype, cart state may use:

```txt
localStorage
```

Only use localStorage for non-sensitive client-side state.

Do not store:

- Passwords
- Payment information
- Authentication tokens
- Sensitive customer information

---

# 18. Checkout

If a real payment backend is not provided:

Do NOT pretend that payment is functional.

The checkout CTA can:

- Link to an existing checkout URL
- Open a placeholder checkout state
- Display a "Checkout integration required" message

If a payment gateway is required, explain that backend/payment integration is outside the current static frontend scope and ask before implementing it.

---

# 19. Customer Reviews

Reviews are important social proof.

Recommended structure:

```txt
★★★★★ 4.8/5

Customer Reviews

[Review Card]
Name
Rating
Review
Verified Buyer

[Review Card]
Name
Rating
Review
Verified Buyer
```

Use actual reviews supplied by the business.

Do not fabricate customer identities or testimonials.

If placeholder reviews are required during development, clearly mark them as placeholder content.

---

# 20. FAQ

Use Bootstrap Accordion.

Example:

```txt
What is this product?

How should I use it?

How long does delivery take?

Is it lab tested?

What ingredients are included?

What is the return policy?

How can I contact support?
```

FAQ answers must come from verified business/product information.

Do not create medical advice.

---

# 21. Final CTA

End the page with a strong purchase-oriented CTA.

Example structure:

```txt
Ready to experience premium quality?

Discover the product today.

[ SHOP NOW ]
```

The final CTA should visually stand out.

---

# 22. Footer

Footer should include:

```txt
Logo
Short brand description

Quick Links
Product
Science
Reviews
FAQ
Contact

Customer Support
Shipping
Returns
Privacy
Terms

Social Links

Copyright
```

Only include links that actually exist.

---

# 23. Color System

Use CSS variables in:

```txt
css/style.css
```

Recommended starting palette:

```css
:root {
    --color-primary: #8f0000;
    --color-primary-dark: #650000;
    --color-gold: #c99525;
    --color-gold-light: #e3b84b;
    --color-cream: #fbf8f1;
    --color-white: #ffffff;
    --color-text: #171717;
    --color-muted: #6b6b6b;
    --color-border: #e5d5b4;
}
```

These values are a starting point and may be refined based on the final brand identity.

Do not scatter random hex values throughout HTML.

Prefer CSS variables.

---

# 24. Typography

Use a strong typography hierarchy.

Recommended:

```txt
Display / Headings:
Elegant serif style

Body:
Clean sans-serif
```

Do not introduce external font libraries unless explicitly approved.

Use system fonts or client-provided fonts by default.

Example:

```css
font-family:
Georgia,
"Times New Roman",
serif;
```

for premium display headings where appropriate.

Body text should prioritize readability.

---

# 25. Bootstrap Rules

Use Bootstrap for structure and responsive behavior.

Preferred classes include:

```txt
container
container-fluid
row
col
col-lg-6
col-md-6
d-flex
align-items-center
justify-content-center
gap-*
py-*
my-*
px-*
position-relative
position-absolute
```

Do not fight Bootstrap unnecessarily.

Use custom CSS when the design requires it.

Do not duplicate Bootstrap functionality with large amounts of custom CSS.

---

# 26. Custom CSS Rules

Keep custom styling inside:

```txt
css/style.css
```

Do not place large style blocks inside `index.html`.

Create reusable classes for repeated visual patterns.

Examples:

```txt
.section-title
.section-subtitle
.btn-primary-custom
.btn-outline-gold
.trust-badge
.product-card
.review-card
.gold-divider
```

Avoid excessive one-off classes.

---

# 27. JavaScript Rules

All custom JavaScript should live in:

```txt
js/script.js
```

Use Vanilla JavaScript.

Recommended responsibilities:

```txt
Navbar behavior
Smooth scrolling
Cart state
Quantity controls
Cart total calculation
LocalStorage cart persistence
FAQ interactions where necessary
Form validation
Toast/feedback messages
AOS initialization
```

Use:

```js
document.addEventListener("DOMContentLoaded", () => {
    // initialization
});
```

where appropriate.

Keep functions small and readable.

---

# 28. AOS Animation Rules

Initialize AOS once.

Example:

```js
AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
    offset: 80
});
```

Use animation attributes such as:

```html
data-aos="fade-up"
data-aos="fade-right"
data-aos="fade-left"
data-aos="zoom-in"
```

Use animation delays sparingly:

```html
data-aos-delay="100"
```

Do not animate every element.

Prioritize:

- Hero
- Product
- Benefits
- Story
- Science
- Reviews
- CTA

Animations must enhance the experience rather than slow it down.

---

# 29. Motion / UX Rules

Animations should be:

- Smooth
- Purposeful
- Short
- Non-distracting
- Consistent

Avoid:

- Excessive bouncing
- Constant looping
- Aggressive parallax
- Large layout shifts
- Animation on every text element
- Slow transitions that delay interaction

Respect users who prefer reduced motion.

Use:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

# 30. Responsive Design

The website MUST work on:

```txt
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Use Bootstrap breakpoints.

Mobile is not a smaller desktop layout.

For mobile:

- Stack hero content
- Resize product image
- Simplify navigation
- Make buttons full-width where appropriate
- Maintain readable typography
- Reduce decorative elements
- Keep CTA accessible

Always test:

```txt
320px
375px
425px
768px
1024px
1440px
1920px
```

---

# 31. Mobile Conversion Rules

On mobile:

- Product must appear quickly
- CTA must remain easy to find
- Price must be readable
- Product image must remain prominent
- Navigation must be simple
- Avoid oversized headings
- Avoid horizontal scrolling
- Maintain touch targets of approximately 44px or larger

Consider a sticky mobile purchase CTA if it improves conversion.

Do not add it automatically if it creates UX clutter.

---

# 32. Accessibility

Follow basic WCAG-friendly practices.

Always provide:

```html
alt=""
```

for meaningful images.

Use descriptive alt text:

```html
alt="Black turmeric supplement bottle"
```

Decorative images should use:

```html
alt=""
```

Use semantic HTML:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Buttons must be actual:

```html
<button>
```

when they perform actions.

Links must be actual:

```html
<a>
```

when they navigate.

Ensure:

- Keyboard accessibility
- Visible focus states
- Sufficient color contrast
- Readable text
- Accessible form labels

---

# 33. SEO

Include proper metadata in `index.html`.

At minimum:

```html
<title>Product Name | Brand Name</title>

<meta
    name="description"
    content="Short, accurate product description."
>
```

Also include:

```txt
viewport
canonical
Open Graph metadata
```

when actual URLs are available.

Do not keyword-stuff.

Use one primary:

```html
<h1>
```

per page.

Use proper heading hierarchy:

```txt
H1
H2
H3
```

---

# 34. Performance

Performance is important.

Prefer:

- Optimized images
- WebP/AVIF where supported
- Proper image dimensions
- Lazy loading for below-the-fold images
- Minimal JavaScript
- Minimal DOM complexity
- CDN-loaded stable dependencies
- No unnecessary libraries

For images below the hero:

```html
loading="lazy"
```

Do not lazy-load the primary hero image if it causes a visible delay.

---

# 35. Image Rules

Use real product imagery wherever possible.

Product image requirements:

- High resolution
- Correct aspect ratio
- Clean background where appropriate
- No distortion
- Proper compression
- Consistent visual treatment

Do not generate fake product claims through imagery.

If a product image is unavailable, use a clearly marked placeholder during development.

---

# 36. E-commerce Psychology

The page should follow ethical conversion principles.

Use:

## Above-the-fold clarity

The visitor should understand:

```txt
What is it?
Why should I care?
Why should I trust it?
What should I do next?
```

within the first screen.

## Trust

Use:

```txt
Lab testing
Certifications
Origin
Reviews
Quality process
Guarantees
```

only when verified.

## Social Proof

Use:

```txt
Ratings
Verified reviews
Customer count
```

only when genuine.

## Risk Reduction

Clearly explain:

```txt
Shipping
Returns
Support
Payment
Product details
```

when those policies are available.

## CTA Hierarchy

Primary CTA:

```txt
SHOP NOW
BUY NOW
ADD TO CART
```

Secondary CTA:

```txt
LEARN MORE
VIEW DETAILS
```

Do not make every button look equally important.

---

# 37. Trustworthy Copy Rules

Never fabricate:

- Medical claims
- Clinical claims
- Certifications
- Customer reviews
- Customer counts
- Awards
- Sales numbers
- Lab test results
- Before/after results
- Guarantees
- Shipping promises

If the required information is missing:

```txt
Use a placeholder
OR
Ask the user for verified information
```

Do not invent business facts.

---

# 38. Security

This is a frontend-only/static project.

Never put secrets in:

```txt
index.html
style.css
script.js
```

Never expose:

- API secrets
- Private keys
- Database credentials
- Payment secrets
- Admin credentials

Public configuration is acceptable only when it is intentionally public.

---

# 39. Forms

If the page contains:

```txt
Contact Form
Newsletter Form
Checkout Form
```

client-side validation may be implemented with Vanilla JavaScript.

However:

> Frontend validation is not a security boundary.

If a real backend is required, request approval before introducing backend technologies.

---

# 40. Error Handling

JavaScript should fail gracefully.

Use defensive checks:

```js
const cartElement = document.querySelector("#cart");

if (cartElement) {
    // logic
}
```

Avoid errors caused by missing optional elements.

Do not silently swallow important errors.

Use meaningful console errors during development when necessary.

Remove unnecessary debug logs before production.

---

# 41. Component Philosophy

This is a static HTML project.

Do NOT create a fake component architecture.

Use:

```txt
HTML sections
CSS reusable classes
JavaScript reusable functions
```

Only split HTML into separate files if the project genuinely requires it.

Do not introduce templating engines unless explicitly approved.

---

# 42. Code Quality

Always:

- Use semantic HTML
- Use descriptive class names
- Use descriptive JavaScript function names
- Keep functions small
- Avoid duplicated logic
- Avoid inline JavaScript
- Avoid unnecessary inline CSS
- Keep CSS organized
- Keep JS organized
- Comment only where useful

Avoid:

- Giant JavaScript files with unrelated logic
- Deeply nested CSS
- Duplicate styles
- Magic numbers without explanation
- Dead code
- Unused variables
- Unused CDN libraries

---

# 43. Naming Conventions

HTML:

```txt
kebab-case
```

Example:

```txt
product-section
trust-badge
review-card
```

JavaScript:

```txt
camelCase
```

Example:

```js
updateCartTotal()
renderCart()
addToCart()
```

CSS custom properties:

```txt
--color-primary
--color-gold
--color-text
```

---

# 44. Design Consistency

The entire website must follow one design system.

Maintain consistency in:

```txt
Colors
Typography
Spacing
Border radius
Shadows
Buttons
Cards
Icons
Animations
```

Do not introduce random styles per section.

---

# 45. Visual Hierarchy

Prioritize content in this order:

```txt
1. Product
2. Value proposition
3. CTA
4. Trust
5. Benefits
6. Proof
7. Details
8. FAQ
```

The visitor should never have to search for the product or purchase action.

---

# 46. CTA Rules

Primary CTA should:

- Have strong contrast
- Be visually obvious
- Use action-oriented text
- Have adequate touch area
- Provide hover/focus state
- Work on mobile

Example:

```txt
SHOP NOW
```

Avoid weak CTAs such as:

```txt
Click Here
Submit
Learn
Continue
```

unless context requires them.

---

# 47. Hover Effects

Use subtle hover effects.

Examples:

```css
transform: translateY(-2px);
```

or:

```css
box-shadow
```

Do not over-animate.

Buttons and cards should provide clear interaction feedback.

---

# 48. Scroll Behavior

Use smooth scrolling:

```css
html {
    scroll-behavior: smooth;
}
```

Navigation anchors should correctly target sections.

Example:

```html
<a href="#reviews">Reviews</a>
```

---

# 49. Browser Compatibility

The website should work in modern:

```txt
Chrome
Edge
Firefox
Safari
```

Do not depend on experimental browser APIs.

---

# 50. Testing Checklist

Before considering the page complete, verify:

## Visual

- [ ] Hero matches the approved design direction
- [ ] Product image is sharp
- [ ] Colors are consistent
- [ ] Typography is consistent
- [ ] Buttons are visually consistent
- [ ] Spacing is consistent
- [ ] No overlapping elements

## Responsive

- [ ] 320px
- [ ] 375px
- [ ] 425px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px
- [ ] 1920px

## Functional

- [ ] Navbar works
- [ ] Mobile menu works
- [ ] Anchor navigation works
- [ ] Add to cart works
- [ ] Quantity controls work
- [ ] Remove item works
- [ ] Cart count updates
- [ ] Cart total updates
- [ ] localStorage persistence works if enabled
- [ ] FAQ works
- [ ] CTA links work
- [ ] Forms validate correctly

## Animation

- [ ] AOS initializes correctly
- [ ] Animations are smooth
- [ ] No excessive animations
- [ ] No layout jumps
- [ ] Reduced-motion behavior works

## Accessibility

- [ ] Images have correct alt text
- [ ] Buttons are keyboard accessible
- [ ] Links are keyboard accessible
- [ ] Focus states are visible
- [ ] Contrast is acceptable
- [ ] Forms have labels

## Performance

- [ ] Images optimized
- [ ] No unnecessary dependencies
- [ ] No console errors
- [ ] No broken links
- [ ] No unused scripts
- [ ] No unnecessary animations

---

# 51. AI Development Guardrails

AI may be used for:

- HTML generation
- CSS assistance
- Bootstrap layout generation
- JavaScript debugging
- AOS implementation
- Responsive design assistance
- Accessibility improvements
- SEO improvements
- Performance optimization

AI must NOT:

- Invent business claims
- Invent reviews
- Invent certifications
- Invent medical claims
- Add libraries without approval
- Replace the entire project unnecessarily
- Rewrite working code without reason
- Change the approved design system without approval

---

# 52. New Feature / Library Rule

DO NOT implement:

- New features
- New libraries
- New frameworks
- New architecture
- New design systems
- Alternative technical approaches

without explicit user approval.

If a better approach is identified:

1. Explain why.
2. Explain advantages.
3. Explain disadvantages.
4. Explain project impact.
5. Ask for permission.

Use:

> "This can be implemented with the current stack, but using X would simplify the implementation and improve maintainability. Do you want me to use it?"

Wait for approval.

---

# 53. No Unnecessary Dependencies

The approved stack is:

```txt
HTML5
CSS3
Bootstrap 5 CDN
Vanilla JavaScript
AOS CDN
```

Do not introduce:

```txt
React
Next.js
Vue
Angular
jQuery
Tailwind
Sass
TypeScript
Redux
Axios
Express
Node backend
```

unless explicitly requested.

---

# 54. Existing Code Rule

If modifying an existing project:

Never rewrite:

- Existing HTML
- Existing CSS
- Existing JavaScript
- Existing assets
- Existing functionality

unless explicitly asked.

Prefer:

```txt
Modify existing code
Preserve existing behavior
Make the smallest safe change
```

If a breaking change is necessary:

1. Explain why.
2. Explain impact.
3. Explain migration steps.
4. Ask for permission.

---

# 55. No Overengineering

Always choose:

```txt
Simple
Readable
Stable
Maintainable
Fast
```

over:

```txt
Complex
Clever
Abstract
Experimental
Over-engineered
```

For this project, a well-structured static website is preferred over unnecessary application architecture.

---

# 56. Single-Page Principle

The website should remain a single-page experience.

Use anchor sections:

```txt
#home
#product
#story
#science
#reviews
#faq
#contact
```

Avoid creating multiple pages unless explicitly requested.

---

# 57. Conversion-Focused Section Order

Default recommended order:

```txt
Announcement Bar
↓
Navbar
↓
Hero + Product + CTA
↓
Trust / Certification Strip
↓
Benefits
↓
Product Story
↓
Science / Purity
↓
Product Details + Pricing
↓
Reviews
↓
FAQ
↓
Final CTA
↓
Footer
```

This order can change when there is a strong UX reason.

---

# 58. Final Goal

The finished website should feel:

```txt
Premium
Trustworthy
Elegant
Modern
Fast
Responsive
Conversion-focused
Professional
```

It should look like a real premium e-commerce brand website, not a basic Bootstrap demo.

The final experience should communicate:

> "This is a trustworthy premium product, and I know exactly what to do next."

---

# 59. Final Principle

Whenever there is a choice, prioritize:

```txt
✓ Simplicity
✓ Readability
✓ Performance
✓ Accessibility
✓ Responsiveness
✓ Visual consistency
✓ Conversion clarity
✓ Verified information
✓ Stable technology
```

over:

```txt
✗ Unnecessary libraries
✗ Overengineering
✗ Unsupported claims
✗ Excessive animations
✗ Complex architecture
✗ Experimental APIs
✗ Duplicate code
✗ Visual clutter
```

STRICTLY FOLLOW ALL RULES ABOVE.

NO EXCEPTIONS WITHOUT EXPLICIT USER APPROVAL.
