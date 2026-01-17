'use client';

import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { satToUtc, utcToSat } from '@/lib/cron-utils';

interface CronPickerProps {
  name: string;
  defaultValue?: string; // Expects UTC
}

export function CronPicker({ name, defaultValue = '0 0 * * *' }: CronPickerProps) {
  // We work internally with SAT times for display
  // defaultValue is UTC -> Convert to SAT for initial state
  const satDefault = React.useMemo(() => defaultValue ? utcToSat(defaultValue) : '0 0 * * *', [defaultValue]);

  const [frequency, setFrequency] = React.useState<'daily' | 'weekly' | 'monthly' | 'custom'>('daily');
  const [time, setTime] = React.useState('00:00');
  const [selectedDays, setSelectedDays] = React.useState<number[]>([]);
  const [dayOfMonth, setDayOfMonth] = React.useState<number>(1);
  const [customCron, setCustomCron] = React.useState(satDefault);

  // Parse initial value (SAT)
  React.useEffect(() => {
    // We parse the SAT version to set UI state
    // so the user sees 8:00 if the DB has 6:00 UTC
    const parts = satDefault.split(' ');
    if (parts.length !== 5) {
      setFrequency('custom');
      setCustomCron(satDefault);
      return;
    }

    const [min, hour, dom, month, dow] = parts;

    // Check for Custom
    if (min !== '0' && !min.match(/^\d+$/)) {
         setFrequency('custom');
         setCustomCron(satDefault);
         return;
    }

    // Set Time
    const h = hour.padStart(2, '0');
    const m = min.padStart(2, '0');
    setTime(`${h}:${m}`);

    // Set Frequency
    if (dom === '*' && month === '*' && dow === '*') {
      setFrequency('daily');
    } else if (dom === '*' && month === '*' && dow !== '*') {
      setFrequency('weekly');
      setSelectedDays(dow.split(',').map(Number));
    } else if (dom !== '*' && month === '*' && dow === '*') {
      setFrequency('monthly');
      setDayOfMonth(Number(dom));
    } else {
      setFrequency('custom');
      setCustomCron(satDefault);
    }
  }, [satDefault]);


  // Generate Cron String (SAT)
  const satCronExpression = React.useMemo(() => {
    if (frequency === 'custom') return customCron;

    const [h, m] = time.split(':');
    const minute = Number(m) || 0;
    const hour = Number(h) || 0;

    if (frequency === 'daily') {
      return `${minute} ${hour} * * *`;
    }

    if (frequency === 'weekly') {
      const days = selectedDays.length > 0 ? selectedDays.join(',') : '*';
      return `${minute} ${hour} * * ${days}`;
    }

    if (frequency === 'monthly') {
      return `${minute} ${hour} ${dayOfMonth} * *`;
    }

    return customCron;
  }, [frequency, time, selectedDays, dayOfMonth, customCron]);

  // Final Output: Convert SAT -> UTC
  const utcCronExpression = React.useMemo(() => satToUtc(satCronExpression), [satCronExpression]);

  const toggleDay = (day: number) => {
    setSelectedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day) 
        : [...prev, day].sort()
    );
  };

  const weekDays = [
    { label: 'Sun', value: 0 },
    { label: 'Mon', value: 1 },
    { label: 'Tue', value: 2 },
    { label: 'Wed', value: 3 },
    { label: 'Thu', value: 4 },
    { label: 'Fri', value: 5 },
    { label: 'Sat', value: 6 },
    { label: 'Sun', value: 7 }, // Handle both 0 and 7
  ].filter((v,i,a) => a.findIndex(t=>(t.value === v.value))===i); // Unique

  return (
    <div className="space-y-4 border rounded-md p-4 bg-card text-card-foreground shadow-sm">
      <input type="hidden" name={name} value={utcCronExpression} />
      
      <div className="flex justify-between items-center">
          <Label>Frequency</Label>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Timezone: SAT (UTC+2)</span>
      </div>

      <div className="space-y-2">
        <Select 
            value={frequency} 
            onValueChange={(v: any) => setFrequency(v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="custom">Custom (Advanced)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {frequency !== 'custom' && (
        <div className="space-y-2">
            <Label>Time (SAT)</Label>
            <Input 
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
                className="w-full"
            />
        </div>
      )}

      {frequency === 'weekly' && (
        <div className="space-y-2">
            <Label>Days of Week</Label>
            <div className="flex flex-wrap gap-2">
                {weekDays.filter(d=>d.value!==7).map((day) => (
                    <Button
                        key={day.value}
                        type="button"
                        variant={selectedDays.includes(day.value) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleDay(day.value)}
                        className={cn(
                            "w-10 h-10 p-0 rounded-full",
                            selectedDays.includes(day.value) ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                        )}
                    >
                        {day.label[0]}
                    </Button>
                ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
                Selected: {selectedDays.map(d => weekDays.find(wd => wd.value === d)?.label).join(', ') || 'Every day'}
            </p>
        </div>
      )}

      {frequency === 'monthly' && (
        <div className="space-y-2">
            <Label>Day of Month</Label>
             <Input 
                type="number" 
                min={1} 
                max={31} 
                value={dayOfMonth} 
                onChange={(e) => setDayOfMonth(Math.max(1, Math.min(31, Number(e.target.value))))} 
             />
             <p className="text-xs text-muted-foreground">Run on the {dayOfMonth}{dayOfMonth === 1 ? 'st' : dayOfMonth === 2 ? 'nd' : dayOfMonth === 3 ? 'rd' : 'th'} of every month.</p>
        </div>
      )}

      {frequency === 'custom' && (
        <div className="space-y-2">
            <Label>Cron Expression</Label>
            <Input 
                value={customCron} 
                onChange={(e) => setCustomCron(e.target.value)} 
                placeholder="* * * * *"
            />
            <p className="text-xs text-muted-foreground">Standard 5-part cron syntax (SAT).</p>
        </div>
      )}


    </div>
  );
}
