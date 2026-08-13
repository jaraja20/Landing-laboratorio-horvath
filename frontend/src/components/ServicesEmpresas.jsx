import React from "react";
import { IconArrowRight } from "./icons";
import { ICON_MAP } from "./iconMap";
import { EMPRESAS_SERVICES, waLink } from "../data";

export default function ServicesEmpresas() {
  return (
    <section className="services-empresas section-pad" id="servicios-empresas" data-testid="services-empresas">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Para tu empresa</p>
          <h2>Servicios para empresas</h2>
          <p>Soluciones de salud ocupacional e investigación pensadas para equipos de todos los tamaños.</p>
        </div>

        <div className="service-grid reveal-stagger reveal">
          {EMPRESAS_SERVICES.map(({ icon, title, desc }) => {
            const Ico = ICON_MAP[icon];
            return (
              <div className="service-card" key={title} data-testid={`service-empresa-${icon}`}>
                <span className="service-icon"><Ico /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a className="card-cta" href={waLink(`Hola, quisiera información y cotización sobre ${title} para mi empresa.`)} target="_blank" rel="noopener noreferrer">
                  Solicitar cotización <IconArrowRight />
                </a>
              </div>
            );
          })}
        </div>

        <div className="segment-banner reveal">
          Trabajamos con empresas de todos los tamaños: desde pymes hasta grandes corporaciones.
          <a href="#contacto" className="btn btn-cyan btn-sm">Solicitar cotización empresarial</a>
        </div>
      </div>
    </section>
  );
}
