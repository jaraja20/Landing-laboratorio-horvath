import React from "react";
import { Link } from "react-router-dom";
import { IconFacebook, IconInstagram, IconLinkedin, IconAward } from "./icons";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_DISPLAY, WA_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const nav = [
    ["/", t.nav.inicio],
    ["/pacientes", t.nav.pacientes],
    ["/empresas", t.nav.empresas],
    ["/advanced-science-hub", t.nav.ash],
    ["/convenios", t.nav.convenios],
    ["/nosotros", t.nav.nosotros],
    ["/contacto", t.nav.contacto],
  ];

  return (
    <footer className="site-footer" data-testid="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">
              <span className="logo-top">Laboratorios</span>
              <span className="logo-main">HORVATH</span>
              <span className="logo-sub">Advanced Science Hub</span>
            </span>
            <p>{t.footer.brandDesc}</p>
            <div className="footer-social">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-testid="footer-facebook"><IconFacebook /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram"><IconInstagram /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin"><IconLinkedin /></a>
            </div>
            <div className="footer-iso" data-testid="footer-iso">
              <IconAward />
              <div>
                <strong>{t.footer.iso}</strong>
                <span>{t.footer.isoNote}</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.navTitle}</h4>
            <ul>{nav.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            <ul>
              <li><p>Av. Aviadores del Chaco N° 2530, Asunción</p></li>
              <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></li>
              <li><p>Lun–Vie 6:30–18:00 · Sáb 6:30–13:00</p></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Laboratorios Horvath. {t.footer.rights}</span>
          <span>{t.footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
