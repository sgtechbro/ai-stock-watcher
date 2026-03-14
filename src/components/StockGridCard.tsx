import { Company, CATEGORIES, type CategoryKey } from '@/data/stocks';
import { fmtPrice, fmtMcap, fmtMultiple, fmtEps, rateMultiple, valColorClass, catBadgeClass, catAccentClass } from '@/lib/formatters';

interface StockGridCardProps {
  company: Company;
  sortField: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const SORT_LABELS: Record<string, string> = {
  marketCap: 'MCap',
  pe: 'P/E',
  fwdPe: 'Fwd P/E',
  ps: 'P/S',
  evEbitda: 'EV/EBITDA',
  name: '',
};

const StockGridCard = ({ company: c, sortField, isExpanded, onToggle }: StockGridCardProps) => {
  const primaryCat = c.categories[0];

  const getMetricDisplay = () => {
    if (sortField === 'name' || sortField === 'marketCap') return null;
    const val = (c as any)[sortField] as number | null;
    const rating = rateMultiple(sortField, val);
    return (
      <div className="text-right shrink-0">
        <div className="text-[8px] uppercase tracking-wider text-muted-foreground font-semibold leading-none">{SORT_LABELS[sortField]}</div>
        <div className={`font-mono-custom text-[10px] font-medium tabular-nums leading-tight ${valColorClass(rating)}`}>{fmtMultiple(val)}</div>
      </div>
    );
  };

  return (
    <article
      onClick={onToggle}
      className="relative bg-card rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.4),0_0_0_1px_hsl(var(--border))] cursor-pointer transition-all hover:shadow-[0_2px_8px_rgba(0,0,0,0.5),0_0_0_1px_hsl(var(--border-hover))] flex flex-col"
    >
      {/* Top accent bar */}
      <div className={`h-[2px] ${catAccentClass(primaryCat)}`} />

      {/* Compact view — stacked for tight spaces */}
      <div className="p-1.5 flex flex-col gap-1">
        {/* Row 1: ticker + price */}
        <div className="flex items-center justify-between gap-1">
          <span className="font-mono-custom text-[11px] font-semibold tracking-tight text-foreground leading-none truncate">{c.ticker}</span>
          <span className="font-mono-custom text-[11px] font-semibold tabular-nums text-foreground leading-none shrink-0">{fmtPrice(c.price)}</span>
        </div>

        {/* Row 2: categories */}
        <div className="flex flex-wrap gap-0.5">
          {c.categories.map((catKey) => (
            <span key={catKey} className={`text-[8px] px-1 py-0 rounded font-medium whitespace-nowrap leading-[14px] ${catBadgeClass(catKey)}`}>
              {CATEGORIES[catKey].short}
            </span>
          ))}
        </div>

        {/* Row 3: mcap + metric */}
        <div className="flex items-end justify-between gap-1">
          <span className="text-[9px] text-muted-foreground font-mono-custom tabular-nums">{fmtMcap(c.marketCap)}</span>
          {getMetricDisplay()}
        </div>
      </div>

      {/* Expanded details */}
      {isExpanded && (
        <div className="border-t border-border px-2.5 pb-2.5 pt-2 flex flex-col gap-2 animate-accordion-down">
          {/* Full metrics grid */}
          <div className="grid grid-cols-2 gap-1">
            {(['pe', 'fwdPe', 'ps', 'evEbitda'] as const).map((field) => {
              const labels: Record<string, string> = { pe: 'P/E', fwdPe: 'Fwd P/E', ps: 'P/S', evEbitda: 'EV/EBITDA' };
              const val = c[field];
              const rating = rateMultiple(field, val);
              return (
                <div key={field} className="bg-surface2 rounded-sm p-1.5 text-center">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                    {labels[field]}
                  </div>
                  <div className={`font-mono-custom text-xs font-medium tabular-nums ${valColorClass(rating)}`}>
                    {fmtMultiple(val)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* EPS */}
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground font-semibold">EPS</span>
            <span className="font-mono-custom tabular-nums text-foreground">{fmtEps(c.eps)}</span>
          </div>

          {/* Thesis */}
          <p className="text-[11px] text-muted-foreground leading-relaxed italic font-semibold">{c.thesis}</p>

          {/* Link */}
          <a
            href={`https://perplexity.ai/finance/${c.ticker}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] text-primary hover:text-primary/80 font-medium"
          >
            View on Perplexity →
          </a>
        </div>
      )}
    </article>
  );
};

export default StockGridCard;
