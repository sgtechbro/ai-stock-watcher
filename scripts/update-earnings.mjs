#!/usr/bin/env node

/**
 * Fetches earnings/valuation data from Financial Modeling Prep (free tier)
 * and updates src/data/stocks.ts with fresh PE, fwdPE, PS, EV/EBITDA, EPS.
 * Runs weekly during earnings months (Jan, Apr, Jul, Oct) via GitHub Actions.
 */

import { readFileSync, writeFileSync } from 'fs';

const API_KEY = process.env.FMP_API_KEY;
if (!API_KEY) {
  console.error('❌ FMP_API_KEY environment variable is required');
  process.exit(1);
}

const TICKERS = [
  'NVDA','AMD','AVGO','QCOM','MRVL','INTC','ARM','LSCC',
  'ASML','TSM','AMAT','LRCX','KLAC','GFS','SNPS','CDNS',
  'EQIX','DLR','ANET','CSCO','VRT','GLW','CIEN','DELL','SMCI',
  'ETN','CEG','VST','GEV','PWR',
  'TSLA','ISRG','ROK','TER',
  'META','PLTR','SNOW','MDB','DDOG','CFLT','NTNX',
  'MSFT','GOOGL','AMZN','AAPL','ORCL','NOW','CRWD'
];

const BASE_URL = 'https://financialmodelingprep.com/api/v3';

async function fetchRatios(ticker) {
  try {
    const url = `${BASE_URL}/ratios-ttm/${ticker}?apikey=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data[0] || null;
  } catch (err) {
    console.error(`  ✗ ${ticker} ratios: ${err.message}`);
    return null;
  }
}

async function fetchQuote(ticker) {
  try {
    const url = `${BASE_URL}/quote/${ticker}?apikey=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data[0] || null;
  } catch (err) {
    console.error(`  ✗ ${ticker} quote: ${err.message}`);
    return null;
  }
}

async function fetchAllData() {
  const results = {};

  // Batch in groups of 5 to stay within rate limits
  for (let i = 0; i < TICKERS.length; i += 5) {
    const batch = TICKERS.slice(i, i + 5);
    const promises = batch.map(async (ticker) => {
      const [ratios, quote] = await Promise.all([
        fetchRatios(ticker),
        fetchQuote(ticker),
      ]);

      if (!ratios && !quote) return;

      results[ticker] = {
        pe: ratios?.peRatioTTM ? parseFloat(ratios.peRatioTTM.toFixed(2)) : null,
        fwdPe: quote?.priceEarningsRatio ? parseFloat(quote.priceEarningsRatio.toFixed(2)) : null,
        ps: ratios?.priceToSalesRatioTTM ? parseFloat(ratios.priceToSalesRatioTTM.toFixed(2)) : null,
        evEbitda: ratios?.enterpriseValueOverEBITDATTM ? parseFloat(ratios.enterpriseValueOverEBITDATTM.toFixed(2)) : null,
        eps: quote?.eps ? parseFloat(quote.eps.toFixed(2)) : null,
      };

      console.log(`  ✓ ${ticker}: PE=${results[ticker].pe}, EPS=${results[ticker].eps}`);
    });

    await Promise.all(promises);

    // Rate limit: wait 1.5s between batches
    if (i + 5 < TICKERS.length) {
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  return results;
}

function updateStocksFile(data) {
  const filePath = 'src/data/stocks.ts';
  let content = readFileSync(filePath, 'utf-8');
  let updated = 0;

  for (const [ticker, metrics] of Object.entries(data)) {
    const fields = {
      pe: metrics.pe,
      fwdPe: metrics.fwdPe,
      ps: metrics.ps,
      evEbitda: metrics.evEbitda,
      eps: metrics.eps,
    };

    for (const [field, value] of Object.entries(fields)) {
      if (value === null || value === undefined) continue;

      // Match field: <number or null> in the ticker's object
      const regex = new RegExp(
        `(ticker: '${ticker}'[^}]*?)${field}: [\\d.\\-]+|null`,
        's'
      );
      if (regex.test(content)) {
        content = content.replace(regex, `$1${field}: ${value}`);
      }
    }
    updated++;
  }

  writeFileSync(filePath, content);
  console.log(`\n✅ Updated earnings data for ${updated}/${TICKERS.length} tickers.`);
}

console.log('Fetching earnings data from Financial Modeling Prep...\n');
const data = await fetchAllData();
updateStocksFile(data);
