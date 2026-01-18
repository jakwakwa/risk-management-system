"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { deleteJobAction } from "./actions";

const initialState = {
	message: "",
	success: false,
};

export function DeleteJobButton({ jobId, label }: { jobId: string; label: string }) {
	const [state, formAction, isPending] = useActionState(deleteJobAction, initialState);

	useEffect(() => {
		if (state.success) {
			toast.success(state.message);
		} else if (state.message) {
			toast.error(state.message);
		}
	}, [state]);

	return (
		<form action={formAction}>
			<input type="hidden" name="jobId" value={jobId} />
			<Button variant="destructive" size="sm" type="submit" disabled={isPending}>
				{isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : label}
			</Button>
		</form>
	);
}
