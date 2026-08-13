import React from "react";
import { IconWhatsApp } from "./icons";
import { waLink } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function WhatsAppFloat() {
  const { t } = useLang();
  return (
    <a
      href={waLink(t.wa.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label={t.cta.writeWa}
      data-testid="whatsapp-float"
    >
      <IconWhatsApp />
    </a>
  );
}
