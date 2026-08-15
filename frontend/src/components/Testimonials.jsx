import React from "react";
import { IconStar, IconInstagram, IconWhatsApp, IconQuote } from "./icons";
import { TESTIMONIALS } from "../data";
import { useLang } from "../i18n/LanguageContext";

function SourceBadge({ source }) {
  if (source === "Instagram") return <span className="tm-source ig"><IconInstagram /> Instagram</span>;
  if (source === "WhatsApp") return <span className="tm-source wa"><IconWhatsApp /> WhatsApp</span>;
  return <span className="tm-source google">Google</span>;
}

export default function Testimonials() {
  const { t } = useLang();
  const set = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="testimonials section-pad" data-testid="testimonials">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2>{t.testimonials.title}</h2>
          <p>{t.testimonials.sub}</p>
        </div>
      </div>
      <div className="tm-marquee reveal">
        <div className="tm-track">
          {set.map((tm, i) => (
            <article className="tm-card" key={i} data-testid={`testimonial-${i}`}>
              <span className="tm-quote-mark"><IconQuote /></span>
              <div className="tm-stars" aria-label={`${tm.rating} de 5`}>
                {Array.from({ length: tm.rating }).map((_, s) => <IconStar key={s} />)}
              </div>
              <p className="tm-text">{tm.text}</p>
              <div className="tm-foot">
                <span className="tm-avatar">{tm.name.charAt(0)}</span>
                <div>
                  <strong>{tm.name}</strong>
                  <SourceBadge source={tm.source} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
