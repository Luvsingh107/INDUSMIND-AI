import AppShell from "@/components/layout/app-shell";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import Hero from "@/components/dashboard/hero";
import KPIGrid from "@/components/dashboard/kpi-grid";

export default function HomePage() {
  return (
    <AppShell>
      <DashboardLayout
        hero={<Hero />}
        kpis={<KPIGrid />}
      >
      </DashboardLayout>
    </AppShell>
  );
}