import type { ReactNode } from "react";

interface SectionHeaderProps {
	title: string;
	description?: string;
	children?: ReactNode;
}

export function SectionHeader({ title, description, children }: SectionHeaderProps) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="bg-linear-to-r from-chart-6 via-chart-7 to-chart-8 text-transparent bg-clip-text font-extrabold text-4xl filter drop-shadow-[2px_5px_3px_rgba(0,0,0,0.3)]">
					{title}
				</h1>
				{description && <p className="text-white/50 mt-1">{description}</p>}
			</div>
			{children && <div className="flex items-center gap-3">{children}</div>}
		</div>
	);
}
