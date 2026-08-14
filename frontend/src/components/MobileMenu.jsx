import React from "react";
import { NavLink } from "react-router-dom";
import { IconClose, IconGlobe } from "./icons";
import { PHONE_TEL, PHONE_DISPLAY, waLink } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function MobileMenu({ open, onClose }) {
  const { t, lang, toggle } = useLang();
  const links = [
    ["/", t.nav.inicio],
    ["/pacientes", t.nav.pacientes],
    ["/empresas", t.nav.empresas],
    ["/advanced-science-hub", t.nav.ash],
    ["/convenios", t.nav.convenios],
    ["/nosotros", t.nav.nosotros],
    ["/contacto", t.nav.contacto],
  ];

  return (
    <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open} data-testid="mobile-menu">
      <div className="mobile-menu-top">
        <span className="logo">
          <span className="logo-top">Laboratorios</span>
          <span className="logo-main">HORVATH</span>
          <span className="logo-sub">Advanced Science Hub</span>
        </span>
        <button className="menu-toggle mobile-menu-close" aria-label="Cerrar menú" onClick={onClose} data-testid="mobile-menu-close">
          <IconClose />
        </button>
      </div>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={onClose} className={({ isActive }) => (isActive ? "active" : "")} data-testid={`mobile-nav-${to === "/" ? "inicio" : to.slice(1)}`}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="mobile-menu-footer">
        <button className="lang-toggle dark" onClick={toggle} aria-label="Cambiar idioma / Change language">
          <IconGlobe />
          <span className={lang === "es" ? "on" : ""}>ES</span>
          <span className="sep">/</span>
          <span className={lang === "en" ? "on" : ""}>EN</span>
        </button>
        <a className="tel-link" href={`tel:${PHONE_TEL}`}>📞 {PHONE_DISPLAY}</a>
        <a className="btn btn-cyan btn-block" href={waLink(t.wa.general)} target="_blank" rel="noopener noreferrer">
          {t.cta.writeWa}
        </a>
      </div>
    </div>
  );
}
