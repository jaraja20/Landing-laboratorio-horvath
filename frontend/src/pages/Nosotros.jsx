import React from "react";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import Breadcrumb from "../components/Breadcrumb";
import Gallery from "../components/Gallery";
import { IconInstagram } from "../components/icons";
import { ICON_MAP } from "../components/iconMap";
import { INSTAGRAM_URL, PRINCIPLE_ICONS, HERO_BG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Nosotros() {
  const { t } = useLang();
  const n = t.nosotros;
  const gabriela = n.team[0];
  const raquel = n.team[1];

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

      <Breadcrumb current={t.nav.nosotros} />

      {/* Intro / misión (concisa) */}
      <section className="about nosotros-intro section-pad">
        <div className="container">
          <div className="history-copy narrow reveal">
            <blockquote>{n.quote}</blockquote>
          </div>
        </div>
      </section>

      {/* Origen y liderazgo — viñeta chica + viñeta grande */}
      <section className="origen-liderazgo section-pad" data-testid="origen-liderazgo">
        <div className="container">
          <div className="ol2-grid reveal">
            {/* Viñeta chica: Origen */}
            <div className="ol2-origin" data-testid="ol-origin" style={{ "--ol-bg": `url(${raquel.img})` }}>
              <span className="ol2-year">{n.origin.year}<i /></span>
              <h3 className="ol2-title">{n.origin.title}</h3>
              {n.origin.paras.map((p, i) => <p key={i}>{p}</p>)}
              <div className="ol2-sign">
                <span className="ol2-sign-name">{n.origin.signature}</span>
                <span className="ol2-sign-role">{n.origin.signatureRole}</span>
              </div>
            </div>

            {/* Viñeta grande: Liderazgo */}
            <div className="ol2-lead" data-testid="ol-leadership">
              <div className="ol2-photo"><img src={gabriela.img} alt={n.leadership.name} loading="lazy" /></div>
              <div className="ol2-lead-copy">
                <span className="ol2-eyebrow">{n.leadership.eyebrow}</span>
                <h3>{n.leadership.name}</h3>
                <span className="ol2-role">{n.leadership.role}</span>
                <p>{n.leadership.text}</p>
                <ul className="ol2-creds">
                  {n.leadership.credentials.map((c) => {
                    const Ico = ICON_MAP[c.icon];
                    return (
                      <li key={c.label}>
                        <span className="ol2-cred-ico">{Ico ? <Ico /> : null}</span>
                        <span>{c.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia (números) */}
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

      {/* Hitos e innovación — timeline horizontal (5) */}
      <section className="milestones-section section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{n.milestonesTitle}</h2></div>
          <div className="timeline reveal-stagger reveal" data-testid="timeline">
            {n.milestones.map((m, i) => (
              <div className="tl-item" key={i}>
                <span className="tl-dot">{String(i + 1).padStart(2, "0")}</span>
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
