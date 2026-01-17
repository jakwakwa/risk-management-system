import 'dotenv/config'
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client';
import { encrypt } from './lib/security';

const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seed: Creating risk profiles for Account_X clients...');

  // Match the names found in BQ transactions table
  const accountNames = [
    'Account_1', 'Account_2', 'Account_3', 'Account_4', 'Account_5',
    'Account_6', 'Account_7', 'Account_8', 'Account_9', 'Account_10'
  ];

  // 1. Clear existing client monitoring jobs
  await prisma.monitoringJob.deleteMany({
    where: { type: 'CLIENT_MONITORING' }
  });

  // 2. Create fresh jobs with risk data
  for (const name of accountNames) {
    const encryptedName = encrypt(name);
    
    // Assign some random-ish risk data
    const riskScore = Math.floor(Math.random() * 100);
    const volume = Math.floor(Math.random() * 5000) * 1000;

    await prisma.monitoringJob.create({
      data: {
        clientName: encryptedName,
        type: 'CLIENT_MONITORING',
        cronExpression: '0 0 * * *',
        nextRunAt: new Date(),
        riskProfile: {
          create: {
            riskScore: riskScore,
            avgMonthlyVolume: volume,
            lastAnalysed: new Date(),
            alerts: {
              create: [
                {
                  type: 'AUTO_PROFILE',
                  severity: riskScore > 80 ? 'CRITICAL' : riskScore > 50 ? 'HIGH' : 'MEDIUM',
                  description: `Baseline risk profile generated for ${name}`,
                }
              ]
            }
          }
        }
      }
    });
    console.log(`Created risk profile for ${name}`);
  }

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
