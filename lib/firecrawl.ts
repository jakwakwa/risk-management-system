import Firecrawl from '@mendable/firecrawl-js';

// Initialize Firecrawl client
export const firecrawlClient = new Firecrawl({
  apiKey: process.env.FIRECRAWL_API_KEY!,
});

// Default configuration for agent requests
export const DEFAULT_AGENT_CONFIG = {
  maxCredits: 100, // Cost control per request
  strictConstrainToURLs: false, // Allow autonomous navigation
};

// South African specific data sources
export const SA_DATA_SOURCES = {
  CIPC: 'https://www.cipc.co.za/', // Companies and Intellectual Property Commission
  SARB: 'https://www.resbank.co.za/', // SA Reserve Bank
  FSCA: 'https://www.fsca.co.za/', // Financial Sector Conduct Authority
  GAZETTE: 'https://www.gpwonline.co.za/', // Government Gazette
};
