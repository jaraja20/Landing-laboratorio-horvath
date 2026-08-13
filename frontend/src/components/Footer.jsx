import React from "react";
import { IconFacebook, IconInstagram } from "./icons";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_DISPLAY, WA_NUMBER } from "../data";

const NAV = [
  ["#nosotros", "Nosotros"],
  ["#servicios-personas", "Para vos"],
  ["#servicios-empresas", "Para tu empresa"],
  ["#metodologia", "Metodología"],
  ["#galeria", "Galería"],
  ["#ubicacion", "Ubicación"],
  ["#contacto", "Contacto"],
];

export default function Footer() {
  return (
    <footer className="site-footer" data-testid="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">
              <span className="lab-name">Laboratorios HORVATH</span>
              <span className="lab-tag">Advanced Science Hub</span>
            </span>
            <p>Más de 40 años acompañando la salud de personas y empresas en Paraguay, con ciencia de vanguardia y trato humano.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/laboratorioshorvath" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Laboratorios Horvath"><IconFacebook /></a>
              <a href="https://www.instagram.com/laboratorioshorvath" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Laboratorios Horvath"><IconInstagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>{NAV.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><p>Av. Aviadores del Chaco N° 2530, Asunción</p></li>
              <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></li>
              <li><p>Lun–Vie 6:30–18:00 · Sáb 6:30–13:00</p></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Laboratorios Horvath. Todos los derechos reservados.</span>
          <span>Diseño y desarrollo — Tekoha Systems</span>
        </div>
      </div>
    </footer>
  );
}
