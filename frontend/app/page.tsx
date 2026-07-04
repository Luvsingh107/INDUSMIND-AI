import AppShell from "@/components/layout/app-shell";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import Hero from "@/components/dashboard/hero";

export default function HomePage() {
  return (
    <AppShell>
      <DashboardLayout
        hero={<Hero />}
        kpis={<div />}
      >
      </DashboardLayout>
    </AppShell>
  );
}