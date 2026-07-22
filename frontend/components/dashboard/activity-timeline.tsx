"use client";

import { useEffect } from "react";

import DashboardSection from "./dashboard-section";
import { useActivityStore } from "@/stores/activity-store";

export default function ActivityTimeline() {
  const {
    activities,
    addActivity,
    clearActivities,
  } = useActivityStore();

  useEffect(() => {
    if (activities.length === 0) {
      addActivity({
        type: "System",
        description: "INDUSMIND AI initialized successfully.",
      });
    }
  }, [activities.length, addActivity]);

  return (
    <DashboardSection
      title="Live AI Activity"
      subtitle="Real-time events across the INDUSMIND AI platform"
    >
      <div className="mb-4 flex justify-end">
        <button
          onClick={clearActivities}
          className="rounded-lg border px-3 py-2 text-sm transition hover:bg-slate-100"
        >
          Clear Timeline
        </button>
      </div>

      <div className="space-y-5">
        {activities.length === 0 ? (
          <div className="rounded-xl border border-dashed p-6 text-center text-slate-500">
            Waiting for activity...
          </div>
        ) : (
          activities.map((item) => (
            <div
              key={item.id}
              className="relative border-l-2 border-blue-500 pl-5"
            >
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600" />

              <h4 className="font-semibold">
                {item.type}
              </h4>

              <p className="mt-1 text-sm text-slate-600">
                {item.description}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {item.time}
              </p>
            </div>
          ))
        )}
      </div>
    </DashboardSection>
  );
}