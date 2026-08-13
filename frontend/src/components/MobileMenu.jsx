import React from "react";
import { IconClose } from "./icons";
import { PHONE_TEL, PHONE_DISPLAY, waLink } from "../data";

const LINKS = [
  ["#nosotros", "Nosotros"],
  ["#servicios-personas", "Para vos"],
  ["#servicios-empresas", "Para tu empresa"],
  ["#metodologia", "Metodología"],
  ["#galeria", "Galería"],
  ["#ubicacion", "Ubicación"],
  ["#contacto", "Contacto"],
];

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open} data-testid="mobile-menu">
      <div className="mobile-menu-top">
        <span className="logo">
          <span className="lab-name">Laboratorios HORVATH</span>
          <span className="lab-tag">Advanced Science Hub</span>
        </span>
        <button className="menu-toggle mobile-menu-close" aria-label="Cerrar menú" onClick={onClose} data-testid="mobile-menu-close">
          <IconClose />
        </button>
      </div>
      <nav>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={onClose} data-testid={`mobile-nav-${href.slice(1)}`}>{label}</a>
        ))}
      </nav>
      <div className="mobile-menu-footer">
        <a className="tel-link" href={`tel:${PHONE_TEL}`}>📞 {PHONE_DISPLAY}</a>
        <a className="btn btn-cyan btn-block" href={waLink("Hola, quiero más información sobre los servicios de Laboratorios Horvath.")} target="_blank" rel="noopener noreferrer">
          Escribir por WhatsApp
        </a>
      </div>
    </div>
  );
}
