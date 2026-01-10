
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

export default async function SettingsPage() {
  const config = await getSystemConfig();

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Engine Tuning</h1>
        <p className="text-muted-foreground mt-2">Configure matching algorithms and risk thresholds.</p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
            <CardTitle>Matching Parameters</CardTitle>
            <CardDescription>Adjust how the engine identifies potential risks.</CardDescription>
        </CardHeader>
        <CardContent>
            <form action={updateSystemConfig} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="fuzzyThreshold">Fuzzy Match Threshold (0.0 - 1.0)</Label>
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
                        Higher values require closer spelling matches. Recommended: 0.7
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phoneticAlgorithm">Phonetic Algorithm</Label>
                    <Select name="phoneticAlgorithm" defaultValue={config.phoneticAlgorithm}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select algorithm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="BMPM">Beider-Morse (BMPM) - Recommended</SelectItem>
                            <SelectItem value="DoubleMetaphone">Double Metaphone</SelectItem>
                            <SelectItem value="Soundex">Soundex (Legacy)</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                        Algorithm used to index names by sound. BMPM is superior for non-English names.
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="semanticContext">Semantic Context</Label>
                    <Input 
                        id="semanticContext" 
                        name="semanticContext" 
                        placeholder="e.g. Finance, Banking, AML" 
                        defaultValue={config.semanticContext || ''} 
                    />
                    <p className="text-xs text-muted-foreground">
                        Optional context prompt injected into Vector Search embeddings.
                    </p>
                </div>

                <Button type="submit">Save Configuration</Button>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
