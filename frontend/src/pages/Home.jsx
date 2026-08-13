import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import Stats from "../components/Stats";
import Partners from "../components/Partners";
import { IconUser, IconBuilding, IconArrowRight, IconLayers, IconShield, IconSparkle, IconPhone, IconWhatsApp, IconArrowUpRight } from "../components/icons";
import { waLink, PHONE_TEL, PHONE_DISPLAY, MAPS_DIR, HERO_BG, HISTORY_IMG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } } };

export default function Home() {
  const { t } = useLang();
  const trustIcons = [<IconLayers />, <IconShield />, <IconSparkle />];

  return (
    <PageFade>
      <section className="hero" id="inicio" data-testid="hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.home})` }} />
        <div className="hero-blob b1" />
        <div className="hero-blob b2" />
        <div className="hero-grid-overlay" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show" className="hero-inner">
            <motion.p variants={item} className="hero-eyebrow">{t.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{t.hero.titleA}<br /> <em>{t.hero.titleEm}</em>{t.hero.titleB}</motion.h1>
            <motion.p variants={item} className="hero-sub">{t.hero.sub}</motion.p>

            <motion.div variants={item} className="hero-split">
              <Link to="/personas" className="split-card persona" data-testid="hero-persona">
                <span className="split-icon"><IconUser /></span>
                <h3>{t.paths.persona.title}</h3>
                <p>{t.paths.persona.desc}</p>
                <span className="card-cta">{t.cta.viewServices} <IconArrowRight /></span>
              </Link>
              <Link to="/empresas" className="split-card empresa" data-testid="hero-empresa">
                <span className="split-icon"><IconBuilding /></span>
                <h3>{t.paths.empresa.title}</h3>
                <p>{t.paths.empresa.desc}</p>
                <span className="card-cta">{t.cta.viewServices} <IconArrowRight /></span>
              </Link>
            </motion.div>

            <motion.div variants={item} className="hero-trust">
              {t.hero.trust.map((tx, i) => (
                <span key={i}>{trustIcons[i]} {tx}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="scroll-cue"><span>{t.hero.scroll}</span><span className="dot-track" /></div>
      </section>

      <Stats />

      {/* Resumen historia */}
      <section className="about section-pad">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="eyebrow">{t.homeAbout.eyebrow}</p>
              <h2>{t.homeAbout.title}</h2>
              <p>{t.homeAbout.text}</p>
              <Link to="/nosotros" className="btn btn-navy">{t.homeAbout.cta} <IconArrowRight /></Link>
            </div>
            <div className="about-photo framed reveal">
              <img src={HISTORY_IMG} alt="Fachada de Laboratorios Horvath" loading="lazy" />
              <div className="caption">
                <strong>Laboratorio Horvath</strong>
                <span>Av. Aviadores del Chaco N° 2530 · Asunción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      {/* CTA contacto */}
      <section className="home-contact section-pad">
        <div className="container">
          <div className="section-head center reveal">
            <h2>{t.homeContact.title}</h2>
            <p>{t.homeContact.sub}</p>
          </div>
          <div className="home-contact-actions reveal">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-navy"><IconPhone /> {PHONE_DISPLAY}</a>
            <a href={waLink(t.wa.general)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {t.cta.whatsapp}</a>
            <a href={MAPS_DIR} target="_blank" rel="noopener noreferrer" className="btn btn-violet"><IconArrowUpRight /> {t.cta.directions}</a>
            <Link to="/contacto" className="btn btn-ghost">{t.cta.contactUs} <IconArrowRight /></Link>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
