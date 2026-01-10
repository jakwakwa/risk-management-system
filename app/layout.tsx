import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import {
	Geist_Mono,
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
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`} suppressHydrationWarning>
				{children}
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
