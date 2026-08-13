import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import ServicesPersonas from "./components/ServicesPersonas";
import ServicesEmpresas from "./components/ServicesEmpresas";
import Method from "./components/Method";
import Partners from "./components/Partners";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function useLandingEffects() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    // Header scroll state
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      if (window.scrollY > 40) header?.classList.add("scrolled");
      else header?.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Stagger index for children
    document.querySelectorAll(".reveal-stagger").forEach((group) => {
      Array.from(group.children).forEach((child, i) => child.style.setProperty("--i", i));
    });

    // Reveal on scroll
    const revealEls = document.querySelectorAll(".reveal");
    let revealTimer;
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
        }),
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      revealTimer = window.setTimeout(() => revealEls.forEach((el) => el.classList.add("in")), 2500);
    } else {
      revealEls.forEach((el) => el.classList.add("in"));
    }

    // Animated counters
    const counters = document.querySelectorAll("[data-count]");
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
    };
    let countIO;
    if ("IntersectionObserver" in window) {
      countIO = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) { animateCount(entry.target); countIO.unobserve(entry.target); }
        }),
        { threshold: 0.6 }
      );
      counters.forEach((el) => countIO.observe(el));
    } else {
      counters.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
    let navIO;
    if ("IntersectionObserver" in window && sections.length && navLinks.length) {
      navIO = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.main-nav a[href="#${id}"]`);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        }),
        { rootMargin: "-45% 0px -45% 0px" }
      );
      sections.forEach((s) => navIO.observe(s));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(revealTimer);
    };
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useLandingEffects();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <ServicesPersonas />
        <ServicesEmpresas />
        <Method />
        <Partners />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
