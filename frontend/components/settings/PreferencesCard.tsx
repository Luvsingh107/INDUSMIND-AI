"use client";

import { Palette } from "lucide-react";
import SectionCard from "./SectionCard";

export default function PreferencesCard() {
  return (
    <SectionCard
      title="User Preferences"
      description="Customize your workspace and AI interaction experience."
      icon={<Palette className="h-5 w-5 text-pink-600" />}
    >
      <div className="space-y-8">

        {/* Theme */}

        <div>

          <h3 className="mb-4 font-semibold text-slate-900">
            Appearance
          </h3>

          <div className="grid gap-4 md:grid-cols-3">

            {[
              {
                title: "Light",
                active: false,
              },
              {
                title: "Dark",
                active: true,
              },
              {
                title: "System",
                active: false,
              },
            ].map((theme) => (
              <button
                key={theme.title}
                className={`rounded-2xl border p-5 text-left transition ${
                  theme.active
                    ? "border-blue-500 bg-blue-50"
                    : "hover:border-slate-300"
                }`}
              >
                <div className="h-20 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />

                <h4 className="mt-4 font-semibold">
                  {theme.title}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {theme.active
                    ? "Currently Active"
                    : "Click to switch"}
                </p>

              </button>
            ))}

          </div>

        </div>

        {/* Notifications */}

        <div>

          <h3 className="mb-4 font-semibold">
            Notifications
          </h3>

          <div className="space-y-4">

            {[
              "Document Upload Completed",
              "AI Response Failures",
              "Maintenance Alerts",
              "Compliance Updates",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border bg-slate-50 p-4"
              >
                <span className="font-medium">
                  {item}
                </span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-blue-600"
                />

              </div>
            ))}

          </div>

        </div>

        {/* Dashboard */}

        <div>

          <h3 className="mb-4 font-semibold">
            Dashboard Refresh
          </h3>

          <select className="w-full rounded-xl border px-4 py-3">

            <option>15 Seconds</option>

            <option selected>30 Seconds</option>

            <option>1 Minute</option>

            <option>5 Minutes</option>

          </select>

        </div>

        {/* AI Experience */}

        <div>

          <h3 className="mb-4 font-semibold">
            AI Response Preferences
          </h3>

          <div className="grid gap-4 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm text-slate-500">
                Response Style
              </label>

              <select className="w-full rounded-xl border px-4 py-3">

                <option>Concise</option>

                <option selected>Balanced</option>

                <option>Detailed</option>

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm text-slate-500">
                Citation Mode
              </label>

              <select className="w-full rounded-xl border px-4 py-3">

                <option>Always</option>

                <option>Only when needed</option>

                <option>Never</option>

              </select>

            </div>

          </div>

        </div>

        <div className="flex justify-end">

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">

            Save Preferences

          </button>

        </div>

      </div>
    </SectionCard>
  );
}