"use client";

import {
  Activity,
  CheckCircle2,
  Database,
  Cpu,
  Server,
  HardDrive,
  BrainCircuit,
} from "lucide-react";
import SectionCard from "./SectionCard";

const services = [
  {
    name: "FastAPI Backend",
    status: "Healthy",
    latency: "42 ms",
    icon: <Server className="h-5 w-5 text-blue-600" />,
  },
  {
    name: "ChromaDB",
    status: "Connected",
    latency: "18 ms",
    icon: <Database className="h-5 w-5 text-violet-600" />,
  },
  {
    name: "Embedding Engine",
    status: "Active",
    latency: "31 ms",
    icon: <BrainCircuit className="h-5 w-5 text-indigo-600" />,
  },
  {
    name: "OpenRouter",
    status: "Connected",
    latency: "620 ms",
    icon: <Cpu className="h-5 w-5 text-emerald-600" />,
  },
];

export default function DiagnosticsCard() {
  return (
    <SectionCard
      title="System Diagnostics"
      description="Monitor the health of every component powering INDUSMIND AI."
      icon={<Activity className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-5">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                {service.icon}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Response Time: {service.latency}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-4 w-4" />
              {service.status}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="rounded-2xl border bg-slate-50 p-4">
            <HardDrive className="mb-3 h-5 w-5 text-blue-600" />

            <p className="text-sm text-slate-500">
              Storage
            </p>

            <p className="mt-1 text-2xl font-bold">
              84 MB
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Used by vectors
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-4">
            <Database className="mb-3 h-5 w-5 text-violet-600" />

            <p className="text-sm text-slate-500">
              Documents
            </p>

            <p className="mt-1 text-2xl font-bold">
              43
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Indexed
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-4">
            <Activity className="mb-3 h-5 w-5 text-green-600" />

            <p className="text-sm text-slate-500">
              Uptime
            </p>

            <p className="mt-1 text-2xl font-bold">
              99.9%
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Last 30 days
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}