import { type NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

type RouteContext = { params: Promise<{ clientId: string }> };

/**
 * GET /api/research/[clientId]/status
 * Get the status of ongoing or completed research
 */
export async function GET(_request: NextRequest, context: RouteContext) {
  try {
    const { clientId } = await context.params;

    // Get the most recent analysis
    const analysis = await db.publicDataAnalysis.findFirst({
      where: { monitoringJobId: clientId },
      orderBy: { createdAt: 'desc' },
    });

    if (!analysis) {
      return NextResponse.json(
        {
          hasAnalysis: false,
          message: 'No research has been initiated for this client',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      hasAnalysis: true,
      analysisId: analysis.id,
      status: analysis.status,
      overallRiskLevel: analysis.overallRiskLevel,
      riskFlags: analysis.riskFlags,
      createdAt: analysis.createdAt,
      completedAt: analysis.completedAt,
      // Include result summaries if completed
      ...(analysis.status === 'COMPLETED' && {
        results: {
          negativeMedia: analysis.negativeMedia,
          pepScreening: analysis.pepScreening,
          financialHealth: analysis.financialHealth,
          statutoryEnquiries: analysis.statutoryEnquiries,
          mergersActivity: analysis.mergersActivity,
        },
      }),
    });
  } catch (error) {
    console.error('Status fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch status' }, { status: 500 });
  }
}
