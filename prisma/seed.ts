import 'dotenv/config'
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/client';

const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Start seeding...')
  
  // Seed high-priority watch list clients
  const watchListClients = [
    { name: 'Emerald Life', priority: 'CRITICAL', notes: 'Immediate analysis required - amalgamation/operational risk' },
    { name: 'One Life', priority: 'CRITICAL', notes: 'Immediate analysis required - amalgamation/operational risk' },
    { name: 'Prosperity', priority: 'CRITICAL', notes: 'Immediate analysis required - amalgamation/operational risk' },
    { name: 'Legacy', priority: 'CRITICAL', notes: 'Immediate analysis required - amalgamation/operational risk' },
  ];

  for (const client of watchListClients) {
    const result = await prisma.watchListClient.upsert({
      where: { id: `seed-wl-${client.name.toLowerCase().replace(/\s+/g, '-')}` },
      update: { priority: client.priority, notes: client.notes },
      create: {
        id: `seed-wl-${client.name.toLowerCase().replace(/\s+/g, '-')}`,
        name: client.name,
        priority: client.priority,
        notes: client.notes,
      },
    });
    console.log(`Seeded watch list client: ${result.name}`);
  }

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
