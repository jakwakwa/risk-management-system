"use client";

import { Search, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardHeader() {
	return (
		<header className="border-b border-border bg-accent-foreground">
			<div className="container mx-auto flex h-16 items-center justify-between px-6 text-secondary">
				<div className="flex items-center gap-8 text-background">
					<h1 className="text-xl font-semibold text-card">StratCol Risk</h1>
					<nav className="hidden md:flex items-center gap-6">
						<a href="/" className="text-sm font-medium text-primary">
							Overview
						</a>
						<a href="/clients" className="text-sm hover:text-foreground text-secondary">
							Clients
						</a>
						<a href="/analytics" className="text-sm hover:text-foreground text-secondary">
							Analytics
						</a>
						<a href="/reports" className="text-sm hover:text-foreground text-secondary">
							Reports
						</a>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<div className="relative hidden lg:block">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<Input placeholder="Search clients..." className="w-80 pl-10 bg-background" />
					</div>
					<Button variant="ghost" size="icon">
						<Bell className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon">
						<Settings className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</header>
	);
}
