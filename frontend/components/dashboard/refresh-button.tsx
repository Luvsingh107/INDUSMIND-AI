"use client";

import { RotateCw } from "lucide-react";

import { useDashboard } from "@/context/dashboard-context";

export default function RefreshButton() {
  const { refresh } = useDashboard();

  return (
    <button
      onClick={refresh}
      className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2 shadow-sm transition hover:bg-slate-100"
    >
      <RotateCw size={18} />
      Refresh
    </button>
  );
}