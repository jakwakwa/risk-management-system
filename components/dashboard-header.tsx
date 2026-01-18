"use client";

import {
	Search,
	Settings,
	Calendar,
	ClipboardList,
	FileText,
	HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { NotificationBell } from "./dashboard/notification-bell";

export function DashboardHeader() {
	return (
		<header className="border-b border-border dark:bg-card/80 bg-black/80 shadow-md fixed z-2 backdrop-blur-2xl w-screen">
			<div className=" mx-auto flex h-16 items-center justify-between px-6 text-secondary">
				<div className="flex items-center gap-2 text-background">
					<nav className="hidden md:flex items-center gap-2">
						<Link href="/" className="text-sm font-medium text-primary">
							<Button variant="ghost" className="w-full justify-start">
								<HomeIcon className="w-4 h-4 mr-2" />
								Dashboard
							</Button>
						</Link>
						{/* <Link
							href="/clients"
							className="text-sm hover:text-foreground text-secondary">
							Clients
						</Link> */}
						{/* <Link
							href="/analytics"
							className="text-sm hover:text-foreground text-secondary">
							Analytics
						</Link> */}

						<Link href="/dashboard/manual-screening">
							<Button variant="ghost" className="w-full justify-start">
								<ClipboardList className="w-4 h-4 mr-2" />
								Screening
							</Button>
						</Link>
						<Link href="/schedules">
							<Button variant="ghost" className="w-full justify-start">
								<Calendar className="w-4 h-4 mr-2" />
								Schedules
							</Button>
						</Link>
						<Link href="/reports">
							<Button variant="ghost" className="w-full justify-start">
								<FileText className="w-4 h-4 mr-2" />
								Reports
							</Button>
						</Link>
						<Link href="/settings">
							<Button variant="ghost" className="w-full justify-start">
								<Settings className="w-4 h-4 mr-2" />
								Engine Tuning
							</Button>
						</Link>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<div className="relative hidden lg:block">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<Input placeholder="Search clients..." className="w-80 pl-10 bg-background" />
					</div>
					<NotificationBell />

					<Button variant="ghost" size="icon">
						<Settings className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</header>
	);
}
