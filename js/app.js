

const PRODUCTS_DATA = [
  {
    id: "lumina-headphones",
    name: "Lumina Pro Wireless ANC Headphones",
    category: "Audio",
    price: 249.99,
    oldPrice: 299.99,
    rating: 4.9,
    reviews: 128,
    badge: "HOT",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Experience acoustic precision with Hybrid Active Noise Cancellation, custom 40mm titanium drivers, and up to 50 hours of wireless battery life.",
    specs: {
      "Driver Unit": "40mm Titanium Dynamic",
      "Frequency Response": "20Hz - 40,000Hz",
      "Battery Life": "50 Hours (ANC Off), 35 Hours (ANC On)",
      "Bluetooth Version": "5.3 with LDAC / AAC",
      "Charging": "USB-C Fast Charging (10 min = 5 hours)"
    }
  },
  {
    id: "lumina-watch",
    name: "Lumina Ultra Smartwatch Series 7",
    category: "Wearables",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.8,
    reviews: 95,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Premium titanium alloy smartwatch featuring continuous heart rate, SpO2 monitoring, dual-frequency GPS, and 100+ workout modes.",
    specs: {
      "Display": "1.95'' AMOLED Sapphire Glass",
      "Water Resistance": "5 ATM / 50 meters",
      "Sensors": "Heart Rate, SpO2, ECG, Temperature",
      "Battery": "Up to 14 Days Typical Usage"
    }
  },
  {
    id: "lumina-book",
    name: "Lumina X1 Carbon Ultrabook 14''",
    category: "Laptops",
    price: 1299.99,
    oldPrice: 1499.99,
    rating: 5.0,
    reviews: 42,
    badge: "FEATURED",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultra-slim carbon fiber body powered by Intel Core Ultra 7 processor, 32GB LPDDR5X RAM, and stunning 2.8K OLED 120Hz display.",
    specs: {
      "Processor": "Intel Core Ultra 7 155H",
      "RAM & Storage": "32GB RAM + 1TB PCIe 4.0 SSD",
      "Display": "14'' 2.8K OLED HDR 120Hz",
      "Weight": "1.09 kg (2.4 lbs)"
    }
  },
  {
    id: "lumina-bud",
    name: "Lumina Studio Earbuds Pro",
    category: "Audio",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.7,
    reviews: 88,
    badge: "SALE",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"
    ],
    description: "True wireless earbuds with spatial audio tracking, crystal clear quad-mic calls, and Qi wireless charging case.",
    specs: {
      "Audio": "Spatial Audio with Dynamic Head Tracking",
      "Noise Control": "Active Noise Cancellation & Transparency Mode",
      "Battery": "30 Hours total with Wireless Case",
      "Water Resistance": "IPX5 Sweat & Water Resistant"
    }
  },
  {
    id: "lumina-speaker",
    name: "Lumina Soundbar 360 & Subwoofer",
    category: "Smart Home",
    price: 349.99,
    oldPrice: 399.99,
    rating: 4.8,
    reviews: 64,
    badge: "BESTSELLER",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Immersive Dolby Atmos surround sound system with wireless subwoofer and integrated voice assistant support.",
    specs: {
      "Channels": "5.1.2 Surround Sound",
      "Total Power": "450W Output",
      "Connectivity": "HDMI eARC, Optical, AirPlay 2, Bluetooth"
    }
  },
  {
    id: "lumina-keyboard",
    name: "Lumina Craft Wireless Mechanical Keyboard",
    category: "Accessories",
    price: 159.99,
    oldPrice: 189.99,
    rating: 4.8,
    reviews: 77,
    badge: "POPULAR",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Tactile mechanical keyboard with customizable RGB per-key lighting, hot-swappable switches, and aluminum body.",
    specs: {
      "Switches": "Hot-swappable Lumina Linear Red / Tactile Brown",
      "Layout": "75% Compact Design",
      "Battery": "4000mAh (Up to 200 Hours)"
    }
  },
  {
    id: "lumina-charger",
    name: "Lumina 100W GaN Fast Charger",
    category: "Accessories",
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.9,
    reviews: 150,
    badge: "SALE",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Compact 4-port Gallium Nitride (GaN) fast charger capable of simultaneously powering your laptop, phone, and tablet.",
    specs: {
      "Ports": "3x USB-C Power Delivery 3.0 + 1x USB-A QC 4.0",
      "Total Output": "100W Max Output",
      "Safety": "Over-voltage & Over-temperature Protection"
    }
  },
  {
    id: "lumina-hub",
    name: "Lumina Smart Hub Display 10''",
    category: "Smart Home",
    price: 179.99,
    oldPrice: 219.99,
    rating: 4.7,
    reviews: 39,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Central smart home command station with HD touchscreen, stereo speakers, smart camera shutter, and Matter standard support.",
    specs: {
      "Display": "10.1'' HD Touchscreen",
      "Audio": "Dual 2'' Full Range Drivers + Passive Radiator",
      "Compatibility": "Matter, Zigbee, Apple Home, Google Assistant"
    }
  },
  {
    id: "lumina-ring",
    name: "Lumina Smart Health Ring Gen 2",
    category: "Wearables",
    price: 279.99,
    oldPrice: 329.99,
    rating: 4.9,
    reviews: 53,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultra-lightweight titanium smart ring with medical-grade biometric sensors for sleep tracking, HRV analysis, and 7-day battery life.",
    specs: {
      "Material": "Aerospace-Grade Titanium with PVD Coating",
      "Sensors": "Optical PPG, Skin Temperature, 3D Accelerometer",
      "Water Resistance": "10 ATM (100m Submersible)",
      "Battery Life": "7 Days Continuous Usage + Fast Charging Case"
    }
  },
  {
    id: "lumina-monitor",
    name: "Lumina Vision 27'' 4K QD-OLED Studio Monitor",
    category: "Laptops",
    price: 699.99,
    oldPrice: 799.99,
    rating: 4.9,
    reviews: 37,
    badge: "HOT",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Stunning 27-inch 4K QD-OLED display featuring 240Hz refresh rate, 0.03ms response time, 99% DCI-P3 color accuracy, and USB-C 90W power delivery.",
    specs: {
      "Panel Type": "Quantum Dot OLED (3840 x 2160)",
      "Refresh Rate & Response": "240Hz / 0.03ms GtG",
      "Color Gamut": "99% DCI-P3 / Delta E < 1",
      "Ports": "1x USB-C (90W PD), 2x HDMI 2.1, 1x DisplayPort 1.4"
    }
  },
  {
    id: "lumina-light",
    name: "Lumina Glow Smart Ambient Lamp & Lightbar",
    category: "Smart Home",
    price: 89.99,
    oldPrice: 119.99,
    rating: 4.8,
    reviews: 41,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Dynamic RGBIC ambient desk lamp with music sync, screen color mirroring, smart app control, and Apple Home/Matter integration.",
    specs: {
      "Brightness & LEDs": "1200 Lumens / 16 Million RGBIC Colors",
      "Connectivity": "Wi-Fi 2.4GHz + Bluetooth 5.0 / Matter Supported",
      "Features": "Music Rhythm Sync, Screen Reactive Mode, Schedule Timer",
      "Power Supply": "USB-C 24W Power Adapter"
    }
  }
];

const LuminaStore = {
  getCart() {
    const data = localStorage.getItem("lumina_cart");
    return data ? JSON.parse(data) : [];
  },

  saveCart(cart) {
    localStorage.setItem("lumina_cart", JSON.stringify(cart));
    this.updateBadges();
  },

  addToCart(productId, qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += parseInt(qty);
    } else {
      const prod = PRODUCTS_DATA.find(p => p.id === productId);
      if (prod) {
        cart.push({
          id: prod.id,
          name: prod.name,
          price: prod.price,
          image: prod.image,
          category: prod.category,
          qty: parseInt(qty)
        });
      }
    }
    this.saveCart(cart);
    this.showToast(`Added to your cart!`, "success");
  },

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
    this.showToast(`Item removed from cart.`, "info");
  },

  updateCartQty(productId, qty) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, parseInt(qty));
      this.saveCart(cart);
    }
  },

  getWishlist() {
    const data = localStorage.getItem("lumina_wishlist");
    return data ? JSON.parse(data) : [];
  },

  saveWishlist(wishlist) {
    localStorage.setItem("lumina_wishlist", JSON.stringify(wishlist));
    this.updateBadges();
  },

  toggleWishlist(productId) {
    let wishlist = this.getWishlist();
    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      this.showToast("Removed from Wishlist", "info");
    } else {
      wishlist.push(productId);
      this.showToast("Added to Wishlist!", "success");
    }
    this.saveWishlist(wishlist);
    return wishlist.includes(productId);
  },

  updateBadges() {
    const cart = this.getCart();
    const wishlist = this.getWishlist();

    const cartCount = cart.reduce((total, item) => total + item.qty, 0);
    const cartBadges = document.querySelectorAll(".cart-badge-count");
    cartBadges.forEach(el => el.textContent = cartCount);

    const wishlistBadges = document.querySelectorAll(".wishlist-badge-count");
    wishlistBadges.forEach(el => el.textContent = wishlist.length);
  },

  showToast(message, type = "success") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <i class="${type === 'success' ? 'fas fa-check-circle' : 'fas fa-info-circle'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
};

function createProductCardHTML(product) {
  const wishlist = LuminaStore.getWishlist();
  const isWishlisted = wishlist.includes(product.id);

  return `
    <article class="product-card">
      ${product.badge ? `<span class="product-badge ${product.badgeClass}">${product.badge}</span>` : ''}
      <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="handleWishlistClick(event, '${product.id}')" title="Add to Wishlist">
        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
      </button>
      <div class="product-thumb">
        <a href="product-detail.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
      </div>
      <div class="product-details">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">
          <a href="product-detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <span>${product.rating}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn btn-primary btn-sm" onclick="LuminaStore.addToCart('${product.id}')">
            <i class="fas fa-shopping-cart"></i> Add
          </button>
        </div>
      </div>
    </article>
  `;
}

function handleWishlistClick(event, productId) {
  event.preventDefault();
  event.stopPropagation();
  const isActive = LuminaStore.toggleWishlist(productId);
  const btn = event.currentTarget;
  const icon = btn.querySelector("i");
  if (isActive) {
    btn.classList.add("active");
    icon.className = "fas fa-heart";
  } else {
    btn.classList.remove("active");
    icon.className = "far fa-heart";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  LuminaStore.updateBadges();

  const mobileToggleBtn = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const featuredGrid = document.getElementById("featured-products-grid");
  if (featuredGrid) {
    featuredGrid.innerHTML = PRODUCTS_DATA.map(createProductCardHTML).join("");
  }

  const shopGrid = document.getElementById("shop-products-grid");
  if (shopGrid) {
    let currentProducts = [...PRODUCTS_DATA];

    const renderShop = (items) => {
      if (items.length === 0) {
        shopGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
          <i class="fas fa-box-open" style="font-size: 3rem; color: #94A3B8; margin-bottom: 1rem;"></i>
          <h3>No products found matching your filters.</h3>
        </div>`;
      } else {
        shopGrid.innerHTML = items.map(createProductCardHTML).join("");
      }
    };

    renderShop(currentProducts);

    const searchInput = document.getElementById("shop-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = PRODUCTS_DATA.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        renderShop(filtered);
      });
    }

    const categoryCheckboxes = document.querySelectorAll(".category-filter-checkbox");
    if (categoryCheckboxes.length > 0) {
      categoryCheckboxes.forEach(box => {
        box.addEventListener("change", () => {
          const selected = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
          if (selected.length === 0) {
            renderShop(PRODUCTS_DATA);
          } else {
            renderShop(PRODUCTS_DATA.filter(p => selected.includes(p.category)));
          }
        });
      });
    }

    const sortSelect = document.getElementById("shop-sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        const val = e.target.value;
        let sorted = [...currentProducts];
        if (val === "price-low") sorted.sort((a, b) => a.price - b.price);
        if (val === "price-high") sorted.sort((a, b) => b.price - a.price);
        if (val === "rating") sorted.sort((a, b) => b.rating - a.rating);
        renderShop(sorted);
      });
    }
  }

  const categoryPageContainer = document.getElementById("category-page-container");
  if (categoryPageContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("cat");
    const titleEl = document.getElementById("category-title");

    let filtered = PRODUCTS_DATA;
    if (catParam) {
      filtered = PRODUCTS_DATA.filter(p => p.category.toLowerCase() === catParam.toLowerCase());
      if (titleEl) titleEl.textContent = `Category: ${catParam}`;
    }
    categoryPageContainer.innerHTML = filtered.map(createProductCardHTML).join("");
  }

  const detailContainer = document.getElementById("product-detail-section");
  if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const prodId = urlParams.get("id") || "lumina-headphones";
    const product = PRODUCTS_DATA.find(p => p.id === prodId) || PRODUCTS_DATA[0];

    document.getElementById("detail-title").textContent = product.name;
    document.getElementById("detail-category").textContent = product.category;
    document.getElementById("detail-price").textContent = `$${product.price.toFixed(2)}`;
    if (product.oldPrice) {
      document.getElementById("detail-old-price").textContent = `$${product.oldPrice.toFixed(2)}`;
    }
    document.getElementById("detail-description").textContent = product.description;
    document.getElementById("detail-rating").textContent = product.rating;
    document.getElementById("detail-reviews").textContent = `(${product.reviews} customer reviews)`;
    
    const mainImg = document.getElementById("detail-main-img");
    if (mainImg) mainImg.src = product.image;

    const thumbList = document.getElementById("detail-thumb-list");
    if (thumbList && product.gallery) {
      thumbList.innerHTML = product.gallery.map((imgUrl, index) => `
        <div class="thumb-item ${index === 0 ? 'active' : ''}" onclick="switchDetailImage('${imgUrl}', this)">
          <img src="${imgUrl}" alt="Thumbnail">
        </div>
      `).join("");
    }

    let currentQty = 1;
    const qtyInput = document.getElementById("detail-qty-input");
    const decBtn = document.getElementById("detail-qty-minus");
    const incBtn = document.getElementById("detail-qty-plus");

    if (decBtn && incBtn && qtyInput) {
      decBtn.addEventListener("click", () => {
        if (currentQty > 1) {
          currentQty--;
          qtyInput.value = currentQty;
        }
      });
      incBtn.addEventListener("click", () => {
        currentQty++;
        qtyInput.value = currentQty;
      });
    }

    const addCartBtn = document.getElementById("detail-add-cart-btn");
    if (addCartBtn) {
      addCartBtn.addEventListener("click", () => {
        LuminaStore.addToCart(product.id, qtyInput ? qtyInput.value : 1);
      });
    }

    const addWishlistBtn = document.getElementById("detail-wishlist-btn");
    if (addWishlistBtn) {
      addWishlistBtn.addEventListener("click", () => {
        LuminaStore.toggleWishlist(product.id);
      });
    }

    const specsDl = document.getElementById("detail-specs-dl");
    if (specsDl && product.specs) {
      specsDl.innerHTML = Object.entries(product.specs).map(([key, val]) => `
        <dt>${key}</dt>
        <dd>${val}</dd>
      `).join("");
    }
  }

  const cartTableBody = document.getElementById("cart-table-body");
  if (cartTableBody) {
    renderCartPage();
  }

  const wishlistGrid = document.getElementById("wishlist-products-grid");
  if (wishlistGrid) {
    renderWishlistPage();
  }

  const checkoutSummaryList = document.getElementById("checkout-summary-list");
  if (checkoutSummaryList) {
    renderCheckoutPage();
  }
});

function switchDetailImage(src, thumbElement) {
  const mainImg = document.getElementById("detail-main-img");
  if (mainImg) mainImg.src = src;

  const thumbs = document.querySelectorAll(".thumb-item");
  thumbs.forEach(t => t.classList.remove("active"));
  thumbElement.classList.add("active");
}

function switchTab(tabId, btnElement) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(t => t.classList.remove("active"));

  const btns = document.querySelectorAll(".tab-btn");
  btns.forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  btnElement.classList.add("active");
}

function renderCartPage() {
  const cartTableBody = document.getElementById("cart-table-body");
  const cart = LuminaStore.getCart();
  const subtotalEl = document.getElementById("cart-subtotal");
  const totalEl = document.getElementById("cart-total");

  if (cart.length === 0) {
    document.getElementById("cart-content-wrapper").innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; background: var(--surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <i class="fas fa-shopping-bag" style="font-size: 3.5rem; color: #CBD5E1; margin-bottom: 1rem;"></i>
        <h2>Your Shopping Cart is Empty</h2>
        <p style="color: var(--text-muted); margin: 1rem 0 2rem;">Looks like you haven't added any premium products yet.</p>
        <a href="shop.html" class="btn btn-primary">Start Shopping Now</a>
      </div>
    `;
    return;
  }

  let subtotal = 0;
  cartTableBody.innerHTML = cart.map(item => {
    const itemSubtotal = item.price * item.qty;
    subtotal += itemSubtotal;
    return `
      <tr>
        <td>
          <div class="cart-product-item">
            <img src="${item.image}" alt="${item.name}" class="cart-product-img">
            <div>
              <h4 style="font-size: 1rem; font-weight: 700;">${item.name}</h4>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${item.category}</span>
            </div>
          </div>
        </td>
        <td style="font-weight: 700;">$${item.price.toFixed(2)}</td>
        <td>
          <div class="quantity-picker" style="width: 100px; height: 36px;">
            <button class="quantity-btn" onclick="updateCartItemQty('${item.id}', ${item.qty - 1})">-</button>
            <input type="text" class="quantity-input" value="${item.qty}" readonly>
            <button class="quantity-btn" onclick="updateCartItemQty('${item.id}', ${item.qty + 1})">+</button>
          </div>
        </td>
        <td style="font-weight: 700; color: var(--primary);">$${itemSubtotal.toFixed(2)}</td>
        <td>
          <button class="remove-btn" onclick="LuminaStore.removeFromCart('${item.id}'); renderCartPage();" title="Remove item">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");

  const shipping = subtotal > 500 ? 0 : 15.00;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

function updateCartItemQty(id, newQty) {
  if (newQty < 1) return;
  LuminaStore.updateCartQty(id, newQty);
  renderCartPage();
}

function renderWishlistPage() {
  const wishlistGrid = document.getElementById("wishlist-products-grid");
  const wishlistIds = LuminaStore.getWishlist();
  const wishlistedProducts = PRODUCTS_DATA.filter(p => wishlistIds.includes(p.id));

  if (wishlistedProducts.length === 0) {
    wishlistGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; background: var(--surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <i class="far fa-heart" style="font-size: 3.5rem; color: #CBD5E1; margin-bottom: 1rem;"></i>
        <h2>Your Wishlist is Empty</h2>
        <p style="color: var(--text-muted); margin: 1rem 0 2rem;">Save items you love by clicking the heart icon on any product.</p>
        <a href="shop.html" class="btn btn-primary">Explore Products</a>
      </div>
    `;
    return;
  }

  wishlistGrid.innerHTML = wishlistedProducts.map(createProductCardHTML).join("");
}

function renderCheckoutPage() {
  const checkoutSummaryList = document.getElementById("checkout-summary-list");
  const cart = LuminaStore.getCart();

  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  let subtotal = 0;
  checkoutSummaryList.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.95rem;">
        <div>
          <span style="font-weight: 600;">${item.name}</span>
          <span style="color: var(--text-muted);"> x ${item.qty}</span>
        </div>
        <span style="font-weight: 700;">$${itemTotal.toFixed(2)}</span>
      </div>
    `;
  }).join("");

  const shipping = subtotal > 500 ? 0 : 15.00;
  document.getElementById("checkout-subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("checkout-total").textContent = `$${(subtotal + shipping).toFixed(2)}`;

  const form = document.getElementById("checkout-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderId = "LUM-" + Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("lumina_last_order", JSON.stringify({
        orderId: orderId,
        items: cart,
        total: (subtotal + shipping).toFixed(2),
        date: new Date().toLocaleDateString()
      }));

      LuminaStore.saveCart([]);
      window.location.href = `thank-you.html?order=${orderId}`;
    });
  }
}
