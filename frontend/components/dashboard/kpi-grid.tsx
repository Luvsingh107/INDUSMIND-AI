import KPICard from "./kpi-card";
import { dashboardStats } from "@/data/dashboard";

export default function KPIGrid() {
  return (
    <section
      className="
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-4
      "
    >
      {dashboardStats.map((item) => (
        <KPICard
          key={item.title}
          {...item}
        />
      ))}
    </section>
  );
}