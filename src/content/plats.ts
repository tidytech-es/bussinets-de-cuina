// ─────────────────────────────────────────────────────────────
// Plats destacats. Per posar-hi una foto real:
//  1. Desa la foto a src/assets/fotos/ (jpg o png, mínim 1200 px d'ample).
//  2. Importa-la aquí a dalt i posa-la a `foto`.
//  Si `foto` és null, la web mostra un requadre "Foto pendent".
// ─────────────────────────────────────────────────────────────
import type { ImageMetadata } from 'astro';
import fideua from '../assets/fotos/fideua.jpg';

export type PlatKey = 'fideua' | 'croquetes' | 'galta' | 'rap';

export const PLATS: { key: PlatKey; foto: ImageMetadata | null }[] = [
  // Foto real (retallada del cartell "Cuinem per tu!" del local).
  { key: 'fideua', foto: fideua },
  // TODO(client): foto real de les croquetes.
  { key: 'croquetes', foto: null },
  // TODO(client): foto real de la galta.
  { key: 'galta', foto: null },
  // TODO(client): foto real del rap amb gambes.
  { key: 'rap', foto: null },
];
