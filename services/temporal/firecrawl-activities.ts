import { firecrawlClient, DEFAULT_AGENT_CONFIG, SA_DATA_SOURCES } from '@/lib/firecrawl';
import {
  NegativeMediaSchema,
  PEPScreeningSchema,
  FinancialHealthSchema,
  StatutoryEnquiriesSchema,
  MergersAcquisitionsSchema,
  calculateOverallRiskLevel,
  type NegativeMediaResult,
  type PEPScreeningResult,
  type FinancialHealthResult,
  type StatutoryEnquiriesResult,
  type MergersAcquisitionsResult,
  type PublicDataResults,
} from '@/lib/research-schemas';
import { db } from '@/lib/db';

/**
 * Search for negative news and media mentions about a client
 */
export async function searchNegativeMedia(clientName: string): Promise<NegativeMediaResult | null> {
  try {
    const result = await firecrawlClient.agent({
      prompt: `Search for negative news, media articles, and public sentiment about "${clientName}". 
               Look for: 
               - Fraud allegations or accusations
               - Legal issues, lawsuits, or court cases
               - Regulatory actions or sanctions
               - Association with suspicious or "strange" organizations
               - Any terrorism or criminal links
               - Dishonest or unethical behavior patterns (known as "skelm" behavior in SA)
               - Negative press coverage
               
               Return a structured list of concerning articles found.`,
      schema: NegativeMediaSchema,
      ...DEFAULT_AGENT_CONFIG,
    });

    return result.data as NegativeMediaResult;
  } catch (error) {
    console.error('Negative media search failed:', error);
    return null;
  }
}

/**
 * Check if client is a Politically Exposed Person
 */
export async function checkPEPScreening(clientName: string): Promise<PEPScreeningResult | null> {
  try {
    const result = await firecrawlClient.agent({
      prompt: `Determine if "${clientName}" is a Politically Exposed Person (PEP).
               
               Check for:
               - Current or former senior government officials
               - Political party executives or officials
               - Judicial officials (judges, senior court officials)
               - Military leaders or senior officers
               - State-owned enterprise executives
               - Close family members or associates of the above
               
               Focus on South African political positions but also check international roles.`,
      schema: PEPScreeningSchema,
      ...DEFAULT_AGENT_CONFIG,
    });

    return result.data as PEPScreeningResult;
  } catch (error) {
    console.error('PEP screening failed:', error);
    return null;
  }
}

/**
 * Check financial health and liquidation signals
 */
export async function monitorFinancialHealth(
  clientName: string
): Promise<FinancialHealthResult | null> {
  try {
    const result = await firecrawlClient.agent({
      prompt: `Check the financial health and company status of "${clientName}".
               
               Look for:
               - Liquidation notices or winding up proceedings
               - Business rescue applications or proceedings
               - Financial distress signals
               - Deregistration or strike-off notices
               - Delinquent annual returns or filings
               - Credit or financial issues
               
               Check South African company registries and business databases.`,
      urls: [SA_DATA_SOURCES.CIPC, SA_DATA_SOURCES.GAZETTE],
      schema: FinancialHealthSchema,
      ...DEFAULT_AGENT_CONFIG,
    });

    return result.data as FinancialHealthResult;
  } catch (error) {
    console.error('Financial health check failed:', error);
    return null;
  }
}

/**
 * Check for statutory enquiries and legal mentions
 */
export async function checkStatutoryEnquiries(
  clientName: string
): Promise<StatutoryEnquiriesResult | null> {
  try {
    const result = await firecrawlClient.agent({
      prompt: `Search for statutory enquiries and legal mentions involving "${clientName}".
               
               Look for:
               - Government Gazette notices
               - Court cases and judgments
               - Regulatory investigations or actions
               - FSCA (Financial Sector Conduct Authority) notices
               - SARB (South African Reserve Bank) actions
               - Competition Commission matters
               - Consumer protection complaints
               
               Focus on South African statutory records.`,
      urls: [SA_DATA_SOURCES.GAZETTE, SA_DATA_SOURCES.FSCA, SA_DATA_SOURCES.SARB],
      schema: StatutoryEnquiriesSchema,
      ...DEFAULT_AGENT_CONFIG,
    });

    return result.data as StatutoryEnquiriesResult;
  } catch (error) {
    console.error('Statutory enquiries check failed:', error);
    return null;
  }
}

/**
 * Detect merger, acquisition, or amalgamation activity
 */
export async function detectMergersAcquisitions(
  clientName: string
): Promise<MergersAcquisitionsResult | null> {
  try {
    const result = await firecrawlClient.agent({
      prompt: `Search for merger, acquisition, or amalgamation activity involving "${clientName}".
               
               Determine:
               - Is the company acquiring another entity?
               - Is the company being acquired?
               - Is there a merger or consolidation underway?
               - Any corporate restructuring announced?
               
               Assess the business impact:
               - Opportunity: Potential for increased business volume
               - Risk: Danger of contract reversal or loss to competitor post-merger
               
               Check business news, company announcements, and regulatory filings.`,
      schema: MergersAcquisitionsSchema,
      ...DEFAULT_AGENT_CONFIG,
    });

    return result.data as MergersAcquisitionsResult;
  } catch (error) {
    console.error('M&A detection failed:', error);
    return null;
  }
}

/**
 * Save aggregated public data analysis results
 */
export async function savePublicDataAnalysis(
  analysisId: string,
  results: PublicDataResults
): Promise<void> {
  const { level, flags } = calculateOverallRiskLevel(results);

  await db.publicDataAnalysis.update({
    where: { id: analysisId },
    data: {
      negativeMedia: results.negativeMedia ?? undefined,
      pepScreening: results.pepScreening ?? undefined,
      financialHealth: results.financialHealth ?? undefined,
      statutoryEnquiries: results.statutoryEnquiries ?? undefined,
      mergersActivity: results.mergersActivity ?? undefined,
      overallRiskLevel: level,
      riskFlags: flags,
      status: 'COMPLETED',
      completedAt: new Date(),
    },
  });

  // If high risk, also create RiskAlert if linked to a MonitoringJob with RiskProfile
  if (level === 'HIGH' || level === 'CRITICAL') {
    const analysis = await db.publicDataAnalysis.findUnique({
      where: { id: analysisId },
      include: {
        monitoringJob: {
          include: { riskProfile: true },
        },
      },
    });

    if (analysis?.monitoringJob?.riskProfile) {
      await db.riskAlert.create({
        data: {
          riskProfileId: analysis.monitoringJob.riskProfile.id,
          type: 'PUBLIC_DATA_RISK',
          severity: level,
          description: `Public data analysis identified ${flags.length} risk flag(s): ${flags.join(', ')}`,
          metadata: {
            analysisId,
            flags,
            negativeMediaCount: results.negativeMedia?.articles?.length ?? 0,
            isPEP: results.pepScreening?.isPEP ?? false,
            hasLiquidationSignals: results.financialHealth?.hasLiquidationSignals ?? false,
            hasAmalgamationActivity: results.mergersActivity?.hasAmalgamationActivity ?? false,
          },
        },
      });
    }
  }
}

/**
 * Update analysis status to RUNNING
 */
export async function updateAnalysisStatus(
  analysisId: string,
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED'
): Promise<void> {
  await db.publicDataAnalysis.update({
    where: { id: analysisId },
    data: { status },
  });
}

/**
 * Mark analysis as failed with error details
 */
export async function markAnalysisFailed(analysisId: string, error: string): Promise<void> {
  await db.publicDataAnalysis.update({
    where: { id: analysisId },
    data: {
      status: 'FAILED',
      overallRiskLevel: 'PENDING',
      riskFlags: [`ERROR: ${error}`],
    },
  });
}
