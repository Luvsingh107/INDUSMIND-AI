import { ReactNode } from "react";

interface Props {
  hero: ReactNode;
  kpis: ReactNode;
  children: ReactNode;
}

export default function DashboardLayout({
  hero,
  kpis,
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {hero}

      {kpis}

      <div className="grid gap-6 lg:grid-cols-2">
        {children}
      </div>

    </div>
  );
}