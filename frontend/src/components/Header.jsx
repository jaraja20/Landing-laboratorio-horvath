import React from "react";
import { IconPhone, IconWhatsApp, IconMenu } from "./icons";
import { PHONE_TEL, PHONE_DISPLAY, waLink } from "../data";

const NAV = [
  ["#nosotros", "Nosotros"],
  ["#servicios-personas", "Servicios"],
  ["#metodologia", "Metodología"],
  ["#galeria", "Galería"],
  ["#ubicacion", "Ubicación"],
  ["#contacto", "Contacto"],
];

export default function Header({ onOpenMenu }) {
  return (
    <header className="site-header" id="site-header" data-testid="site-header">
      <div className="container">
        <a href="#inicio" className="logo" aria-label="Laboratorios Horvath, inicio" data-testid="logo-link">
          <span className="lab-name">Laboratorios HORVATH</span>
          <span className="lab-tag">Advanced Science Hub</span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} data-testid={`nav-${href.slice(1)}`}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={`tel:${PHONE_TEL}`} className="icon-link" aria-label={`Llamar al ${PHONE_DISPLAY}`} data-testid="header-call">
            <IconPhone />
          </a>
          <a
            href={waLink("Hola, quiero más información sobre los servicios de Laboratorios Horvath.")}
            target="_blank" rel="noopener noreferrer" className="header-whatsapp" data-testid="header-whatsapp"
          >
            <IconWhatsApp /><span>WhatsApp</span>
          </a>
          <button className="menu-toggle" aria-label="Abrir menú" aria-expanded="false" onClick={onOpenMenu} data-testid="menu-toggle">
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
