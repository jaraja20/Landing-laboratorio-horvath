import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import { IconArrowRight, IconArrowUpRight, IconCheck, IconWhatsApp } from "../components/icons";
import { ICON_MAP } from "../components/iconMap";
import { waLink, HERO_BG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function AdvancedScienceHub() {
  const { t } = useLang();
  const a = t.ash;

  return (
    <PageFade>
      <section className="page-hero nosotros-hero" data-testid="ash-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.ash})` }} />
        <div className="hero-blob b1" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow">{a.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{a.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{a.hero.sub}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="services-empresas section-pad">
        <div className="container">
          <div className="section-head center reveal"><p className="eyebrow">{a.hero.eyebrow}</p><h2>{a.intro}</h2></div>
          <div className="service-grid reveal-stagger reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {a.services.map((s) => {
              const Ico = ICON_MAP[s.icon];
              return (
                <div className="service-card" key={s.title} data-testid={`ash-${s.icon}`}>
                  <span className="service-icon"><Ico /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="info-bullets">{s.points.map((pt) => <li key={pt}><IconCheck /> {pt}</li>)}</ul>
                  <a className="card-cta" href={waLink(`${t.wa.ashPrefix} ${s.title}.`)} target="_blank" rel="noopener noreferrer">{t.cta.consult} <IconArrowRight /></a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ash-highlights section-pad" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-head center reveal"><h2>{a.highlightsTitle}</h2></div>
          <div className="exp-grid reveal-stagger reveal">
            {a.highlights.map((h, i) => (
              <div className="exp-card" key={i}>
                <span className="exp-num">{h.num}</span>
                <strong>{h.label}</strong>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band empresas section-pad">
        <div className="container">
          <div className="cta-band-inner reveal">
            <h2>{a.ctaTitle}</h2>
            <p>{a.ctaText}</p>
            <div className="page-hero-actions center">
              <a href={waLink(t.wa.general)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {t.cta.consult}</a>
              <Link to="/contacto" className="btn btn-outline">{t.cta.contactUs} <IconArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
