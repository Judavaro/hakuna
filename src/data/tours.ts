export interface Tour {
  id: string;
  title: string;
  location: string;
  country: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  category: "playa" | "aventura" | "cultura" | "naturaleza" | "paquete";
  highlights: string[];
  includes: string[];
  itinerary: { day: number; title: string; description: string }[];
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    id: "cartagena-magica",
    title: "Cartagena Mágica",
    location: "Cartagena de Indias",
    country: "Colombia",
    description: "Sumérgete en la magia de Cartagena con un tour que combina historia colonial, playas paradisíacas y la vibrante gastronomía caribeña. Recorre las murallas centenarias, navega hasta las Islas del Rosario y disfruta de atardeceres inolvidables.",
    shortDescription: "Historia, playas y gastronomía caribeña en la joya de Colombia.",
    price: 1250000,
    originalPrice: 1500000,
    duration: "4 días / 3 noches",
    rating: 4.9,
    reviews: 342,
    image: "hero-cartagena",
    category: "cultura",
    featured: true,
    highlights: ["City tour por la ciudad amurallada", "Islas del Rosario en catamarán", "Cena gourmet en restaurante top", "Volcán del Totumo"],
    includes: ["Hotel 4 estrellas", "Desayunos incluidos", "Transporte privado", "Guía bilingüe", "Seguro de viaje"],
    itinerary: [
      { day: 1, title: "Llegada y City Tour", description: "Recepción en aeropuerto, check-in y recorrido por la ciudad amurallada al atardecer." },
      { day: 2, title: "Islas del Rosario", description: "Navegación en catamarán, snorkel en arrecifes de coral y almuerzo en playa privada." },
      { day: 3, title: "Volcán del Totumo y Gastronomía", description: "Baño de lodo en el volcán y cena degustación en Bazurto Social Club." },
      { day: 4, title: "Mañana libre y despedida", description: "Tiempo libre para compras en Las Bóvedas. Traslado al aeropuerto." },
    ],
  },
  {
    id: "eje-cafetero",
    title: "Eje Cafetero Aventura",
    location: "Valle del Cocora",
    country: "Colombia",
    description: "Descubre el corazón cafetero de Colombia. Camina entre las palmas de cera más altas del mundo, visita fincas cafeteras tradicionales y vive la cultura paisa en pueblos de colores.",
    shortDescription: "Palmas de cera, café de origen y pueblos con encanto.",
    price: 980000,
    duration: "3 días / 2 noches",
    rating: 4.8,
    reviews: 218,
    image: "tour-cocora",
    category: "naturaleza",
    featured: true,
    highlights: ["Caminata Valle del Cocora", "Tour de café de origen", "Pueblo de Salento", "Termales de Santa Rosa"],
    includes: ["Hospedaje en finca cafetera", "Alimentación completa", "Transporte 4x4", "Guía especializado"],
    itinerary: [
      { day: 1, title: "Salento y café", description: "Llegada a Salento, tour por finca cafetera y tarde libre en el pueblo." },
      { day: 2, title: "Valle del Cocora", description: "Caminata de 5 horas entre palmas de cera y bosque de niebla." },
      { day: 3, title: "Termales y regreso", description: "Mañana en termales naturales y regreso." },
    ],
  },
  {
    id: "tayrona-paraiso",
    title: "Tayrona Paraíso",
    location: "Parque Tayrona",
    country: "Colombia",
    description: "Explora uno de los parques naturales más hermosos de Sudamérica. Playas vírgenes, selva tropical y la mística Ciudad Perdida te esperan.",
    shortDescription: "Playas vírgenes y selva tropical en el Caribe colombiano.",
    price: 1100000,
    originalPrice: 1350000,
    duration: "3 días / 2 noches",
    rating: 4.7,
    reviews: 189,
    image: "tour-tayrona",
    category: "playa",
    featured: true,
    highlights: ["Playa Cabo San Juan", "Caminata ecológica", "Snorkel en arrecifes", "Amanecer en hamaca"],
    includes: ["Camping premium", "Alimentación", "Entrada al parque", "Guía naturalista"],
    itinerary: [
      { day: 1, title: "Ingreso y caminata", description: "Caminata por sendero hasta Cabo San Juan. Instalación en camping." },
      { day: 2, title: "Exploración", description: "Snorkel, visita a playas secretas y avistamiento de fauna." },
      { day: 3, title: "Amanecer y regreso", description: "Amanecer desde el mirador y caminata de regreso." },
    ],
  },
  {
    id: "cano-cristales",
    title: "Caño Cristales",
    location: "La Macarena, Meta",
    country: "Colombia",
    description: "Conoce el río de los cinco colores, una maravilla natural única en el mundo. Una experiencia exclusiva en el corazón de la biodiversidad colombiana.",
    shortDescription: "El río más hermoso del mundo en una experiencia única.",
    price: 2200000,
    duration: "4 días / 3 noches",
    rating: 5.0,
    reviews: 97,
    image: "tour-cristales",
    category: "naturaleza",
    highlights: ["Río de los 5 colores", "Cascadas naturales", "Avistamiento de fauna", "Fotografía profesional"],
    includes: ["Vuelo charter", "Hotel ecológico", "Alimentación completa", "Guía certificado", "Permiso ambiental"],
    itinerary: [
      { day: 1, title: "Vuelo a La Macarena", description: "Vuelo charter, check-in y charla de orientación ambiental." },
      { day: 2, title: "Caño Cristales", description: "Día completo recorriendo los pozos y cascadas del río." },
      { day: 3, title: "Senderos alternativos", description: "Caminata por senderos menos conocidos y avistamiento de aves." },
      { day: 4, title: "Regreso", description: "Mañana libre y vuelo de regreso." },
    ],
  },
  {
    id: "machu-picchu",
    title: "Machu Picchu Imperial",
    location: "Cusco",
    country: "Perú",
    description: "Vive la grandeza del Imperio Inca. Desde la majestuosidad de Cusco hasta la ciudadela sagrada de Machu Picchu, una aventura que cambiará tu vida.",
    shortDescription: "La ciudadela Inca y la grandeza de Cusco te esperan.",
    price: 3500000,
    originalPrice: 4200000,
    duration: "5 días / 4 noches",
    rating: 4.9,
    reviews: 456,
    image: "tour-machupicchu",
    category: "aventura",
    highlights: ["Machu Picchu al amanecer", "Valle Sagrado", "Tren panorámico", "Gastronomía peruana"],
    includes: ["Hotel 4 estrellas", "Tren Vistadome", "Entrada a Machu Picchu", "Guía profesional", "Vuelos internos"],
    itinerary: [
      { day: 1, title: "Llegada a Cusco", description: "Recepción, aclimatación y city tour por Cusco colonial." },
      { day: 2, title: "Valle Sagrado", description: "Visita a Pisac, Ollantaytambo y mercados artesanales." },
      { day: 3, title: "Machu Picchu", description: "Tren panorámico a Aguas Calientes y visita guiada a la ciudadela." },
      { day: 4, title: "Machu Picchu amanecer", description: "Segunda entrada al amanecer. Tarde libre en Aguas Calientes." },
      { day: 5, title: "Regreso a Cusco", description: "Tren de regreso y tarde libre para compras." },
    ],
  },
  {
    id: "san-andres-all-inclusive",
    title: "San Andrés All Inclusive",
    location: "San Andrés Isla",
    country: "Colombia",
    description: "Relájate en el mar de los siete colores con todo incluido. Playa, deportes acuáticos y la mejor gastronomía isleña en un plan sin preocupaciones.",
    shortDescription: "Mar de siete colores con todo incluido.",
    price: 1800000,
    duration: "5 días / 4 noches",
    rating: 4.6,
    reviews: 523,
    image: "tour-sanandres",
    category: "playa",
    featured: true,
    highlights: ["Johnny Cay", "La Piscinita", "Acuario natural", "Deportes acuáticos"],
    includes: ["Hotel all inclusive", "Vuelos ida y vuelta", "Tours en lancha", "Tarjeta de turismo", "Seguro"],
    itinerary: [
      { day: 1, title: "Llegada a la isla", description: "Traslado al hotel, check-in y tarde en la playa." },
      { day: 2, title: "Tour por la isla", description: "Recorrido en moto por toda la isla y sus miradores." },
      { day: 3, title: "Johnny Cay y Acuario", description: "Tour en lancha a los cayos más famosos." },
      { day: 4, title: "Deportes acuáticos", description: "Snorkel, kayak y paddleboard incluidos." },
      { day: 5, title: "Despedida", description: "Mañana libre y traslado al aeropuerto." },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "María Fernanda López",
    location: "Bogotá, Colombia",
    text: "Hakuna superó todas mis expectativas. El tour a Cartagena fue perfecto, cada detalle estaba cuidado. ¡La mejor agencia de viajes con la que he viajado!",
    rating: 5,
    avatar: "MF",
    tour: "Cartagena Mágica",
  },
  {
    id: 2,
    name: "Carlos Andrés Mejía",
    location: "Medellín, Colombia",
    text: "Increíble experiencia en Caño Cristales. El guía fue excepcional y la logística impecable. Ya estoy planeando mi próximo viaje con Hakuna.",
    rating: 5,
    avatar: "CA",
    tour: "Caño Cristales",
  },
  {
    id: 3,
    name: "Laura Valentina Torres",
    location: "Cali, Colombia",
    text: "El plan a Machu Picchu fue un sueño hecho realidad. Todo organizado al detalle, sin estrés. Hakuna Matata de verdad — sin preocupaciones.",
    rating: 5,
    avatar: "LV",
    tour: "Machu Picchu Imperial",
  },
  {
    id: 4,
    name: "Sebastián Ríos",
    location: "Barranquilla, Colombia",
    text: "San Andrés all inclusive fue espectacular. Hotel de primera, tours increíbles y un servicio al cliente excepcional. 100% recomendado.",
    rating: 4,
    avatar: "SR",
    tour: "San Andrés All Inclusive",
  },
];

export const categories = [
  { id: "todos", label: "Todos", icon: "🌎" },
  { id: "playa", label: "Playas", icon: "🏖️" },
  { id: "aventura", label: "Aventura", icon: "🧗" },
  { id: "cultura", label: "Cultura", icon: "🏛️" },
  { id: "naturaleza", label: "Naturaleza", icon: "🌿" },
  { id: "paquete", label: "Paquetes", icon: "📦" },
];

export const faqItems = [
  {
    question: "¿Cómo reservo un tour?",
    answer: "Selecciona el destino que te interesa, elige tus fechas y número de viajeros, y completa el checkout rápido. Recibirás confirmación inmediata por email y WhatsApp.",
  },
  {
    question: "¿Qué incluyen los precios?",
    answer: "Cada tour detalla exactamente qué está incluido. Generalmente incluyen alojamiento, transporte, guía profesional y las actividades mencionadas. Los vuelos se indican cuando están incluidos.",
  },
  {
    question: "¿Puedo cancelar o cambiar fechas?",
    answer: "Sí, ofrecemos cancelación gratuita hasta 15 días antes del viaje. Cambios de fecha sujetos a disponibilidad sin costo adicional hasta 10 días antes.",
  },
  {
    question: "¿Los tours son privados o en grupo?",
    answer: "Ofrecemos ambas opciones. Los tours en grupo tienen máximo 12 personas. También puedes solicitar un tour privado con un suplemento.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito/débito, transferencia bancaria, PSE, Nequi, Daviplata y pagos en efectivo en nuestras oficinas.",
  },
  {
    question: "¿Ofrecen planes a medida?",
    answer: "¡Por supuesto! Contáctanos por WhatsApp y diseñamos el viaje perfecto según tus preferencias, presupuesto y fechas.",
  },
];
