import type React from "react";
import type { Metadata } from "next";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Calendar, FileText, Settings, LayoutDashboard, ClipboardList } from 'lucide-react';

import "./globals.css";

import {
	Inter as V0_Font_Inter,
	Geist_Mono as V0_Font_Geist_Mono,
} from "next/font/google";

// Initialize fonts
const _inter = V0_Font_Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const _geistMono = V0_Font_Geist_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "StratCol Risk Management",
	description: "Client risk monitoring and operational analytics dashboard",
	generator: "v0.app",
	icons: {
		icon: [
			{
				url: "/icon-light-32x32.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon-dark-32x32.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
};

import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
	// biome-ignore lint/suspicious/noExplicitAny: <any>
	params: any;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`font-sans antialiased`} suppressHydrationWarning> 
                <div className="min-h-screen bg-background flex">
                    {/* Sidebar */}
                    <aside className="w-64 border-r bg-muted/80 hidden md:block">
                        <div className="flex flex-col h-full">
                            <div className="h-14 flex items-center px-4 border-b">
                                <ShieldCheck className="w-6 h-6 mr-2 text-chart-1" />
                                <span className="font-bold text-lg text-stone-100">SC RiskEngine</span>
                            </div>
                            
                            <nav className="flex-1 p-4 space-y-1">
                                <Link href="/dashboard">
                                    <Button variant="ghost" className="w-full justify-start">
                                        <LayoutDashboard className="w-4 h-4 mr-2" />
                                        Dashboard
                                    </Button>
                                </Link>
                                <Link href="/dashboard/manual-screening">
                                    <Button variant="ghost" className="w-full justify-start">
                                        <ClipboardList className="w-4 h-4 mr-2" />
                                        Manual Screening
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

                            <div className="p-4 border-t">
                                <div className="text-xs text-muted-foreground">
                                    v1.0.0 (Temporal + Blind Index)
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 overflow-auto">
                        {children}
                    </main>
                </div>
                <Toaster />
			</body>
			
		</html>
	);
}
