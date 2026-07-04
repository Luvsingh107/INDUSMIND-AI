import AppShell from "@/components/layout/app-shell";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import Hero from "@/components/dashboard/hero";
import KPIGrid from "@/components/dashboard/kpi-grid";
import RecommendationPanel from "@/components/dashboard/recommendation-panel";
import AlertPanel from "@/components/dashboard/alert-panel";

export default function HomePage() {
  return (
    <AppShell>
      <DashboardLayout
        hero={<Hero />}
        kpis={<KPIGrid />}
      >
        <div className="grid gap-6 xl:grid-cols-2">
          <RecommendationPanel />
          <AlertPanel />
        </div>
      </DashboardLayout>
    </AppShell>
  );
}