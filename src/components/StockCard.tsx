import { Company, CATEGORIES } from '@/data/stocks';
import { fmtPrice, fmtMcap, fmtMultiple, fmtEps, rateMultiple, valColorClass, catBadgeClass, catAccentClass } from '@/lib/formatters';

interface StockCardProps {
  company: Company;
}

const StockCard = ({ company: c }: StockCardProps) => {
  const cat = CATEGORIES[c.category];

  return (
    <article className="relative bg-card rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.4),0_0_0_1px_hsl(var(--border))] flex flex-col gap-3 p-[1.125rem_1.25rem]">
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${catAccentClass(c.category)}`} />

      {/* Header: ticker + category */}
      <div className="flex justify-between items-start gap-2">
        <div>
          <div className="font-mono-custom text-lg font-semibold tracking-tight">
            <a
              href={`https://perplexity.ai/finance/${c.ticker}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              {c.ticker}
            </a>
          </div>
          <div className="text-xs text-muted-foreground leading-tight max-w-[220px]">{c.name}</div>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-lg font-medium whitespace-nowrap ${catBadgeClass(c.category)}`}>
          {cat.short}
        </span>
      </div>

      {/* Price + Market Cap */}
      <div className="flex justify-between items-start gap-2">
        <span className="font-mono-custom text-lg font-semibold tabular-nums">{fmtPrice(c.price)}</span>
        <span className="text-xs text-muted-foreground font-mono-custom tabular-nums">{fmtMcap(c.marketCap)}</span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-4 gap-1">
        {(['pe', 'fwdPe', 'ps', 'evEbitda'] as const).map((field) => {
          const labels: Record<string, string> = { pe: 'P/E', fwdPe: 'Fwd P/E', ps: 'P/S', evEbitda: 'EV/EBITDA' };
          const val = c[field];
          const rating = rateMultiple(field, val);
          return (
            <div key={field} className="bg-surface2 rounded-sm p-1.5 text-center">
              <div className="text-[0.75rem] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                {labels[field]}
              </div>
              <div className={`font-mono-custom text-sm font-medium tabular-nums ${valColorClass(rating)}`}>
                {fmtMultiple(val)}
              </div>
            </div>
          );
        })}
      </div>

      {/* EPS row */}
      <div className="flex justify-between items-center pt-1 border-t border-border">
        <span className="text-xs text-muted-foreground font-medium">EPS (TTM)</span>
        <span className={`font-mono-custom text-sm font-medium tabular-nums ${c.eps != null && c.eps < 0 ? 'text-val-red' : ''}`}>
          {fmtEps(c.eps)}
        </span>
      </div>

      {/* Thesis */}
      <p className="text-xs text-muted-foreground leading-relaxed italic">{c.thesis}</p>
    </article>
  );
};

export default StockCard;
