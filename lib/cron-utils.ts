export const SAT_OFFSET = 2; // UTC+2

export function satToUtc(cron: string): string {
    const parts = cron.trim().split(' ');
    if (parts.length !== 5) return cron; // Return invalid/custom as is

    const [minute, hour, dom, month, dow] = parts;

    // Only handle simple numeric hours for now
    if (!/^\d+$/.test(hour) || !/^\d+$/.test(minute)) return cron;

    let h = parseInt(hour, 10);
    let d_dow = dow; // Dow might need shifting

    // Subtract offset
    h -= SAT_OFFSET;

    if (h < 0) {
        h += 24;
        // Day shift logic needed?
        // For "Daily" (* * *), no day shift needed (it runs every day anyway)
        // For "Weekly" (0 6 * * 1), shifting back creates (0 4 * * 1) -> No day shift if simple hour shift
        // WAIT. 1am SAT Mon = 11pm UTC Sun.
        // So YES, day shift is needed for Weekly.
        
        if (dow !== '*') {
            // Handle numeric days 0-6 (Sun-Sat) or 1-7 (Mon-Sun)?
            // Cron usually 0-6, 7 is Sun.
            // Let's assume 0-6 standard.
            const days = dow.split(',').map(d => {
                if (!/^\d+$/.test(d)) return d; // Can't handle ranges/names yet
                let dayVal = parseInt(d, 10);
                dayVal = dayVal - 1;
                if (dayVal < 0) dayVal = 6;
                return dayVal.toString();
            }).join(',');
            d_dow = days;
        }
    }

    return `${minute} ${h} ${dom} ${month} ${d_dow}`;
}

export function utcToSat(cron: string): string {
    const parts = cron.trim().split(' ');
    if (parts.length !== 5) return cron;

    const [minute, hour, dom, month, dow] = parts;

    if (!/^\d+$/.test(hour) || !/^\d+$/.test(minute)) return cron;

    let h = parseInt(hour, 10);
    let d_dow = dow;

    // Add offset
    h += SAT_OFFSET;

    if (h >= 24) {
        h -= 24;
        // Day shift forward
        if (dow !== '*') {
            const days = dow.split(',').map(d => {
                if (!/^\d+$/.test(d)) return d;
                let dayVal = parseInt(d, 10);
                dayVal = dayVal + 1;
                if (dayVal > 6) dayVal = 0;
                return dayVal.toString();
            }).join(',');
            d_dow = days;
        }
    }

    return `${minute} ${h} ${dom} ${month} ${d_dow}`;
}

export function cronToHumanReadable(satCron: string): string {
    const parts = satCron.trim().split(' ');
    if (parts.length !== 5) return satCron;

    const [minute, hour, dom, month, dow] = parts;
    const time = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

    if (dom === '*' && month === '*' && dow === '*') {
        return `Daily at ${time}`;
    }

    if (dom === '*' && month === '*' && dow !== '*') {
        const days = dow.split(',').map(d => {
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            return dayNames[parseInt(d)] || d;
        }).join(', ');
        return `Weekly on ${days} at ${time}`;
    }

    if (dom !== '*' && month === '*' && dow === '*') {
         // handle 1st, 2nd, 3rd, 4th...
         const d = parseInt(dom);
         const suffix = (d === 1 || d === 21 || d === 31) ? 'st' :
                        (d === 2 || d === 22) ? 'nd' :
                        (d === 3 || d === 23) ? 'rd' : 'th';
        return `Monthly on the ${d}${suffix} at ${time}`;
    }

    return satCron; // Custom
}
