"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
};

export default function AssetStatCard({
  title,
  value,
  subtitle,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-5 flex items-center justify-between">

        <div className="rounded-xl bg-slate-100 p-3">
          {icon}
        </div>

      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}