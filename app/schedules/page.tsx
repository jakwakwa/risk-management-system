
import { getMonitoringJobs, createMonitoringJob, deleteMonitoringJob, createSystemJob } from '../actions/scheduler';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CronPicker } from '@/components/scheduler/cron-picker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function SchedulesPage() {
  const userId = 'user_123'; 
  // Fetch all jobs (including system jobs)
  const jobs = await getMonitoringJobs(userId);
  
  const systemJobs = jobs.filter(j => j.type !== 'CLIENT_MONITORING');
  const clientJobs = jobs.filter(j => j.type === 'CLIENT_MONITORING');

  async function createClientJob(formData: FormData) {
    'use server';
    const clientName = formData.get('clientName') as string;
    const cron = formData.get('cron') as string;
    const userId = 'user_123';
    await createMonitoringJob({ clientName, cronExpression: cron, userId });
  }

  async function createEtlJob() {
      'use server';
      await createSystemJob({ type: 'SYSTEM_ETL', cronExpression: '0 2 * * *' }); // 2am Default
  }

  async function createInferenceJob() {
      'use server';
      await createSystemJob({ type: 'SYSTEM_INFERENCE', cronExpression: '0 6 * * *' }); // 6am Default
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
           <p className="text-muted-foreground mt-2">Manage automated risk screening and system pipelines.</p>
        </div>
      </div>

      <Tabs defaultValue="clients" className="space-y-4">
        <TabsList>
            <TabsTrigger value="clients">Client Monitoring</TabsTrigger>
            <TabsTrigger value="system">System Pipelines</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-4">
            <div className="grid gap-8 md:grid-cols-3">
                <Card className="md:col-span-1 h-fit">
                    <CardHeader>
                        <CardTitle>Monitor Client</CardTitle>
                        <CardDescription>Add a new client to the screening rotation.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={createClientJob} className="space-y-4">
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
                        <CardTitle>Active Client Schedules</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Client Name</TableHead>
                                    <TableHead>Schedule (Cron)</TableHead>
                                    <TableHead>Next Run</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {clientJobs.map((job) => (
                                    <TableRow key={job.id}>
                                        <TableCell className="font-medium">{job.clientName}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="font-mono">
                                                {job.cronExpression}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">
                                            {job.nextRunAt?.toLocaleDateString()}
                                        </TableCell>
                                        <TableCell>
                                            <form action={deleteJob}>
                                                <input type="hidden" name="jobId" value={job.id} />
                                                <Button variant="destructive" size="sm" type="submit">Delete</Button>
                                            </form>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {clientJobs.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                                            No client schedules found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-slate-50 border-dashed border-2">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Quick Action</CardTitle>
                        <CardDescription className="text-lg font-semibold text-slate-900">Add Data Pipeline</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={createEtlJob}>
                             <Button variant="secondary" className="w-full">Enable Daily ETL (2am)</Button>
                        </form>
                    </CardContent>
                </Card>

                <Card className="bg-slate-50 border-dashed border-2">
                    <CardHeader className="pb-3">
                         <CardTitle className="text-sm font-medium text-muted-foreground">Quick Action</CardTitle>
                         <CardDescription className="text-lg font-semibold text-slate-900">Add Inference Batch</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <form action={createInferenceJob}>
                             <Button variant="secondary" className="w-full">Enable Daily Inference (6am)</Button>
                         </form>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>System Job Schedules</CardTitle>
                    <CardDescription>Automated maintenance and intelligence pipelines.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Job Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Schedule (Cron)</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {systemJobs.map((job) => (
                                <TableRow key={job.id}>
                                    <TableCell className="font-medium">{job.clientName}</TableCell>
                                    <TableCell>
                                        <Badge>{job.type}</Badge>
                                    </TableCell>
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
                            {systemJobs.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                                        No system jobs active.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
