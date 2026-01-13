import { type NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { decrypt } from '@/lib/security';

// Note: In production, you would start the Temporal workflow here
// For now, we create the analysis record and mark it as pending
// The workflow can be triggered by a separate worker process

type RouteContext = { params: Promise<{ clientId: string }> };

/**
 * POST /api/research/[clientId]
 * Trigger public data research for a client
 */
export async function POST(_request: NextRequest, context: RouteContext) {
  try {
    const { clientId } = await context.params;

    // Get client details from MonitoringJob
    const job = await db.monitoringJob.findUnique({
      where: { id: clientId },
    });

    if (!job) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    // Decrypt client name if encrypted
    let clientName: string;
    try {
      clientName = decrypt(job.clientName);
    } catch {
      clientName = job.clientName;
    }

    // Check for existing pending/running analysis
    const existingAnalysis = await db.publicDataAnalysis.findFirst({
      where: {
        monitoringJobId: clientId,
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
        monitoringJobId: clientId,
        clientName,
        status: 'PENDING',
      },
    });

    // TODO: Start Temporal workflow
    // In production, you would call:
    // const client = await getConnection();
    // await client.workflow.start(publicDataAnalysisWorkflow, {
    //   args: [analysis.id, clientName],
    //   taskQueue: 'public-data-analysis',
    //   workflowId: `pda-${analysis.id}`
    // });

    return NextResponse.json({
      success: true,
      analysisId: analysis.id,
      clientName,
      status: 'PENDING',
      message: 'Analysis queued. Check status endpoint for updates.',
    });
  } catch (error) {
    console.error('Research trigger error:', error);
    return NextResponse.json(
      { error: 'Failed to trigger research', details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/research/[clientId]
 * Get latest analysis for a client
 */
export async function GET(_request: NextRequest, context: RouteContext) {
  try {
    const { clientId } = await context.params;

    const analyses = await db.publicDataAnalysis.findMany({
      where: { monitoringJobId: clientId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    if (analyses.length === 0) {
      return NextResponse.json({ error: 'No analyses found' }, { status: 404 });
    }

    return NextResponse.json({
      latest: analyses[0],
      history: analyses,
    });
  } catch (error) {
    console.error('Research fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch research' }, { status: 500 });
  }
}
