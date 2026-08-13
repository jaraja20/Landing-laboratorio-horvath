import React from "react";
import { VALUES } from "../data";
import { ICON_MAP } from "./iconMap";

export default function About() {
  return (
    <section className="about section-pad" id="nosotros" data-testid="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo reveal">
            <img src="/assets/img/photos/dra-horvath.jpg" alt="Dra. Gabriela Horvath, dirección científica de Laboratorios Horvath" loading="lazy" />
            <div className="caption">
              <strong>Dra. Gabriela Horvath</strong>
              <span>Máster en Toxicología · Perito Oficial de la Corte Suprema de Justicia</span>
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">Nuestra historia</p>
            <h2>Ciencia con historia, futuro con propósito</h2>
            <p>Laboratorios Horvath nació en 1983 de la mano de la Dra. Lidia Raquel Candia de Horvath, bioquímica pionera que creía que cada paciente merecía un trato humano: que alguien supiera su nombre y le explicara lo que le estaba pasando.</p>
            <p>Hoy, esa vocación se transformó en una institución consolidada. La Dra. Gabriela Horvath continúa el legado con la misma pasión, aportando una dimensión nueva: formación en investigación clínica, ocho años en el Centro Nacional de Toxicología y conexiones científicas en cuatro continentes.</p>
            <blockquote>"Comprometidos en ayudar al paciente a restablecer su salud y calidad de vida, a través de un equipo humano altamente calificado, empleando estándares de calidad reconocidos a nivel mundial."</blockquote>
            <a href="#contacto" className="btn btn-navy">Conocé nuestro equipo</a>
          </div>
        </div>

        <div className="values-grid reveal-stagger reveal">
          {VALUES.map(({ icon, label }) => {
            const Ico = ICON_MAP[icon];
            return (
              <div className="value-card" key={label}>
                <span className="value-icon"><Ico /></span>
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
