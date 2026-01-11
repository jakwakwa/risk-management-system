'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { createTemporalClient } from '@/services/temporal/client'
import { generateBlindIndex, encrypt } from '@/lib/security'

export async function createMonitoringJob(
{ clientName, cronExpression, userId }: { clientName: string; cronExpression: string; userId: string }) {
  // 1. Encrypt and Blind Index
  const encryptedName = encrypt(clientName)
  const blindHashes = generateBlindIndex(clientName)

  // 2. DB Transaction
  const job = await db.$transaction(async (tx) => {
      const j = await tx.monitoringJob.create({
          data: {
              clientName: encryptedName,
              cronExpression,
              nextRunAt: new Date(), // Temporal handles the schedule, this field might be redundant or for UI sorting
              userId
          }
      })

      await tx.blindIndex.createMany({
          data: blindHashes.map(hash => ({
              hash,
              recordId: j.id,
              model: 'MonitoringJob',
              field: 'clientName'
          }))
      })
      
      return j
  })

  // 3. Temporal Schedule
  try {
      const client = await createTemporalClient()
      await client.schedule.create({
          scheduleId: `schedule-${job.id}`,
          spec: {
              cronExpressions: [cronExpression],
              jitter: '1m', // Requirements: "Jitter: Apply randomized delays"
          },
          action: {
              type: 'startWorkflow',
              workflowType: 'RiskScreeningWorkflow',
              args: [job.id],
              taskQueue: process.env.CLOUD_TASKS_QUEUE || 'screening-queue',
          }
      })
  } catch (e) {
      console.error('Failed to create Temporal Schedule:', e)
      // Should we rollback DB? For now, we'll keep it but maybe mark as error.
      // Or just throw to UI.
      throw e
  }

  revalidatePath('/schedules')
  return job
}

export async function getMonitoringJobs(userId: string) {
  // We return the jobs, but names are encrypted.
  // The UI might need to search using Blind Index if we want to filter?
  // Or if we want to display them, we might not be able to decrypt them in bulk quickly/securely if we don't want to expose keys to client.
  // But this is a Server Action. We can decrypt here and send plaintext to the authenticated user.
  
  const jobs = await db.monitoringJob.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })

  // Decrypt for UI
  const { decrypt } = require('../../lib/security')
  return jobs.map(j => {
      try {
          return { ...j, clientName: decrypt(j.clientName) }
      } catch {
          return j // Return as is if decryption fails (e.g. legacy cleartext)
      }
  })
}

export async function deleteMonitoringJob(jobId: string) {
    const client = await createTemporalClient();
    try {
        await client.schedule.getHandle(`schedule-${jobId}`).delete();
    } catch (e) {
        console.warn('Schedule might not exist in Temporal', e);
    }
    
    await db.monitoringJob.delete({ where: { id: jobId } });
    revalidatePath('/schedules');
}
