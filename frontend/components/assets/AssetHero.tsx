"use client";

import {
  Factory,
  ShieldCheck,
  Activity,
  Cpu,
} from "lucide-react";

export default function AssetHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-sm">

      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">

            <Factory className="h-4 w-4" />

            Digital Twin Explorer

          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">

            Monitor Industrial Assets

          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            Visualize asset health, inspect operational status,
            review maintenance history and interact with every
            machine through AI-powered insights.

          </p>

        </div>

        <div className="grid w-full max-w-md gap-4">

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <div className="text-sm text-slate-500">
                  Plant Health
                </div>

                <div className="mt-2 text-4xl font-bold text-cyan-700">
                  94%
                </div>

              </div>

              <ShieldCheck className="h-12 w-12 text-cyan-600" />

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl border bg-white p-4">

              <div className="text-sm text-slate-500">
                Running
              </div>

              <div className="mt-2 flex items-center gap-2">

                <Activity className="h-5 w-5 text-green-600" />

                <span className="text-2xl font-bold">
                  129
                </span>

              </div>

            </div>

            <div className="rounded-xl border bg-white p-4">

              <div className="text-sm text-slate-500">
                AI Monitoring
              </div>

              <div className="mt-2 flex items-center gap-2">

                <Cpu className="h-5 w-5 text-blue-600" />

                <span className="text-lg font-bold">
                  Active
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}