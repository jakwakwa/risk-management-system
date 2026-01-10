
'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function getSystemConfig() {
    let config = await db.systemConfig.findUnique({
        where: { key: 'ENGINE_SETTINGS' }
    });

    if (!config) {
        config = await db.systemConfig.create({
            data: { key: 'ENGINE_SETTINGS' }
        });
    }

    return config;
}

export async function updateSystemConfig(formData: FormData) {
    const fuzzyThreshold = parseFloat(formData.get('fuzzyThreshold') as string);
    const phoneticAlgorithm = formData.get('phoneticAlgorithm') as string;
    const semanticContext = formData.get('semanticContext') as string;

    await db.systemConfig.update({
        where: { key: 'ENGINE_SETTINGS' },
        data: {
            fuzzyThreshold,
            phoneticAlgorithm,
            semanticContext
        }
    });

    revalidatePath('/settings');
}
