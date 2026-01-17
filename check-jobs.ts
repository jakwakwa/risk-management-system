import { db } from "./lib/db";

async function checkJobs() {
  const jobs = await db.monitoringJob.findMany();
  console.log("Total Jobs:", jobs.length);
  console.log(JSON.stringify(jobs, null, 2));
}

checkJobs().catch(console.error);
