export function fmtMcap(n: number | null): string {
  if (n == null) return '—';
  if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(0) + 'M';
  return '$' + n.toLocaleString();
}

export function fmtPrice(n: number | null): string {
  if (n == null) return '—';
  return '$' + n.toFixed(2);
}

export function fmtMultiple(n: number | null): string {
  if (n == null || !isFinite(n)) return '—';
  return n.toFixed(1) + 'x';
}

export function fmtEps(n: number | null): string {
  if (n == null) return '—';
  return (n >= 0 ? '$' : '-$') + Math.abs(n).toFixed(2);
}

export type ValuationRating = 'cheap' | 'mid' | 'expensive' | 'na';

export function rateMultiple(field: string, val: number | null): ValuationRating {
  if (val == null || !isFinite(val) || val <= 0) return 'na';
  const thresholds: Record<string, [number, number]> = {
    pe: [25, 50],
    fwdPe: [20, 40],
    ps: [8, 20],
    evEbitda: [20, 40],
  };
  const t = thresholds[field] || [25, 50];
  if (val <= t[0]) return 'cheap';
  if (val <= t[1]) return 'mid';
  return 'expensive';
}

const VAL_COLOR_MAP: Record<ValuationRating, string> = {
  cheap: 'text-val-green',
  mid: 'text-val-amber',
  expensive: 'text-val-red',
  na: 'text-text-faint',
};

export function valColorClass(rating: ValuationRating): string {
  return VAL_COLOR_MAP[rating];
}

const CAT_BG_MAP: Record<string, string> = {
  chips: 'bg-cat-chips/15 text-cat-chips',
  equipment: 'bg-cat-equipment/15 text-cat-equipment',
  datacenter: 'bg-cat-datacenter/15 text-cat-datacenter',
  energy: 'bg-cat-energy/15 text-cat-energy',
  robotics: 'bg-cat-robotics/15 text-cat-robotics',
  bigdata: 'bg-cat-bigdata/15 text-cat-bigdata',
  cloud: 'bg-cat-cloud/15 text-cat-cloud',
  mag7: 'bg-cat-mag7/15 text-cat-mag7',
};

export function catBadgeClass(category: string): string {
  return CAT_BG_MAP[category] || '';
}

const CAT_ACCENT_MAP: Record<string, string> = {
  chips: 'bg-cat-chips',
  equipment: 'bg-cat-equipment',
  datacenter: 'bg-cat-datacenter',
  energy: 'bg-cat-energy',
  robotics: 'bg-cat-robotics',
  bigdata: 'bg-cat-bigdata',
  cloud: 'bg-cat-cloud',
  mag7: 'bg-cat-mag7',
};

export function catAccentClass(category: string): string {
  return CAT_ACCENT_MAP[category] || 'bg-primary';
}

const CAT_DOT_MAP: Record<string, string> = {
  chips: 'bg-cat-chips',
  equipment: 'bg-cat-equipment',
  datacenter: 'bg-cat-datacenter',
  energy: 'bg-cat-energy',
  robotics: 'bg-cat-robotics',
  bigdata: 'bg-cat-bigdata',
  cloud: 'bg-cat-cloud',
};

export function catDotClass(category: string): string {
  return CAT_DOT_MAP[category] || '';
}
