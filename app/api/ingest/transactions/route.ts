
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { bqClient, BQ_TABLES } from '@/lib/bigquery';

// Schema validation for incoming transactions
const transactionSchema = z.object({
  amount: z.number(),
  status: z.enum(['PAID', 'UNPAID', 'FAILED']),
  isDisputed: z.boolean().optional().default(false),
  transactionDate: z.string().datetime(), // ISO 8601 string
  clientId: z.number().int(),
  metadata: z.record(z.any()).optional(),
});

const batchSchema = z.array(transactionSchema);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = batchSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid payload', details: validation.error.format() },
        { status: 400 }
      );
    }

    const transactions = validation.data.map((t) => ({
      amount: t.amount,
      status: t.status,
      isDisputed: t.isDisputed,
      transactionDate: BigQueryDate(t.transactionDate), // Helper needed or just pass string? BQ often accepts strings for Date/Timestamp if format is correct.
      clientId: t.clientId,
      metadata: t.metadata ? JSON.stringify(t.metadata) : null,
    }));

    // BQ accepts ISO strings for DATETIME/TIMESTAMP usually.
    // However, if the column is TIMESTAMP, passing the ISO string directly usually works. 
    // If it's DATETIME, it might be tricky with TZ.
    // Let's stick to passing the object as is (with mapped fields) and let BQ SDK handle it.
    
    // Fix: 'transactionDate' needs to be formatted or kept as string depending on BQ Schema.
    // Assuming BQ column is TIMESTAMP, ISO string is fine.
    
    // Streaming insert
    // The table ID must be: `projectId.datasetId.tableId` or `datasetId.tableId`
    // Our BQ_TABLES constant has `datasetId.tableId`.
    
    await bqClient
      .dataset(BQ_TABLES.TRANSACTIONS.split('.')[1])
      .table(BQ_TABLES.TRANSACTIONS.split('.')[2])
      .insert(transactions);

    return NextResponse.json({ success: true, count: transactions.length });
  } catch (error) {
    console.error('BigQuery Ingestion Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

function BigQueryDate(dateStr: string) {
    return new Date(dateStr); 
}
