import { Connection, Client } from '@temporalio/client';
import 'dotenv/config';

async function run() {
  const connection = await Connection.connect({ address: 'localhost:7233' });
  const client = new Client({ connection });

  const handle = await client.workflow.start('runAnomalyAnalysisWorkflow', {
    taskQueue: process.env.CLOUD_TASKS_QUEUE || 'screening-queue',
    workflowId: `manual-test-${Date.now()}`,
    args: [],
  });
  console.log(`Started workflow ${handle.workflowId}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
