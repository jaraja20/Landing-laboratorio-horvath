import React from "react";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import { IconInstagram } from "../components/icons";
import { INSTAGRAM_URL, PRINCIPLE_ICONS, HERO_BG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Nosotros() {
  const { t } = useLang();
  const n = t.nosotros;

  return (
    <PageFade>
      <section className="page-hero nosotros-hero" data-testid="nosotros-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.nosotros})` }} />
        <div className="hero-blob b1" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow">{n.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{n.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{n.hero.sub}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="about section-pad">
        <div className="container">
          <div className="history-copy narrow reveal">
            {n.history.map((para, i) => <p key={i}>{para}</p>)}
            <blockquote>{n.quote}</blockquote>
          </div>
        </div>
      </section>

      {/* Dirección científica */}
      <section className="team-section section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{n.teamTitle}</h2></div>
          <div className="team-grid reveal-stagger reveal">
            {n.team.map((m) => (
              <figure className="team-card" key={m.name}>
                <div className="team-photo"><img src={m.img} alt={m.name} loading="lazy" /></div>
                <figcaption>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="exp-section section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{n.experienceTitle}</h2></div>
          <div className="exp-grid reveal-stagger reveal">
            {n.experience.map((x, i) => (
              <div className="exp-card" key={i}>
                <span className="exp-num">{x.num}</span>
                <strong>{x.label}</strong>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hitos e innovación */}
      <section className="milestones-section section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{n.milestonesTitle}</h2></div>
          <div className="milestones-grid reveal-stagger reveal">
            {n.milestones.map((m, i) => (
              <div className="milestone-card" key={i}>
                <span className="milestone-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principios */}
      <section className="values-section section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{n.valuesTitle}</h2></div>
          <div className="principles-grid reveal-stagger reveal">
            {n.values.map((v) => (
              <div className="principle-card" key={v.label} data-testid={`principle-${v.icon}`}>
                <div className="principle-icon"><img src={PRINCIPLE_ICONS[v.icon]} alt={v.label} loading="lazy" /></div>
                <h3>{v.label}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Galería */}
      <section className="gallery section-pad" id="galeria" data-testid="gallery">
        <div className="container">
          <div className="section-head center reveal">
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
