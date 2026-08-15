import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import Breadcrumb from "../components/Breadcrumb";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import { IconInstagram, IconWhatsApp, IconArrowUpRight } from "../components/icons";
import { INSTAGRAM_URL, PRINCIPLE_ICONS, HERO_BG, WA_PLAIN } from "../data";
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

      {/* Historia */}
      <section className="about section-pad">
        <div className="container">
          <div className="history-copy narrow reveal">
            {n.history.map((para, i) => <p key={i}>{para}</p>)}
            <blockquote>{n.quote}</blockquote>
          </div>
        </div>
      </section>

      {/* Origen y liderazgo (2 viñetas) */}
      <section className="origin-leadership section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{n.originLeadershipTitle}</h2></div>
          <div className="ol-grid reveal-stagger reveal">
            <div className="ol-card" data-testid="ol-origin">
              <div className="ol-photo"><img src={raquel.img} alt={raquel.name} loading="lazy" /></div>
              <div>
                <span className="ol-eyebrow">{n.origin.eyebrow}</span>
                <h3>{n.origin.title}</h3>
                <p>{n.origin.text}</p>
              </div>
            </div>
            <div className="ol-card" data-testid="ol-leadership">
              <div className="ol-photo"><img src={gabriela.img} alt={gabriela.name} loading="lazy" /></div>
              <div>
                <span className="ol-eyebrow">{n.leadership.eyebrow}</span>
                <h3>{n.leadership.title}</h3>
                <span className="ol-role">{n.leadership.role}</span>
                <p>{n.leadership.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Una nueva etapa — Beyond Diagnostics */}
      <section className="nueva-etapa section-pad" data-testid="nueva-etapa">
        <div className="container">
          <div className="nueva-etapa-inner reveal">
            <p className="eyebrow">{n.nuevaEtapa.eyebrow}</p>
            <h2>{n.nuevaEtapa.title}</h2>
            <p>{n.nuevaEtapa.text}</p>
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

      {/* CTA final */}
      <section className="cta-band section-pad" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-icon"><IconWhatsApp /></div>
            <h2>{n.ctaBanner.title}</h2>
            <p>{n.ctaBanner.text}</p>
            <div className="page-hero-actions center">
              <a href={WA_PLAIN} target="_blank" rel="noopener noreferrer" className="btn btn-cyan" data-testid="nosotros-wa"><IconWhatsApp /> {t.cta.whatsapp}</a>
              <Link to="/contacto" className="btn btn-outline" data-testid="nosotros-contacto">{t.cta.contactUs} <IconArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
