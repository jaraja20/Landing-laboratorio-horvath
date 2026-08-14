import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import { IconArrowUpRight, IconCheck, IconWhatsApp, IconHandshake, IconMapPin } from "../components/icons";
import { ICON_MAP } from "../components/iconMap";
import { waLink, HERO_BG, LABORAL_CLIENTS } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Empresas() {
  const { t } = useLang();
  const e = t.empresas;
  const chips = [...LABORAL_CLIENTS, ...LABORAL_CLIENTS];

  return (
    <PageFade>
      <section className="page-hero empresas-hero" data-testid="empresas-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.empresas})` }} />
        <div className="hero-blob b2" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow pink">{e.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{e.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{e.hero.sub}</motion.p>
            <motion.div variants={item} className="page-hero-actions">
              <a href={waLink(t.wa.asesor)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconHandshake /> {t.cta.hablarAsesor}</a>
              <a href={waLink(t.wa.propuesta)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{t.cta.solicitarPropuesta} <IconArrowUpRight /></a>
            </motion.div>
            <motion.p variants={item} className="coverage-note"><IconMapPin /> {e.coverage}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Diferencial: asesor único */}
      <section className="differential section-pad">
        <div className="container">
          <div className="differential-card reveal">
            <span className="differential-icon"><IconHandshake /></span>
            <div>
              <h2>{e.differentialTitle}</h2>
              <p>{e.differentialText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios de salud laboral */}
      <section className="services-empresas section-pad" id="servicios-empresas" data-testid="services-empresas">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">{e.hero.eyebrow}</p>
            <h2>{e.studiesTitle}</h2>
          </div>
          <div className="service-grid reveal-stagger reveal">
            {e.studies.map((s) => {
              const Ico = ICON_MAP[s.icon];
              return (
                <div className="service-card" key={s.title} data-testid={`laboral-${s.icon}`}>
                  <span className="service-icon"><Ico /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a className="card-cta" href={waLink(t.wa.propuesta)} target="_blank" rel="noopener noreferrer">{t.cta.solicitarPropuesta} <IconArrowUpRight /></a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{e.benefitsTitle}</h2></div>
          <div className="benefits-grid reveal-stagger reveal">
            {e.benefits.map((b) => {
              const Ico = ICON_MAP[b.icon];
              return (
                <div className="benefit-card" key={b.title}>
                  <span className="benefit-icon"><Ico /></span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona empresas */}
      <section className="como section-pad" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-head center reveal"><h2>{e.comoTitle}</h2></div>
          <div className="como-grid reveal-stagger reveal">
            {e.como.map((c, i) => (
              <div className="como-step" key={i}>
                <span className="como-num">{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empresas que confían */}
      <section className="clients section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{e.clientsTitle}</h2></div>
        </div>
        <div className="clients-marquee reveal">
          <div className="clients-track">
            {chips.map((c, i) => <span className="client-chip" key={i}>{c}</span>)}
          </div>
        </div>
      </section>

      <section className="cta-band empresas section-pad">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-icon"><IconHandshake /></div>
            <h2>{e.ctaTitle}</h2>
            <p>{e.ctaText}</p>
            <div className="page-hero-actions center">
              <a href={waLink(t.wa.asesor)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {t.cta.hablarAsesor}</a>
              <Link to="/contacto" className="btn btn-outline">{t.cta.solicitarPropuesta} <IconArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
