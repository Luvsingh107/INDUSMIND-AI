"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
};

export default function SettingsStatCard({
  title,
  value,
  subtitle,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="mb-5 flex items-center justify-between">

        <div className="rounded-xl bg-slate-100 p-3">
          {icon}
        </div>

      </div>

      <div className="text-sm text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-3xl font-bold">
        {value}
      </div>

      {subtitle && (
        <div className="mt-2 text-sm text-slate-400">
          {subtitle}
        </div>
      )}

    </div>
  );
}