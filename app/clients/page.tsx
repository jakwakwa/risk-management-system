import { DashboardHeader } from "@/components/dashboard-header";
import { ClientsTable } from "@/components/clients-table";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClientsPage() {
	return (
		<div className="min-h-screen bg-background font-sans font-light">
			<DashboardHeader />
			<main className="container mx-auto p-6">
				<div className="space-y-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-semibold text-sidebar-accent-foreground">
								Client Overview
							</h1>
							<p className="text-sm mt-1 text-sidebar-primary font-normal">
								Monitor all clients and their risk profiles
							</p>
						</div>
						<Button
							className="border-foreground text-card-foreground"
							variant="outline"
							size="sm">
							<Filter className="h-4 w-4 mr-2" />
							Filters
						</Button>
					</div>
					<ClientsTable />
				</div>
			</main>
		</div>
	);
}
