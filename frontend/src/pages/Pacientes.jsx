import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageFade from "../components/PageFade";
import ProfileExplorer from "../components/ProfileExplorer";
import { IconArrowRight, IconArrowUpRight, IconWhatsApp, IconFileText, IconCalendar, IconCard, IconCheck } from "../components/icons";
import { ICON_MAP } from "../components/iconMap";
import { waLink, MENU_PDF, HERO_BG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const stagger = { show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Pacientes() {
  const { t, lang } = useLang();
  const p = t.pacientes;

  const actionHref = (a) => (a.wa ? waLink(t.wa[a.wa]) : a.to);

  return (
    <PageFade>
      <section className="page-hero personas-hero" data-testid="pacientes-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.personas})` }} />
        <div className="hero-blob b1" />
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-eyebrow">{p.hero.eyebrow}</motion.p>
            <motion.h1 variants={item}>{p.hero.title}</motion.h1>
            <motion.p variants={item} className="hero-sub">{p.hero.sub}</motion.p>
            <motion.div variants={item} className="action-cards">
              {p.actions.map((a) => {
                const Ico = ICON_MAP[a.icon];
                const props = a.wa
                  ? { href: actionHref(a), target: "_blank", rel: "noopener noreferrer" }
                  : { href: a.to };
                return (
                  <a key={a.title} className="action-card" {...props} data-testid={`paciente-action-${a.icon}`}>
                    <span className="action-icon"><Ico /></span>
                    <strong>{a.title}</strong>
                    <span className="action-desc">{a.desc}</span>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Perfiles por necesidad */}
      <section className="services-personas section-pad" id="perfiles" data-testid="perfiles">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">{p.hero.eyebrow}</p>
            <h2>{p.profilesTitle}</h2>
            <p>{p.profilesSub}</p>
          </div>
          <ProfileExplorer />
          <div className="profiles-cta reveal">
            <a href={MENU_PDF[lang]} target="_blank" rel="noopener noreferrer" className="btn btn-navy" data-testid="pacientes-ver-menu"><IconFileText /> {t.cta.viewMenu}</a>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="como section-pad">
        <div className="container">
          <div className="section-head center reveal"><h2>{p.comoTitle}</h2><p>{p.comoSub}</p></div>
          <div className="como-flow reveal-stagger reveal">
            {p.como.map((c, i) => {
              const Ico = ICON_MAP[c.icon];
              return (
                <div className="como-step" key={i}>
                  <div className="como-badge">
                    <span className="como-icon">{Ico ? <Ico /> : null}</span>
                    <span className="como-num">{i + 1}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menú digital */}
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

      {/* Medios de pago + Convenios */}
      <section className="pagos section-pad">
        <div className="container pagos-wrap">
          <div className="pagos-box reveal">
            <p className="eyebrow"><IconCard /> {p.pagosTitle}</p>
            <p className="pagos-sub">{p.pagosSub}</p>
            <div className="pagos-chips">{p.pagos.map((x) => <span key={x} className="chip">{x}</span>)}</div>
          </div>
          <div className="convenios-teaser reveal">
            <h3>{p.conveniosTeaser.title}</h3>
            <p>{p.conveniosTeaser.text}</p>
            <div className="teaser-actions">
              <a href={waLink(t.wa.cobertura)} target="_blank" rel="noopener noreferrer" className="btn btn-cyan"><IconWhatsApp /> {p.conveniosTeaser.btn}</a>
              <Link to="/convenios" className="btn btn-ghost">{t.cta.verMas} <IconArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías técnicas */}
      <section className="services-personas section-pad" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-head center reveal"><h2>{p.categoriesTitle}</h2></div>
          <div className="service-grid reveal-stagger reveal">
            {p.categories.map((s) => {
              const Ico = ICON_MAP[s.icon];
              return (
                <div className="service-card" key={s.title}>
                  <span className="service-icon"><Ico /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-band personas section-pad">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-icon"><IconCalendar /></div>
            <h2>{p.comoTitle}</h2>
            <p>{p.hero.sub}</p>
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
