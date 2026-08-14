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

// Íconos 3D de principios (PNG transparente, auto-alojados)
export const PRINCIPLE_ICONS = {
  layers: "/assets/icons3d/dignidad.png",
  shield: "/assets/icons3d/integridad.png",
  arrowup: "/assets/icons3d/proactividad.png",
  refresh: "/assets/icons3d/mejora.png",
  heart: "/assets/icons3d/responsabilidad.png",
  flask: "/assets/icons3d/pasion.png",
};

// Fondos decorativos de laboratorio por vista
export const HERO_BG = {
  home: "https://images.unsplash.com/photo-1630959305606-3123a081dada?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  personas: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  empresas: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  nosotros: "https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  contacto: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  ash: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  convenios: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
};

// Empresas que ya confían en Horvath (Salud Laboral)
export const LABORAL_CLIENTS = [
  "Localiza", "Deuce", "IPALE", "Interexpress", "Comdetur", "KOSTAS", "Britimp",
  "Hospicenter", "Promed", "EBSA", "Sheraton", "Aloft", "Club Libertad",
  "Termo Industrial", "Triple C Cambios", "Tecno Ambiental", "Impackta", "Medoc",
  "KMC", "Las Olivas", "Venezia", "La Misión", "Serviplus", "Bagual", "Amanecer",
  "Ingraf", "Viscount", "Gráfica Mayo",
];

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
