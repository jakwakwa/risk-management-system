import { z } from 'zod';

// ============================================
// Negative Media Schema
// ============================================
export const NegativeMediaArticleSchema = z.object({
  title: z.string().describe('Article headline'),
  source: z.string().describe('Publication or news source name'),
  date: z.string().optional().describe('Publication date if available'),
  sentiment: z
    .enum(['negative', 'very_negative', 'neutral'])
    .describe('Overall sentiment of the article'),
  summary: z.string().describe('Brief summary of the article content'),
  url: z.string().url().describe('URL to the original article'),
});

export const NegativeMediaSchema = z.object({
  articles: z
    .array(NegativeMediaArticleSchema)
    .describe('List of negative or concerning news articles'),
  overallSentiment: z
    .enum(['positive', 'neutral', 'negative', 'very_negative'])
    .optional()
    .describe('Aggregate sentiment across all found articles'),
});

export type NegativeMediaResult = z.infer<typeof NegativeMediaSchema>;

// ============================================
// PEP Screening Schema
// ============================================
export const PEPScreeningSchema = z.object({
  isPEP: z.boolean().describe('Whether the entity is identified as a PEP'),
  pepType: z
    .string()
    .optional()
    .describe('Type of PEP: domestic, foreign, international organization'),
  associatedPositions: z
    .array(z.string())
    .optional()
    .describe('Political or government positions held'),
  riskLevel: z
    .enum(['low', 'medium', 'high'])
    .optional()
    .describe('Assessed risk level for this PEP'),
  relatedEntities: z
    .array(z.string())
    .optional()
    .describe('Close associates or family members who may also be PEPs'),
});

export type PEPScreeningResult = z.infer<typeof PEPScreeningSchema>;

// ============================================
// Financial Health Schema
// ============================================
export const FinancialHealthSchema = z.object({
  hasLiquidationSignals: z
    .boolean()
    .describe('Whether there are signs of liquidation or winding up'),
  financialDistressIndicators: z
    .array(z.string())
    .describe('List of financial distress signals found'),
  lastFilingDate: z
    .string()
    .optional()
    .describe('Date of last company filing if available'),
  companyStatus: z
    .string()
    .optional()
    .describe('Current registration status: Active, Deregistered, In Business Rescue, etc.'),
  businessRescue: z
    .boolean()
    .optional()
    .describe('Whether the company is under business rescue proceedings'),
});

export type FinancialHealthResult = z.infer<typeof FinancialHealthSchema>;

// ============================================
// Statutory Enquiries Schema
// ============================================
export const StatutoryEnquiriesSchema = z.object({
  hasStatutoryMentions: z
    .boolean()
    .describe('Whether the entity appears in statutory or legal records'),
  enquiries: z
    .array(
      z.object({
        type: z
          .string()
          .describe('Type of enquiry: court case, regulatory action, investigation'),
        description: z.string().describe('Brief description of the matter'),
        date: z.string().optional().describe('Date if available'),
        source: z.string().describe('Source of the information'),
      })
    )
    .describe('List of statutory mentions or enquiries'),
  riskLevel: z
    .enum(['low', 'medium', 'high', 'critical'])
    .optional()
    .describe('Assessed risk level based on findings'),
});

export type StatutoryEnquiriesResult = z.infer<typeof StatutoryEnquiriesSchema>;

// ============================================
// Mergers & Acquisitions Schema
// ============================================
export const MergersAcquisitionsSchema = z.object({
  hasAmalgamationActivity: z
    .boolean()
    .describe('Whether there is M&A activity involving this entity'),
  activityType: z
    .enum(['acquiring', 'being_acquired', 'merger', 'unknown'])
    .optional()
    .describe('Type of M&A activity'),
  targetOrAcquirer: z
    .string()
    .optional()
    .describe('Name of the other party in the transaction'),
  announcementDate: z
    .string()
    .optional()
    .describe('Date the activity was announced'),
  impactAssessment: z
    .enum(['opportunity', 'risk', 'neutral'])
    .optional()
    .describe('Business impact assessment'),
  details: z
    .string()
    .optional()
    .describe('Additional details about the transaction'),
});

export type MergersAcquisitionsResult = z.infer<typeof MergersAcquisitionsSchema>;

// ============================================
// Aggregated Public Data Results
// ============================================
export interface PublicDataResults {
  negativeMedia?: NegativeMediaResult;
  pepScreening?: PEPScreeningResult;
  financialHealth?: FinancialHealthResult;
  statutoryEnquiries?: StatutoryEnquiriesResult;
  mergersActivity?: MergersAcquisitionsResult;
}

// ============================================
// Risk Level Calculation Helper
// ============================================
export function calculateOverallRiskLevel(results: PublicDataResults): {
  level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  flags: string[];
} {
  const flags: string[] = [];
  let level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW';

  // Check negative media
  if (results.negativeMedia?.articles && results.negativeMedia.articles.length > 0) {
    flags.push('NEGATIVE_MEDIA');
    level = 'MEDIUM';
    if (
      results.negativeMedia.overallSentiment === 'very_negative' ||
      results.negativeMedia.articles.length > 3
    ) {
      level = 'HIGH';
    }
  }

  // Check PEP status
  if (results.pepScreening?.isPEP) {
    flags.push('PEP_IDENTIFIED');
    level = level === 'LOW' ? 'MEDIUM' : 'HIGH';
    if (results.pepScreening.riskLevel === 'high') {
      level = 'HIGH';
    }
  }

  // Check financial health
  if (results.financialHealth?.hasLiquidationSignals) {
    flags.push('LIQUIDATION_RISK');
    level = 'CRITICAL';
  }
  if (results.financialHealth?.businessRescue) {
    flags.push('BUSINESS_RESCUE');
    level = level === 'LOW' ? 'HIGH' : level;
  }

  // Check statutory enquiries
  if (results.statutoryEnquiries?.hasStatutoryMentions) {
    flags.push('STATUTORY_MENTIONS');
    if (
      results.statutoryEnquiries.riskLevel === 'critical' ||
      results.statutoryEnquiries.riskLevel === 'high'
    ) {
      level = 'CRITICAL';
    } else if (level === 'LOW') {
      level = 'MEDIUM';
    }
  }

  // Check M&A activity
  if (results.mergersActivity?.hasAmalgamationActivity) {
    flags.push('MA_ACTIVITY');
    if (results.mergersActivity.impactAssessment === 'risk') {
      flags.push('MA_RISK');
      level = level === 'LOW' ? 'MEDIUM' : level;
    }
  }

  return { level, flags };
}
