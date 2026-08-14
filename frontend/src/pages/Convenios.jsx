import React from "react";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import Partners from "../components/Partners";
import { IconWhatsApp, IconCard, IconHandshake } from "../components/icons";
import { waLink, HERO_BG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Convenios() {
  const { t } = useLang();
  const c = t.convenios;

  return (
    <PageFade>
      <section className="page-hero contacto-hero" data-testid="convenios-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.convenios})` }} />
        <div className="hero-blob b1" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow">{c.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{c.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{c.hero.sub}</motion.p>
            <motion.div variants={item} className="page-hero-actions">
              <a href={waLink(t.wa.cobertura)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconHandshake /> {t.cta.consultarCobertura}</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="cobertura section-pad">
        <div className="container">
          <div className="cobertura-card reveal">
            <div><h2>{c.coberturaTitle}</h2><p>{c.coberturaText}</p></div>
            <a href={waLink(t.wa.cobertura)} target="_blank" rel="noopener noreferrer" className="btn btn-navy"><IconWhatsApp /> {t.cta.consultarCobertura}</a>
          </div>
        </div>
      </section>

      <div id="seguros"><Partners /></div>

      <section className="pagos section-pad" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="pagos-box center reveal">
            <p className="eyebrow"><IconCard /> {c.pagosTitle}</p>
            <div className="pagos-chips">{c.pagos.map((x) => <span key={x} className="chip">{x}</span>)}</div>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
