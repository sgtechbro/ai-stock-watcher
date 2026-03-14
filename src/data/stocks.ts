export const DATA_DATE = '2026-03-13';

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
  // Chips
  { ticker: 'NVDA', name: 'NVIDIA Corporation', categories: ['chips', 'mag7'], price: 180.25, marketCap: 4.38e12, pe: 36.79, fwdPe: 21.84, ps: 20.28, evEbitda: 32.49, eps: 4.90, thesis: 'Dominant AI training & inference GPU maker; data center revenue soaring' },
  { ticker: 'AMD', name: 'Advanced Micro Devices', categories: ['chips'], price: 192.47, marketCap: 314.00e9, pe: 73.10, fwdPe: 29.19, ps: 9.13, evEbitda: 45.90, eps: 2.65, thesis: 'Growing AI GPU challenger (MI300 series); strong data center + gaming' },
  { ticker: 'AVGO', name: 'Broadcom Inc.', categories: ['chips'], price: 322.16, marketCap: 1.53e12, pe: 62.79, fwdPe: 24.15, ps: 22.34, evEbitda: 42.38, eps: 5.13, thesis: 'Custom AI ASICs for hyperscalers + VMware cloud software integration' },
  { ticker: 'QCOM', name: 'Qualcomm', categories: ['chips'], price: 132.25, marketCap: 141.10e9, pe: 27.02, fwdPe: 12.55, ps: 3.12, evEbitda: 10.38, eps: 4.90, thesis: 'AI at the edge — on-device AI chips for mobile, auto, and IoT' },
  { ticker: 'MRVL', name: 'Marvell Technology', categories: ['chips'], price: 87.86, marketCap: 76.82e9, pe: 28.62, fwdPe: 23.02, ps: 9.37, evEbitda: 30.03, eps: 3.07, thesis: 'Custom silicon & electro-optics for AI data centers and 5G' },
  { ticker: 'INTC', name: 'Intel Corporation', categories: ['chips'], price: 45.76, marketCap: 228.43e9, pe: null, fwdPe: 93.68, ps: 4.31, evEbitda: 18.78, eps: -0.06, thesis: 'Turnaround play; foundry ambitions + legacy CPU installed base' },
  { ticker: 'ARM', name: 'Arm Holdings plc', categories: ['chips'], price: 115.75, marketCap: 122.93e9, pe: 154.35, fwdPe: 58.89, ps: 26.32, evEbitda: 110.58, eps: 0.75, thesis: 'Ubiquitous chip architecture; AI royalties grow with every AI device' },
  { ticker: 'LSCC', name: 'Lattice Semiconductor', categories: ['chips'], price: 85.77, marketCap: 11.73e9, pe: 3804.20, fwdPe: 54.83, ps: 22.42, evEbitda: 229.34, eps: 0.02, thesis: 'Low-power FPGAs for AI edge inference and industrial applications' },

  // Equipment
  { ticker: 'ASML', name: 'ASML Holding N.V.', categories: ['equipment'], price: 1345.69, marketCap: 518.65e9, pe: 45.97, fwdPe: 40.01, ps: 13.52, evEbitda: 35.31, eps: 29.01, thesis: 'Monopoly on EUV lithography — every advanced AI chip needs ASML' },
  { ticker: 'TSM', name: 'TSMC', categories: ['equipment'], price: 338.79, marketCap: 1.76e12, pe: 32.20, fwdPe: 24.24, ps: 14.52, evEbitda: 20.39, eps: 2.11, thesis: "World's leading foundry; fabricates chips for NVIDIA, AMD, Apple" },
  { ticker: 'AMAT', name: 'Applied Materials', categories: ['equipment'], price: 341.53, marketCap: 270.83e9, pe: 34.98, fwdPe: 28.35, ps: 9.60, evEbitda: 30.32, eps: 9.76, thesis: 'Largest semiconductor equipment maker; essential for chip fabrication' },
  { ticker: 'LRCX', name: 'Lam Research', categories: ['equipment'], price: 212.20, marketCap: 264.99e9, pe: 43.55, fwdPe: 34.63, ps: 12.89, evEbitda: 35.85, eps: 4.87, thesis: 'Etch & deposition equipment leader; critical for advanced node chips' },
  { ticker: 'KLAC', name: 'KLA Corporation', categories: ['equipment'], price: 1418.64, marketCap: 185.95e9, pe: 41.28, fwdPe: 33.84, ps: 14.59, evEbitda: 32.54, eps: 34.37, thesis: 'Inspection & metrology leader; defect detection for AI chip yield' },
  { ticker: 'GFS', name: 'GlobalFoundries', categories: ['equipment'], price: 41.86, marketCap: 23.27e9, pe: 26.33, fwdPe: 22.76, ps: 3.43, evEbitda: 10.25, eps: 1.59, thesis: 'Mature-node specialty foundry; IoT, auto, and defense chips' },
  { ticker: 'SNPS', name: 'Synopsys', categories: ['equipment'], price: 412.63, marketCap: 79.04e9, pe: 65.00, fwdPe: 27.57, ps: 9.87, evEbitda: 54.31, eps: 6.33, thesis: 'EDA software monopoly — AI chip designers must use Synopsys tools' },
  { ticker: 'CDNS', name: 'Cadence Design Systems', categories: ['equipment'], price: 287.03, marketCap: 78.26e9, pe: 70.70, fwdPe: 36.45, ps: 14.77, evEbitda: 40.76, eps: 4.06, thesis: 'EDA duopoly partner; chip design verification for every AI accelerator' },

  // Data Center
  { ticker: 'EQIX', name: 'Equinix', categories: ['datacenter'], price: 969.90, marketCap: 95.30e9, pe: 70.49, fwdPe: 60.17, ps: 10.29, evEbitda: null, eps: 13.76, thesis: 'Largest data center REIT; 260+ facilities; AI colocation demand surge' },
  { ticker: 'DLR', name: 'Digital Realty Trust', categories: ['datacenter'], price: 179.61, marketCap: 61.72e9, pe: 50.17, fwdPe: 94.93, ps: 10.15, evEbitda: null, eps: 3.58, thesis: 'Major data center REIT; hyperscale and enterprise AI workload growth' },
  { ticker: 'ANET', name: 'Arista Networks', categories: ['datacenter'], price: 133.57, marketCap: 167.84e9, pe: 48.57, fwdPe: 37.79, ps: 18.64, evEbitda: 39.99, eps: 2.75, thesis: 'High-speed networking switches for AI/ML cluster interconnects' },
  { ticker: 'CSCO', name: 'Cisco Systems', categories: ['datacenter'], price: 78.33, marketCap: 309.40e9, pe: 28.18, fwdPe: 18.26, ps: 5.24, evEbitda: 19.97, eps: 2.78, thesis: 'Network infrastructure backbone; AI-optimized data center switching' },
  { ticker: 'VRT', name: 'Vertiv Holdings', categories: ['datacenter'], price: 258.88, marketCap: 99.05e9, pe: 75.92, fwdPe: 42.22, ps: 9.68, evEbitda: 45.49, eps: 3.41, thesis: 'Critical power & thermal management for AI data centers' },
  { ticker: 'GLW', name: 'Corning', categories: ['datacenter'], price: 129.12, marketCap: 110.78e9, pe: 70.56, fwdPe: 41.45, ps: 7.09, evEbitda: 32.32, eps: 1.83, thesis: 'Optical fiber & connectivity solutions for AI data center buildouts' },
  { ticker: 'CIEN', name: 'Ciena Corporation', categories: ['datacenter'], price: 337.38, marketCap: 47.71e9, pe: 214.51, fwdPe: 51.25, ps: 9.31, evEbitda: 84.00, eps: 1.57, thesis: 'Optical networking — high-bandwidth coherent optics for AI traffic' },
  { ticker: 'DELL', name: 'Dell Technologies', categories: ['datacenter'], price: 151.62, marketCap: 100.48e9, pe: 17.47, fwdPe: 11.87, ps: 0.88, evEbitda: 13.93, eps: 8.68, thesis: 'AI server infrastructure; PowerEdge GPU servers for enterprise AI' },
  { ticker: 'SMCI', name: 'Super Micro Computer', categories: ['datacenter'], price: 30.75, marketCap: 18.42e9, pe: 22.45, fwdPe: 12.64, ps: 0.66, evEbitda: 17.85, eps: 1.37, thesis: 'GPU server specialist; fast-to-market AI server rack solutions' },

  // Energy
  { ticker: 'ETN', name: 'Eaton Corporation', categories: ['energy'], price: 355.40, marketCap: 137.86e9, pe: 34.01, fwdPe: 26.64, ps: 5.02, evEbitda: 23.41, eps: 10.45, thesis: 'Power management for data centers; electrical distribution & UPS' },
  { ticker: 'CEG', name: 'Constellation Energy', categories: ['energy'], price: 301.77, marketCap: 109.24e9, pe: 40.78, fwdPe: 25.00, ps: 4.28, evEbitda: 20.44, eps: 7.40, thesis: 'Nuclear power fleet; clean baseload energy for hyperscale data centers' },
  { ticker: 'VST', name: 'Vistra Corp.', categories: ['energy'], price: 158.95, marketCap: 53.56e9, pe: 72.91, fwdPe: 18.30, ps: 3.02, evEbitda: 14.00, eps: 2.18, thesis: 'Diversified power generation; nuclear + natural gas for AI data centers' },
  { ticker: 'GEV', name: 'GE Vernova', categories: ['energy'], price: 805.02, marketCap: 216.98e9, pe: 45.51, fwdPe: 56.71, ps: 5.70, evEbitda: 69.86, eps: 17.69, thesis: 'Power generation equipment; gas turbines & grid solutions for AI demand' },
  { ticker: 'PWR', name: 'Quanta Services', categories: ['energy'], price: 559.02, marketCap: 83.64e9, pe: 82.21, fwdPe: 42.63, ps: 2.94, evEbitda: 35.89, eps: 6.80, thesis: 'Infrastructure contractor; builds power lines & data center electrical' },

  // Robotics
  { ticker: 'TSLA', name: 'Tesla, Inc.', categories: ['robotics', 'mag7'], price: 391.20, marketCap: 1.47e12, pe: 386.91, fwdPe: 189.17, ps: 15.48, evEbitda: 136.97, eps: 1.08, thesis: 'AI-driven autonomy (FSD), Optimus humanoid robot, energy & EV leader' },
  { ticker: 'ISRG', name: 'Intuitive Surgical', categories: ['robotics'], price: 472.16, marketCap: 167.68e9, pe: 59.99, fwdPe: 47.12, ps: 16.66, evEbitda: 45.51, eps: 7.87, thesis: 'Surgical robotics leader; AI-enhanced da Vinci robotic systems' },
  { ticker: 'ROK', name: 'Rockwell Automation', categories: ['robotics'], price: 360.93, marketCap: 40.55e9, pe: 41.24, fwdPe: 29.18, ps: 4.73, evEbitda: 23.61, eps: 8.75, thesis: 'Industrial automation & AI-powered smart manufacturing' },
  { ticker: 'TER', name: 'Teradyne', categories: ['robotics'], price: 286.42, marketCap: 44.84e9, pe: 82.54, fwdPe: 45.86, ps: 14.06, evEbitda: 55.02, eps: 3.47, thesis: 'Test equipment for semiconductors + Universal Robots (cobots)' },

  // Big Data
  { ticker: 'META', name: 'Meta Platforms', categories: ['bigdata', 'mag7'], price: 613.71, marketCap: 1.55e12, pe: 26.13, fwdPe: 20.34, ps: 7.72, evEbitda: 15.27, eps: 23.49, thesis: 'Llama open-source AI models; massive AI infrastructure investment; ads AI' },
  { ticker: 'PLTR', name: 'Palantir Technologies', categories: ['bigdata'], price: 150.95, marketCap: 361.02e9, pe: 239.60, fwdPe: 114.20, ps: 80.67, evEbitda: 245.86, eps: 0.63, thesis: 'AI/ML analytics platform for gov & enterprise; AIP adoption accelerating' },
  { ticker: 'SNOW', name: 'Snowflake', categories: ['bigdata'], price: 178.66, marketCap: 61.14e9, pe: null, fwdPe: 99.97, ps: 13.05, evEbitda: null, eps: -3.95, thesis: 'Cloud data warehouse; AI workloads need massive structured data' },
  { ticker: 'MDB', name: 'MongoDB', categories: ['bigdata'], price: 260.50, marketCap: 20.94e9, pe: null, fwdPe: 44.72, ps: 8.50, evEbitda: null, eps: -0.88, thesis: 'Document database for AI apps; Atlas vector search for LLM pipelines' },
  { ticker: 'DDOG', name: 'Datadog', categories: ['bigdata'], price: 124.52, marketCap: 43.90e9, pe: 407.48, fwdPe: 57.49, ps: 12.81, evEbitda: 5406.69, eps: 0.31, thesis: 'Observability platform; monitoring AI infrastructure at scale' },
  { ticker: 'CFLT', name: 'Confluent', categories: ['bigdata'], price: 30.67, marketCap: 11.02e9, pe: null, fwdPe: 59.43, ps: 9.44, evEbitda: null, eps: -0.86, thesis: 'Real-time data streaming (Kafka); feeds data pipelines to AI models' },
  { ticker: 'NTNX', name: 'Nutanix', categories: ['bigdata'], price: 39.29, marketCap: 10.42e9, pe: 42.78, fwdPe: 20.03, ps: 3.88, evEbitda: 34.26, eps: 0.92, thesis: 'Hybrid cloud infrastructure; simplifies AI deployment across clouds' },

  // Cloud
  { ticker: 'MSFT', name: 'Microsoft Corporation', categories: ['cloud', 'mag7'], price: 395.55, marketCap: 2.94e12, pe: 24.75, fwdPe: 22.54, ps: 9.62, evEbitda: 16.95, eps: 15.98, thesis: 'Azure AI + OpenAI partnership; Copilot AI integration across products' },
  { ticker: 'GOOGL', name: 'Alphabet (Google)', categories: ['cloud', 'mag7'], price: 302.28, marketCap: 3.66e12, pe: 27.99, fwdPe: 26.13, ps: 9.08, evEbitda: 23.95, eps: 10.80, thesis: 'Gemini AI models; Google Cloud AI; TPU custom chips; DeepMind R&D' },
  { ticker: 'AMZN', name: 'Amazon.com', categories: ['cloud', 'mag7'], price: 207.67, marketCap: 2.23e12, pe: 28.96, fwdPe: 26.90, ps: 3.11, evEbitda: 15.68, eps: 7.17, thesis: 'AWS dominates cloud; Trainium/Inferentia custom AI chips; Bedrock AI' },
  { ticker: 'AAPL', name: 'Apple Inc.', categories: ['cloud', 'mag7'], price: 250.12, marketCap: 3.67e12, pe: 32.44, fwdPe: 29.74, ps: 8.46, evEbitda: 23.74, eps: 7.88, thesis: 'Apple Intelligence on-device AI; custom Neural Engine silicon; services ecosystem' },
  { ticker: 'ORCL', name: 'Oracle Corporation', categories: ['cloud'], price: 155.11, marketCap: 446.10e9, pe: 27.83, fwdPe: 20.60, ps: 6.96, evEbitda: 19.89, eps: 5.57, thesis: 'OCI cloud + GPU clusters; enterprise AI database workloads' },
  { ticker: 'NOW', name: 'ServiceNow', categories: ['cloud'], price: 113.62, marketCap: 118.85e9, pe: 68.04, fwdPe: 27.28, ps: 8.95, evEbitda: 40.61, eps: 1.67, thesis: 'Enterprise AI workflow automation; Now Assist AI copilot' },
  { ticker: 'CRWD', name: 'CrowdStrike', categories: ['cloud'], price: 441.78, marketCap: 112.04e9, pe: null, fwdPe: 90.98, ps: 23.28, evEbitda: null, eps: -0.65, thesis: 'AI-native cybersecurity; more AI infrastructure = more attack surface' },
];
