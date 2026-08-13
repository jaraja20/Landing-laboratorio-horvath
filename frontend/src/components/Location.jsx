import React from "react";
import { IconMapPin, IconClock, IconArrowUpRight } from "./icons";
import { MAPS_EMBED, MAPS_DIR, ADDRESS } from "../data";

export default function Location() {
  return (
    <section className="location section-pad" id="ubicacion" data-testid="location">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Visitanos</p>
          <h2>Encontranos en Asunción</h2>
          <p>Zona del nuevo eje corporativo de Asunción, con fácil acceso y estacionamiento.</p>
        </div>

        <div className="location-wrap reveal">
          <div className="location-map">
            <iframe
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Laboratorios Horvath"
            />
          </div>
          <div className="location-card">
            <div className="loc-row">
              <span className="loc-icon"><IconMapPin /></span>
              <div><h4>Dirección</h4><p>{ADDRESS}</p></div>
            </div>
            <div className="loc-row">
              <span className="loc-icon"><IconClock /></span>
              <div>
                <h4>Horarios</h4>
                <p>Lunes a viernes: 6:30 – 18:00<br />Sábados: 6:30 – 13:00<br />Domingos: cerrado</p>
              </div>
            </div>
            <a href={MAPS_DIR} target="_blank" rel="noopener noreferrer" className="btn btn-cyan" data-testid="location-directions">
              Cómo llegar <IconArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
