// Petits moviments: comptadors que pugen quan apareixen i capçalera que es compacta en baixar.
// Tot respecta prefers-reduced-motion: amb moviment reduït els números ja surten al seu valor.

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Comptador animat (inspirat en "Count Up Animation" de 21st.dev, sense dependències). */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (reduce || !('IntersectionObserver' in window)) return;
  const lang = document.documentElement.lang || 'ca';

  els.forEach((el) => {
    const to = Number(el.dataset.count);
    const dec = Number(el.dataset.decimals || 0);
    const fmt = new Intl.NumberFormat(lang, { minimumFractionDigits: dec, maximumFractionDigits: dec });
    const final = el.textContent || fmt.format(to);
    // Reservem l'amplada del valor final perquè el text del voltant no salti.
    el.style.display = 'inline-block';
    el.style.minWidth = `${el.getBoundingClientRect().width}px`;
    el.style.fontVariantNumeric = 'tabular-nums';

    // Si ja és a la pantalla en carregar, no l'animem.
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.textContent = fmt.format(0);

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const dur = 1100;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
          el.textContent = p < 1 ? fmt.format(to * eased) : final;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
  });
}

/** La capçalera guanya ombra i es compacta quan es baixa la pàgina. */
function initHeader() {
  const header = document.querySelector<HTMLElement>('.header');
  if (!header) return;
  let ticking = false;
  const update = () => {
    header.classList.toggle('is-scrolled', scrollY > 12);
    ticking = false;
  };
  addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

export function initMotion() {
  initCounters();
  initHeader();
}
