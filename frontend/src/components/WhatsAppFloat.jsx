import React from "react";
import { IconWhatsApp } from "./icons";
import { waLink } from "../data";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola, quiero más información sobre los servicios de Laboratorios Horvath.")}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Escribir por WhatsApp"
      data-testid="whatsapp-float"
    >
      <IconWhatsApp />
    </a>
  );
}
