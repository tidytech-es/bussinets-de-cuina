// Textos en castellano. Misma estructura que ca.ts.
import type { Dict } from './ca';

export const es: Dict = {
  lang: 'es',
  htmlLang: 'es',
  locale: 'es_ES',
  path: '/es/',
  legalPath: '/es/aviso-legal/',
  other: { label: 'Català', short: 'CA', path: '/', legalPath: '/avis-legal/' },

  meta: {
    title: 'Comida para llevar en Granollers y catering | Bussinets de Cuina',
    description:
      'Comida para llevar en Granollers: menú de lunes a viernes a 7,50 €, paella los jueves y pollo a l’ast los domingos. Catering para celebraciones y empresas. 938 70 53 43.',
  },

  skip: 'Saltar al contenido',
  nav: { week: 'Menú', dishes: 'Platos', takeaway: 'Para llevar', catering: 'Catering', hours: 'Horario', label: 'Navegación principal' },
  langSwitch: 'Llegir en català',

  cta: { call: 'Llama ahora', callShort: 'Llamar', directions: 'Cómo llegar' },

  status: {
    fallback: 'L–V 10–16 h · D 8–15 h',
    open: 'Abierto ahora',
    closed: 'Cerrado ahora',
    until: (t: string) => `hasta las ${t}`,
    opensToday: (t: string) => `abrimos hoy a las ${t}`,
    opensTomorrow: (t: string) => `abrimos mañana a las ${t}`,
    opensOn: (d: string, t: string) => `abrimos el ${d} a las ${t}`,
  },

  days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  daysCap: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],

  hero: {
    title: ['Cocina casera', 'para llevar,', 'en Granollers.'],
    lead: 'Menú de lunes a viernes, paella todos los jueves y pollo a l’ast los domingos. Para llevártelos a casa o al trabajo. Y catering para celebraciones, reuniones y eventos.',
    ratingLabel: 'de 5 en Google',
    reviews: '169 reseñas',
    price: '10–20 € por persona',
    menuFact: 'Menú L–V 7,50 €',
    photoAlt: 'Fachada del local de Bussinets de Cuina en la calle Conestable de Portugal, con los rótulos de catering y eventos',
  },

  week: {
    title: 'Menú, paella y pollo a l’ast',
    today: 'Hoy',
    menu: {
      when: 'De lunes a viernes',
      name: 'Menú del día',
      price: '7,50 €',
      detail: 'Primer plato, segundo plato y postre pequeño o bebida.',
      note: 'Si el segundo es de pescado, +1 € de suplemento.',
    },
    paella: { when: 'Todos los jueves', name: 'Paella', detail: 'Y paellas y fideuà por encargo: llámanos y lo hablamos.' },
    chicken: { when: 'Los domingos', name: 'Pollo a l’ast', detail: 'Para llevártelo a casa. El domingo abrimos de 8:00 a 15:00.' },
  },

  dishes: {
    title: 'Qué cocinamos',
    lead: 'Cocina de cada día, sin complicaciones. Estos son los platos que más salen en las reseñas de los clientes.',
    more: 'También encontrarás pasta con salsa y platos de cuchara. Pregúntanos qué hay hoy.',
    photoPending: 'Foto pendiente',
    items: {
      fideua: { name: 'Fideuà', note: 'Una clienta la destaca en su reseña.' },
      croquetes: { name: 'Croquetas', note: '“De 10”, según una clienta en Google.' },
      galta: { name: 'Galta', note: 'Carrillera. También sale en las reseñas.' },
      rap: { name: 'Rape con gambas', note: 'De la carta de la casa.' },
    },
  },

  takeaway: {
    title: 'Para llevar, así de fácil',
    steps: [
      { title: 'Mira qué hay hoy', text: 'Pásate por el local o llámanos y te decimos los platos del día.' },
      { title: 'Llama o ven', text: 'Encárgalo por teléfono o elígelo en el momento, en el mostrador.' },
      { title: 'Recógelo y a la mesa', text: 'Lo pasas a buscar a la calle Conestable de Portugal, 13.' },
    ],
    note: 'Encargos por teléfono',
  },

  catering: {
    title: 'Tu celebración también puede tener sabor casero.',
    lead: 'No solo preparamos comida para llevar: también ofrecemos catering en Granollers para celebraciones, reuniones y eventos, con propuestas adaptadas a cada ocasión, cocina casera, productos de calidad y atención cercana.',
    occasions: ['Celebraciones', 'Reuniones', 'Eventos'],
    formTitle: 'Pide tu catering',
    formLead: 'Cuéntanos qué celebras y te contactamos con una propuesta.',
    fields: {
      name: 'Nombre',
      phone: 'Teléfono',
      type: 'Tipo de evento',
      typeOptions: ['Celebración familiar', 'Reunión o comida de empresa', 'Evento', 'Otro'],
      typePlaceholder: 'Elige uno',
      people: 'Número de personas',
      date: 'Fecha',
      comments: 'Comentarios',
      commentsHint: 'Hora, lugar, alergias, qué te gustaría comer…',
      privacy: 'He leído y acepto la',
      privacyLink: 'política de privacidad',
      optional: 'opcional',
    },
    submit: 'Enviar consulta',
    sending: 'Enviando…',
    successTitle: 'Consulta enviada',
    successText: '¡Gracias! Te llamaremos para hablarlo. Si es urgente, llámanos al 938 70 53 43.',
    mailTitle: 'Ya casi está',
    mailText: 'Se ha abierto tu correo con la consulta escrita. Envíala y te contactaremos. Si no se ha abierto, escríbenos a btretze@hotmail.com o llama al 938 70 53 43.',
    error: 'No se ha podido enviar. Llámanos al 938 70 53 43 y lo hablamos.',
    required: 'Rellena los campos marcados.',
    orCall: '¿Prefieres hablarlo?',
    waIntro: '¡Hola! Quería pedir presupuesto de catering.',
  },

  reviews: {
    title: 'Lo que dicen los clientes',
    outOf: 'de 5',
    count: '169 reseñas en Google',
    source: 'Reseña de Google',
    starsLabel: 'Valoración de 4,2 sobre 5',
    quotes: [
      { text: 'Variado catering y todo buenísimo, sin duda… no dejamos de repetir.', lang: 'es' },
      { text: 'Muy buena cocina, raciones buenas y calidad precio muy bueno.', lang: 'es' },
    ],
    summary: {
      before: 'Una clienta destaca la galta, la fideuà y ',
      quote: 'las croquetas de 10',
      after: ', y la atención de Bibiana.',
    },
    link: 'Lee todas las reseñas',
  },

  visit: {
    title: 'Horario y cómo llegar',
    hoursTitle: 'Horario',
    closed: 'Cerrado',
    today: 'hoy',
    holidays: 'En festivos el horario puede cambiar.',
    addressTitle: 'Dirección',
    phoneTitle: 'Teléfono y correo',
    mapButton: 'Mostrar el mapa',
    mapNote: 'El mapa es de Google Maps y al cargarlo Google puede usar cookies.',
    mapTitle: 'Mapa de Bussinets de Cuina en Granollers',
    photoAlt: 'Entrada del local, con la pizarra “Avui pollastre a l’ast” en la puerta',
  },

  footer: {
    tagline: 'Cocina casera para llevar y catering en Granollers.',
    follow: 'Síguenos en Facebook',
    legal: 'Aviso legal y privacidad',
    rights: 'Bussinets de Cuina',
  },

  callbar: { label: 'Acciones rápidas' },

  legal: {
    title: 'Aviso legal y política de privacidad',
    back: 'Volver al inicio',
  },
};
