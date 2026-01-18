"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CronPicker } from "@/components/scheduler/cron-picker";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { createClientJobAction } from "./actions"; // We'll create this wrapper

const initialState = {
	message: "",
	success: false,
};

export function CreateJobForm({ content }: { content: any }) {
	const [state, formAction, isPending] = useActionState(
		createClientJobAction,
		initialState
	);

	useEffect(() => {
		if (state.success) {
			toast.success(state.message);
		} else if (state.message) {
			toast.error(state.message);
		}
	}, [state]);

	return (
		<form action={formAction} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="clientName">{content.labels.clientName}</Label>
				<Input
					id="clientName"
					name="clientName"
					placeholder={content.labels.clientNamePlaceholder}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="cron">{content.labels.schedule}</Label>
				<CronPicker name="cron" defaultValue="45 14 * * *" />
				<p className="text-[10px] text-muted-foreground">{content.labels.scheduleHelp}</p>
			</div>
			<Button type="submit" className="w-full" disabled={isPending}>
				{isPending ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Creating...
					</>
				) : (
					content.labels.submitButton
				)}
			</Button>
		</form>
	);
}
