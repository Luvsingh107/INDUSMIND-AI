interface DashboardLayoutProps {
  hero: React.ReactNode;
  kpis: React.ReactNode;
  children?: React.ReactNode;
}

export default function DashboardLayout({
  hero,
  kpis,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="space-y-8">

      {hero}

      {kpis}

      {children}

    </div>
  );
}