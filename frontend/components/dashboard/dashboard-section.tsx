import { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function DashboardSection({
  title,
  subtitle,
  children,
}: DashboardSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b px-6 py-4">

        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}

      </div>

      <div className="p-6">
        {children}
      </div>

    </section>
  );
}