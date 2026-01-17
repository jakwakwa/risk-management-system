"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import {
	Search,
	ArrowUpDown,
	Filter,
	ChevronRight,
	ArrowUp,
	ArrowDown,
} from "lucide-react";

import type { DashboardClient } from "@/app/actions/dashboard";

function getRiskColor(tier: string) {
	switch (tier.toLowerCase()) {
		case "critical":
			return "destructive";
		case "high":
			return "secondary";
		case "medium":
			return "outline";
		case "low":
			return "outline";
		default:
			return "outline";
	}
}

function getRiskScoreColor(score: number) {
	if (score >= 75) return "text-destructive";
	if (score >= 50) return "text-warning";
	return "text-success";
}

interface ClientsTableProps {
	clients: DashboardClient[];
}

export function ClientsTable({ clients }: ClientsTableProps) {
	const [sortConfig, setSortConfig] = useState<{
		key: keyof DashboardClient | null;
		direction: "asc" | "desc";
	}>({ key: null, direction: "asc" });
	const [searchQuery, setSearchQuery] = useState("");

	const requestSort = (key: keyof DashboardClient) => {
		let direction: "asc" | "desc" = "asc";
		if (sortConfig.key === key && sortConfig.direction === "asc") {
			direction = "desc";
		}
		setSortConfig({ key, direction });
	};

	const filteredAndSortedClients = useMemo(() => {
		let items = [...clients];

		// Filter
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			items = items.filter(
				client =>
					client.name.toLowerCase().includes(query) ||
					client.industry.toLowerCase().includes(query)
			);
		}

		// Sort
		if (sortConfig.key) {
			items.sort((a, b) => {
				const aValue = a[sortConfig.key!];
				const bValue = b[sortConfig.key!];

				if (sortConfig.key === "monthlyVolume") {
					// Parse Rxx.xK format for numeric sorting
					const aNum = parseFloat(String(aValue).replace(/[R,K]/g, "")) || 0;
					const bNum = parseFloat(String(bValue).replace(/[R,K]/g, "")) || 0;
					return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
				}

				if (aValue < bValue) {
					return sortConfig.direction === "asc" ? -1 : 1;
				}
				if (aValue > bValue) {
					return sortConfig.direction === "asc" ? 1 : -1;
				}
				return 0;
			});
		}

		return items;
	}, [clients, sortConfig, searchQuery]);

	const getSortIcon = (key: keyof DashboardClient) => {
		if (sortConfig.key !== key) return <ArrowUpDown className="ml-2 h-3 w-3" />;
		return sortConfig.direction === "asc" ? (
			<ArrowUp className="ml-2 h-3 w-3 text-primary" />
		) : (
			<ArrowDown className="ml-2 h-3 w-3 text-primary" />
		);
	};

	return (
		<Card className="p-6 px-[26px] mx-0 rounded-3xl">
			<div className="flex items-center justify-between mb-6">
				<h2 className="font-semibold text-xl leading-[1.15rem] text-left text-muted-foregrund">
					Client Overview
				</h2>
				<div className="flex items-center gap-2">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-chart-2" />
						<Input
							placeholder="Search clients..."
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							className="w-64 pl-10 rounded-xl shadow-md bg-input text-input-foreground"
						/>
					</div>
					<Button
						className="bg-sidebar text-muted-foreground rounded-lg border-none shadow-sm"
						variant="outline"
						size="icon">
						<Filter className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="border-b border-border">
							<th className="pb-3 text-left">
								<Button
									variant="ghost"
									size="sm"
									onClick={() => requestSort("name")}
									className="-ml-3 font-medium text-muted-foreground w-auto border rounded-none px-1 py-0 my-px mx-0 border-none font-sans text-xs h-[19px] text-left">
									Client Name
									{getSortIcon("name")}
								</Button>
							</th>
							<th className="pb-3 text-left">
								<Button
									variant="ghost"
									size="sm"
									onClick={() => requestSort("industry")}
									className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
									Industry
									{getSortIcon("industry")}
								</Button>
							</th>
							<th className="pb-3 text-left">
								<Button
									variant="ghost"
									size="sm"
									onClick={() => requestSort("riskScore")}
									className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
									Risk Score
									{getSortIcon("riskScore")}
								</Button>
							</th>
							<th className="pb-3 text-left">
								<Button
									variant="ghost"
									size="sm"
									onClick={() => requestSort("monthlyVolume")}
									className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
									Monthly Volume
									{getSortIcon("monthlyVolume")}
								</Button>
							</th>
							<th className="pb-3 text-left">
								<Button
									variant="ghost"
									size="sm"
									onClick={() => requestSort("disputeRate")}
									className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
									Dispute Rate
									{getSortIcon("disputeRate")}
								</Button>
							</th>
							<th className="pb-3 text-left">
								<Button
									variant="ghost"
									size="sm"
									onClick={() => requestSort("lastReview")}
									className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
									Last Review
									{getSortIcon("lastReview")}
								</Button>
							</th>
							<th className="pb-3"></th>
						</tr>
					</thead>
					<tbody>
						{filteredAndSortedClients.map(client => (
							<tr
								key={client.id}
								className="border-b border-border hover:bg-accent/50 transition-colors cursor-pointer">
								<td className="p-4">
									<div>
										<p className="font-medium text-muted-foreground text-xs">
											{client.name}
										</p>
										<Badge
											variant={getRiskColor(client.riskTier)}
											className="bg-card text-sidebar-ring border-input rounded-3xl py-0 mt-1.5 text-xs text-center leading-4">
											{client.riskTier}
										</Badge>
									</div>
								</td>
								<td className="py-4 text-xs">
									<p className="text-muted-foreground text-xs">{client.industry}</p>
								</td>
								<td className="py-4">
									<div className="flex items-center gap-2">
										<span
											className={`font-semibold text-[rgba(50,155,130,1)] text-xs ${getRiskScoreColor(client.riskScore)}`}>
											{client.riskScore}
										</span>
										<div className="h-1.5 w-16 rounded-full overflow-hidden bg-[rgba(235,233,231,1)]">
											<div
												className={`h-full text-[rgba(247,134,63,1)] ${
													client.riskScore >= 75
														? "bg-destructive"
														: client.riskScore >= 50
															? "bg-warning"
															: "bg-success"
												}`}
												style={{ width: `${client.riskScore}%` }}
											/>
										</div>
									</div>
								</td>
								<td className="py-4">
									<p className="text-sm text-foreground font-medium text-center">
										{client.monthlyVolume}
									</p>
								</td>
								<td className="py-4">
									<p
										className={`text-sm ${
											client.disputeRate > 5
												? "text-destructive font-semibold"
												: client.disputeRate > 2
													? "text-warning"
													: "text-muted-foreground"
										}`}>
										{client.disputeRate}%
									</p>
								</td>
								<td className="py-4">
									<p className="text-muted-foreground text-xs">{client.lastReview}</p>
								</td>
								<td className="py-4">
									<Button variant="ghost" size="icon" className="h-8 w-8">
										<ChevronRight className="h-4 w-4" />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
				<p className="text-sm text-foreground-muted/30">
					Showing {filteredAndSortedClients.length} of {clients.length} clients
				</p>
				<div className="flex items-center gap-2">
					<Button className="bg-card" variant="outline" size="sm">
						Previous
					</Button>
					<Button
						className="bg-primary text-primary-foreground rounded-lg"
						variant="outline"
						size="sm">
						Next
					</Button>
				</div>
			</div>
		</Card>
	);
}
