import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import BackToTop from "./BackToTop";
import { useLang } from "../i18n/LanguageContext";

// Header scroll state — attached once
function useHeaderScroll() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      if (window.scrollY > 40) header?.classList.add("scrolled");
      else header?.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

// Reveal + counters + stagger — re-run on every route change and language change
function useScrollAnimations(dep) {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal-stagger").forEach((group) => {
        Array.from(group.children).forEach((child, i) => child.style.setProperty("--i", i));
      });

      const revealEls = document.querySelectorAll(".reveal:not(.in)");
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
        { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));

      const counters = document.querySelectorAll("[data-count]:not(.done)");
      const animateCount = (el) => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1500, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else { el.textContent = target + suffix; el.classList.add("done"); }
        };
        requestAnimationFrame(tick);
      };
      const cio = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } }),
        { threshold: 0.6 }
      );
      counters.forEach((el) => cio.observe(el));
    });
    return () => cancelAnimationFrame(raf);
  }, [dep]);
}

export default function Layout() {
  const location = useLocation();
  const { lang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  useHeaderScroll();
  useScrollAnimations(`${location.pathname}-${lang}`);

  useEffect(() => { document.documentElement.classList.add("js"); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" }); }, [location.pathname]);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main"><Outlet /></main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
