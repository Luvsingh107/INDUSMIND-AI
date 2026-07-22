"use client";

import {
  Activity,
  ArrowRight,
  Clock3,
  Gauge,
  MapPin,
  Wrench,
} from "lucide-react";

type Props = {
  name: string;
  status: "Running" | "Maintenance" | "Critical" | "Offline";
  health: number;
  location: string;
  hours: number;
  temperature: number;
};

export default function AssetCard({
  name,
  status,
  health,
  location,
  hours,
  temperature,
}: Props) {
  const statusStyles = {
    Running: "bg-green-100 text-green-700",
    Maintenance: "bg-amber-100 text-amber-700",
    Critical: "bg-red-100 text-red-700",
    Offline: "bg-slate-200 text-slate-700",
  };

  return (
    <div className="group rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-xl font-semibold text-slate-900">
            {name}
          </h3>

          <div
            className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status]}`}
          >
            {status}
          </div>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-500">
            Health
          </p>

          <h2 className="text-4xl font-bold text-cyan-700">
            {health}%
          </h2>

        </div>

      </div>

      <div className="mt-6 space-y-4">

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-cyan-600"
            style={{ width: `${health}%` }}
          />

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <Clock3 className="h-4 w-4" />

              Operating Hours

            </div>

            <div className="mt-2 text-lg font-semibold">
              {hours} hrs
            </div>

          </div>

          <div className="rounded-xl bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <Gauge className="h-4 w-4" />

              Temperature

            </div>

            <div className="mt-2 text-lg font-semibold">
              {temperature}°C
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <div className="flex items-center gap-2 text-slate-600">

            <MapPin className="h-4 w-4" />

            {location}

          </div>

          <Activity className="h-5 w-5 text-green-600" />

        </div>

      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-5">

        <div className="flex items-center gap-2 text-sm text-slate-500">

          <Wrench className="h-4 w-4" />

          View Digital Twin

        </div>

        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

      </div>

    </div>
  );
}