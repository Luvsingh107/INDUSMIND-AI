"use client";

import {
  ShieldCheck,
  CheckCircle2,
  KeyRound,
  UserCog,
  Clock3,
  Wifi,
} from "lucide-react";
import SectionCard from "./SectionCard";

export default function SecurityCard() {
  return (
    <SectionCard
      title="Security & Access"
      description="Monitor authentication, API connectivity and user permissions."
      icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-6">

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border bg-slate-50 p-5">

            <div className="flex items-center gap-3">

              <UserCog className="h-6 w-6 text-blue-600" />

              <div>

                <p className="text-sm text-slate-500">
                  Current Role
                </p>

                <h3 className="text-lg font-semibold">
                  Administrator
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="h-6 w-6 text-green-600" />

              <div>

                <p className="text-sm text-slate-500">
                  Authentication
                </p>

                <h3 className="text-lg font-semibold text-green-600">
                  Verified
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">

            <div className="flex items-center gap-3">

              <Wifi className="h-6 w-6 text-indigo-600" />

              <div>

                <p className="text-sm text-slate-500">
                  API Status
                </p>

                <h3 className="text-lg font-semibold">
                  Connected
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">

            <div className="flex items-center gap-3">

              <Clock3 className="h-6 w-6 text-orange-600" />

              <div>

                <p className="text-sm text-slate-500">
                  Last Login
                </p>

                <h3 className="text-lg font-semibold">
                  Today • 10:42 AM
                </h3>

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

          <div className="flex items-center gap-3">

            <KeyRound className="h-6 w-6 text-blue-600" />

            <div>

              <h3 className="font-semibold">
                API Credentials
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                OpenRouter API key is configured and securely stored.
              </p>

            </div>

          </div>

        </div>

        <button className="w-full rounded-xl border border-red-200 bg-red-50 py-3 font-medium text-red-600 transition hover:bg-red-100">
          Sign Out
        </button>

      </div>
    </SectionCard>
  );
}