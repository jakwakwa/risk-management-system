import { type NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

// Validation schema for creating watch list clients
const CreateWatchListClientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  priority: z.enum(['HIGH', 'CRITICAL']).default('HIGH'),
  notes: z.string().optional(),
});

/**
 * GET /api/watchlist
 * List all watch list clients with their latest analysis status
 */
export async function GET() {
  try {
    const clients = await db.watchListClient.findMany({
      include: {
        analyses: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }],
    });

    // Transform to include latest analysis summary
    const clientsWithStatus = clients.map((client) => ({
      id: client.id,
      name: client.name,
      priority: client.priority,
      notes: client.notes,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
      latestAnalysis: client.analyses[0]
        ? {
            id: client.analyses[0].id,
            status: client.analyses[0].status,
            overallRiskLevel: client.analyses[0].overallRiskLevel,
            riskFlags: client.analyses[0].riskFlags,
            createdAt: client.analyses[0].createdAt,
            completedAt: client.analyses[0].completedAt,
          }
        : null,
    }));

    return NextResponse.json({
      clients: clientsWithStatus,
      total: clients.length,
    });
  } catch (error) {
    console.error('Watchlist fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch watchlist' }, { status: 500 });
  }
}

/**
 * POST /api/watchlist
 * Add a new client to the watch list
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = CreateWatchListClientSchema.parse(body);

    // Check for duplicate
    const existing = await db.watchListClient.findFirst({
      where: { name: validated.name },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Client already exists on watch list', existingId: existing.id },
        { status: 409 }
      );
    }

    const client = await db.watchListClient.create({
      data: {
        name: validated.name,
        priority: validated.priority,
        notes: validated.notes,
      },
    });

    return NextResponse.json(
      {
        success: true,
        client,
        message: `${validated.name} added to watch list with ${validated.priority} priority`,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Watchlist create error:', error);
    return NextResponse.json({ error: 'Failed to add to watchlist' }, { status: 500 });
  }
}

/**
 * DELETE /api/watchlist
 * Remove a client from the watch list (by id in query param)
 */
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const clientId = searchParams.get('id');

    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }

    await db.watchListClient.delete({
      where: { id: clientId },
    });

    return NextResponse.json({
      success: true,
      message: 'Client removed from watch list',
    });
  } catch (error) {
    console.error('Watchlist delete error:', error);
    return NextResponse.json({ error: 'Failed to remove from watchlist' }, { status: 500 });
  }
}
