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

// Logos reales de empresas que confían en Salud Laboral Horvath (imágenes)
export const LABORAL_LOGOS = Array.from(
  { length: 26 },
  (_, i) => `/assets/laboral/laboral-${String(i + 1).padStart(2, "0")}.jpg`
);

// Logos de instituciones / medicinas prepagas aliadas (marquesina de confianza)
export const ALIANZA_LOGOS = Array.from(
  { length: 15 },
  (_, i) => `/assets/alianzas/alianza-${String(i + 1).padStart(2, "0")}.jpg`
);

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
// Enlace directo al chat de WhatsApp, sin mensaje predeterminado
export const WA_PLAIN = `https://wa.me/${WA_NUMBER}`;

// Opiniones reales de pacientes (Google, Instagram y WhatsApp)
export const TESTIMONIALS = [
  { name: "David Ruiz", source: "Google", rating: 5, text: "Buenísima la atención que recibí, las doctoras son muy amables." },
  { name: "Lorena Insaurralde", source: "Google", rating: 5, text: "Buenísima atención en recepción, rápidos y el personal muy bien capacitado. Atención en niños 10 puntos y el costo bastante accesible. ¡Volveríamos siempre!" },
  { name: "Ramona Ortigoza", source: "Google", rating: 5, text: "Me hago mis análisis hace rato en este laboratorio, siempre me quedo contenta y tiene buenos precios. El nuevo local es súper fácil de acceder y me tratan muy bien." },
  { name: "Luis Morales", source: "Google", rating: 5, text: "Excelente atención y resultados rápidos." },
  { name: "Paciente Horvath", source: "Instagram", rating: 5, text: "Por 1ra vez decidí hacerme análisis acá y quedé impresionada, nada que envidiar a las grandes cadenas. La limpieza, la atención y el cuidado te hacen sentir como en casa. Sin duda, mi lab favorito." },
  { name: "Paciente Horvath", source: "WhatsApp", rating: 5, text: "Gracias por todas las atenciones en este proceso de chequeo médico: excelente coordinación y un gracias enorme a la Dra. Gabriela. ¡Todo salió muy bien!" },
];

// Perfiles y chequeos reales del sanatorio (Horvath Health Profiles)
// accent: blue | pink | violet | cyan | green | navy
export const PATIENT_PROFILES = [
  {
    id: "bienestar-masculino-elite",
    accent: "blue",
    tag: "Hombres",
    image: "/assets/perfiles/bienestar-masculino.jpg",
    title: "Bienestar masculino elite",
    summary: "Evaluación integral masculina para prevención cardiovascular, metabólica, hormonal y prostática.",
    groups: [
      { label: "Evaluación hematológica y metabólica", items: ["Hemograma", "VSG", "Perfil lipídico", "Ácido úrico", "Perfil renal", "Perfil hepático – GGT", "Glucosa", "HbA1c"] },
      { label: "Marcadores tumorales", items: ["CEA", "CA 19.9"] },
      { label: "Evaluación hormonal y prostática", items: ["Vitamina D", "ANA HEP 2", "Testosterona total", "Testosterona libre", "PSA total", "PSA libre", "Orina simple"] },
    ],
    orientedTo: "Hombres que buscan control preventivo integral, optimizar energía, rendimiento y salud prostática.",
  },
  {
    id: "salud-femenina-premium",
    image: "/assets/perfiles/salud-femenina-premium.jpg",
    accent: "pink",
    tag: "Mujeres",
    title: "Salud femenina premium",
    summary: "Evaluación integral avanzada para el monitoreo completo de la salud femenina.",
    groups: [
      { label: "Evaluación general y metabólica", items: ["Hemograma", "Glucosa", "HbA1c", "VSG", "Perfil lipídico", "Ácido úrico"] },
      { label: "Función hepática y renal", items: ["Perfil hepático", "Gamma GT", "Perfil renal", "Proteínas T, A/G"] },
      { label: "Infecciones y microbiología", items: ["VDRL", "HIV", "Orina cultivo", "Sec. vaginal cultivo"] },
      { label: "Función hormonal", items: ["TSH", "FT4", "FT3", "FSH", "LH", "Estradiol"] },
      { label: "Marcadores oncológicos y autoinmunidad", items: ["CEA", "CA 15.3", "CA 125", "CA 19.9", "ANA HEP 2"] },
    ],
    orientedTo: "Mujeres que buscan un chequeo preventivo de alta gama.",
  },
  {
    id: "chequeo-salud-express",
    image: "/assets/perfiles/chequeo-salud-express.jpg",
    accent: "cyan",
    tag: "Prevención",
    title: "Chequeo de salud express",
    summary: "Evaluación integral básica: los principales indicadores de tu salud, con resultados en 1 día.",
    groups: [
      { label: "Estudios incluidos", items: ["Hemograma", "Eritrosedimentación", "GOT", "GPT", "Colesterol total", "Triglicéridos", "Urea", "Creatinina", "Glucosa", "VDRL", "HIV", "TSH", "Orina simple"] },
    ],
    orientedTo: "Personas que buscan un control médico ágil, con resultados rápidos en 1 día.",
  },
  {
    id: "balance-hormonal-femenino",
    image: "/assets/perfiles/balance-hormonal-femenino.jpg",
    accent: "violet",
    tag: "Hormonas",
    title: "Balance hormonal femenino",
    summary: "Evaluación integral del equilibrio endocrino femenino: fertilidad, ciclo, SOP y menopausia.",
    groups: [
      { label: "Función hormonal", items: ["Estradiol", "FSH", "LH", "Progesterona", "Prolactina", "Testosterona", "DHEA SO4", "Androstenediona"] },
      { label: "Metabolismo asociado", items: ["Glucosa", "Insulina", "HOMA-IR"] },
      { label: "Evaluación general", items: ["Hemograma", "VSG", "Orina simple"] },
    ],
    orientedTo: "Mujeres con alteraciones menstruales, acné, planificación de embarazo o control hormonal integral.",
  },
  {
    id: "vitaminico-nutricional",
    image: "/assets/perfiles/vitaminico-nutricional.jpg",
    accent: "green",
    tag: "Nutrición",
    title: "Perfil vitamínico y nutricional",
    summary: "Identifica deficiencias nutricionales y ayuda a mejorar tu energía.",
    groups: [
      { label: "Perfil mineral", items: ["Calcio", "Magnesio", "Fósforo", "Zinc"] },
      { label: "Proteínas y reservas", items: ["Proteínas totales", "Albúmina", "Hierro", "Ferritina", "Transferrina"] },
      { label: "Vitaminas y base hematológica", items: ["Hemograma", "Vitamina D", "Vitamina B12", "Folatos"] },
    ],
    orientedTo: "Ideal para operados de cirugías bariátricas, veganos y vegetarianos.",
  },
  {
    id: "perfil-deportista",
    image: "/assets/perfiles/perfil-deportista.jpg",
    accent: "cyan",
    tag: "Deporte",
    title: "Perfil deportista",
    summary: "Evaluación integral para rendimiento físico y control metabólico.",
    groups: [
      { label: "Perfil vitamínico completo", items: ["Vitamina D", "B12", "Folatos", "Hierro", "Ferritina", "Transferrina", "Zinc"] },
      { label: "Hormonas", items: ["TSH", "T4 libre", "Testosterona", "Cortisol AM"] },
      { label: "Marcadores musculares", items: ["CK total", "LDH"] },
      { label: "Metabolismo y hemograma", items: ["Glucosa", "HbA1c", "Hemograma completo", "Orina simple"] },
      { label: "Función hepática y renal", items: ["GOT", "GPT", "Fosfatasa Alcalina", "GGT", "Urea", "Creatinina"] },
      { label: "Perfil lipídico", items: ["Colesterol Total", "C-HDL", "C-LDL", "C-VLDL", "Triglicéridos", "Lípidos totales"] },
    ],
    orientedTo: "Deportistas profesionales y amateurs, y preparación para competencias.",
  },
  {
    id: "stress-control",
    image: "/assets/perfiles/stress-control.jpg",
    accent: "violet",
    tag: "Bienestar",
    title: "Perfil Stress control",
    summary: "Evaluación integral para el rendimiento físico y mental.",
    groups: [
      { label: "Estudios incluidos", items: ["Hemograma", "DHEA SO4", "Cortisol AM", "Cortisol PM", "TSH", "FT4", "Prolactina", "ACTH AM", "ACTH PM"] },
    ],
    orientedTo: "Personas con cansancio extremo, insomnio, ansiedad o sospecha de burnout.",
  },
  {
    id: "its-basico",
    image: "/assets/perfiles/its-basico.jpg",
    accent: "cyan",
    tag: "ITS",
    title: "Perfil ITS básico",
    summary: "Detección preventiva, rápida y confidencial de infecciones de transmisión sexual.",
    groups: [
      { label: "Serología infecciosa", items: ["VDRL", "FTA ABS IGG", "FTA ABS IGM", "Hepatitis B", "HIV"] },
    ],
    orientedTo: "Personas sexualmente activas que buscan un control preventivo, rápido y confidencial.",
  },
  {
    id: "its-femenino-extendido",
    image: "/assets/perfiles/its-femenino-extendido.jpg",
    accent: "pink",
    tag: "ITS",
    title: "Perfil ITS femenino extendido",
    summary: "Evaluación integral sexual preventiva femenina, incluso en etapas asintomáticas.",
    groups: [
      { label: "Microbiología", items: ["Clamidia Ag", "Neisseria Gonorrhoeae", "Candida sp", "Trichomonas vaginalis", "Ureaplasma", "Mycoplasma", "Orina cultivo", "Cultivo sec. vaginal"] },
      { label: "Serología infecciosa", items: ["VDRL", "FTA-ABS IGG", "FTA-ABS IGM", "HIV Ac", "Hepatitis B", "Hepatitis C", "Herpes Tipo 2 IGG", "Herpes Tipo 2 IGM"] },
    ],
    orientedTo: "Mujeres que buscan un control sexual integral y confidencial, de rutina o por síntomas.",
  },
  {
    id: "its-masculino-extendido",
    image: "/assets/perfiles/its-masculino-extendido.jpg",
    accent: "blue",
    tag: "ITS",
    title: "Perfil ITS masculino extendido",
    summary: "Detección preventiva y confidencial de infecciones de transmisión sexual.",
    groups: [
      { label: "Serología infecciosa", items: ["VDRL", "FTA ABS IGG", "FTA ABS IGM", "HIV Ac", "Hepatitis B", "Hepatitis C", "Herpes Tipo 2 IGG", "Herpes Tipo 2 IGM"] },
      { label: "Infecciones frecuentes", items: ["Chlamydia Ag", "Neisseria Gonorrhoeae", "Candida sp", "Trichomonas", "Ureaplasma", "Mycoplasma", "Orina cultivo", "Cultivo líq. biológicos"] },
    ],
    orientedTo: "Hombres que desean un chequeo integral, confidencial y preventivo para proteger su salud y la de su pareja.",
  },
  {
    id: "pre-natal-completo",
    image: "/assets/perfiles/pre-natal-completo.jpg",
    accent: "pink",
    tag: "Embarazo",
    title: "Perfil pre natal completo",
    summary: "Evaluación integral del embarazo y detección de infecciones.",
    groups: [
      { label: "Evaluación hematológica y metabólica", items: ["Hemograma", "Grupo sanguíneo", "Glucosa", "HbA1c", "Calcio", "Magnesio", "Perfil renal", "Perfil hepático", "Perfil lipídico", "Ácido úrico", "Vitamina D", "Folato"] },
      { label: "Infecciones y screening prenatal", items: ["TORCH", "VDRL", "Orina simple y cultivo", "Sec. vaginal cultivo", "Clamidia", "Ureaplasma", "Mycoplasma"] },
    ],
    orientedTo: "Mujeres embarazadas en cualquier etapa, especialmente al inicio del control prenatal.",
  },
  {
    id: "pre-quirurgico",
    image: "/assets/perfiles/pre-quirurgico.jpg",
    accent: "navy",
    tag: "Prequirúrgico",
    title: "Control pre quirúrgico",
    summary: "Evaluación clínica previa a cirugías.",
    groups: [
      { label: "Evaluación hematológica y metabólica", items: ["Hemograma", "VSG", "PCR", "Glucosa", "Orina simple", "Tipificación", "Coagulograma", "Urea", "Creatinina", "GOT - GPT", "Electrolitos"] },
    ],
    orientedTo: "Pacientes que se preparan para cualquier tipo de cirugía.",
  },
];


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
