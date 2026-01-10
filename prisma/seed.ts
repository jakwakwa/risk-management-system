import 'dotenv/config'
import { PrismaClient } from './generated/client.js'
import { PrismaPostgresAdapter } from '@prisma/adapter-ppg'
import pg from 'pg'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPostgresAdapter(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Start seeding...')
  // Example seed logic
  /*
  const job = await prisma.monitoringJob.upsert({
    where: { id: 'seed-job-1' },
    update: {},
    create: {
      id: 'seed-job-1',
      clientName: 'Example Client',
      cronExpression: '0 0 * * *',
      nextRunAt: new Date(),
      userId: 'seed-user-1',
    },
  })
  console.log({ job })
  */
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
