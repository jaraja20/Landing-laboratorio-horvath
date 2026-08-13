import React from "react";
import { PARTNERS } from "../data";

export default function Partners() {
  const set = PARTNERS.map(([file, name]) => (
    <div className="partner-logo" key={file}>
      <img src={`/assets/img/logos/${file}.png`} alt={name} loading="lazy" />
    </div>
  ));

  return (
    <section className="partners section-pad" id="alianzas" data-testid="partners">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Confianza</p>
          <h2>Trabajamos junto a las instituciones en las que ya confiás</h2>
        </div>
      </div>
      <div className="partners-marquee reveal">
        <div className="partners-track">{set}{set}</div>
      </div>
    </section>
  );
}
