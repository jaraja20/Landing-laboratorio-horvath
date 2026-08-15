import React from "react";
import { ALIANZA_LOGOS } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function Partners() {
  const { t } = useLang();
  const set = ALIANZA_LOGOS.map((src, i) => (
    <div className="partner-logo" key={i}>
      <img src={src} alt="Institución aliada de Laboratorios Horvath" loading="lazy" />
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
