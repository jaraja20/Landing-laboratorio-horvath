import React, { useState, useEffect, useCallback, useMemo } from "react";
import { IconClose, IconChevronLeft, IconChevronRight } from "./icons";
import { GALLERY_PHOTOS, GALLERY_CDN } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function Gallery() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  const [lightIndex, setLightIndex] = useState(null);
  const labels = t.nosotros.galleryTabs;
  const tabs = [["all", labels.all], ["instalaciones", labels.instalaciones], ["covid", labels.covid], ["laboral", labels.laboral]];

  const visible = useMemo(
    () => GALLERY_PHOTOS.map((p, i) => ({ p, i })).filter(({ p }) => filter === "all" || p[1] === filter),
    [filter]
  );

  const step = useCallback((dir) => {
    setLightIndex((cur) => {
      const order = visible.map(({ i }) => i);
      const pos = order.indexOf(cur);
      if (pos === -1) return cur;
      return order[(pos + dir + order.length) % order.length];
    });
  }, [visible]);

  useEffect(() => {
    if (lightIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setLightIndex(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [lightIndex, step]);

  const active = lightIndex !== null ? GALLERY_PHOTOS[lightIndex] : null;

  return (
    <>
      <div className="gallery-tabs reveal" role="tablist">
        {tabs.map(([key, label]) => (
          <button key={key} type="button" className={`gallery-tab${filter === key ? " active" : ""}`} onClick={() => setFilter(key)} data-testid={`gallery-tab-${key}`}>
            {label}
          </button>
        ))}
      </div>

      <div className="gallery-grid reveal" aria-live="polite">
        {visible.map(({ p, i }) => (
          <button key={i} type="button" className="gallery-item" onClick={() => setLightIndex(i)} aria-label={p[2]} data-testid={`gallery-item-${i}`}>
            <img src={`${GALLERY_CDN}${p[0]}`} alt={p[2]} loading="lazy" />
            <span className="gallery-item-cat">{labels[p[1]]}</span>
          </button>
        ))}
      </div>

      <div className={`gallery-lightbox${active ? " open" : ""}`} aria-hidden={!active} onClick={(e) => { if (e.target === e.currentTarget) setLightIndex(null); }}>
        <button type="button" className="lightbox-close" aria-label="Cerrar" onClick={() => setLightIndex(null)}><IconClose /></button>
        <button type="button" className="lightbox-nav prev" aria-label="Anterior" onClick={() => step(-1)}><IconChevronLeft /></button>
        {active && (
          <figure>
            <img src={`${GALLERY_CDN}${active[0]}`} alt={active[2]} />
            <figcaption>{active[2]} · {labels[active[1]]}</figcaption>
          </figure>
        )}
        <button type="button" className="lightbox-nav next" aria-label="Siguiente" onClick={() => step(1)}><IconChevronRight /></button>
      </div>
    </>
  );
}
