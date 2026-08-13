import React from "react";
import { waLink } from "../data";

const STEPS = [
  ["1", "Agendá tu turno", "Por WhatsApp, teléfono o directamente en el laboratorio."],
  ["2", "Te atendemos", "Con tecnología de vanguardia y trato personalizado."],
  ["3", "Recibí tus resultados", "De forma rápida, clara y confiable."],
];

export default function Method() {
  return (
    <section className="method section-pad" id="metodologia" data-testid="method">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2>Así de simple es atenderte</h2>
          <p>Pensado para que cualquier persona, sin importar la edad, sepa exactamente qué esperar.</p>
        </div>

        <div className="method-steps reveal-stagger reveal">
          {STEPS.map(([num, title, desc]) => (
            <div className="method-step" key={num}>
              <div className="method-num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="method-cta reveal">
          <a href={waLink("Hola, quiero agendar un turno.")} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
            Empezá ahora
          </a>
        </div>
      </div>
    </section>
  );
}
