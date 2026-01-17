import { bqClient, BQ_TABLES } from "./lib/bigquery";

async function testBQ() {
  try {
    console.log("Fetching clients from BQ...");
    const [clients] = await bqClient.query({
      query: `SELECT * FROM \`${BQ_TABLES.CLIENTS}\` LIMIT 10`
    });
    console.log("Clients count:", clients.length);
    console.log(JSON.stringify(clients, null, 2));

    console.log("\nFetching risk profiles from BQ...");
    const [profiles] = await bqClient.query({
      query: `SELECT * FROM \`${BQ_TABLES.RISK_PROFILE}\` LIMIT 10`
    });
    console.log("Profiles count:", profiles.length);
    console.log(JSON.stringify(profiles, null, 2));
  } catch (error) {
    console.error("BQ Error:", error);
  }
}

testBQ();
