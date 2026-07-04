import AppShell from "@/components/layout/app-shell";

import DashboardLayout from "@/components/dashboard/dashboard-layout";

import Hero from "@/components/dashboard/hero";

import KPIGrid from "@/components/dashboard/kpi-grid";

import RecommendationPanel from "@/components/dashboard/recommendation-panel";

import AlertPanel from "@/components/dashboard/alert-panel";

import RecentDocuments from "@/components/dashboard/recent-documents";

import MaintenancePanel from "@/components/dashboard/maintenance-panel";

export default function HomePage() {
  return (
    <AppShell>
      <DashboardLayout
        hero={<Hero />}
        kpis={<KPIGrid />}
      >
        <>
          <RecommendationPanel />

          <AlertPanel />

          <RecentDocuments />

          <MaintenancePanel />
        </>
      </DashboardLayout>
    </AppShell>
  );
}