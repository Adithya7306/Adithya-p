/**
 * ========================================================
 * ADITHYA P - ASPIRING DATA ANALYST PORTFOLIO SCRIPTS
 * ========================================================
 * Features:
 * 1. Mobile Navbar Auto-Collapse on Link Click
 * 2. Navbar Background Blur & Shadow on Scroll
 * 3. Active Nav Link ScrollSpy & Smooth Scrolling
 * 4. Scroll-Reveal Animations (IntersectionObserver)
 * 5. Back-to-Top Floating Button
 * 6. Contact Form Validation with Realistic Static Site Feedback
 * 7. Dynamic Automatic Copyright Year
 * 8. Respects prefers-reduced-motion
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----------------------------------------------------
  // 1. Dynamic Automatic Copyright Year
  // ----------------------------------------------------
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // ----------------------------------------------------
  // 2. Navbar Scroll Style & Mobile Auto-Collapse
  // ----------------------------------------------------
  const mainNavbar = document.getElementById('mainNavbar');
  const navbarCollapse = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-brand');

  const handleNavbarScroll = () => {
    if (window.scrollY > 40) {
      mainNavbar.classList.add('navbar-scrolled');
    } else {
      mainNavbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  // Collapse mobile menu after clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Use Bootstrap's collapse instance if available, or trigger click
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // ----------------------------------------------------
  // 3. Active Nav Link Indicator (ScrollSpy enhancement)
  // ----------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinkMap = {};
  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      navLinkMap[href.substring(1)] = link;
    }
  });

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 120;
    let currentSectionId = '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      Object.keys(navLinkMap).forEach((id) => {
        if (id === currentSectionId) {
          navLinkMap[id].classList.add('active');
        } else {
          navLinkMap[id].classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // ----------------------------------------------------
  // 4. Back to Top Button
  // ----------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 320) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // ----------------------------------------------------
  // 5. Scroll-Reveal Animations (IntersectionObserver)
  // ----------------------------------------------------
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion) {
    // If reduced motion is preferred, reveal immediately without animation
    revealElements.forEach((el) => el.classList.add('revealed'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const delay = target.getAttribute('data-reveal-delay');

          if (delay) {
            setTimeout(() => {
              target.classList.add('revealed');
            }, parseInt(delay, 10));
          } else {
            target.classList.add('revealed');
          }

          observer.unobserve(target); // Reveal only once for performance
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // ----------------------------------------------------
  // 6. Contact Form Validation & Realistic Feedback
  // ----------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddress');
  const messageInput = document.getElementById('messageText');
  const formFeedback = document.getElementById('formFeedback');

  // Simple RFC 5322 compliant email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const validateField = (input, isValid, errorMsgId, customErrorMsg) => {
    const feedbackEl = document.getElementById(errorMsgId);
    if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      return true;
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      if (feedbackEl && customErrorMsg) {
        feedbackEl.textContent = customErrorMsg;
      }
      return false;
    }
  };

  const checkFullName = () => {
    const val = fullNameInput.value.trim();
    return validateField(
      fullNameInput,
      val.length >= 2,
      'fullNameFeedback',
      val.length === 0 ? 'Full name is required.' : 'Please enter at least 2 characters.'
    );
  };

  const checkEmail = () => {
    const val = emailInput.value.trim();
    return validateField(
      emailInput,
      emailRegex.test(val),
      'emailFeedback',
      val.length === 0 ? 'Email address is required.' : 'Please enter a valid email format (e.g., name@example.com).'
    );
  };

  const checkMessage = () => {
    const val = messageInput.value.trim();
    return validateField(
      messageInput,
      val.length >= 10,
      'messageFeedback',
      val.length === 0 ? 'Message content is required.' : 'Please enter at least 10 characters.'
    );
  };

  // Real-time input listeners to remove error state as user types
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      if (fullNameInput.classList.contains('is-invalid')) checkFullName();
    });
    fullNameInput.addEventListener('blur', checkFullName);
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('is-invalid')) checkEmail();
    });
    emailInput.addEventListener('blur', checkEmail);
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      if (messageInput.classList.contains('is-invalid')) checkMessage();
    });
    messageInput.addEventListener('blur', checkMessage);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Trigger all checks
      const isNameValid = checkFullName();
      const isEmailValid = checkEmail();
      const isMessageValid = checkMessage();

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        // Focus first invalid element
        if (!isNameValid) fullNameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else if (!isMessageValid) messageInput.focus();

        if (formFeedback) {
          formFeedback.className = 'alert alert-danger mb-4';
          formFeedback.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i> Please correct the highlighted errors before submitting.';
          formFeedback.classList.remove('d-none');
        }
        return;
      }

      // Input is valid!
      const userName = fullNameInput.value.trim();
      const userEmail = emailInput.value.trim();
      const userMessage = messageInput.value.trim();

      // Encode for direct mailto link fallback
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${userName}`);
      const mailtoBody = encodeURIComponent(`Name: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${userMessage}`);
      const mailtoUrl = `mailto:adithya123anitha@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Display transparent, helpful feedback that adheres to requirements
      if (formFeedback) {
        formFeedback.className = 'alert alert-success p-3 rounded-3 mb-4';
        formFeedback.innerHTML = `
          <div class="d-flex align-items-start gap-2">
            <i class="fa-solid fa-circle-check fs-5 text-success mt-1"></i>
            <div>
              <h5 class="alert-heading h6 fw-bold mb-1">Validation Passed! Thank you, ${escapeHTML(userName)}.</h5>
              <p class="small mb-2 text-light">
                Your input has been successfully verified by browser client-side validation.
              </p>
              <div class="p-2 rounded-2 bg-dark bg-opacity-50 border border-secondary-subtle small mb-3">
                <i class="fa-solid fa-info-circle text-info me-1"></i>
                <strong>Notice:</strong> As this is a static frontend website without an active email server, your message was not transmitted across the internet.
              </div>
              <a href="${mailtoUrl}" class="btn btn-sm btn-outline-light">
                <i class="fa-regular fa-paper-plane me-1"></i> Launch Email App with Pre-Filled Details
              </a>
            </div>
          </div>
        `;
        formFeedback.classList.remove('d-none');
      }

      // Reset form controls & classes
      contactForm.reset();
      [fullNameInput, emailInput, messageInput].forEach((el) => {
        el.classList.remove('is-valid');
        el.classList.remove('is-invalid');
      });

      // Scroll feedback into view
      formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Security helper to escape HTML inside dynamic strings
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
