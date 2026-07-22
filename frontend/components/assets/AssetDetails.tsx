"use client";

import {
  Activity,
  BrainCircuit,
  Clock3,
  MapPin,
  Thermometer,
  Wrench,
} from "lucide-react";

export default function AssetDetails() {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Pump A101
          </h2>

          <p className="mt-1 text-slate-500">
            Centrifugal Water Pump
          </p>

        </div>

        <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          Running
        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-50 p-4">

          <Activity className="mb-3 h-5 w-5 text-cyan-600" />

          <p className="text-sm text-slate-500">
            Health Score
          </p>

          <p className="mt-2 text-3xl font-bold text-cyan-700">
            96%
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4">

          <Thermometer className="mb-3 h-5 w-5 text-red-500" />

          <p className="text-sm text-slate-500">
            Temperature
          </p>

          <p className="mt-2 text-3xl font-bold">
            64°C
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4">

          <Clock3 className="mb-3 h-5 w-5 text-indigo-600" />

          <p className="text-sm text-slate-500">
            Operating Hours
          </p>

          <p className="mt-2 text-3xl font-bold">
            842
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4">

          <MapPin className="mb-3 h-5 w-5 text-emerald-600" />

          <p className="text-sm text-slate-500">
            Location
          </p>

          <p className="mt-2 text-lg font-semibold">
            Plant 2
          </p>

        </div>

      </div>

      <div className="mt-8">

        <h3 className="text-lg font-semibold">
          Recent Maintenance
        </h3>

        <div className="mt-4 space-y-3">

          {[
            "Bearing Inspection",
            "Oil Replacement",
            "Seal Replacement",
          ].map((item, index) => (

            <div
              key={item}
              className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
            >

              <div className="rounded-full bg-cyan-100 p-2">

                <Wrench className="h-4 w-4 text-cyan-700" />

              </div>

              <div>

                <p className="font-medium">
                  {item}
                </p>

                <p className="text-sm text-slate-500">
                  {12 - index * 5} July 2026
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-600 py-3 font-medium text-white transition hover:bg-cyan-700">

        <BrainCircuit className="h-5 w-5" />

        Ask AI About This Asset

      </button>

    </div>
  );
}