import { type NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

type RouteContext = { params: Promise<{ clientId: string }> };

/**
 * POST /api/watchlist/[clientId]/analyze
 * Trigger public data analysis for a watch list client
 */
export async function POST(_request: NextRequest, context: RouteContext) {
  try {
    const { clientId } = await context.params;

    // Get watch list client
    const watchListClient = await db.watchListClient.findUnique({
      where: { id: clientId },
    });

    if (!watchListClient) {
      return NextResponse.json({ error: 'Watch list client not found' }, { status: 404 });
    }

    // Check for existing pending/running analysis
    const existingAnalysis = await db.publicDataAnalysis.findFirst({
      where: {
        watchListClientId: clientId,
        status: { in: ['PENDING', 'RUNNING'] },
      },
    });

    if (existingAnalysis) {
      return NextResponse.json(
        {
          success: false,
          error: 'Analysis already in progress',
          analysisId: existingAnalysis.id,
          status: existingAnalysis.status,
        },
        { status: 409 }
      );
    }

    // Create analysis record
    const analysis = await db.publicDataAnalysis.create({
      data: {
        watchListClientId: clientId,
        clientName: watchListClient.name,
        status: 'PENDING',
      },
    });

    // TODO: Start Temporal workflow in production
    // const client = await getConnection();
    // await client.workflow.start(publicDataAnalysisWorkflow, {
    //   args: [analysis.id, watchListClient.name],
    //   taskQueue: 'public-data-analysis',
    //   workflowId: `pda-wl-${analysis.id}`
    // });

    return NextResponse.json({
      success: true,
      analysisId: analysis.id,
      clientName: watchListClient.name,
      priority: watchListClient.priority,
      status: 'PENDING',
      message: 'Analysis queued for watch list client.',
    });
  } catch (error) {
    console.error('Watchlist analysis trigger error:', error);
    return NextResponse.json({ error: 'Failed to trigger analysis' }, { status: 500 });
  }
}

/**
 * GET /api/watchlist/[clientId]/analyze
 * Get analysis history for a watch list client
 */
export async function GET(_request: NextRequest, context: RouteContext) {
  try {
    const { clientId } = await context.params;

    const analyses = await db.publicDataAnalysis.findMany({
      where: { watchListClientId: clientId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return NextResponse.json({
      analyses,
      total: analyses.length,
    });
  } catch (error) {
    console.error('Watchlist analysis fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch analyses' }, { status: 500 });
  }
}
