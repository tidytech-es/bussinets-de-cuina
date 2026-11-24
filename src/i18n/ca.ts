// Textos en català (idioma principal). Mateixa estructura que es.ts.
export const ca = {
  lang: 'ca',
  htmlLang: 'ca',
  locale: 'ca_ES',
  path: '/',
  legalPath: '/avis-legal/',
  other: { label: 'Castellano', short: 'ES', path: '/es/', legalPath: '/es/aviso-legal/' },

  meta: {
    title: 'Menjar per emportar a Granollers i càtering | Bussinets de Cuina',
    description:
      'Menjar per emportar a Granollers: menú de dilluns a divendres a 7,50 €, paella els dijous i pollastre a l’ast els diumenges. Càtering per a celebracions i empreses. 938 70 53 43.',
  },

  skip: 'Salta al contingut',
  nav: { week: 'Menú', dishes: 'Plats', takeaway: 'Per emportar', catering: 'Càtering', hours: 'Horari', label: 'Navegació principal' },
  langSwitch: 'Llegeix en castellà',

  cta: { call: 'Truca ara', callShort: 'Truca', directions: 'Com arribar' },

  status: {
    fallback: 'Dl–dv 10–16 h · Dg 8–15 h',
    open: 'Obert ara',
    closed: 'Tancat ara',
    until: (t: string) => `fins a les ${t}`,
    opensToday: (t: string) => `obrim avui a les ${t}`,
    opensTomorrow: (t: string) => `obrim demà a les ${t}`,
    opensOn: (d: string, t: string) => `obrim ${d} a les ${t}`,
  },

  days: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
  daysCap: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],

  hero: {
    title: ['Cuina casolana', 'per emportar,', 'a Granollers.'],
    lead: 'Menú de dilluns a divendres, paella tots els dijous i pollastre a l’ast els diumenges. Per endur-te’ls a casa o a la feina. I càtering per a celebracions, reunions i esdeveniments.',
    ratingLabel: 'de 5 a Google',
    reviews: '169 ressenyes',
    price: '10–20 € per persona',
    menuFact: 'Menú dl–dv 7,50 €',
    photoAlt: 'Façana del local de Bussinets de Cuina al carrer Conestable de Portugal, amb els rètols de càtering i esdeveniments',
  },

  ribbon: ['Menú de dilluns a divendres 7,50 €', 'Paella tots els dijous', 'Pollastre a l’ast els diumenges', 'Càtering per a celebracions i empreses', 'Croquetes de 10', 'Paelles i fideuà per encàrrec'],
  badge: 'Cuina casolana · Per emportar · Granollers · ',
  badgeCenter: 'Menú',

  week: {
    title: 'Menú, paella i pollastre a l’ast',
    today: 'Avui',
    menu: {
      when: 'De dilluns a divendres',
      name: 'Menú del dia',
      price: '7,50 €',
      detail: 'Primer plat, segon plat i postres petites o beguda.',
      note: 'Si el segon és de peix, +1 € de suplement.',
    },
    paella: { when: 'Tots els dijous', name: 'Paella', detail: 'I paelles i fideuà per encàrrec: truca’ns i ho parlem.' },
    chicken: { when: 'Els diumenges', name: 'Pollastre a l’ast', detail: 'Per endur-te’l a casa. Diumenge obrim de 8:00 a 15:00.' },
  },

  dishes: {
    title: 'Què cuinem',
    lead: 'Cuina de cada dia, sense complicacions. Aquests són els plats que més surten a les ressenyes dels clients.',
    more: 'També hi trobaràs pasta amb salsa i plats de cullera. Pregunta’ns què hi ha avui.',
    photoPending: 'Foto pendent',
    items: {
      fideua: { name: 'Fideuà', note: 'Una clienta la destaca a la seva ressenya.' },
      croquetes: { name: 'Croquetes', note: '“De 10”, segons una clienta a Google.' },
      galta: { name: 'Galta', note: 'Carrillera. També surt a les ressenyes.' },
      rap: { name: 'Rap amb gambes', note: 'De la carta de la casa.' },
    },
  },

  takeaway: {
    title: 'Per emportar, així de fàcil',
    steps: [
      { title: 'Mira què hi ha avui', text: 'Passa pel local o truca’ns i et direm els plats del dia.' },
      { title: 'Truca o vine', text: 'Encarrega-ho per telèfon o tria-ho al moment, al taulell.' },
      { title: 'Recull-ho i a taula', text: 'Ho passes a buscar al carrer Conestable de Portugal, 13.' },
    ],
    note: 'Encàrrecs per telèfon',
  },

  catering: {
    title: 'La teva celebració també pot tenir gust casolà.',
    lead: 'No només preparem menjar per emportar: també fem càtering a Granollers per a celebracions, reunions i esdeveniments, amb propostes adaptades a cada ocasió, cuina casolana, productes de qualitat i tracte proper.',
    occasions: ['Celebracions', 'Reunions', 'Esdeveniments'],
    formTitle: 'Demana el teu càtering',
    formLead: 'Explica’ns què celebres i et contactem amb una proposta.',
    fields: {
      name: 'Nom',
      phone: 'Telèfon',
      type: 'Tipus d’esdeveniment',
      typeOptions: ['Celebració familiar', 'Reunió o dinar d’empresa', 'Esdeveniment', 'Un altre'],
      typePlaceholder: 'Tria’n un',
      people: 'Nombre de persones',
      date: 'Data',
      comments: 'Comentaris',
      commentsHint: 'Hora, lloc, al·lèrgies, què t’agradaria menjar…',
      privacy: 'He llegit i accepto la',
      privacyLink: 'política de privacitat',
      optional: 'opcional',
    },
    submit: 'Envia la consulta',
    sending: 'Enviant…',
    successTitle: 'Consulta enviada',
    successText: 'Gràcies! Et trucarem per parlar-ne. Si és urgent, truca’ns al 938 70 53 43.',
    mailTitle: 'Ja gairebé està',
    mailText: 'S’ha obert el teu correu amb la consulta escrita. Envia-la i et contactarem. Si no s’ha obert, escriu-nos a btreche@hotmail.com o truca al 938 70 53 43.',
    error: 'No s’ha pogut enviar. Truca’ns al 938 70 53 43 i ho parlem.',
    required: 'Omple els camps marcats.',
    orCall: 'Prefereixes parlar-ho?',
    waIntro: 'Hola! Voldria demanar pressupost de càtering.',
  },

  reviews: {
    title: 'Què en diuen els clients',
    outOf: 'de 5',
    count: '169 ressenyes a Google',
    source: 'Ressenya de Google',
    starsLabel: 'Valoració de 4,2 sobre 5',
    quotes: [
      { text: 'Variado catering y todo buenísimo, sin duda… no dejamos de repetir.', lang: 'es' },
      { text: 'Muy buena cocina, raciones buenas y calidad precio muy bueno.', lang: 'es' },
    ],
    summary: {
      before: 'Una clienta destaca la galta, la fideuà i ',
      quote: 'las croquetas de 10',
      after: ', i l’atenció de la Bibiana.',
    },
    link: 'Llegeix totes les ressenyes',
  },

  visit: {
    title: 'Horari i com arribar',
    hoursTitle: 'Horari',
    closed: 'Tancat',
    today: 'avui',
    holidays: 'Els festius l’horari pot canviar.',
    addressTitle: 'Adreça',
    phoneTitle: 'Telèfon i correu',
    mapButton: 'Mostra el mapa',
    mapNote: 'El mapa és de Google Maps i en carregar-lo Google pot fer servir galetes.',
    mapTitle: 'Mapa de Bussinets de Cuina a Granollers',
    photoAlt: 'Entrada del local, amb la pissarra “Avui pollastre a l’ast” a la porta',
  },

  footer: {
    tagline: 'Cuina casolana per emportar i càtering a Granollers.',
    follow: 'Segueix-nos a Facebook',
    legal: 'Avís legal i privacitat',
    rights: 'Bussinets de Cuina',
  },

  callbar: { label: 'Accions ràpides' },

  legal: {
    title: 'Avís legal i política de privacitat',
    back: 'Torna a l’inici',
  },
};

export type Dict = typeof ca;
