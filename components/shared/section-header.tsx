import type { ReactNode } from "react";

interface SectionHeaderProps {
	title: string;
	description?: string;
	children?: ReactNode;
	position?: "left" | "center";
}

export function SectionHeader({
	title,
	description,
	children,
	position = "left",
}: SectionHeaderProps) {
	return (
		<div
			className={`flex items-center justify-between w-full ${position === "center" ? "justify-center" : ""}`}>
			<div className={position === "center" ? "text-center" : ""}>
				<h1 className="bg-linear-to-r from-chart-6 via-chart-7 to-chart-8 text-transparent bg-clip-text font-extrabold text-4xl filter drop-shadow-[2px_3px_1px_rgba(0,0,0,0.1)]">
					{title}
				</h1>
				{description && <p className="text-foreground/50 mt-1">{description}</p>}
			</div>
			{children && <div className="flex items-center gap-3">{children}</div>}
		</div>
	);
}
