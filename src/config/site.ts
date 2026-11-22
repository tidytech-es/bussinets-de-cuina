// ─────────────────────────────────────────────────────────────
// Dades del negoci. Tot el que hi ha aquí surt del brief del client.
// Si alguna dada canvia, es canvia NOMÉS aquí.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Bussinets de Cuina',
  // TODO(client): confirmar el domini definitiu (es veu "www.bussinetsdecuina.cat" a la banderola de la façana).
  url: 'https://www.bussinetsdecuina.cat',

  address: {
    street: 'Carrer Conestable de Portugal, 13',
    postalCode: '08402',
    city: 'Granollers',
    region: 'Barcelona',
    country: 'ES',
  },

  // TODO(client): confirmar que aquest és el telèfon per a encàrrecs.
  phone: {
    display: '938 70 53 43',
    href: 'tel:938705343',
    e164: '+34938705343',
  },

  // Correu facilitat pel client (2026-11-22)
  email: 'btretze@hotmail.com',

  facebook: 'https://www.facebook.com/bussinetsdecuina',

  // TODO(client): substituir per l'enllaç exacte de la fitxa de Google (Compartir → Copiar enllaç).
  googleProfile:
    'https://www.google.com/maps/search/?api=1&query=Bussinets+de+Cuina%2C+Carrer+Conestable+de+Portugal+13%2C+Granollers',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Carrer+Conestable+de+Portugal+13%2C+08402+Granollers',
  mapEmbed:
    'https://www.google.com/maps?q=Bussinets+de+Cuina,+Carrer+Conestable+de+Portugal+13,+08402+Granollers&output=embed',

  priceRange: '10–20 €',
  rating: { value: 4.2, count: 169 },

  // Horari real. Minuts des de mitjanit. 0 = diumenge … 6 = dissabte. null = tancat.
  // TODO(client): confirmar horari i dies festius (els festius no estan contemplats).
  hours: {
    0: [8 * 60, 15 * 60],
    1: [10 * 60, 16 * 60],
    2: [10 * 60, 16 * 60],
    3: [10 * 60, 16 * 60],
    4: [10 * 60, 16 * 60],
    5: [10 * 60, 16 * 60],
    6: null,
  } as Record<number, [number, number] | null>,
  timeZone: 'Europe/Madrid',
} as const;

// ─────────────────────────────────────────────────────────────
// Formulari de càtering
// ─────────────────────────────────────────────────────────────
// mode:
//  'web3forms' → envia a Web3Forms (https://web3forms.com), que reenvia la consulta per correu
//                al correu associat a la clau. Funciona en qualsevol hosting. Cal `web3formsKey`.
//  'whatsapp'  → obre WhatsApp amb el missatge escrit. Cal omplir `whatsapp`.
//  'mailto'    → obre el correu de l'usuari amb la consulta escrita. Cal omplir `email`.
//  'action'    → POST a qualsevol altre servei de formularis (Formspree, Getform…). Cal `action`.
// Si al mode triat li falta la dada (p. ex. la clau buida) o l'enviament falla,
// el formulari obre el correu a `email` amb la consulta ja escrita.
export const CATERING_FORM = {
  mode: 'web3forms' as 'web3forms' | 'whatsapp' | 'mailto' | 'action',
  // TODO(client): clau d'accés de Web3Forms creada amb btretze@hotmail.com (web3forms.com → Create Access Key).
  // És pública per disseny (va a l'HTML). Mentre estigui buida (prototip), el formulari obre el correu.
  web3formsKey: '',
  // TODO(client): número de WhatsApp amb prefix, sense espais ni "+" (ex.: 34XXXXXXXXX).
  whatsapp: '',
  // Correu del client: destí del pla B (mailto).
  email: 'btretze@hotmail.com',
  // URL del servei de formularis si mode = 'action'.
  action: '',
};
