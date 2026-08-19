import React from "react";
import { Link } from "react-router-dom";
import { IconFacebook, IconInstagram } from "./icons";
import Logo from "./Logo";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_DISPLAY, WA_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, ADDRESS, NAV_LINKS } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const nav = NAV_LINKS.map((l) => [l.to, t.nav[l.key]]);
  const hoursLine = t.contacto.hours.map(([d, h]) => `${d}: ${h}`).join(" · ");

  return (
    <footer className="site-footer" data-testid="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">
              <Logo />
            </span>
            <p>{t.footer.brandDesc}</p>
            <div className="footer-social">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-testid="footer-facebook"><IconFacebook /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram"><IconInstagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.navTitle}</h4>
            <ul>{nav.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            <ul>
              <li><p>{ADDRESS}</p></li>
              <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></li>
              <li><p>{hoursLine}</p></li>
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
