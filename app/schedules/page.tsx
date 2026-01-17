
import { getMonitoringJobs, createMonitoringJob, deleteMonitoringJob, createSystemJob, triggerEtlPipeline, getPipelineStatus } from '../actions/scheduler';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CronPicker } from '@/components/scheduler/cron-picker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { utcToSat, cronToHumanReadable } from '@/lib/cron-utils';
import { PageContainer } from '@/components/shared/page-container';
import { SectionHeader } from '@/components/shared/section-header';
import { schedulesContent } from './content';
import { Loader2 } from 'lucide-react';

export default async function SchedulesPage() {
  const userId = 'user_123'; 
  // Fetch jobs and status
  const [jobs, runningWorkflows] = await Promise.all([
      getMonitoringJobs(userId),
      getPipelineStatus()
  ]);
  
  const systemJobs = jobs.filter(j => j.type !== 'CLIENT_MONITORING');
  const clientJobs = jobs.filter(j => j.type === 'CLIENT_MONITORING');

  async function createClientJob(formData: FormData) {
    'use server';
    const clientName = formData.get('clientName') as string;
    const cron = formData.get('cron') as string;
    const userId = 'user_123';
    // Cron is already converted to UTC by CronPicker
    await createMonitoringJob({ clientName, cronExpression: cron, userId });
  }

  async function createEtlJob() {
      'use server';
      // 5am SAT = 3am UTC
      await createSystemJob({ type: 'SYSTEM_ETL', cronExpression: '00 17 * * *' }); 
  }

  async function triggerEtlJob() {
      'use server';
      await triggerEtlPipeline();
  }

  async function createInferenceJob() {
      'use server';
      // 9am SAT = 7am UTC
      await createSystemJob({ type: 'SYSTEM_INFERENCE', cronExpression: '0 7 * * *' }); 
  }

  async function deleteJob(formData: FormData) {
      'use server';
      const jobId = formData.get('jobId') as string;
      await deleteMonitoringJob(jobId);
  }

  const { header, tabs, clients, system } = schedulesContent;

  return (
    <PageContainer>
      <SectionHeader
        title={header.title}
        description={header.description}
      />

      <Tabs defaultValue="clients" className="space-y-4">
        <TabsList>
            <TabsTrigger value="clients">{tabs.clients}</TabsTrigger>
            <TabsTrigger value="system">{tabs.system}</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-4">
            <div className="grid gap-8 md:grid-cols-3">
                <Card className="md:col-span-1 h-fit">
                    <CardHeader>
                        <CardTitle>{clients.createCard.title}</CardTitle>
                        <CardDescription>{clients.createCard.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={createClientJob} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="clientName">{clients.createCard.labels.clientName}</Label>
                                <Input id="clientName" name="clientName" placeholder={clients.createCard.labels.clientNamePlaceholder} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cron">{clients.createCard.labels.schedule}</Label>
                                <CronPicker name="cron" defaultValue="45 14 * * *" /> 
                                 <p className="text-[10px] text-muted-foreground">{clients.createCard.labels.scheduleHelp}</p>
                            </div>
                            <Button type="submit" className="w-full">{clients.createCard.labels.submitButton}</Button>
                        </form>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>{clients.tableCard.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {clients.tableCard.headers.map((header) => (
                                        <TableHead key={header}>{header}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {clientJobs.map((job) => (
                                    <TableRow key={job.id}>
                                        <TableCell className="font-medium">{job.clientName}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <Badge variant="secondary" className="w-fit">
                                                {cronToHumanReadable(utcToSat(job.cronExpression))}
                                            </Badge>
                                        </div>
                                    </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">
                                            {job.nextRunAt?.toLocaleDateString()}
                                        </TableCell>
                                        <TableCell>
                                            <form action={deleteJob}>
                                                <input type="hidden" name="jobId" value={job.id} />
                                                <Button variant="destructive" size="sm" type="submit">{clients.tableCard.deleteButton}</Button>
                                            </form>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {clientJobs.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                                            {clients.tableCard.emptyState}
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
                        <CardTitle className="text-sm font-medium text-muted-foreground">{system.quickActions.etl.label}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-slate-900">{system.quickActions.etl.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <form action={createEtlJob}>
                             <Button variant="secondary" className="w-full">{system.quickActions.etl.button}</Button>
                        </form>
                        <form action={triggerEtlJob}>
                             <Button variant="default" className="w-full">Trigger Pipeline Now</Button>
                        </form>
                        {runningWorkflows.length > 0 && (
                             <div className="flex items-center gap-2 p-2 bg-blue-50 text-blue-700 rounded-md text-sm border border-blue-100">
                                 <Loader2 className="w-4 h-4 animate-spin" />
                                 {runningWorkflows.length} Pipeline(s) Running
                             </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="bg-slate-50 border-dashed border-2">
                    <CardHeader className="pb-3">
                         <CardTitle className="text-sm font-medium text-muted-foreground">{system.quickActions.inference.label}</CardTitle>
                         <CardDescription className="text-lg font-semibold text-slate-900">{system.quickActions.inference.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <form action={createInferenceJob}>
                             <Button variant="secondary" className="w-full">{system.quickActions.inference.button}</Button>
                         </form>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{system.tableCard.title}</CardTitle>
                    <CardDescription>{system.tableCard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {system.tableCard.headers.map((header) => (
                                    <TableHead key={header}>{header}</TableHead>
                                ))}
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
                                        <div className="flex flex-col">
                                            <Badge variant="secondary" className="w-fit">
                                                {cronToHumanReadable(utcToSat(job.cronExpression))}
                                            </Badge>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <form action={deleteJob}>
                                            <input type="hidden" name="jobId" value={job.id} />
                                            <Button variant="destructive" size="sm" type="submit">{system.tableCard.deleteButton}</Button>
                                        </form>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {systemJobs.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                                        {system.tableCard.emptyState}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}

