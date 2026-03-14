#!/usr/bin/env node

/**
 * Fetches closing prices from Yahoo Finance (public, no API key needed)
 * and updates src/data/stocks.ts with fresh data.
 * Designed to run in GitHub Actions ~6hrs after market close.
 */

import { readFileSync, writeFileSync } from 'fs';

const TICKERS = [
  'NVDA','AMD','AVGO','QCOM','MRVL','INTC','ARM','LSCC',
  'ASML','TSM','AMAT','LRCX','KLAC','GFS','SNPS','CDNS',
  'EQIX','DLR','ANET','CSCO','VRT','GLW','CIEN','DELL','SMCI',
  'ETN','CEG','VST','GEV','PWR',
  'TSLA','ISRG','ROK','TER',
  'META','PLTR','SNOW','MDB','DDOG','CFLT','NTNX',
  'MSFT','GOOGL','AMZN','AAPL','ORCL','NOW','CRWD'
];

async function fetchQuotes(tickers) {
  // Yahoo Finance v8 chart endpoint — public, no key needed
  const results = {};
  
  // Batch in groups of 10 to be polite
  for (let i = 0; i < tickers.length; i += 10) {
    const batch = tickers.slice(i, i + 10);
    const promises = batch.map(async (ticker) => {
      try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=5d&interval=1d`;
        const res = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const json = await res.json();
        const result = json.chart?.result?.[0];
        if (!result) return;

        const meta = result.meta;
        const quote = result.indicators?.quote?.[0];
        const timestamps = result.timestamp;
        
        if (!quote || !timestamps || timestamps.length === 0) return;

        // Get the last trading day's data
        const lastIdx = timestamps.length - 1;
        const close = quote.close?.[lastIdx] ?? meta.regularMarketPrice;
        const marketCap = meta.marketCap || null;

        results[ticker] = {
          price: parseFloat(close?.toFixed(2)) || null,
          marketCap: marketCap || null,
        };
        
        console.log(`  ✓ ${ticker}: $${results[ticker].price}`);
      } catch (err) {
        console.error(`  ✗ ${ticker}: ${err.message}`);
      }
    });
    await Promise.all(promises);
    
    // Small delay between batches
    if (i + 10 < tickers.length) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  
  return results;
}

function updateStocksFile(quotes) {
  const filePath = 'src/data/stocks.ts';
  let content = readFileSync(filePath, 'utf-8');
  
  // Update DATA_DATE
  const today = new Date().toISOString().split('T')[0];
  content = content.replace(
    /export const DATA_DATE = '[^']+'/,
    `export const DATA_DATE = '${today}'`
  );
  
  // Update each ticker's price and marketCap
  let updated = 0;
  for (const [ticker, data] of Object.entries(quotes)) {
    if (data.price) {
      // Update price
      const priceRegex = new RegExp(
        `(ticker: '${ticker}'[^}]*?)price: [\\d.]+`,
        's'
      );
      if (priceRegex.test(content)) {
        content = content.replace(priceRegex, `$1price: ${data.price}`);
        updated++;
      }
      
      // Update marketCap if available
      if (data.marketCap) {
        const mcRegex = new RegExp(
          `(ticker: '${ticker}'[^}]*?)marketCap: [\\d.e+]+`,
          's'
        );
        const formattedMC = data.marketCap >= 1e12
          ? `${(data.marketCap / 1e12).toFixed(2)}e12`
          : `${(data.marketCap / 1e9).toFixed(2)}e9`;
        content = content.replace(mcRegex, `$1marketCap: ${formattedMC}`);
      }
    }
  }
  
  writeFileSync(filePath, content);
  console.log(`\n✅ Updated ${updated}/${TICKERS.length} tickers. DATA_DATE → ${today}`);
}

console.log('Fetching stock prices from Yahoo Finance...\n');
const quotes = await fetchQuotes(TICKERS);
updateStocksFile(quotes);
