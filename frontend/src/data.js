// Datos y constantes de contacto de Laboratorios Horvath

export const WA_NUMBER = "595984736008";
export const PHONE_TEL = "+59521204009";
export const PHONE_DISPLAY = "(021) 204 009";
export const WHATSAPP_DISPLAY = "+595 984 736 008";
// NOTA: correo pendiente de confirmar con el cliente (placeholder).
export const CONTACT_EMAIL = "info@laboratoriohorvath.com";
export const ADDRESS = "Av. Aviadores del Chaco N° 2530, Asunción, Paraguay";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Av.+Aviadores+del+Chaco+2530,+Asunci%C3%B3n,+Paraguay&output=embed";
export const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Av.+Aviadores+del+Chaco+2530,+Asunci%C3%B3n,+Paraguay";

export const MENU_PDF = { es: "/assets/menus/menu-es.pdf", en: "/assets/menus/menu-en.pdf" };
export const INSTAGRAM_URL = "https://www.instagram.com/laboratorioshorvath/";
export const FACEBOOK_URL = "https://www.facebook.com/laboratorioshorvath";

// Imagen de la fachada (instalaciones) para el bloque "Nuestra historia"
export const HISTORY_IMG = "https://laboratoriohorvath.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-14-at-12.19.36-1.jpeg";

// Íconos 3D de principios (generados)
const IMG = "https://static.prod-images.emergentagent.com/jobs/06dc2e2a-b742-4325-aa5b-0d12d5275e88/images/";
export const PRINCIPLE_ICONS = {
  layers: `${IMG}d4ef25c3f76c8af3b620cef1f57943f0b83c877b79f3148e135edccad9f75d0a.jpeg`,
  shield: `${IMG}e74c4e7d385a8dcf6a4fedd5f51fa6d3d42aa6800b085a9e4b2993955504fcc3.jpeg`,
  arrowup: `${IMG}14a71909d23ceb306a9b209a250cc617e6e6b861a2a905d0ddb6227718c935a0.jpeg`,
  refresh: `${IMG}5d86fb6c266a367e55a4dfbf67d21b3c8222c1cb7c719b18d058e0b67b887deb.jpeg`,
  heart: `${IMG}e0b9a621674107f19a3e5745eb9d93341f81d95a0312efbf4aa9d7d646b1c644.jpeg`,
  flask: `${IMG}3602bf050dd493a853c2919b81ef8a82694750658fddfcdca9e65c475ba01957.jpeg`,
};

// Fondos decorativos de laboratorio por vista
export const HERO_BG = {
  home: "https://images.unsplash.com/photo-1630959305606-3123a081dada?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  personas: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  empresas: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  nosotros: "https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  contacto: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
};

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const PERSONAS_SERVICES = [
  { icon: "beaker", title: "Análisis Clínicos", desc: "Hematología, bioquímica, inmunología, microbiología, orina, heces y espermograma." },
  { icon: "molecule", title: "Análisis Especializados", desc: "Biología molecular, toxicología e inmunología avanzada." },
  { icon: "dna", title: "Estudios Genéticos y ADN", desc: "Pruebas de parentesco con estricta confidencialidad." },
  { icon: "shieldcheck", title: "Prevención Temprana", desc: "Pruebas de ITS y asesoramiento diagnóstico personalizado." },
];

export const EMPRESAS_SERVICES = [
  { icon: "building", title: "Salud Laboral", desc: "Exámenes ocupacionales y chequeos empresariales para equipos de todos los tamaños." },
  { icon: "gear", title: "Consultoría en Salud", desc: "Gestión de proyectos e innovación diagnóstica para instituciones de salud." },
  { icon: "flask", title: "Investigación Clínica", desc: "Soporte técnico y de laboratorio para ensayos clínicos." },
];

export const VALUES = [
  { icon: "layers", label: "Dignidad y Excelencia" },
  { icon: "shield", label: "Integridad" },
  { icon: "arrowup", label: "Proactividad" },
  { icon: "refresh", label: "Mejora Continua" },
  { icon: "heart", label: "Responsabilidad Social" },
  { icon: "flask", label: "Pasión por la Ciencia" },
];

export const PARTNERS = [
  ["santaclara", "Santa Clara Medicina Prepaga"],
  ["reyva", "Reyva Medicina Prepaga"],
  ["sps", "SPS Servicio de Protección a la Salud"],
  ["oami", "Oami Medicina Pre-paga"],
  ["epem", "Epem Medicina Prepaga"],
  ["planmedicofrances", "Plan Médico Francés"],
  ["intermed", "InterMed Medicina Prepaga"],
  ["kemisalud", "Kemisalud Medicina Prepaga"],
  ["livi", "LIVI Salud Preventiva"],
  ["doctosalud", "Docto Salud Sanatorio Americano"],
  ["saludprotegida", "Salud Protegida Medicina Prepaga"],
  ["santabarbara", "Santa Bárbara del Grupo SIME"],
  ["siriolibanes", "Hospital Sirio Libanés Paraguay"],
  ["sanlucas", "Sanatorio San Lucas"],
  ["centroadn", "Centro de ADN del Paraguay"],
];

export const GALLERY_CDN = "https://laboratoriohorvath.com/wp-content/uploads/2026/03/";

export const CATEGORY_LABEL = {
  instalaciones: "Nuestras Instalaciones",
  covid: "Lucha contra el Covid-19",
  laboral: "Salud Laboral",
};

export const GALLERY_PHOTOS = [
  ["WhatsApp-Image-2026-02-14-at-12.19.36-1.jpeg", "instalaciones", "Fachada de Laboratorios Horvath"],
  ["WhatsApp-Image-2026-02-14-at-12.31.14-1.jpeg", "instalaciones", "Área de trabajo y equipamiento del laboratorio"],
  ["WhatsApp-Image-2026-02-14-at-12.31.14-1-1.jpeg", "instalaciones", "Instalaciones internas de Laboratorios Horvath"],
  ["WhatsApp-Image-2026-02-14-at-12.31.14-3-1.jpeg", "instalaciones", "Instalaciones internas de Laboratorios Horvath"],
  ["WhatsApp-Image-2026-02-14-at-12.31.15.jpeg", "instalaciones", "Equipamiento de diagnóstico"],
  ["WhatsApp-Image-2026-02-14-at-12.31.15-1.jpeg", "instalaciones", "Equipamiento de diagnóstico"],
  ["WhatsApp-Image-2026-02-14-at-12.31.16-3.jpeg", "instalaciones", "Instalaciones de Laboratorios Horvath"],
  ["WhatsApp-Image-2026-02-14-at-12.27.06.jpeg", "covid", "Atención frente al Covid-19"],
  ["WhatsApp-Image-2026-02-14-at-12.31.12-2.jpeg", "covid", "Toma de muestras — Covid-19"],
  ["WhatsApp-Image-2026-02-14-at-12.31.13-1.jpeg", "covid", "Equipo de bioseguridad — Covid-19"],
  ["WhatsApp-Image-2026-02-14-at-12.31.19.jpeg", "covid", "Procesamiento de muestras — Covid-19"],
  ["WhatsApp-Image-2026-02-14-at-12.31.15-3.jpeg", "covid", "Trabajo de laboratorio — Covid-19"],
  ["WhatsApp-Image-2026-02-14-at-12.31.18-2.jpeg", "covid", "Trabajo de laboratorio — Covid-19"],
  ["WhatsApp-Image-2026-02-14-at-12.31.21-2.jpeg", "covid", "Análisis y diagnóstico — Covid-19"],
  ["WhatsApp-Image-2026-02-14-at-12.31.22.jpeg", "covid", "Equipo Horvath frente al Covid-19"],
  ["WhatsApp-Image-2026-02-16-at-20.11.50-3.jpeg", "laboral", "Programa de Salud Laboral"],
  ["WhatsApp-Image-2026-02-16-at-20.11.49-1.jpeg", "laboral", "Exámenes ocupacionales en empresas"],
  ["WhatsApp-Image-2026-02-16-at-20.15.37.jpeg", "laboral", "Chequeos de Salud Laboral"],
  ["WhatsApp-Image-2026-02-16-at-20.11.50-2-2.jpeg", "laboral", "Programa de Salud Laboral"],
  ["WhatsApp-Image-2026-02-16-at-20.15.56-1.jpeg", "laboral", "Equipo en terreno — Salud Laboral"],
  ["WhatsApp-Image-2026-02-16-at-20.13.42.jpeg", "laboral", "Atención de Salud Laboral en empresas"],
];
