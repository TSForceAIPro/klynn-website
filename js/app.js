/**
 * KLYNN Cleaning Products - Main JavaScript
 * Handles WhatsApp link generation, product size selection,
 * bulk inquiry form processing, mobile navigation, and customer feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Config Constants
  const WHATSAPP_NUMBER = '923182991474';

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
      mobileToggle.innerHTML = isExpanded 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (mobileToggle) {
          mobileToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        }
      });
    });
  }

  // 2. Sticky Header & Back to Top Observer
  const header = document.getElementById('siteHeader');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Size Pill Selection Handling for Product Cards
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const pills = card.querySelectorAll('.size-pill');
    const waBtn = card.querySelector('.btn-order-wa');
    const productTitle = card.getAttribute('data-product-name') || card.querySelector('.product-card-title')?.textContent.trim();

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const selectedSize = pill.getAttribute('data-size');
        updateProductWAButton(waBtn, productTitle, selectedSize);
      });
    });

    if (waBtn) {
      waBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const activePill = card.querySelector('.size-pill.active');
        const selectedSize = activePill ? activePill.getAttribute('data-size') : 'Standard Size';
        const msg = `Assalam-o-Alaikum KLYNN! I want to order ${productTitle} (${selectedSize}). Please share price & delivery details in Karachi.`;
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
      });
    }
  });

  function updateProductWAButton(btn, title, size) {
    if (!btn) return;
    const msg = `Assalam-o-Alaikum KLYNN! I want to order ${title} (${size}). Please share price & delivery details in Karachi.`;
    btn.setAttribute('data-wa-url', `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
  }

  // 4. Bulk & Wholesale Inquiry Form Submission Handler
  const bulkForm = document.getElementById('bulkInquiryForm');

  if (bulkForm) {
    bulkForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bulkName')?.value.trim() || 'N/A';
      const business = document.getElementById('bulkBusiness')?.value.trim() || 'N/A';
      const phone = document.getElementById('bulkPhone')?.value.trim() || 'N/A';
      const quantity = document.getElementById('bulkQuantity')?.value.trim() || 'As needed';
      const notes = document.getElementById('bulkNotes')?.value.trim() || 'None';

      const checkedBoxes = bulkForm.querySelectorAll('input[name="bulkProducts"]:checked');
      const selectedProducts = Array.from(checkedBoxes).map(cb => cb.value);

      const productsStr = selectedProducts.length > 0 ? selectedProducts.join(', ') : 'All/Multiple Products';

      const bulkMessage = `*KLYNN Bulk / Wholesale Inquiry*\n\n` +
        `*Name:* ${name}\n` +
        `*Business / Sector:* ${business}\n` +
        `*Phone:* ${phone}\n` +
        `*Products Requested:* ${productsStr}\n` +
        `*Quantity:* ${quantity}\n` +
        `*Notes:* ${notes}\n\n` +
        `*Location:* Karachi`;

      const targetWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bulkMessage)}`;
      window.open(targetWaUrl, '_blank');
    });
  }

  // 5. Original Customer Feedback Form Handler
  const feedbackForm = document.getElementById('feedbackForm');
  const reviewsList = document.getElementById('reviewsList');
  const noReviewsPlaceholder = document.getElementById('noReviewsPlaceholder');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('feedbackName')?.value.trim() || 'Customer';
      const area = document.getElementById('feedbackArea')?.value.trim() || 'Karachi';
      const product = document.getElementById('feedbackProduct')?.value || 'KLYNN Products';
      const rating = document.getElementById('feedbackRating')?.value || '5/5';
      const text = document.getElementById('feedbackText')?.value.trim() || '';

      if (noReviewsPlaceholder) {
        noReviewsPlaceholder.style.display = 'none';
      }

      const reviewCard = document.createElement('div');
      reviewCard.className = 'user-review-card';
      reviewCard.innerHTML = `
        <div class="user-review-meta">
          <span class="user-review-name">${escapeHTML(name)} (${escapeHTML(area)})</span>
          <span class="user-review-rating">${escapeHTML(rating)}</span>
        </div>
        <p class="user-review-text">"${escapeHTML(text)}"</p>
        <div class="user-review-prod">Product Used: ${escapeHTML(product)}</div>
      `;

      reviewsList?.prepend(reviewCard);

      const reviewWaMsg = `*New Customer Review for KLYNN*\n\n` +
        `*Name:* ${name}\n` +
        `*Area:* ${area}\n` +
        `*Product Used:* ${product}\n` +
        `*Rating:* ${rating}\n` +
        `*Feedback:* "${text}"`;

      const targetWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(reviewWaMsg)}`;
      
      feedbackForm.reset();
      window.open(targetWaUrl, '_blank');
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // 6. Direct WhatsApp links
  const directWaBtns = document.querySelectorAll('[data-wa-direct]');
  directWaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customMsg = btn.getAttribute('data-wa-message') || 'Assalam-o-Alaikum KLYNN! I would like to inquire about your cleaning products range in Karachi.';
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMsg)}`;
      window.open(waUrl, '_blank');
    });
  });
});
