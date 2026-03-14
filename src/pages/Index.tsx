import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { COMPANIES, CATEGORIES, DATA_DATE, type CategoryKey, type Company } from '@/data/stocks';
import { catDotClass } from '@/lib/formatters';
import StockCard from '@/components/StockCard';

type SortField = 'marketCap' | 'pe' | 'fwdPe' | 'ps' | 'evEbitda' | 'name';

const Index = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | CategoryKey>('all');
  const [sortField, setSortField] = useState<SortField>('marketCap');
  const [sortAsc, setSortAsc] = useState(false);
  

  const dataDateFormatted = useMemo(() => {
    const d = new Date(DATA_DATE + 'T16:00:00-04:00');
    return 'Data as of ' + d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let items = COMPANIES.filter((c) => {
      if (activeCategory !== 'all' && c.category !== activeCategory) return false;
      if (q && !c.ticker.toLowerCase().includes(q) && !c.name.toLowerCase().includes(q)) return false;
      return true;
    });

    items.sort((a, b) => {
      if (sortField === 'name') {
        return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      let va: number = (a as any)[sortField] ?? (sortAsc ? Infinity : -Infinity);
      let vb: number = (b as any)[sortField] ?? (sortAsc ? Infinity : -Infinity);
      if (!isFinite(va)) va = sortAsc ? Infinity : -Infinity;
      if (!isFinite(vb)) vb = sortAsc ? Infinity : -Infinity;
      return sortAsc ? va - vb : vb - va;
    });

    return items;
  }, [search, activeCategory, sortField, sortAsc]);


  return (
    <div className="max-w-[430px] mx-auto px-4 min-h-screen">
      {/* Header */}
      <header className="flex flex-col gap-2 py-4 pb-3 border-b border-border">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-[28px] font-extrabold tracking-tight leading-tight">
            AI Picks & Shovels
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-xs font-medium tracking-wide">
            What's On Your Shopping List?
          </p>
          <span className="font-mono-custom text-[10px] text-text-faint">{dataDateFormatted}</span>
        </div>
      </header>

      {/* Category Nav */}
      <nav className="flex flex-wrap gap-2 py-4">
        <button
          onClick={() => setActiveCategory('all')}
          className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-transparent transition-all ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground font-semibold'
              : 'bg-surface2 text-muted-foreground hover:text-foreground hover:bg-surface3'
          }`}
        >
          All
        </button>
        {(Object.entries(CATEGORIES) as [CategoryKey, typeof CATEGORIES[CategoryKey]][]).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-transparent transition-all ${
              activeCategory === key
                ? 'bg-primary text-primary-foreground font-semibold'
                : 'bg-surface2 text-muted-foreground hover:text-foreground hover:bg-surface3'
            }`}
          >
            <span className={`w-2 h-2 rounded-full shrink-0 ${catDotClass(key)}`} />
            {val.short}
          </button>
        ))}
      </nav>

      {/* Controls */}
      <div className="flex flex-col gap-3 py-3">
        <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-md w-full focus-within:border-primary transition-colors">
          <Search size={16} className="text-text-faint shrink-0" />
          <input
            type="text"
            placeholder="Search ticker or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none bg-transparent outline-none w-full text-sm text-foreground placeholder:text-text-faint"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Sort by</span>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
            className="appearance-none px-3 py-1.5 pr-8 bg-card border border-border rounded-md text-xs font-medium text-foreground outline-none focus:border-primary transition-colors cursor-pointer"
          >
            <option value="marketCap">Market Cap</option>
            <option value="pe">P/E</option>
            <option value="fwdPe">Fwd P/E</option>
            <option value="ps">P/S</option>
            <option value="evEbitda">EV/EBITDA</option>
            <option value="name">Name</option>
          </select>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="w-8 h-8 flex items-center justify-center rounded-sm text-sm bg-card border border-border hover:bg-surface2 transition-all"
          >
            {sortAsc ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {/* Grid */}
      <main className="grid grid-cols-1 gap-3 pb-8">
        {filtered.map((c) => (
          <StockCard key={c.ticker} company={c} />
        ))}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <p className="text-xs text-text-faint">
          Data sourced from{' '}
          <a href="https://perplexity.ai/finance" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
            Perplexity Finance
          </a>
          . Not financial advice.
        </p>
      </footer>
    </div>
  );
};

export default Index;
