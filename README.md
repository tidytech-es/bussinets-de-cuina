# Bussinets de Cuina — web

Web d'una sola pàgina (català a `/`, castellà a `/es/`) per a Bussinets de Cuina, Granollers.
Astro 7, CSS propi (sense Tailwind), fonts autoallotjades, sortida 100 % estàtica.

## Arrencar en local

```bash
npm install
npm run dev        # http://localhost:4321  (desenvolupament)
npm run build      # genera dist/
npm run preview    # serveix dist/ com en producció
```

Provar l'indicador obert/tancat amb una altra hora (hora de Granollers):
`http://localhost:4321/?ara=2026-11-23T15:45`

## Publicar

Qualsevol hosting estàtic (Netlify, Vercel, Cloudflare Pages): comanda `npm run build`, carpeta `dist`.
`netlify.toml` ja ho deixa configurat per a Netlify. El formulari de càtering fa servir
**Web3Forms** (vegeu més avall), així que funciona en qualsevol hosting.

## Estructura

```
src/
  config/site.ts         ← dades del negoci (telèfon, horari, adreça, enllaços) i config del formulari
  i18n/ca.ts, es.ts      ← tots els textos de la web, un fitxer per idioma
  content/plats.ts       ← plats destacats i la seva foto (null = "Foto pendent")
  assets/fotos/          ← fotos reals (Astro les converteix a AVIF/WebP)
  components/            ← Header, Hero, Plats, ComFunciona, Catering, Ressenyes, Horari, Footer, CallBar…
  layouts/Base.astro     ← <head>, SEO, Open Graph, JSON-LD (Restaurant)
  scripts/status.ts      ← lògica "Obert ara / Tancat" (Europe/Madrid)
  scripts/reveal.ts      ← entrada suau dels blocs (s'anul·la amb prefers-reduced-motion)
  pages/                 ← / (ca), /es/, /avis-legal/, /es/aviso-legal/
public/                  ← robots.txt, favicon.svg, og.jpg
_originals/              ← fotos tal com les va enviar el client
scripts/preparar-fotos.mjs ← retalla/converteix les fotos d'_originals (npm run fotos)
```

## Canviar coses habituals

- **Telèfon, horari, adreça, enllaç de Google:** `src/config/site.ts`.
- **Textos:** `src/i18n/ca.ts` i `src/i18n/es.ts` (mateixa estructura).
- **Foto d'un plat:** desa-la a `src/assets/fotos/`, importa-la a `src/content/plats.ts` i posa-la a `foto`.
- **Logotip:** ara és un PNG extret del cartell del menú (`scripts/extreure-logo.mjs` → `src/assets/logo/`). Quan arribi l'original, substituir aquests fitxers.

## Formulari de càtering

Configurable a `src/config/site.ts` → `CATERING_FORM`:

| mode | Què fa | Cal |
|---|---|---|
| `web3forms` (per defecte) | Envia a Web3Forms, que reenvia la consulta per correu | `web3formsKey` creada amb el correu del client |
| `whatsapp` | Obre WhatsApp amb el missatge ja escrit | `whatsapp: '34XXXXXXXXX'` |
| `mailto` | Obre el client de correu del visitant | `email` |
| `action` | POST a Formspree, Getform, Basin… | `action` (URL) |

**Ara mateix és un prototip:** `web3formsKey` és buida, així que el formulari obre el correu del
visitant amb la consulta escrita cap a btretze@hotmail.com. Per activar l'enviament real:
1. A https://web3forms.com, crear una clau amb **btretze@hotmail.com** (li arriba per correu al client).
2. Posar-la a `web3formsKey` i publicar. La clau és pública per disseny; no és cap secret.

Si l'enviament falla, el formulari també obre el correu (pla B).

## Pendents (TODO)

Busca `TODO` al codi. Resum a la llista per al client (entregada a part).
