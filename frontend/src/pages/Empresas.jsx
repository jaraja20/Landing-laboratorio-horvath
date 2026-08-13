import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import { IconArrowRight, IconArrowUpRight, IconCheck, IconWhatsApp, IconShield, IconSparkle, IconBuilding } from "../components/icons";
import { ICON_MAP } from "../components/iconMap";
import { waLink } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const BENEFIT_ICON = { shield: <IconShield />, sparkle: <IconSparkle />, building: <IconBuilding /> };

export default function Empresas() {
  const { t } = useLang();
  const e = t.empresas;

  return (
    <PageFade>
      <section className="page-hero empresas-hero" data-testid="empresas-hero">
        <div className="hero-blob b2" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow pink">{e.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{e.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{e.hero.sub}</motion.p>
            <motion.div variants={item} className="page-hero-actions">
              <a href={waLink(`${e.hero.title}. ${e.intro}`)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {t.cta.quote}</a>
              <Link to="/contacto" className="btn btn-outline">{t.cta.contactUs} <IconArrowUpRight /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="services-empresas section-pad" id="servicios-empresas" data-testid="services-empresas">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">{e.hero.eyebrow}</p>
            <h2>{e.servicesTitle}</h2>
            <p>{e.intro}</p>
          </div>
          <div className="service-grid detailed reveal-stagger reveal">
            {e.services.map((s) => {
              const Ico = ICON_MAP[s.icon];
              return (
                <div className="service-card" key={s.title} data-testid={`service-empresa-${s.icon}`}>
                  <span className="service-icon"><Ico /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="info-bullets">
                    {s.points.map((pt) => <li key={pt}><IconCheck /> {pt}</li>)}
                  </ul>
                  <a className="card-cta" href={waLink(`${t.wa.empresaPrefix} ${s.title} ${t.wa.empresaSuffix}`)} target="_blank" rel="noopener noreferrer">
                    {t.cta.quote} <IconArrowRight />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="benefits section-pad">
        <div className="container">
          <div className="section-head center reveal">
            <h2>{e.benefitsTitle}</h2>
          </div>
          <div className="benefits-grid reveal-stagger reveal">
            {e.benefits.map((b) => (
              <div className="benefit-card" key={b.title}>
                <span className="benefit-icon">{BENEFIT_ICON[b.icon]}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band empresas section-pad">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-icon"><IconBuilding /></div>
            <h2>{e.ctaTitle}</h2>
            <p>{e.ctaText}</p>
            <div className="page-hero-actions center">
              <a href={waLink(`${e.ctaTitle}. ${e.ctaText}`)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {t.cta.quote}</a>
              <Link to="/contacto" className="btn btn-outline">{t.cta.contactUs} <IconArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
