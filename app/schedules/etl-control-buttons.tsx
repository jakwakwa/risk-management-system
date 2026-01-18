"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { createSystemJob, triggerEtlPipeline } from "@/app/actions/scheduler";

export function EnableEtlButton({ label }: { label: string }) {
	const [isPending, startTransition] = useTransition();

	const handleClick = () => {
		startTransition(async () => {
			try {
				await createSystemJob({
					type: "SYSTEM_ETL",
					cronExpression: "00 17 * * *", // 5am SAT = 3am UTC (from original file)
				});
				toast.success("Daily ETL Pipeline enabled successfully");
			} catch (error) {
				toast.error("Failed to enable Daily ETL Pipeline");
				console.error(error);
			}
		});
	};

	return (
		<Button
			variant="secondary"
			className="w-full"
			onClick={handleClick}
			disabled={isPending}>
			{isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			{label}
		</Button>
	);
}

export function TriggerEtlButton() {
	const [isPending, startTransition] = useTransition();

	const handleClick = () => {
		startTransition(async () => {
			try {
				const result = await triggerEtlPipeline();
				if (result.success) {
					toast.success("ETL Pipeline triggered successfully");
				} else {
					toast.error(`Failed to trigger ETL Pipeline: ${result.error}`);
				}
			} catch (error) {
				toast.error("Failed to trigger ETL Pipeline");
				console.error(error);
			}
		});
	};

	return (
		<Button
			variant="default"
			className="w-full"
			onClick={handleClick}
			disabled={isPending}>
			{isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			Trigger Pipeline Now
		</Button>
	);
}
