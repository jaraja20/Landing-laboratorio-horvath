import React from "react";
import { IconArrowRight } from "./icons";
import { ICON_MAP } from "./iconMap";
import { PERSONAS_SERVICES, waLink } from "../data";

export default function ServicesPersonas() {
  return (
    <section className="services-personas section-pad" id="servicios-personas" data-testid="services-personas">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Para vos y tu familia</p>
          <h2>Servicios para personas</h2>
          <p>Un catálogo completo de estudios clínicos, con la calidez de siempre y la precisión de la ciencia de vanguardia.</p>
        </div>

        <div className="service-grid reveal-stagger reveal">
          {PERSONAS_SERVICES.map(({ icon, title, desc }) => {
            const Ico = ICON_MAP[icon];
            return (
              <div className="service-card" key={title} data-testid={`service-persona-${icon}`}>
                <span className="service-icon"><Ico /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a className="card-cta" href={waLink(`Hola, quisiera consultar sobre ${title}.`)} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp <IconArrowRight />
                </a>
              </div>
            );
          })}
        </div>

        <div className="segment-banner reveal">
          ¿Buscás soluciones para tu empresa?{" "}
          <a href="#servicios-empresas" className="segment-link">Conocé nuestros servicios corporativos ↓</a>
        </div>
      </div>
    </section>
  );
}
