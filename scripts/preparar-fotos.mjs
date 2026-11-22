// Prepara les fotos reals rebudes (carpeta _originals/) per a la web.
// Ús: npm run fotos
// Les fotos finals van a src/assets/fotos/ (Astro les converteix a AVIF/WebP en compilar)
// i la imatge Open Graph a public/og.jpg.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const IN = '_originals';
const OUT = 'src/assets/fotos';
mkdirSync(OUT, { recursive: true });

// Façana (foto de la fitxa de Google, 1360x1017)
await sharp(`${IN}/2.webp`).jpeg({ quality: 88 }).toFile(`${OUT}/facana.jpg`);

// Façana frontal quadrada (1020x1020)
await sharp(`${IN}/1.webp`).jpeg({ quality: 88 }).toFile(`${OUT}/facana-frontal.jpg`);

// Fideuà: part superior del cartell "Cuinem per tu!" (sense el text vermell)
await sharp(`${IN}/5.webp`)
  .extract({ left: 0, top: 0, width: 1020, height: 500 })
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/fideua.jpg`);

// Open Graph 1200x630 a partir de la façana
await sharp(`${IN}/2.webp`)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile('public/og.jpg');

console.log('Fotos preparades.');
