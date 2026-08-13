import React from "react";
import { useLang } from "../i18n/LanguageContext";

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="stats-strip" data-testid="stats">
      <div className="container">
        <div className="stats-grid reveal-stagger reveal">
          {t.stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num"><span data-count={s.count} data-prefix={s.prefix || ""} data-suffix={s.suffix}>0</span></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
