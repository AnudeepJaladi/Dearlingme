/* ===================================================================
   DEARLING.ME — Main JavaScript
   Cart, UI interactions, animations
   =================================================================== */

'use strict';

/* ===================================================================
   CART SYSTEM
   =================================================================== */
const CART_KEY = 'dearlingme_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += (product.qty || 1);
  } else {
    cart.push({ ...product, qty: product.qty || 1 });
  }
  saveCart(cart);
  showToast(`Added to cart — ${product.name}`, 'success');
  animateCartButton();
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function updateCartQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
  }
}

function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

function getCartSubtotal() {
  return getCart().reduce((s, i) => s + (i.price * i.qty), 0);
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
}

function animateCartButton() {
  const btn = document.querySelector('.cart-btn');
  if (!btn) return;
  btn.classList.add('bump');
  setTimeout(() => btn.classList.remove('bump'), 400);
}

/* ===================================================================
   TOAST
   =================================================================== */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icon = type === 'success' ? '✓' : '⚠';
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3200);
}

/* ===================================================================
   PROMO BANNER
   =================================================================== */
function initPromoBanner() {
  const closeBtn = document.querySelector('.promo-close');
  const banner   = document.querySelector('.promo-banner');
  if (!closeBtn || !banner) return;
  closeBtn.addEventListener('click', () => {
    banner.style.height  = banner.offsetHeight + 'px';
    banner.style.padding = '0';
    requestAnimationFrame(() => {
      banner.style.transition = 'height 0.4s ease, opacity 0.3s ease, padding 0.3s ease';
      banner.style.height     = '0';
      banner.style.opacity    = '0';
      banner.style.overflow   = 'hidden';
    });
  });
}

/* ===================================================================
   STICKY HEADER
   =================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===================================================================
   MOBILE NAV
   =================================================================== */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn  = document.querySelector('.mobile-nav-close');
  if (!hamburger || !mobileNav) return;

  const open  = () => { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { mobileNav.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  mobileNav.addEventListener('click', e => { if (e.target === mobileNav) close(); });
}

/* ===================================================================
   FAQ ACCORDION
   =================================================================== */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ===================================================================
   PRODUCT TABS
   =================================================================== */
function initTabs() {
  document.querySelectorAll('.tabs-nav').forEach(nav => {
    nav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target   = btn.dataset.tab;
        const tabGroup = btn.closest('.product-tabs');
        nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (tabGroup) {
          tabGroup.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
          const pane = tabGroup.querySelector(`[data-tab="${target}"]`);
          if (pane) pane.classList.add('active');
        }
      });
    });
  });
}

/* ===================================================================
   QUANTITY SELECTORS
   =================================================================== */
function initQtySelectors() {
  document.querySelectorAll('.qty-control').forEach(ctrl => {
    const minus = ctrl.querySelector('.qty-minus');
    const plus  = ctrl.querySelector('.qty-plus');
    const num   = ctrl.querySelector('.qty-num');
    if (!minus || !plus || !num) return;

    minus.addEventListener('click', () => {
      const v = parseInt(num.textContent, 10);
      if (v > 1) num.textContent = v - 1;
    });
    plus.addEventListener('click', () => {
      num.textContent = parseInt(num.textContent, 10) + 1;
    });
  });
}

/* ===================================================================
   VARIANT SELECTORS (size / colour)
   =================================================================== */
function initVariantSelectors() {
  document.querySelectorAll('.size-options').forEach(group => {
    group.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.colour-options').forEach(group => {
    group.querySelectorAll('.colour-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        group.querySelectorAll('.colour-swatch').forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
      });
    });
  });
}

/* ===================================================================
   PRODUCT GALLERY
   =================================================================== */
function initGallery() {
  const main   = document.querySelector('.gallery-main');
  const thumbs = document.querySelectorAll('.gallery-thumb');
  if (!main || !thumbs.length) return;

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const emoji = thumb.dataset.emoji;
      const img   = thumb.dataset.img;
      if (emoji) {
        main.textContent = emoji;
        const existImg = main.querySelector('img');
        if (existImg) existImg.remove();
      } else if (img) {
        main.innerHTML = `<img src="${img}" alt="Product view ${i + 1}">`;
      }
    });
  });
}

/* ===================================================================
   WISHLIST TOGGLE
   =================================================================== */
function initWishlist() {
  document.querySelectorAll('.product-card-wish').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const active = btn.classList.toggle('active');
      btn.textContent = active ? '❤️' : '🤍';
      showToast(active ? 'Added to wishlist' : 'Removed from wishlist', 'success');
    });
  });
}

/* ===================================================================
   ADD TO CART BUTTONS
   =================================================================== */
function initAddToCartButtons() {
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id    = btn.dataset.addCart;
      const name  = btn.dataset.name  || 'Product';
      const price = parseFloat(btn.dataset.price) || 0;
      const emoji = btn.dataset.emoji || '🛍';

      const qtyEl = document.querySelector('.qty-num');
      const qty   = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;

      addToCart({ id, name, price, emoji, qty });
    });
  });
}

/* ===================================================================
   CART PAGE RENDERING
   =================================================================== */
function renderCart() {
  const listEl    = document.querySelector('.cart-items-list');
  const emptyEl   = document.querySelector('.cart-empty');
  const summaryEl = document.querySelector('.cart-summary');
  if (!listEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    listEl.innerHTML    = '';
    if (emptyEl)   emptyEl.style.display   = 'block';
    if (summaryEl) summaryEl.style.display = 'none';
    return;
  }

  if (emptyEl)   emptyEl.style.display   = 'none';
  if (summaryEl) summaryEl.style.display = '';

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-img">${item.emoji || '🛍'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Qty: ${item.qty}</div>
        <div class="qty-control">
          <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <button class="cart-remove-btn" data-remove="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');

  // Bind cart item events
  listEl.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => { updateCartQty(btn.dataset.id, -1); renderCart(); updateSummary(); });
  });
  listEl.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => { updateCartQty(btn.dataset.id, +1); renderCart(); updateSummary(); });
  });
  listEl.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => { removeFromCart(btn.dataset.remove); renderCart(); updateSummary(); showToast('Item removed', 'success'); });
  });

  updateSummary();
}

function updateSummary() {
  const subtotal  = getCartSubtotal();
  const shipping  = subtotal >= 50 ? 0 : 5.99;
  const total     = subtotal + shipping;

  const setVal = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  setVal('.sum-subtotal', `$${subtotal.toFixed(2)}`);
  setVal('.sum-shipping', shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`);
  setVal('.sum-total',    `$${total.toFixed(2)}`);

  const shipEl = document.querySelector('.sum-shipping');
  if (shipEl) shipEl.classList.toggle('free', shipping === 0);
}

/* ===================================================================
   NEWSLETTER
   =================================================================== */
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    if (input && input.value.includes('@')) {
      showToast('Welcome! Your 10% off code is on its way 🎉', 'success');
      input.value = '';
    } else {
      showToast('Please enter a valid email address', 'error');
    }
  });
}

/* ===================================================================
   COUPON CODE
   =================================================================== */
function initCoupon() {
  const btn = document.querySelector('.coupon-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const input = document.querySelector('.coupon-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code === 'NEWBORN10' || code === 'BABY10') {
      showToast('Coupon applied! 10% discount added', 'success');
    } else if (code) {
      showToast('Invalid coupon code', 'error');
    }
  });
}

/* ===================================================================
   ACTIVE NAV LINK
   =================================================================== */
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    const href = (link.getAttribute('href') || '').replace('../', '');
    const isHome = href.includes('index') && (path === '/' || path.endsWith('index.html') || path.endsWith('/'));
    const isPage = path.endsWith(href) && href !== '';
    link.classList.toggle('active', isHome || isPage);
  });
}

/* ===================================================================
   CONTACT FORM
   =================================================================== */
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
    setTimeout(() => {
      showToast('Message sent! We\'ll reply within 24 hours ✓', 'success');
      form.reset();
      if (btn) { btn.textContent = 'Send Message'; btn.disabled = false; }
    }, 1000);
  });
}

/* ===================================================================
   SCROLL ANIMATIONS (Intersection Observer)
   =================================================================== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    .cart-btn.bump { animation: cartBump 0.4s ease; }
    @keyframes cartBump { 0%,100%{transform:scale(1)} 50%{transform:scale(1.25)} }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.product-card, .why-card, .testimonial-card, .category-card, .value-card').forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${(i % 3) + 1}`);
    observer.observe(el);
  });
}

/* ===================================================================
   INIT
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initPromoBanner();
  initStickyHeader();
  initMobileNav();
  initFAQ();
  initTabs();
  initQtySelectors();
  initVariantSelectors();
  initGallery();
  initWishlist();
  initAddToCartButtons();
  initNewsletter();
  initCoupon();
  setActiveNav();
  initContactForm();
  renderCart();
  initScrollAnimations();
});
