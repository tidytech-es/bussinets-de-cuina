// Entrada suau dels blocs quan apareixen. Només si <html> té .js-reveal
// (és a dir: hi ha IntersectionObserver i l'usuari no demana menys moviment).
// Sense JS, tot és visible des del principi.
export function initReveal() {
  const root = document.documentElement;
  if (!root.classList.contains('js-reveal')) return;
  root.dataset.revealReady = '1';
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((el) => {
    // El que ja és a la pantalla en carregar, es mostra sense animació.
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight) el.classList.add('is-in');
    else io.observe(el);
  });
}
