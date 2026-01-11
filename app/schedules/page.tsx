
import { getMonitoringJobs, createMonitoringJob, deleteMonitoringJob } from '../actions/scheduler';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { redirect } from 'next/navigation';
import { CronPicker } from '@/components/scheduler/cron-picker';
export default async function SchedulesPage() {
  // Mock User ID for now since auth isn't fully set up in the context provided
  const userId = 'user_123'; 
  const jobs = await getMonitoringJobs(userId);

  async function create(formData: FormData) {
    'use server';
    const clientName = formData.get('clientName') as string;
    const cron = formData.get('cron') as string;
    const userId = 'user_123';
    await createMonitoringJob({ clientName, cronExpression: cron, userId });
  }

  async function deleteJob(formData: FormData) {
      'use server';
      const jobId = formData.get('jobId') as string;
      await deleteMonitoringJob(jobId);
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-3xl font-bold tracking-tight">Schedule Manager</h1>
           <p className="text-muted-foreground mt-2">Manage automated risk screening schedules.</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-1 h-fit">
            <CardHeader>
                <CardTitle>Create Schedule</CardTitle>
                <CardDescription>Add a new client to the screening rotation.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={create} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="clientName">Client Name</Label>
                        <Input id="clientName" name="clientName" placeholder="e.g. Acme Corp" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="cron">Schedule</Label>
                        <CronPicker name="cron" defaultValue="0 0 * * *" />
                    </div>
                    <Button type="submit" className="w-full">Create Schedule</Button>
                </form>
            </CardContent>
        </Card>

        <Card className="md:col-span-2">
            <CardHeader>
                <CardTitle>Active Schedules</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client Name</TableHead>
                            <TableHead>Schedule (Cron)</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {jobs.map((job) => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">{job.clientName}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="font-mono">
                                        {job.cronExpression}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <form action={deleteJob}>
                                        <input type="hidden" name="jobId" value={job.id} />
                                        <Button variant="destructive" size="sm" type="submit">Delete</Button>
                                    </form>
                                </TableCell>
                            </TableRow>
                        ))}
                        {jobs.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-6 text-muted-foreground">
                                    No active schedules found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
