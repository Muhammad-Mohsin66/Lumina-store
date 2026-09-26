# Assignment Report: Design Template of an Online Store
**Institution:** COMSATS University Islamabad (CUI)  
**Course:** Web Engineering / Data Mining & Web Technologies Lab  
**Assignment:** Design Template of an Online Store (Frontend-Only)  
**Lab Activities Integrated:** Lab Activity 1, Lab Activity 2, and Lab Activity 3  

---

## 1. Executive Summary & Objective

The objective of this assignment is to design and develop a complete, fully functional, responsive, and aesthetically modern **Frontend-Only Online Store Website Template** named **"Lumina Store"**. 

The project strictly adheres to the core web concepts, HTML elements, text formatting, media embedding, and linking strategies introduced in **Lab Activities 1, 2, and 3**. The template operates without any backend dependency while providing interactive client-side functionality (shopping cart state, wishlist persistence via `localStorage`, category filtering, single product details rendering, form validation, and order processing).

---

## 2. Integration of Lab Concepts (Activities 1, 2 & 3)

The project systematically incorporates all foundational web design techniques covered in the lab manual:

| Lab Activity | Core Concepts Covered | Practical Implementation in Lumina Store |
| :--- | :--- | :--- |
| **Lab Activity 1** | Basic HTML document structure, text formatting (`<h1>`-`<h6>`, `<p>`, `<b>`, `<i>`, `<font>`/CSS font styling, `<pre>`, `<hr>`, `<q>`, `<blockquote>`), background colors, comments (`<!-- -->`). | - Clean HTML5 semantic layout (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).<br>- Rich typography with Google Fonts (*Plus Jakarta Sans* & *Space Grotesk*).<br>- Styled announcement top bars, blockquotes for company mission on [about.html](about.html), and formatted code promo snippets. |
| **Lab Activity 2** | Ordered lists (`<ol type="I">`), Unordered lists (`<ul>`), Definition lists (`<dl>`, `<dt>`, `<dd>`), Images (`<img>` with `alt`, `width`, `height`), Video embeds (`<iframe>`). | - Technical specifications tab using `<dl>`, `<dt>`, and `<dd>` on [product-detail.html](product-detail.html).<br>- Ordered list `<ol type="I">` for company principles on [about.html](about.html).<br>- High-resolution tech product images with alt tags.<br>- Embedded product spotlight YouTube video (`<iframe>`) on [index.html](index.html) and [about.html](about.html). |
| **Lab Activity 3** | Hyperlinks (`<a href="...">`), internal page navigation, header/footer linking, external links. | - Complete navigation system connecting all 11 required HTML pages seamlessly.<br>- Interactive product cards linking to specific product details via URL parameters (`?id=...`).<br>- Footer quick links and category filters. |

---

## 3. Required Pages Breakdown

All **11 required pages** have been designed, linked, and validated:

1. **Home Page (`index.html`)**: Features hero banner, announcement top bar, feature highlights grid, top categories overview, featured product showcase grid, and YouTube video embed.
2. **Shop Page (`shop.html`)**: Complete product catalog with real-time text search, category filter checkboxes, sorting options (Price Low-High, High-Low, Rating), and responsive product cards.
3. **Shop by Category Page (`category.html`)**: Category selection grid allowing users to filter products by *Audio*, *Wearables*, *Computing*, *Smart Home*, and *Accessories*.
4. **About Us Page (`about.html`)**: Company history, mission statement with blockquotes (`<blockquote>`, `<q>`), ordered list of core values (`<ol type="I">`), team images, and campus spotlight video.
5. **News & Promotions Page (`news.html`)**: Banner featuring discount code (`LUMINA20`), promotional news cards grid, and product review articles.
6. **Contact Us Page (`contact.html`)**: Contact info with semantic `<address>` block, Google Maps iframe embed, and full contact form.
7. **Single Product Details Page (`product-detail.html`)**: Dynamic product detail viewer with thumbnail image gallery switcher, quantity selector, add-to-cart/wishlist triggers, and technical specs definition list (`<dl>`).
8. **Wishlist Page (`wishlist.html`)**: Displays saved wishlist products from `localStorage` with options to remove or add to cart.
9. **Add to Cart Page (`cart.html`)**: Itemized cart table (`<table>`, `<thead>`, `<tbody>`, `<tr>`), quantity modifier controls, subtotal/shipping/tax calculation, promo code form, and clear cart functionality.
10. **Checkout Page (`checkout.html`)**: Customer information, shipping address inputs, payment method selector (Card, COD), and order summary sidebar.
11. **Thank You / Order Confirmation Page (`thank-you.html`)**: Displays generated Order ID (e.g., `LUM-849201`), delivery timeline, receipt print trigger (`window.print()`), and return to shop link.

---

## 4. File & Project Architecture

```
DM assignment lab 1/
├── index.html              # 1. Home Page
├── shop.html               # 2. Shop Page
├── category.html           # 3. Shop by Category Page
├── about.html              # 4. About Us Page
├── news.html               # 5. News & Promotions Page
├── contact.html            # 6. Contact Us Page
├── product-detail.html     # 7. Single Product Details Page
├── wishlist.html           # 8. Wishlist Page
├── cart.html              # 9. Add to Cart Page
├── checkout.html           # 10. Checkout Page
├── thank-you.html          # 11. Thank You / Order Confirmation Page
├── PROJECT_REPORT.md       # Complete Lab Assignment Report
├── css/
│   └── style.css           # Responsive CSS3 Design System & Theme Tokens
└── js/
    └── app.js              # State Engine (LocalStorage Cart, Wishlist, Filter, Renderers)
```

---

## 5. Technical Highlights & Quality Assurance

- **Responsive Mobile Navigation**: Flexbox/Grid CSS with breakpoint media queries `@media (max-width: 992px)` and drawer menu toggles.
- **Client-Side State Persistence**: Utilizes `localStorage` (`lumina_cart`, `lumina_wishlist`) to preserve state when navigating across all 11 pages.
- **Toast Notifications**: Built-in visual feedback popups when items are added to cart or wishlist.
- **Validation**: Verified with automated script ensuring zero broken links and 100% valid HTML page routes.

---

**Submitted by:** Student (COMSATS University Islamabad)  
**Status:** Completed & Ready for Evaluation
