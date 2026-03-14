export const DATA_DATE = '2026-03-12';

export type CategoryKey = 'chips' | 'equipment' | 'datacenter' | 'energy' | 'robotics' | 'bigdata' | 'cloud' | 'mag7';

export interface Category {
  label: string;
  short: string;
  colorClass: string;
}

export const CATEGORIES: Record<CategoryKey, Category> = {
  mag7: { label: 'Magnificent Seven', short: 'Mag 7', colorClass: 'cat-mag7' },
  chips: { label: 'GPU & Chip Designers', short: 'Chips', colorClass: 'cat-chips' },
  equipment: { label: 'Semicon Equipment & Foundries', short: 'Equipment', colorClass: 'cat-equipment' },
  datacenter: { label: 'Data Center & Networking', short: 'Data Center', colorClass: 'cat-datacenter' },
  energy: { label: 'Energy & Power Infra', short: 'Energy', colorClass: 'cat-energy' },
  robotics: { label: 'Robotics & Automation', short: 'Robotics', colorClass: 'cat-robotics' },
  bigdata: { label: 'Big Data & AI Software', short: 'Big Data', colorClass: 'cat-bigdata' },
  cloud: { label: 'Cloud & AI Platforms', short: 'Cloud', colorClass: 'cat-cloud' },
};

export interface Company {
  ticker: string;
  name: string;
  categories: CategoryKey[];
  price: number;
  marketCap: number;
  pe: number | null;
  fwdPe: number | null;
  ps: number | null;
  evEbitda: number | null;
  eps: number | null;
  thesis: string;
}

export const COMPANIES: Company[] = [
  { ticker: 'NVDA', name: 'NVIDIA Corporation', categories: ['chips', 'mag7'], price: 183.53, marketCap: 4.461e12, pe: 37.53, fwdPe: 19.63, ps: 21.12, evEbitda: 33.85, eps: 4.89, thesis: 'Dominant AI training & inference GPU maker; data center revenue soaring' },
  { ticker: 'AMD', name: 'Advanced Micro Devices', categories: ['chips'], price: 198.09, marketCap: 322.96e9, pe: 76.19, fwdPe: 23.23, ps: 10.12, evEbitda: 51.19, eps: 2.6, thesis: 'Growing AI GPU challenger (MI300 series); strong data center + gaming' },
  { ticker: 'AVGO', name: 'Broadcom Inc.', categories: ['chips'], price: 337.69, marketCap: 1.601e12, pe: 65.7, fwdPe: 25.77, ps: 27.43, evEbitda: 52.58, eps: 5.14, thesis: 'Custom AI ASICs for hyperscalers + VMware cloud software integration' },
  { ticker: 'QCOM', name: 'Qualcomm', categories: ['chips'], price: 131.01, marketCap: 139.92e9, pe: 26.41, fwdPe: 10.39, ps: 4.1, evEbitda: 13.35, eps: 4.96, thesis: 'AI at the edge — on-device AI chips for mobile, auto, and IoT' },
  { ticker: 'MRVL', name: 'Marvell Technology', categories: ['chips'], price: 88.28, marketCap: 77.11e9, pe: 29.62, fwdPe: 20.37, ps: 8.16, evEbitda: 26.29, eps: 2.98, thesis: 'Custom silicon & electro-optics for AI data centers and 5G' },
  { ticker: 'INTC', name: 'Intel Corporation', categories: ['chips'], price: 45.48, marketCap: 227.20e9, pe: null, fwdPe: 16.78, ps: 3.42, evEbitda: 21.28, eps: -0.06, thesis: 'Turnaround play; foundry ambitions + legacy CPU installed base' },
  { ticker: 'ARM', name: 'Arm Holdings plc', categories: ['chips'], price: 114.86, marketCap: 121.98e9, pe: 155.21, fwdPe: 47.83, ps: 28.17, evEbitda: 137.12, eps: 0.74, thesis: 'Ubiquitous chip architecture; AI royalties grow with every AI device' },
  { ticker: 'LSCC', name: 'Lattice Semiconductor', categories: ['chips'], price: 85.38, marketCap: 11.68e9, pe: 4269, fwdPe: 166.22, ps: 20.56, evEbitda: 228.19, eps: 0.02, thesis: 'Low-power FPGAs for AI edge inference and industrial applications' },
  { ticker: 'ASML', name: 'ASML Holding N.V.', categories: ['equipment'], price: 1355.26, marketCap: 522.34e9, pe: 47.55, fwdPe: 29.78, ps: 12.62, evEbitda: 32.59, eps: 28.5, thesis: 'Monopoly on EUV lithography — every advanced AI chip needs ASML' },
  { ticker: 'TSM', name: 'TSMC', categories: ['equipment'], price: 338.75, marketCap: 1.757e12, pe: 32.6, fwdPe: 23.25, ps: 10.39, evEbitda: null, eps: 10.39, thesis: "World's leading foundry; fabricates chips for NVIDIA, AMD, Apple" },
  { ticker: 'AMAT', name: 'Applied Materials', categories: ['equipment'], price: 337.93, marketCap: 268.18e9, pe: 34.13, fwdPe: 27.86, ps: 6.39, evEbitda: 20.56, eps: 9.9, thesis: 'Largest semiconductor equipment maker; essential for chip fabrication' },
  { ticker: 'LRCX', name: 'Lam Research', categories: ['equipment'], price: 211.41, marketCap: 264.00e9, pe: 43.5, fwdPe: 35.98, ps: 6.69, evEbitda: 19.19, eps: 4.86, thesis: 'Etch & deposition equipment leader; critical for advanced node chips' },
  { ticker: 'KLAC', name: 'KLA Corporation', categories: ['equipment'], price: 1424.5, marketCap: 187.17e9, pe: 41.54, fwdPe: 34.92, ps: 8.97, evEbitda: 23.35, eps: 34.29, thesis: 'Inspection & metrology leader; defect detection for AI chip yield' },
  { ticker: 'GFS', name: 'GlobalFoundries', categories: ['equipment'], price: 41.58, marketCap: 23.11e9, pe: 26.15, fwdPe: 25.16, ps: 2.79, evEbitda: 9.72, eps: 1.59, thesis: 'Mature-node specialty foundry; IoT, auto, and defense chips' },
  { ticker: 'SNPS', name: 'Synopsys', categories: ['equipment'], price: 420.64, marketCap: 80.58e9, pe: 64.81, fwdPe: 173.42, ps: 12.37, evEbitda: 45.96, eps: 6.49, thesis: 'EDA software monopoly — AI chip designers must use Synopsys tools' },
  { ticker: 'CDNS', name: 'Cadence Design Systems', categories: ['equipment'], price: 290.48, marketCap: 79.20e9, pe: 71.55, fwdPe: 58.06, ps: 16.18, evEbitda: 47.71, eps: 4.06, thesis: 'EDA duopoly partner; chip design verification for every AI accelerator' },
  { ticker: 'EQIX', name: 'Equinix', categories: ['datacenter'], price: 975.46, marketCap: 95.84e9, pe: 70.84, fwdPe: 21.49, ps: 12.62, evEbitda: 29.88, eps: 13.77, thesis: 'Largest data center REIT; 260+ facilities; AI colocation demand surge' },
  { ticker: 'DLR', name: 'Digital Realty Trust', categories: ['datacenter'], price: 179.15, marketCap: 61.56e9, pe: 50.04, fwdPe: 20.59, ps: 10.12, evEbitda: 25.47, eps: 3.58, thesis: 'Major data center REIT; hyperscale and enterprise AI workload growth' },
  { ticker: 'ANET', name: 'Arista Networks', categories: ['datacenter'], price: 136.31, marketCap: 171.65e9, pe: 50.11, fwdPe: 37.13, ps: 22.55, evEbitda: 36.23, eps: 2.72, thesis: 'High-speed networking switches for AI/ML cluster interconnects' },
  { ticker: 'CSCO', name: 'Cisco Systems', categories: ['datacenter'], price: 77.84, marketCap: 307.57e9, pe: 28.0, fwdPe: 15.93, ps: 5.16, evEbitda: 14.49, eps: 2.78, thesis: 'Network infrastructure backbone; AI-optimized data center switching' },
  { ticker: 'VRT', name: 'Vertiv Holdings', categories: ['datacenter'], price: 269.85, marketCap: 103.24e9, pe: 79.37, fwdPe: 38.59, ps: 11.48, evEbitda: 46.72, eps: 3.4, thesis: 'Critical power & thermal management for AI data centers' },
  { ticker: 'GLW', name: 'Corning', categories: ['datacenter'], price: 130.45, marketCap: 111.92e9, pe: 71.28, fwdPe: 24.98, ps: 7.63, evEbitda: 25.49, eps: 1.83, thesis: 'Optical fiber & connectivity solutions for AI data center buildouts' },
  { ticker: 'CIEN', name: 'Ciena Corporation', categories: ['datacenter'], price: 343.65, marketCap: 48.61e9, pe: 214.78, fwdPe: 44.55, ps: 9.83, evEbitda: 54.76, eps: 1.6, thesis: 'Optical networking — high-bandwidth coherent optics for AI traffic' },
  { ticker: 'DELL', name: 'Dell Technologies', categories: ['datacenter'], price: 151.46, marketCap: 101.51e9, pe: 17.43, fwdPe: 9.01, ps: 0.99, evEbitda: 12.91, eps: 8.69, thesis: 'AI server infrastructure; PowerEdge GPU servers for enterprise AI' },
  { ticker: 'SMCI', name: 'Super Micro Computer', categories: ['datacenter'], price: 31.05, marketCap: 18.60e9, pe: 22.67, fwdPe: 14.74, ps: 1.11, evEbitda: 11.96, eps: 1.37, thesis: 'GPU server specialist; fast-to-market AI server rack solutions' },
  { ticker: 'ETN', name: 'Eaton Corporation', categories: ['energy'], price: 351.16, marketCap: 136.21e9, pe: 33.67, fwdPe: 27.29, ps: 5.47, evEbitda: 24.18, eps: 10.43, thesis: 'Power management for data centers; electrical distribution & UPS' },
  { ticker: 'CEG', name: 'Constellation Energy', categories: ['energy'], price: 304.13, marketCap: 94.98e9, pe: 41.15, fwdPe: 21.3, ps: 3.71, evEbitda: 17.62, eps: 7.39, thesis: 'Nuclear power fleet; clean baseload energy for hyperscale data centers' },
  { ticker: 'VST', name: 'Vistra Corp.', categories: ['energy'], price: 160.38, marketCap: 54.34e9, pe: 73.23, fwdPe: 9.89, ps: 2.98, evEbitda: 16.99, eps: 2.19, thesis: 'Diversified power generation; nuclear + natural gas for AI data centers' },
  { ticker: 'GEV', name: 'GE Vernova', categories: ['energy'], price: 834.06, marketCap: 226.30e9, pe: 47.1, fwdPe: 44.42, ps: 5.92, evEbitda: 35.05, eps: 17.71, thesis: 'Power generation equipment; gas turbines & grid solutions for AI demand' },
  { ticker: 'PWR', name: 'Quanta Services', categories: ['energy'], price: 569.01, marketCap: 85.13e9, pe: 83.31, fwdPe: 27.23, ps: 3.63, evEbitda: 21.89, eps: 6.83, thesis: 'Infrastructure contractor; builds power lines & data center electrical' },
  { ticker: 'TSLA', name: 'Tesla, Inc.', categories: ['robotics', 'mag7'], price: 249.98, marketCap: 803.20e9, pe: 95.42, fwdPe: 79.99, ps: 8.28, evEbitda: 52.78, eps: 2.62, thesis: 'AI-driven autonomy (FSD), Optimus humanoid robot, energy & EV leader' },
  { ticker: 'ISRG', name: 'Intuitive Surgical', categories: ['robotics'], price: 479.44, marketCap: 170.26e9, pe: 60.77, fwdPe: 39.94, ps: 19.93, evEbitda: 48.99, eps: 7.89, thesis: 'Surgical robotics leader; AI-enhanced da Vinci robotic systems' },
  { ticker: 'ROK', name: 'Rockwell Automation', categories: ['robotics'], price: 357.9, marketCap: 40.24e9, pe: 40.9, fwdPe: 23.86, ps: 4.53, evEbitda: 22.89, eps: 8.75, thesis: 'Industrial automation & AI-powered smart manufacturing' },
  { ticker: 'TER', name: 'Teradyne', categories: ['robotics'], price: 289.01, marketCap: 45.25e9, pe: 83.53, fwdPe: 40.42, ps: 14.62, evEbitda: 45.08, eps: 3.46, thesis: 'Test equipment for semiconductors + Universal Robots (cobots)' },
  { ticker: 'META', name: 'Meta Platforms', categories: ['bigdata', 'mag7'], price: 585.75, marketCap: 1.482e12, pe: 22.94, fwdPe: 19.82, ps: 9.06, evEbitda: 14.89, eps: 25.53, thesis: 'Llama open-source AI models; massive AI infrastructure investment; ads AI' },
  { ticker: 'PLTR', name: 'Palantir Technologies', categories: ['bigdata'], price: 153.94, marketCap: 352.75e9, pe: 240.53, fwdPe: 99.06, ps: 54.55, evEbitda: 161.12, eps: 0.64, thesis: 'AI/ML analytics platform for gov & enterprise; AIP adoption accelerating' },
  { ticker: 'SNOW', name: 'Snowflake', categories: ['bigdata'], price: 177.43, marketCap: 60.71e9, pe: null, fwdPe: 63.58, ps: 14.73, evEbitda: null, eps: -3.95, thesis: 'Cloud data warehouse; AI workloads need massive structured data' },
  { ticker: 'MDB', name: 'MongoDB', categories: ['bigdata'], price: 259.86, marketCap: 21.15e9, pe: null, fwdPe: 36.11, ps: 10.17, evEbitda: null, eps: -0.89, thesis: 'Document database for AI apps; Atlas vector search for LLM pipelines' },
  { ticker: 'DDOG', name: 'Datadog', categories: ['bigdata'], price: 127.62, marketCap: 45.16e9, pe: 398.83, fwdPe: 38.02, ps: 16.24, evEbitda: 149.26, eps: 0.32, thesis: 'Observability platform; monitoring AI infrastructure at scale' },
  { ticker: 'CFLT', name: 'Confluent', categories: ['bigdata'], price: 30.67, marketCap: 10.97e9, pe: null, fwdPe: 50.92, ps: 13.84, evEbitda: null, eps: -0.86, thesis: 'Real-time data streaming (Kafka); feeds data pipelines to AI models' },
  { ticker: 'NTNX', name: 'Nutanix', categories: ['bigdata'], price: 38.79, marketCap: 10.49e9, pe: 42.17, fwdPe: 17.07, ps: 4.44, evEbitda: 34.36, eps: 0.92, thesis: 'Hybrid cloud infrastructure; simplifies AI deployment across clouds' },
  { ticker: 'MSFT', name: 'Microsoft Corporation', categories: ['cloud', 'mag7'], price: 403.01, marketCap: 2.993e12, pe: 25.2, fwdPe: 17.86, ps: 10.59, evEbitda: 19.97, eps: 15.99, thesis: 'Azure AI + OpenAI partnership; Copilot AI integration across products' },
  { ticker: 'GOOGL', name: 'Alphabet (Google)', categories: ['cloud', 'mag7'], price: 304.4, marketCap: 3.682e12, pe: 28.19, fwdPe: 20.27, ps: 8.59, evEbitda: 16.89, eps: 10.8, thesis: 'Gemini AI models; Google Cloud AI; TPU custom chips; DeepMind R&D' },
  { ticker: 'AMZN', name: 'Amazon.com', categories: ['cloud', 'mag7'], price: 209.67, marketCap: 2.251e12, pe: 29.2, fwdPe: 11.03, ps: 3.39, evEbitda: 14.58, eps: 7.18, thesis: 'AWS dominates cloud; Trainium/Inferentia custom AI chips; Bedrock AI' },
  { ticker: 'AAPL', name: 'Apple Inc.', categories: ['cloud', 'mag7'], price: 255.27, marketCap: 3.752e12, pe: 32.27, fwdPe: 27.83, ps: 8.25, evEbitda: 22.7, eps: 7.91, thesis: 'Apple Intelligence on-device AI; custom Neural Engine silicon; services ecosystem' },
  { ticker: 'ORCL', name: 'Oracle Corporation', categories: ['cloud'], price: 160.03, marketCap: 459.94e9, pe: 30.08, fwdPe: 15.82, ps: 7.73, evEbitda: 17.49, eps: 5.32, thesis: 'OCI cloud + GPU clusters; enterprise AI database workloads' },
  { ticker: 'NOW', name: 'ServiceNow', categories: ['cloud'], price: 113.26, marketCap: 118.47e9, pe: 67.82, fwdPe: 21.97, ps: 14.12, evEbitda: 55.71, eps: 1.67, thesis: 'Enterprise AI workflow automation; Now Assist AI copilot' },
  { ticker: 'CRWD', name: 'CrowdStrike', categories: ['cloud'], price: 441.49, marketCap: 111.30e9, pe: null, fwdPe: 71.55, ps: 22.07, evEbitda: null, eps: -0.66, thesis: 'AI-native cybersecurity; more AI infrastructure = more attack surface' },
];
