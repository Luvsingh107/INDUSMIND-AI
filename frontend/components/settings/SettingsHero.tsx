"use client";

import {
  Settings,
  CheckCircle2,
  BrainCircuit,
} from "lucide-react";

export default function SettingsHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-sm">

      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">

            <Settings className="h-4 w-4" />

            AI Administration Console

          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">

            Configure INDUSMIND AI

          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            Manage AI models, monitor system health,
            configure retrieval settings and administer
            your industrial knowledge platform from one place.

          </p>

        </div>

        <div className="grid w-full max-w-md gap-4">

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <div className="text-sm text-slate-500">
                  System Status
                </div>

                <div className="mt-2 flex items-center gap-2">

                  <CheckCircle2 className="h-5 w-5 text-green-600" />

                  <span className="font-semibold text-green-600">
                    Healthy
                  </span>

                </div>

              </div>

              <BrainCircuit className="h-12 w-12 text-blue-600" />

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl border bg-white p-4">

              <div className="text-sm text-slate-500">
                Backend
              </div>

              <div className="mt-2 text-2xl font-bold">
                Online
              </div>

            </div>

            <div className="rounded-xl border bg-white p-4">

              <div className="text-sm text-slate-500">
                AI Engine
              </div>

              <div className="mt-2 text-2xl font-bold">
                Active
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}