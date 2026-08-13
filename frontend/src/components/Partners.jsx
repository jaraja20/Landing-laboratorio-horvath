import React from "react";
import { PARTNERS } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function Partners() {
  const { t } = useLang();
  const set = PARTNERS.map(([file, name]) => (
    <div className="partner-logo" key={file}>
      <img src={`/assets/img/logos/${file}.png`} alt={name} loading="lazy" />
    </div>
  ));

  return (
    <section className="partners section-pad" data-testid="partners">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">{t.alianzas.eyebrow}</p>
          <h2>{t.alianzas.title}</h2>
        </div>
      </div>
      <div className="partners-marquee reveal">
        <div className="partners-track">{set}{set}</div>
      </div>
    </section>
  );
}
