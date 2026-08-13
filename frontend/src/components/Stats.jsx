import React from "react";

export default function Stats() {
  return (
    <section className="stats-strip" data-testid="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item"><div className="stat-num"><span data-count="40" data-suffix="+">0</span></div><div className="stat-label">Años de trayectoria</div></div>
          <div className="stat-item"><div className="stat-num"><span data-count="80" data-suffix="°C">0</span></div><div className="stat-label">Ultracongelación de muestras</div></div>
          <div className="stat-item"><div className="stat-num"><span data-count="4">0</span></div><div className="stat-label">Continentes de conexión científica</div></div>
          <div className="stat-item"><div className="stat-num"><span data-count="15" data-suffix="+">0</span></div><div className="stat-label">Instituciones y seguros aliados</div></div>
        </div>
      </div>
    </section>
  );
}
