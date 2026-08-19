(() => {
  "use strict";

  /* Mark JS as active so CSS can safely hide .reveal elements pre-animation
     (see html.js rules in style.css) — without this flag, no-JS visitors
     would be stuck with invisible content. */
  document.documentElement.classList.add("js");

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuClose = document.querySelector(".mobile-menu-close");

  function openMenu() {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
    menuToggle.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");
  }
  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);
  mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    // Safety net: if for any reason an element never gets flagged as
    // intersecting (observer timing edge-cases, elements hidden then shown,
    // etc.), force it visible after a short delay instead of leaving it
    // permanently at opacity:0.
    window.setTimeout(() => {
      revealEls.forEach((el) => el.classList.add("in"));
    }, 2500);
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* Stagger index for children of .reveal-stagger */
  document.querySelectorAll(".reveal-stagger").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty("--i", i);
    });
  });

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const startVal = 0;
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = startVal + (target - startVal) * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => countIO.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
  }

  /* ---------- Contact form -> WhatsApp handoff ---------- */
  const contactForm = document.querySelector("#contact-form");
  const WA_NUMBER = "595984736008";

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector("#cf-name").value.trim();
    const phone = contactForm.querySelector("#cf-phone").value.trim();
    const service = contactForm.querySelector("#cf-service").value;
    const message = contactForm.querySelector("#cf-message").value.trim();

    let text = `Hola, soy ${name || "un/a interesado/a"}.`;
    if (service) text += ` Quisiera consultar sobre: ${service}.`;
    if (message) text += ` ${message}`;
    if (phone) text += ` (Mi teléfono: ${phone})`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Active nav link on scroll (nice-to-have) ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const navIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.main-nav a[href="#${id}"]`);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => navIO.observe(s));
  }
})();
