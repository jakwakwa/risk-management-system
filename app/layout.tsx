import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, BarChart3, Calendar, FileText, Settings, LayoutDashboard } from 'lucide-react';

import { Analytics } from "@vercel/analytics/next";
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
	params: any; // Fix for Next.js generic type issue if needed
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`font-sans antialiased`} suppressHydrationWarning>
                <div className="min-h-screen bg-background flex">
                    {/* Sidebar */}
                    <aside className="w-64 border-r bg-muted/40 hidden md:block">
                        <div className="flex flex-col h-full">
                            <div className="h-14 flex items-center px-4 border-b">
                                <ShieldCheck className="w-6 h-6 mr-2 text-primary" />
                                <span className="font-bold text-lg">RiskEngine</span>
                            </div>
                            
                            <nav className="flex-1 p-4 space-y-1">
                                <Link href="/dashboard">
                                    <Button variant="ghost" className="w-full justify-start">
                                        <LayoutDashboard className="w-4 h-4 mr-2" />
                                        Dashboard
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
				<Analytics />
			</body>
			<Script
				id="chatbase-embed"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="GwRRQVQ2Lm-Cu3QTcpC-1";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
				}}
			/>
		</html>
	);
}
