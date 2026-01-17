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
        <h1 className="text-3xl font-bold text-chart-1 tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </div>
      {children && (
        <div className="flex items-center gap-3">
          {children}
        </div>
      )}
    </div>
  );
}
