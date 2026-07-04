"use client";

import DashboardSection from "./dashboard-section";
import { activityTimeline } from "@/data/activity";

export default function ActivityTimeline() {
  return (
    <DashboardSection
      title="Live Activity"
      subtitle="Latest AI and platform events"
    >
      <div className="space-y-5">
        {activityTimeline.map((item) => (
          <div
            key={item.id}
            className="border-l-2 border-blue-500 pl-4"
          >
            <h4 className="font-semibold">
              {item.type}
            </h4>

            <p className="text-sm text-slate-500">
              {item.description}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </DashboardSection>
  );
}