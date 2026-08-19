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
// LinkedIn: enlace provisional hasta confirmar el perfil oficial del laboratorio
export const LINKEDIN_URL = "https://www.linkedin.com/company/laboratorios-horvath/";
// Opiniones (provisional) — Google reviews del laboratorio
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Laboratorios+Horvath+opiniones";

// Imagen de la fachada (instalaciones) para el bloque "Nuestra historia"
export const HISTORY_IMG = "/assets/img/horvath-health-center.jpg";

// Íconos 3D de principios (PNG transparente, auto-alojados)
export const PRINCIPLE_ICONS = {
  layers: "/assets/icons3d/dignidad.svg",
  shield: "/assets/icons3d/integridad.svg",
  arrowup: "/assets/icons3d/proactividad.svg",
  refresh: "/assets/icons3d/mejora.svg",
  heart: "/assets/icons3d/responsabilidad.svg",
  flask: "/assets/icons3d/pasion.svg",
};

// Fondos decorativos de laboratorio por vista
export const HERO_BG = {
  home: "/assets/img/hero-home.jpg",
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
  { name: "David Ruiz", source: "Google", rating: 5, text: { es: "Buenísima la atención que recibí, las doctoras son muy amables.", en: "The attention I received was excellent, the doctors are very kind." } },
  { name: "Lorena Insaurralde", source: "Google", rating: 5, text: { es: "Buenísima atención en recepción, rápidos y el personal muy bien capacitado. Atención en niños 10 puntos y el costo bastante accesible. ¡Volveríamos siempre!", en: "Great service at reception, fast and very well-trained staff. Care for kids is a 10, and the cost is quite affordable. We'd always come back!" } },
  { name: "Ramona Ortigoza", source: "Google", rating: 5, text: { es: "Me hago mis análisis hace rato en este laboratorio, siempre me quedo contenta y tiene buenos precios. El nuevo local es súper fácil de acceder y me tratan muy bien.", en: "I've been getting my tests done at this lab for a while, I'm always happy and the prices are good. The new location is super easy to reach and they treat me very well." } },
  { name: "Luis Morales", source: "Google", rating: 5, text: { es: "Excelente atención y resultados rápidos.", en: "Excellent attention and fast results." } },
  { name: "Paciente Horvath", source: "Instagram", rating: 5, text: { es: "Por 1ra vez decidí hacerme análisis acá y quedé impresionada, nada que envidiar a las grandes cadenas. La limpieza, la atención y el cuidado te hacen sentir como en casa. Sin duda, mi lab favorito.", en: "I decided to get tests done here for the first time and I was impressed — nothing to envy from the big chains. The cleanliness, care and attention make you feel at home. Without a doubt, my favorite lab." } },
  { name: "Paciente Horvath", source: "WhatsApp", rating: 5, text: { es: "Gracias por todas las atenciones en este proceso de chequeo médico: excelente coordinación y un gracias enorme a la Dra. Gabriela. ¡Todo salió muy bien!", en: "Thank you for all the care during this medical check-up: excellent coordination and a huge thanks to Dr. Gabriela. Everything went really well!" } },
];

// Perfiles y chequeos reales del sanatorio (Horvath Health Profiles)
// accent: blue | pink | violet | cyan | green | navy
export const PATIENT_PROFILES = [
  {
    id: "perfil-tiroideo",
    image: "https://images.unsplash.com/photo-1767972463825-96eaa9e0766b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "cyan",
    tag: { es: "Tiroides", en: "Thyroid" },
    title: { es: "Perfil tiroideo", en: "Thyroid profile" },
    summary: { es: "Evaluación completa de la salud de tu tiroides.", en: "Complete evaluation of your thyroid health." },
    groups: [
      { label: { es: "Funciones tiroideas", en: "Thyroid function" }, items: ["TSH ultrasensible", "T4 libre", "T3 libre", "T4 total", "T3 total"] },
      { label: { es: "Autoinmunidad tiroidea", en: "Thyroid autoimmunity" }, items: ["Anti-TPO", "Anti-TG", "TRAB"] },
    ],
    orientedTo: { es: "Detección de alteraciones tiroideas, seguimiento de tratamientos y evaluación integral de la función tiroidea.", en: "Detection of thyroid disorders, treatment follow-up and comprehensive assessment of thyroid function." },
  },
  {
    id: "tipificacion-grupo-sanguineo",
    image: "https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "navy",
    tag: { es: "Grupo sanguíneo", en: "Blood type" },
    title: { es: "Tipificación grupo sanguíneo", en: "Blood type test" },
    summary: { es: "Conocé tu grupo sanguíneo y Factor Rh de manera rápida y confiable.", en: "Find out your blood type and Rh factor quickly and reliably." },
    groups: [
      { label: { es: "¿Qué determina?", en: "What it determines" }, items: ["Grupo sanguíneo ABO", "Factor Rh (positivo o negativo)"] },
      { label: { es: "Beneficios", en: "Benefits" }, items: ["Resultados en el día", "Tecnología de alto estándar", "Personal especializado"] },
    ],
    orientedTo: { es: "Importante para cirugías, embarazos, donación de sangre y tu información médica personal.", en: "Important for surgeries, pregnancies, blood donation and your personal medical record." },
  },
  {
    id: "perfil-reumatoideo",
    image: "https://images.unsplash.com/photo-1739932885175-5fdaa1bd5989?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "violet",
    tag: { es: "Reumatología", en: "Rheumatology" },
    title: { es: "Perfil reumatoideo", en: "Rheumatoid profile" },
    summary: { es: "Evaluación integral para el diagnóstico y seguimiento de enfermedades reumáticas.", en: "Comprehensive evaluation for diagnosis and follow-up of rheumatic diseases." },
    groups: [
      { label: { es: "Marcadores inflamatorios", en: "Inflammatory markers" }, items: ["Artritest látex", "PCR", "Ácido úrico", "ASTO", "VES"] },
      { label: { es: "Autoanticuerpos específicos", en: "Specific autoantibodies" }, items: ["ANA", "AC CCP"] },
    ],
    orientedTo: { es: "Personas con síntomas articulares (dolor, inflamación, rigidez), para diagnóstico temprano y control de tratamiento.", en: "People with joint symptoms (pain, swelling, stiffness), for early diagnosis and treatment control." },
  },
  {
    id: "test-embarazo",
    image: "https://images.unsplash.com/photo-1710897869539-a48e3d69a8d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "pink",
    tag: { es: "Embarazo", en: "Pregnancy" },
    title: { es: "Test de embarazo (BhCG)", en: "Pregnancy test (BhCG)" },
    summary: { es: "Detecta la hormona del embarazo (BhCG) en sangre de forma rápida, segura y confiable.", en: "Detects the pregnancy hormone (BhCG) in blood quickly, safely and reliably." },
    groups: [
      { label: { es: "Estudio · muestra de sangre", en: "Test · blood sample" }, items: ["BhCG cualitativo", "Alta sensibilidad y precisión", "Detección temprana"] },
    ],
    orientedTo: { es: "Mujeres que desean confirmar un posible embarazo desde los primeros días de retraso menstrual o según indicación médica.", en: "Women who want to confirm a possible pregnancy from the first days of a missed period or as medically indicated." },
  },
  {
    id: "panel-respiratorio",
    image: "https://images.unsplash.com/photo-1640622302099-f10b18de7b16?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "cyan",
    tag: { es: "Respiratorio", en: "Respiratory" },
    title: { es: "Panel respiratorio", en: "Respiratory panel" },
    summary: { es: "Detecta de forma rápida los virus más frecuentes que causan infecciones respiratorias.", en: "Quickly detects the most common viruses that cause respiratory infections." },
    groups: [
      { label: { es: "Virus detectados · hisopado nasofaríngeo", en: "Detected viruses · nasopharyngeal swab" }, items: ["Influenza A", "Influenza B", "VSR (Virus Sincitial Respiratorio)", "COVID-19 (SARS-CoV-2)"] },
      { label: { es: "Ventajas", en: "Advantages" }, items: ["Resultados el mismo día", "Ideal para niños y adultos", "Procedimiento mínimamente invasivo"] },
    ],
    orientedTo: { es: "Personas con síntomas respiratorios como fiebre, tos, dolor de garganta o congestión, para un diagnóstico oportuno.", en: "People with respiratory symptoms such as fever, cough, sore throat or congestion, for timely diagnosis." },
  },
  {
    id: "perfil-autoinmune",
    image: "https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "blue",
    tag: { es: "Autoinmunidad", en: "Autoimmunity" },
    title: { es: "Perfil autoinmune", en: "Autoimmune profile" },
    summary: { es: "Diagnóstico preciso para entender tu salud desde la raíz.", en: "Precise diagnosis to understand your health from the ground up." },
    groups: [
      { label: { es: "Evaluación integral de autoinmunidad", en: "Comprehensive autoimmunity panel" }, items: ["ANA por IFI (Hep-2)", "Anti-DNA (dsDNA)", "ENA (Ro/SSA, La/SSB, Sm, RNP)", "Factor Reumatoideo (FR)", "Anti-CCP", "Anti-TPO", "Anti-Tiroglobulina (Anti-Tg)", "Complemento C3 y C4", "VSG - PCR", "Orina completa"] },
    ],
    orientedTo: { es: "Personas con síntomas compatibles con enfermedades autoinmunes.", en: "People with symptoms compatible with autoimmune diseases." },
  },
  {
    id: "bienestar-masculino-elite",
    image: "/assets/perfiles/bienestar-masculino.jpg",
    accent: "blue",
    tag: { es: "Hombres", en: "Men" },
    title: { es: "Bienestar masculino elite", en: "Elite male wellness" },
    summary: { es: "Evaluación integral masculina para prevención cardiovascular, metabólica, hormonal y prostática.", en: "Comprehensive male check-up for cardiovascular, metabolic, hormonal and prostate prevention." },
    groups: [
      { label: { es: "Evaluación hematológica y metabólica", en: "Hematologic & metabolic panel" }, items: ["Hemograma", "VSG", "Perfil lipídico", "Ácido úrico", "Perfil renal", "Perfil hepático – GGT", "Glucosa", "HbA1c"] },
      { label: { es: "Marcadores tumorales", en: "Tumor markers" }, items: ["CEA", "CA 19.9"] },
      { label: { es: "Evaluación hormonal y prostática", en: "Hormonal & prostate panel" }, items: ["Vitamina D", "ANA HEP 2", "Testosterona total", "Testosterona libre", "PSA total", "PSA libre", "Orina simple"] },
    ],
    orientedTo: { es: "Hombres que buscan control preventivo integral, optimizar energía, rendimiento y salud prostática.", en: "Men seeking a full preventive check-up to optimize energy, performance and prostate health." },
  },
  {
    id: "salud-femenina-premium",
    image: "/assets/perfiles/salud-femenina-premium.jpg",
    accent: "pink",
    tag: { es: "Mujeres", en: "Women" },
    title: { es: "Salud femenina premium", en: "Premium women's health" },
    summary: { es: "Evaluación integral avanzada para el monitoreo completo de la salud femenina.", en: "Advanced comprehensive evaluation for complete women's health monitoring." },
    groups: [
      { label: { es: "Evaluación general y metabólica", en: "General & metabolic panel" }, items: ["Hemograma", "Glucosa", "HbA1c", "VSG", "Perfil lipídico", "Ácido úrico"] },
      { label: { es: "Función hepática y renal", en: "Liver & kidney function" }, items: ["Perfil hepático", "Gamma GT", "Perfil renal", "Proteínas T, A/G"] },
      { label: { es: "Infecciones y microbiología", en: "Infections & microbiology" }, items: ["VDRL", "HIV", "Orina cultivo", "Sec. vaginal cultivo"] },
      { label: { es: "Función hormonal", en: "Hormonal function" }, items: ["TSH", "FT4", "FT3", "FSH", "LH", "Estradiol"] },
      { label: { es: "Marcadores oncológicos y autoinmunidad", en: "Oncologic & autoimmune markers" }, items: ["CEA", "CA 15.3", "CA 125", "CA 19.9", "ANA HEP 2"] },
    ],
    orientedTo: { es: "Mujeres que buscan un chequeo preventivo de alta gama.", en: "Women seeking a high-end preventive check-up." },
  },
  {
    id: "chequeo-salud-express",
    image: "/assets/perfiles/chequeo-salud-express.jpg",
    accent: "cyan",
    tag: { es: "Prevención", en: "Prevention" },
    title: { es: "Chequeo de salud express", en: "Express health check" },
    summary: { es: "Evaluación integral básica: los principales indicadores de tu salud, con resultados en 1 día.", en: "Essential check-up with your key health indicators and results in 1 day." },
    groups: [
      { label: { es: "Estudios incluidos", en: "Included tests" }, items: ["Hemograma", "Eritrosedimentación", "GOT", "GPT", "Colesterol total", "Triglicéridos", "Urea", "Creatinina", "Glucosa", "VDRL", "HIV", "TSH", "Orina simple"] },
    ],
    orientedTo: { es: "Personas que buscan un control médico ágil, con resultados rápidos en 1 día.", en: "People looking for a quick medical check with fast results in 1 day." },
  },
  {
    id: "balance-hormonal-femenino",
    image: "/assets/perfiles/balance-hormonal-femenino.jpg",
    accent: "violet",
    tag: { es: "Hormonas", en: "Hormones" },
    title: { es: "Balance hormonal femenino", en: "Female hormonal balance" },
    summary: { es: "Evaluación integral del equilibrio endocrino femenino: fertilidad, ciclo, SOP y menopausia.", en: "Comprehensive evaluation of female endocrine balance: fertility, cycle, PCOS and menopause." },
    groups: [
      { label: { es: "Función hormonal", en: "Hormonal function" }, items: ["Estradiol", "FSH", "LH", "Progesterona", "Prolactina", "Testosterona", "DHEA SO4", "Androstenediona"] },
      { label: { es: "Metabolismo asociado", en: "Associated metabolism" }, items: ["Glucosa", "Insulina", "HOMA-IR"] },
      { label: { es: "Evaluación general", en: "General panel" }, items: ["Hemograma", "VSG", "Orina simple"] },
    ],
    orientedTo: { es: "Mujeres con alteraciones menstruales, acné, planificación de embarazo o control hormonal integral.", en: "Women with menstrual changes, acne, pregnancy planning or comprehensive hormonal control." },
  },
  {
    id: "vitaminico-nutricional",
    image: "/assets/perfiles/vitaminico-nutricional.jpg",
    accent: "green",
    tag: { es: "Nutrición", en: "Nutrition" },
    title: { es: "Perfil vitamínico y nutricional", en: "Vitamin & nutrition profile" },
    summary: { es: "Identifica deficiencias nutricionales y ayuda a mejorar tu energía.", en: "Identifies nutritional deficiencies and helps improve your energy." },
    groups: [
      { label: { es: "Perfil mineral", en: "Mineral panel" }, items: ["Calcio", "Magnesio", "Fósforo", "Zinc"] },
      { label: { es: "Proteínas y reservas", en: "Proteins & reserves" }, items: ["Proteínas totales", "Albúmina", "Hierro", "Ferritina", "Transferrina"] },
      { label: { es: "Vitaminas y base hematológica", en: "Vitamins & hematologic base" }, items: ["Hemograma", "Vitamina D", "Vitamina B12", "Folatos"] },
    ],
    orientedTo: { es: "Ideal para operados de cirugías bariátricas, veganos y vegetarianos.", en: "Ideal for bariatric surgery patients, vegans and vegetarians." },
  },
  {
    id: "perfil-deportista",
    image: "/assets/perfiles/perfil-deportista.jpg",
    accent: "cyan",
    tag: { es: "Deporte", en: "Sports" },
    title: { es: "Perfil deportista", en: "Athlete profile" },
    summary: { es: "Evaluación integral para rendimiento físico y control metabólico.", en: "Comprehensive evaluation for physical performance and metabolic control." },
    groups: [
      { label: { es: "Perfil vitamínico completo", en: "Full vitamin panel" }, items: ["Vitamina D", "B12", "Folatos", "Hierro", "Ferritina", "Transferrina", "Zinc"] },
      { label: { es: "Hormonas", en: "Hormones" }, items: ["TSH", "T4 libre", "Testosterona", "Cortisol AM"] },
      { label: { es: "Marcadores musculares", en: "Muscle markers" }, items: ["CK total", "LDH"] },
      { label: { es: "Metabolismo y hemograma", en: "Metabolism & CBC" }, items: ["Glucosa", "HbA1c", "Hemograma completo", "Orina simple"] },
      { label: { es: "Función hepática y renal", en: "Liver & kidney function" }, items: ["GOT", "GPT", "Fosfatasa Alcalina", "GGT", "Urea", "Creatinina"] },
      { label: { es: "Perfil lipídico", en: "Lipid panel" }, items: ["Colesterol Total", "C-HDL", "C-LDL", "C-VLDL", "Triglicéridos", "Lípidos totales"] },
    ],
    orientedTo: { es: "Deportistas profesionales y amateurs, y preparación para competencias.", en: "Professional and amateur athletes, and competition preparation." },
  },
  {
    id: "stress-control",
    image: "/assets/perfiles/stress-control.jpg",
    accent: "violet",
    tag: { es: "Bienestar", en: "Wellness" },
    title: { es: "Perfil Stress control", en: "Stress control profile" },
    summary: { es: "Evaluación integral para el rendimiento físico y mental.", en: "Comprehensive evaluation for physical and mental performance." },
    groups: [
      { label: { es: "Estudios incluidos", en: "Included tests" }, items: ["Hemograma", "DHEA SO4", "Cortisol AM", "Cortisol PM", "TSH", "FT4", "Prolactina", "ACTH AM", "ACTH PM"] },
    ],
    orientedTo: { es: "Personas con cansancio extremo, insomnio, ansiedad o sospecha de burnout.", en: "People with extreme fatigue, insomnia, anxiety or suspected burnout." },
  },
  {
    id: "its-basico",
    image: "/assets/perfiles/its-basico.jpg",
    accent: "cyan",
    tag: { es: "ITS", en: "STIs" },
    title: { es: "Perfil ITS básico", en: "Basic STI profile" },
    summary: { es: "Detección preventiva, rápida y confidencial de infecciones de transmisión sexual.", en: "Preventive, fast and confidential screening for sexually transmitted infections." },
    groups: [
      { label: { es: "Serología infecciosa", en: "Infectious serology" }, items: ["VDRL", "FTA ABS IGG", "FTA ABS IGM", "Hepatitis B", "HIV"] },
    ],
    orientedTo: { es: "Personas sexualmente activas que buscan un control preventivo, rápido y confidencial.", en: "Sexually active people seeking a fast, confidential preventive screening." },
  },
  {
    id: "its-femenino-extendido",
    image: "/assets/perfiles/its-femenino-extendido.jpg",
    accent: "pink",
    tag: { es: "ITS", en: "STIs" },
    title: { es: "Perfil ITS femenino extendido", en: "Extended female STI profile" },
    summary: { es: "Evaluación integral sexual preventiva femenina, incluso en etapas asintomáticas.", en: "Comprehensive preventive female sexual health screening, even at asymptomatic stages." },
    groups: [
      { label: { es: "Microbiología", en: "Microbiology" }, items: ["Clamidia Ag", "Neisseria Gonorrhoeae", "Candida sp", "Trichomonas vaginalis", "Ureaplasma", "Mycoplasma", "Orina cultivo", "Cultivo sec. vaginal"] },
      { label: { es: "Serología infecciosa", en: "Infectious serology" }, items: ["VDRL", "FTA-ABS IGG", "FTA-ABS IGM", "HIV Ac", "Hepatitis B", "Hepatitis C", "Herpes Tipo 2 IGG", "Herpes Tipo 2 IGM"] },
    ],
    orientedTo: { es: "Mujeres que buscan un control sexual integral y confidencial, de rutina o por síntomas.", en: "Women seeking a comprehensive, confidential sexual health check, routine or symptom-based." },
  },
  {
    id: "its-masculino-extendido",
    image: "/assets/perfiles/its-masculino-extendido.jpg",
    accent: "blue",
    tag: { es: "ITS", en: "STIs" },
    title: { es: "Perfil ITS masculino extendido", en: "Extended male STI profile" },
    summary: { es: "Detección preventiva y confidencial de infecciones de transmisión sexual.", en: "Preventive and confidential screening for sexually transmitted infections." },
    groups: [
      { label: { es: "Serología infecciosa", en: "Infectious serology" }, items: ["VDRL", "FTA ABS IGG", "FTA ABS IGM", "HIV Ac", "Hepatitis B", "Hepatitis C", "Herpes Tipo 2 IGG", "Herpes Tipo 2 IGM"] },
      { label: { es: "Infecciones frecuentes", en: "Common infections" }, items: ["Chlamydia Ag", "Neisseria Gonorrhoeae", "Candida sp", "Trichomonas", "Ureaplasma", "Mycoplasma", "Orina cultivo", "Cultivo líq. biológicos"] },
    ],
    orientedTo: { es: "Hombres que desean un chequeo integral, confidencial y preventivo para proteger su salud y la de su pareja.", en: "Men who want a comprehensive, confidential preventive check to protect their health and their partner's." },
  },
  {
    id: "pre-natal-completo",
    image: "/assets/perfiles/pre-natal-completo.jpg",
    accent: "pink",
    tag: { es: "Embarazo", en: "Pregnancy" },
    title: { es: "Perfil pre natal completo", en: "Complete prenatal profile" },
    summary: { es: "Evaluación integral del embarazo y detección de infecciones.", en: "Comprehensive pregnancy evaluation and infection screening." },
    groups: [
      { label: { es: "Evaluación hematológica y metabólica", en: "Hematologic & metabolic panel" }, items: ["Hemograma", "Grupo sanguíneo", "Glucosa", "HbA1c", "Calcio", "Magnesio", "Perfil renal", "Perfil hepático", "Perfil lipídico", "Ácido úrico", "Vitamina D", "Folato"] },
      { label: { es: "Infecciones y screening prenatal", en: "Infections & prenatal screening" }, items: ["TORCH", "VDRL", "Orina simple y cultivo", "Sec. vaginal cultivo", "Clamidia", "Ureaplasma", "Mycoplasma"] },
    ],
    orientedTo: { es: "Mujeres embarazadas en cualquier etapa, especialmente al inicio del control prenatal.", en: "Pregnant women at any stage, especially at the start of prenatal care." },
  },
  {
    id: "pre-quirurgico",
    image: "/assets/perfiles/pre-quirurgico.jpg",
    accent: "navy",
    tag: { es: "Prequirúrgico", en: "Pre-surgical" },
    title: { es: "Control pre quirúrgico", en: "Pre-surgical check" },
    summary: { es: "Evaluación clínica previa a cirugías.", en: "Clinical evaluation prior to surgery." },
    groups: [
      { label: { es: "Evaluación hematológica y metabólica", en: "Hematologic & metabolic panel" }, items: ["Hemograma", "VSG", "PCR", "Glucosa", "Orina simple", "Tipificación", "Coagulograma", "Urea", "Creatinina", "GOT - GPT", "Electrolitos"] },
    ],
    orientedTo: { es: "Pacientes que se preparan para cualquier tipo de cirugía.", en: "Patients preparing for any type of surgery." },
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
