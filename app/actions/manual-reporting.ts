'use server';

import { db } from '@/lib/db';
import { ManualReportInput, ManualReportSchema } from '@/lib/manual-reporting-schemas';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// TODO: Replace with actual auth session ID
const MOCK_ANALYST_ID = 'analyst-001';

export type ManualReport = Awaited<ReturnType<typeof getManualReport>>;

export async function createManualReport(data: ManualReportInput) {
  const result = ManualReportSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.errors[0].message };
  }

  try {
    const report = await db.manualInvestigativeReport.create({
      data: {
        ...result.data,
        analystId: MOCK_ANALYST_ID,
      },
    });

    revalidatePath('/dashboard/manual-screening');
    return { success: true, daa: report };
  } catch (error) {
    console.error('Failed to create manual report:', error);
    return { success: false, error: 'Failed to create report' };
  }
}

export async function updateManualReport(id: string, data: Partial<ManualReportInput>) {
  try {
    const report = await db.manualInvestigativeReport.update({
      where: { id },
      data,
    });
    
    revalidatePath('/dashboard/manual-screening');
    revalidatePath(`/dashboard/manual-screening/${id}`);
    return { success: true, data: report };
  } catch (error) {
    console.error('Failed to update manual report:', error);
    return { success: false, error: 'Failed to update report' };
  }
}

export async function getManualReports() {
  try {
    const reports = await db.manualInvestigativeReport.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: reports };
  } catch (error) {
    console.error('Failed to fetch manual reports:', error);
    return { success: false, error: 'Failed to fetch reports' };
  }
}

export async function getManualReport(id: string) {
  try {
    const report = await db.manualInvestigativeReport.findUnique({
      where: { id },
    });
    return report;
  } catch (error) {
    console.error(`Failed to fetch report ${id}:`, error);
    return null;
  }
}
