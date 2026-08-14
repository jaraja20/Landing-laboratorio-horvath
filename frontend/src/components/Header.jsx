import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IconPhone, IconWhatsApp, IconMenu, IconGlobe, IconChevronDown } from "./icons";
import { PHONE_TEL, PHONE_DISPLAY, waLink } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function Header({ onOpenMenu }) {
  const { t, lang, toggle } = useLang();
  const links = [
    ["/", t.nav.inicio],
    ["/pacientes", t.nav.pacientes],
    ["/empresas", t.nav.empresas],
    ["/nosotros", t.nav.nosotros],
    ["/contacto", t.nav.contacto],
  ];
  const moreLinks = [
    ["/advanced-science-hub", t.nav.ash],
    ["/convenios", t.nav.convenios],
  ];

  return (
    <header className="site-header" id="site-header" data-testid="site-header">
      <div className="container">
        <Link to="/" className="logo" aria-label="Laboratorios Horvath, inicio" data-testid="logo-link">
          <span className="logo-top">Laboratorios</span>
          <span className="logo-main">HORVATH</span>
          <span className="logo-sub">Advanced Science Hub</span>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => (isActive ? "active" : "")} data-testid={`nav-${to === "/" ? "inicio" : to.slice(1)}`}>
              {label}
            </NavLink>
          ))}
          <div className="nav-more" data-testid="nav-more">
            <button type="button" className="nav-more-trigger" aria-haspopup="true">
              {t.nav.mas || "Más"} <IconChevronDown />
            </button>
            <div className="nav-more-panel">
              {moreLinks.map(([to, label]) => (
                <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")} data-testid={`nav-${to.slice(1)}`}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggle} aria-label="Cambiar idioma / Change language" data-testid="lang-toggle">
            <IconGlobe />
            <span className={lang === "es" ? "on" : ""}>ES</span>
            <span className="sep">/</span>
            <span className={lang === "en" ? "on" : ""}>EN</span>
          </button>
          <a href={`tel:${PHONE_TEL}`} className="icon-link" aria-label={`${t.cta.call} ${PHONE_DISPLAY}`} data-testid="header-call">
            <IconPhone />
          </a>
          <a href={waLink(t.wa.general)} target="_blank" rel="noopener noreferrer" className="header-whatsapp" data-testid="header-whatsapp">
            <IconWhatsApp /><span>{t.cta.whatsapp}</span>
          </a>
          <button className="menu-toggle" aria-label="Abrir menú" aria-expanded="false" onClick={onOpenMenu} data-testid="menu-toggle">
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
