
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { bqClient, BQ_TABLES } from '@/lib/bigquery';

// 1. Validation Schema (Alert Ingest Contract)
const alertIngestSchema = z.object({
  alert_id: z.string().uuid(),
  subject_name: z.string(),
  identifier: z.string(),
  raw_amount: z.number(),
  status: z.enum(['PAID', 'UNPAID', 'DISPUTE', 'PENDING']),
  createdAt: z.string().datetime(), // ISO 8601
});

export async function POST(req: NextRequest) {
  // 2. Security Middleware
  const authHeader = req.headers.get('authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');

  if (token !== process.env.GCP_OIDC_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    console.log('Incoming Ingest Payload:', JSON.stringify(body, null, 2)); // Debug 400
    const validation = alertIngestSchema.safeParse(body);

    if (!validation.success) {
      console.error('Validation Error:', JSON.stringify(validation.error.format(), null, 2));
      return NextResponse.json(
        { error: 'Invalid payload', details: validation.error.format() },
        { status: 400 }
      );
    }

    const { alert_id, subject_name, identifier, raw_amount, status, createdAt } = validation.data;

    // 3. Idempotency & Persistence (Prisma Sandbox)
    const existing = await prisma.sandbox.findUnique({
      where: { alert_id },
    });

    if (existing) {
      return NextResponse.json({ status: 'Already processed' }, { status: 200 }); // Return 200 OK if exists
    }

    // Save to Prisma Sandbox
    await prisma.sandbox.create({
      data: {
        alert_id,
        payload: body,
        createdAt: new Date(), // Local receipt time (or use createdAt from payload if desired, but user said 'createdAt' is for BQ)
      },
    });

    // 4. BigQuery Ingestion (Flattened Payload)
    const row = {
      alert_id,
      subject_name,
      identifier,
      raw_amount,
      status,
      created_at: bqClient.timestamp(new Date(createdAt)),
      ingested_at: bqClient.timestamp(new Date()),
    };

    const parts = BQ_TABLES.TRANSACTIONS.split('.');
    const datasetId = parts.length > 2 ? parts[1] : parts[0];
    const tableId = parts.length > 2 ? parts[2] : parts[1];

    await bqClient
      .dataset(datasetId)
      .table(tableId)
      .insert([row])
      .catch((err) => {
        if (err.name === 'PartialFailureError') {
          console.error('❌ BigQuery Partial Failure Details:');
          console.error(JSON.stringify(err.errors, null, 2));
        } else {
          console.error('❌ BigQuery Insert Failed:', err);
        }
      });

    console.log(`✅ Ingested Alert: ${alert_id}`);

    // 5. Response Handling
    return NextResponse.json({ status: 'Accepted', message: 'Queued for processing' }, { status: 202 });

  } catch (error: any) {
    console.error('❌ BigQuery Ingestion Error (Detailed):');
    if (error.errors) {
      console.error(JSON.stringify(error.errors, null, 2));
    } else {
      console.error(JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    }
    
    // Also log response if available
    if (error.response) {
      console.error('❌ BigQuery Response:', JSON.stringify(error.response, null, 2));
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
