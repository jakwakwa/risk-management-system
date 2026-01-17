
import { getSystemConfig, updateSystemConfig } from '../actions/config';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageContainer } from '@/components/shared/page-container';
import { SectionHeader } from '@/components/shared/section-header';
import { settingsContent } from './content';

export default async function SettingsPage() {
  const config = await getSystemConfig();
  const { header, matchingCard } = settingsContent;
  const { form } = matchingCard;

  return (
    <PageContainer>
      <SectionHeader
        title={header.title}
        description={header.description}
      />

      <Card className="max-w-2xl">
        <CardHeader>
            <CardTitle>{matchingCard.title}</CardTitle>
            <CardDescription>{matchingCard.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <form action={updateSystemConfig} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="fuzzyThreshold">{form.fuzzyThreshold.label}</Label>
                    <Input 
                        id="fuzzyThreshold" 
                        name="fuzzyThreshold" 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        max="1" 
                        defaultValue={config.fuzzyThreshold} 
                        required 
                    />
                    <p className="text-xs text-muted-foreground">
                        {form.fuzzyThreshold.helpText}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phoneticAlgorithm">{form.phoneticAlgorithm.label}</Label>
                    <Select name="phoneticAlgorithm" defaultValue={config.phoneticAlgorithm}>
                        <SelectTrigger>
                            <SelectValue placeholder={form.phoneticAlgorithm.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="BMPM">{form.phoneticAlgorithm.options.bmpm}</SelectItem>
                            <SelectItem value="DoubleMetaphone">{form.phoneticAlgorithm.options.doubleMetaphone}</SelectItem>
                            <SelectItem value="Soundex">{form.phoneticAlgorithm.options.soundex}</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                        {form.phoneticAlgorithm.helpText}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="semanticContext">{form.semanticContext.label}</Label>
                    <Input 
                        id="semanticContext" 
                        name="semanticContext" 
                        placeholder={form.semanticContext.placeholder}
                        defaultValue={config.semanticContext || ''} 
                    />
                    <p className="text-xs text-muted-foreground">
                        {form.semanticContext.helpText}
                    </p>
                </div>

                <Button type="submit">{form.submitButton}</Button>
            </form>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
