import React from "react";
import { IconUser, IconBuilding, IconArrowRight, IconLayers, IconShield, IconSparkle } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="inicio" data-testid="hero">
      <div className="hero-blob b1" />
      <div className="hero-blob b2" />
      <div className="container">
        <p className="hero-eyebrow">Laboratorios Horvath · Advanced Science Hub</p>
        <h1>40 años cuidando tu salud,<br /> con la <em>ciencia del futuro</em>.</h1>
        <p className="hero-sub">
          Análisis clínicos, estudios especializados y salud ocupacional con tecnología de vanguardia
          y el trato humano que nos define desde 1983.
        </p>

        <div className="hero-split">
          <a href="#servicios-personas" className="split-card persona" data-testid="hero-persona">
            <span className="split-icon"><IconUser /></span>
            <h3>Soy paciente</h3>
            <p>Análisis clínicos, especializados, ADN y prevención</p>
            <span className="card-cta">Ver servicios <IconArrowRight /></span>
          </a>
          <a href="#servicios-empresas" className="split-card empresa" data-testid="hero-empresa">
            <span className="split-icon"><IconBuilding /></span>
            <h3>Soy empresa</h3>
            <p>Salud laboral, consultoría e investigación clínica</p>
            <span className="card-cta">Ver servicios <IconArrowRight /></span>
          </a>
        </div>

        <div className="hero-trust">
          <span><IconLayers /> +40 años de trayectoria</span>
          <span><IconShield /> Peritos matriculados en la Corte Suprema de Justicia</span>
          <span><IconSparkle /> Tecnología de ultracongelación a -80°C</span>
        </div>
      </div>

      <div className="scroll-cue"><span>Descubrí más</span><span className="dot-track" /></div>
    </section>
  );
}
