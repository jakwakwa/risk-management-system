import 'dotenv/config';
import { Worker } from '@temporalio/worker';
import * as activities from './activities';
import * as dataPipelineActivities from './data-pipeline-activities'; // <--- NEW IMPORT

async function run() {
  const worker = await Worker.create({
    workflowsPath: new URL('./workflows.ts', import.meta.url).pathname,
    activities: {
      ...activities,
      ...dataPipelineActivities, // <--- REGISTER NEW ACTIVITIES
    },
    taskQueue: process.env.CLOUD_TASKS_QUEUE || 'screening-queue',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
