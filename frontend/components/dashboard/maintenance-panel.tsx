import DashboardSection from "./dashboard-section";
import { maintenanceSchedule } from "@/data/maintenance";
import { Badge } from "@/components/ui/badge";

export default function MaintenancePanel() {
  return (
    <DashboardSection
      title="Upcoming Maintenance"
      subtitle="Scheduled preventive maintenance"
    >
      <div className="space-y-4">
        {maintenanceSchedule.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <h4 className="font-medium">{item.asset}</h4>

              <p className="text-sm text-slate-500">
                {item.date}
              </p>
            </div>

            <Badge>{item.priority}</Badge>
          </div>
        ))}
      </div>
    </DashboardSection>
  );
}