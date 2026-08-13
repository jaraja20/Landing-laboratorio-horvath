import React, { useState, useEffect, useCallback, useMemo } from "react";
import { IconClose, IconChevronLeft, IconChevronRight } from "./icons";
import { GALLERY_PHOTOS, GALLERY_CDN, CATEGORY_LABEL } from "../data";

const TABS = [
  ["all", "Todas"],
  ["instalaciones", "Nuestras Instalaciones"],
  ["covid", "Lucha contra el Covid-19"],
  ["laboral", "Salud Laboral"],
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightIndex, setLightIndex] = useState(null);

  const visible = useMemo(
    () => GALLERY_PHOTOS.map((p, i) => ({ p, i })).filter(({ p }) => filter === "all" || p[1] === filter),
    [filter]
  );

  const step = useCallback(
    (dir) => {
      setLightIndex((cur) => {
        const order = visible.map(({ i }) => i);
        const pos = order.indexOf(cur);
        if (pos === -1) return cur;
        return order[(pos + dir + order.length) % order.length];
      });
    },
    [visible]
  );

  useEffect(() => {
    if (lightIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setLightIndex(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightIndex, step]);

  const active = lightIndex !== null ? GALLERY_PHOTOS[lightIndex] : null;

  return (
    <section className="gallery section-pad" id="galeria" data-testid="gallery">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Conocenos por dentro</p>
          <h2>Galería</h2>
          <p>Un recorrido por nuestras instalaciones, nuestro trabajo frente al Covid-19 y nuestros programas de salud laboral.</p>
        </div>

        <div className="gallery-tabs reveal" role="tablist">
          {TABS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`gallery-tab${filter === key ? " active" : ""}`}
              onClick={() => setFilter(key)}
              data-testid={`gallery-tab-${key}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="gallery-grid reveal" aria-live="polite">
          {visible.map(({ p, i }) => (
            <button
              key={i}
              type="button"
              className="gallery-item"
              onClick={() => setLightIndex(i)}
              aria-label={`Ver foto: ${p[2]}`}
              data-testid={`gallery-item-${i}`}
            >
              <img src={`${GALLERY_CDN}${p[0]}`} alt={p[2]} loading="lazy" />
              <span className="gallery-item-cat">{CATEGORY_LABEL[p[1]]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={`gallery-lightbox${active ? " open" : ""}`} aria-hidden={!active} onClick={(e) => { if (e.target === e.currentTarget) setLightIndex(null); }}>
        <button type="button" className="lightbox-close" aria-label="Cerrar" onClick={() => setLightIndex(null)}><IconClose /></button>
        <button type="button" className="lightbox-nav prev" aria-label="Foto anterior" onClick={() => step(-1)}><IconChevronLeft /></button>
        {active && (
          <figure>
            <img src={`${GALLERY_CDN}${active[0]}`} alt={active[2]} />
            <figcaption>{active[2]} · {CATEGORY_LABEL[active[1]]}</figcaption>
          </figure>
        )}
        <button type="button" className="lightbox-nav next" aria-label="Foto siguiente" onClick={() => step(1)}><IconChevronRight /></button>
      </div>
    </section>
  );
}
