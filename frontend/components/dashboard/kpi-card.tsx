"use client";

import { Activity, Brain, ShieldCheck, TriangleAlert } from "lucide-react";
import { DashboardStat } from "@/types/dashboard";

type Props = DashboardStat;

const icons = {
  activity: Activity,
  brain: Brain,
  shield: ShieldCheck,
  alert: TriangleAlert,
};

export default function KPICard({
  title,
  value,
  suffix,
  trend,
  description,
  icon,
}: Props) {
  const Icon = icons[icon];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
            {suffix}
          </h2>

          <p className="mt-1 text-sm text-emerald-600">
            {trend}
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}