// Extreu el logotip del cartell del menú (_originals/11.png) i el passa a PNG amb transparència.
// Ús: node scripts/extreure-logo.mjs
// TODO(client): substituir per l'arxiu original del logo (SVG o PNG gran) quan el tinguem.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = '_originals/11.png';
const OUT = 'src/assets/logo';
mkdirSync(OUT, { recursive: true });

// Requadre del logo dins del cartell (721x1020)
const full = { left: 155, top: 859, width: 409, height: 130 };
// Sense la línia "rostisseria · menjars per emportar · catering" (illegible a mida de capçalera)
const compact = { left: 155, top: 859, width: 409, height: 101 };
// Zona de la línia petita que s'esborra a la versió compacta (coordenades dins del requadre)
const ERASE = { x: 168, y: 91 };

async function make(box, name, [r, g, b], erase = null) {
  const scale = 3; // ampliem amb interpolació suau i retallem el soroll
  const { data, info } = await sharp(SRC)
    .extract(box)
    .resize({ width: box.width * scale, kernel: 'lanczos3' })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const px = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    // fons blanc → transparent; corba per netejar el gris de la compressió
    const x = (i % info.width) / scale, y = Math.floor(i / info.width) / scale;
    let a = (255 - data[i]) / 255;
    if (erase && x > erase.x && y > erase.y) a = 0;
    a = Math.min(1, Math.max(0, (a - 0.12) / 0.7));
    px[i * 4] = r; px[i * 4 + 1] = g; px[i * 4 + 2] = b; px[i * 4 + 3] = Math.round(a * 255);
  }
  await sharp(px, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/${name}.png`);
}

await make(compact, 'logo', [35, 26, 18], ERASE);        // tinta, per a la capçalera
await make(full, 'logo-complet-crema', [245, 236, 220]); // crema, per al peu (fons fosc)
console.log('Logo extret.');
