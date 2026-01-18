import type React from "react";
import type { Metadata } from "next";

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
import { DashboardHeader } from "@/components/dashboard-header";

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
					{/* Main Content */}
					<main className="flex-1 overflow-auto">
						<DashboardHeader />
						{children}
						<footer className="bg-black/30 h-16 bottom-0">
							<div className="p-4 border-t">
								<div className="text-sm text-white/60">
									v0.0.2 Walking Skeleton (Blind Index)
								</div>
							</div>
						</footer>
					</main>
				</div>
				<Toaster />
			</body>
		</html>
	);
}
