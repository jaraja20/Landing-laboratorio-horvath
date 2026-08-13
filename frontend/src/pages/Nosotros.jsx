import React from "react";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import { IconInstagram } from "../components/icons";
import { ICON_MAP } from "../components/iconMap";
import { INSTAGRAM_URL } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Nosotros() {
  const { t } = useLang();
  const n = t.nosotros;

  return (
    <PageFade>
      <section className="page-hero nosotros-hero" data-testid="nosotros-hero">
        <div className="hero-blob b1" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow">{n.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{n.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{n.hero.sub}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Historia + equipo */}
      <section className="about section-pad">
        <div className="container">
          <div className="history-grid">
            <div className="history-copy reveal">
              {n.history.map((para, i) => <p key={i}>{para}</p>)}
              <blockquote>{n.quote}</blockquote>
            </div>
            <div className="team-col reveal-stagger reveal">
              {n.team.map((m) => (
                <figure className="team-card" key={m.name}>
                  <img src={m.img} alt={m.name} loading="lazy" />
                  <figcaption>
                    <strong>{m.name}</strong>
                    <span>{m.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="values-section section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{n.valuesTitle}</h2></div>
          <div className="values-grid reveal-stagger reveal">
            {n.values.map(({ icon, label }) => {
              const Ico = ICON_MAP[icon];
              return (
                <div className="value-card" key={label}>
                  <span className="value-icon"><Ico /></span>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Stats />

      {/* Galería */}
      <section className="gallery section-pad" id="galeria" data-testid="gallery">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">{n.galleryTitle}</p>
            <h2>{n.galleryTitle}</h2>
            <p>{n.gallerySub}</p>
          </div>
          <Gallery />
        </div>
      </section>

      <Partners />

      {/* Instagram CTA */}
      <section className="ig-band section-pad">
        <div className="container">
          <a className="ig-card reveal" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-testid="instagram-link">
            <span className="ig-icon"><IconInstagram /></span>
            <div>
              <h3>{n.igTitle}</h3>
              <span>{n.igCta}</span>
            </div>
          </a>
        </div>
      </section>
    </PageFade>
  );
}
