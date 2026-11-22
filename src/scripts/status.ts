// Indicador "Obert ara / Tancat" a partir de l'horari real, a l'hora de Madrid.
// Per provar-lo amb una altra hora (només en local): afegeix ?ara=2026-11-23T15:45 a l'URL
// (hora local de Granollers).

type Hours = Record<string, [number, number] | null>;

export type Status =
  | { open: true; closesAt: number }
  | { open: false; opensAt: number; inDays: number; day: number };

/** day: 0 = diumenge … 6 = dissabte; min: minuts des de mitjanit */
export function computeStatus(day: number, min: number, hours: Hours): Status | null {
  const today = hours[day];
  if (today && min >= today[0] && min < today[1]) return { open: true, closesAt: today[1] };
  for (let i = 0; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = hours[d];
    if (!h) continue;
    if (i === 0 && min >= h[0]) continue; // avui ja ha passat
    return { open: false, opensAt: h[0], inDays: i, day: d };
  }
  return null;
}

/** Dia i minuts actuals a Europe/Madrid (o els de ?ara=) */
export function madridNow(now = new Date()): { day: number; min: number } {
  // ?ara= només funciona en local, perquè un enllaç compartit no mostri un dia fals.
  const local = ['localhost', '127.0.0.1'].includes(location.hostname);
  const ara = local ? new URLSearchParams(location.search).get('ara') : null;
  const m = ara?.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (m) {
    const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    return { day: d.getUTCDay(), min: +m[4] * 60 + +m[5] };
  }
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Madrid',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return { day: days.indexOf(get('weekday')), min: Number(get('hour')) * 60 + Number(get('minute')) };
}

const hhmm = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

export function initStatus() {
  const i18nEl = document.getElementById('status-i18n');
  const hoursEl = document.getElementById('status-hours');
  if (!i18nEl || !hoursEl) return;
  const tx = JSON.parse(i18nEl.textContent || '{}');
  const hours: Hours = JSON.parse(hoursEl.textContent || '{}');

  const render = () => {
    const { day, min } = madridNow();
    const s = computeStatus(day, min, hours);
    if (!s) return;
    let label: string;
    let detail: string;
    if (s.open) {
      label = tx.open;
      detail = tx.until.replace('{t}', hhmm(s.closesAt));
    } else {
      label = tx.closed;
      const t = hhmm(s.opensAt);
      detail =
        s.inDays === 0 ? tx.today.replace('{t}', t)
        : s.inDays === 1 ? tx.tomorrow.replace('{t}', t)
        : tx.on.replace('{d}', tx.days[s.day]).replace('{t}', t);
    }
    document.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
      el.dataset.state = s.open ? 'open' : 'closed';
      const txt = el.querySelector('[data-status-text]');
      if (txt) txt.innerHTML = `<strong>${label}</strong> · ${detail}`;
    });
    document.querySelectorAll<HTMLElement>('tr[data-day]').forEach((tr) => {
      tr.classList.toggle('is-today', Number(tr.dataset.day) === day);
    });
    document.querySelectorAll<HTMLElement>('[data-special-days]').forEach((el) => {
      const days = (el.dataset.specialDays || '').split(',').map(Number);
      el.classList.toggle('is-today', days.includes(day));
    });
  };

  render();
  setInterval(render, 60_000);
}
