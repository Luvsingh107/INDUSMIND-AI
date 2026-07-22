"use client";

import { BrainCircuit, TriangleAlert } from "lucide-react";

export default function AssetRecommendation() {
  return (
    <div className="rounded-3xl border bg-gradient-to-br from-cyan-50 to-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <BrainCircuit className="h-8 w-8 text-cyan-600" />

        <div>

          <h3 className="text-xl font-semibold">
            AI Recommendation
          </h3>

          <p className="text-sm text-slate-500">
            Generated from maintenance history and asset knowledge.
          </p>

        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">

        <div className="flex items-start gap-3">

          <TriangleAlert className="mt-1 h-5 w-5 text-amber-600" />

          <div>

            <p className="font-medium text-slate-800">
              Vibration trend is gradually increasing.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Schedule a bearing inspection within the next
              14 operating days to reduce the likelihood of
              unplanned downtime.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}