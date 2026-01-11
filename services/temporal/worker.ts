
import { Worker } from '@temporalio/worker';
import * as activities from './activities';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: process.env.CLOUD_TASKS_QUEUE || 'screening-queue', // Reuse var or use specific TEMPORAL_QUEUE
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
