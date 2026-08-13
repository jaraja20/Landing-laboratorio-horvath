import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import { IconArrowRight, IconArrowUpRight, IconCheck, IconWhatsApp, IconFileText, IconCalendar } from "../components/icons";
import { ICON_MAP } from "../components/iconMap";
import { waLink, MENU_PDF, HERO_BG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Personas() {
  const { t, lang } = useLang();
  const p = t.personas;

  return (
    <PageFade>
      <section className="page-hero personas-hero" data-testid="personas-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.personas})` }} />
        <div className="hero-blob b1" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow">{p.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{p.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{p.hero.sub}</motion.p>
            <motion.div variants={item} className="page-hero-actions">
              <a href={waLink(t.wa.general)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {t.cta.consult}</a>
              <a href={MENU_PDF[lang]} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><IconFileText /> {t.cta.viewMenu}</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="services-personas section-pad" id="servicios-personas" data-testid="services-personas">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">{p.hero.eyebrow}</p>
            <h2>{p.servicesTitle}</h2>
          </div>
          <div className="service-grid detailed reveal-stagger reveal">
            {p.services.map((s) => {
              const Ico = ICON_MAP[s.icon];
              return (
                <div className="service-card" key={s.title} data-testid={`service-persona-${s.icon}`}>
                  <span className="service-icon"><Ico /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="info-bullets">
                    {s.points.map((pt) => <li key={pt}><IconCheck /> {pt}</li>)}
                  </ul>
                  <a className="card-cta" href={waLink(`${t.wa.servicePrefix} ${s.title}.`)} target="_blank" rel="noopener noreferrer">
                    {t.cta.consult} <IconArrowRight />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="menu-block section-pad">
        <div className="container">
          <div className="menu-card reveal">
            <div>
              <p className="eyebrow">{p.menuTitle}</p>
              <h2>{p.menuDesc}</h2>
            </div>
            <a href={MENU_PDF[lang]} target="_blank" rel="noopener noreferrer" className="btn btn-navy"><IconFileText /> {t.cta.viewMenu}</a>
          </div>
        </div>
      </section>

      <section className="cta-band personas section-pad">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-icon"><IconCalendar /></div>
            <h2>{p.ctaTitle}</h2>
            <p>{p.ctaText}</p>
            <div className="page-hero-actions center">
              <a href={waLink(t.wa.agendar)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {t.cta.start}</a>
              <Link to="/contacto" className="btn btn-outline">{t.cta.contactUs} <IconArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
