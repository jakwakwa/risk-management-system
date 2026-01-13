import { proxyActivities, sleep } from '@temporalio/workflow';
import type * as firecrawlActivities from './firecrawl-activities';

const {
  searchNegativeMedia,
  checkPEPScreening,
  monitorFinancialHealth,
  checkStatutoryEnquiries,
  detectMergersAcquisitions,
  savePublicDataAnalysis,
  updateAnalysisStatus,
  markAnalysisFailed,
} = proxyActivities<typeof firecrawlActivities>({
  startToCloseTimeout: '5 minutes',
  retry: {
    maximumAttempts: 3,
    initialInterval: '10 seconds',
    backoffCoefficient: 2,
  },
});

/**
 * Public Data Analysis Workflow
 *
 * Orchestrates all research activities for a given client:
 * 1. Negative Media Search
 * 2. PEP Screening
 * 3. Financial Health Check
 * 4. Statutory Enquiries
 * 5. M&A Activity Detection
 *
 * All activities run in parallel for efficiency.
 */
export async function publicDataAnalysisWorkflow(
  analysisId: string,
  clientName: string
): Promise<void> {
  // Mark analysis as running
  await updateAnalysisStatus(analysisId, 'RUNNING');

  try {
    // Run all research activities in parallel for efficiency
    const [negativeMedia, pepScreening, financialHealth, statutoryEnquiries, mergersActivity] =
      await Promise.all([
        searchNegativeMedia(clientName),
        checkPEPScreening(clientName),
        monitorFinancialHealth(clientName),
        checkStatutoryEnquiries(clientName),
        detectMergersAcquisitions(clientName),
      ]);

    // Save aggregated results
    await savePublicDataAnalysis(analysisId, {
      negativeMedia: negativeMedia ?? undefined,
      pepScreening: pepScreening ?? undefined,
      financialHealth: financialHealth ?? undefined,
      statutoryEnquiries: statutoryEnquiries ?? undefined,
      mergersActivity: mergersActivity ?? undefined,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    await markAnalysisFailed(analysisId, errorMessage);
    throw error;
  }
}

/**
 * Watch List Batch Analysis Workflow
 *
 * Analyzes all clients on the watch list in sequence
 * with a small delay between each to avoid rate limiting.
 */
export async function watchListBatchAnalysisWorkflow(
  clientNames: string[],
  analysisIds: string[]
): Promise<void> {
  for (let i = 0; i < clientNames.length; i++) {
    const clientName = clientNames[i];
    const analysisId = analysisIds[i];

    // Add a small delay between requests to avoid rate limiting
    if (i > 0) {
      await sleep('30 seconds');
    }

    await publicDataAnalysisWorkflow(analysisId, clientName);
  }
}
