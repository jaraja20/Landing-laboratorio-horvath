import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import Testimonials from "../components/Testimonials";
import { ICON_MAP } from "../components/iconMap";
import { IconUser, IconBuilding, IconArrowRight, IconLayers, IconShield, IconSparkle, IconWhatsApp } from "../components/icons";
import { WA_PLAIN, HERO_BG, HISTORY_IMG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } } };

export default function Home() {
  const { t } = useLang();
  const trustIcons = [<IconLayers />, <IconShield />, <IconSparkle />];

  return (
    <PageFade>
      {/* HERO */}
      <section className="hero" id="inicio" data-testid="hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.home})` }} />
        <div className="hero-blob b1" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show" className="hero-inner">
            <motion.p variants={item} className="hero-eyebrow">{t.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{t.hero.titleA}<em>{t.hero.titleEm}</em>{t.hero.titleB}</motion.h1>
            <motion.p variants={item} className="hero-sub">{t.hero.sub}</motion.p>
            <motion.span variants={item} className="hero-divider" />

            <motion.div variants={item} className="hero-ctas">
              <Link to="/pacientes" className="hero-pill primary" data-testid="hero-persona">
                <span className="hero-pill-ico"><IconUser /></span>
                <span className="hero-pill-label">{t.paths.persona.title}</span>
                <IconArrowRight />
              </Link>
              <Link to="/empresas" className="hero-pill light" data-testid="hero-empresa">
                <span className="hero-pill-ico"><IconBuilding /></span>
                <span className="hero-pill-label">{t.paths.empresa.title}</span>
                <IconArrowRight />
              </Link>
            </motion.div>

            <motion.p variants={item} className="hero-tagline">{t.hero.tagline}</motion.p>

            <motion.div variants={item} className="hero-trust">
              {t.hero.trust.map((tx, i) => (
                <span key={i}>{trustIcons[i]} {tx}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="scroll-cue"><span>{t.hero.scroll}</span><span className="dot-track" /></div>
      </section>

      {/* ¿QUÉ HACEMOS? */}
      <section className="que-hacemos section-pad" data-testid="que-hacemos">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">{t.queHacemos.eyebrow}</p>
            <h2>{t.queHacemos.title}</h2>
            <p>{t.queHacemos.sub}</p>
          </div>
          <div className="qh-grid reveal-stagger reveal">
            {t.queHacemos.items.map((it) => {
              const Ico = ICON_MAP[it.icon];
              return (
                <Link to={it.to} className="qh-card" key={it.title} data-testid={`qh-${it.icon}`}>
                  <span className="qh-icon">{Ico ? <Ico /> : null}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                  <span className="card-cta">{t.cta.knowMore} <IconArrowRight /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ HORVATH? */}
      <section className="why-horvath section-pad" data-testid="why-horvath">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">{t.porQue.eyebrow}</p>
            <h2>{t.porQue.title}</h2>
            <p>{t.porQue.sub}</p>
          </div>
          <div className="why-grid reveal-stagger reveal">
            {t.porQue.cards.map((c) => (
              <div className="why-card" key={c.label}>
                <span className="why-num">{c.num}</span>
                <strong>{c.label}</strong>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <Testimonials />

      {/* NUESTRA HISTORIA (breve) */}
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

      {/* CTA FINAL */}
      <section className="home-contact section-pad">
        <div className="container">
          <div className="section-head center reveal">
            <h2>{t.homeContact.title}</h2>
            <p>{t.homeContact.sub}</p>
          </div>
          <div className="home-contact-actions reveal" style={{ flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <a href={WA_PLAIN} target="_blank" rel="noopener noreferrer" className="btn btn-cyan" data-testid="home-wa-btn"><IconWhatsApp /> {t.cta.whatsapp}</a>
            <Link to="/contacto" className="segment-link" data-testid="home-contact-btn">{t.cta.contactUs}</Link>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
