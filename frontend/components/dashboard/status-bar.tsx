"use client";

import { useEffect, useState } from "react";
import {
  Cpu,
  Database,
  FileText,
  CheckCircle,
} from "lucide-react";

import { getDashboardStats } from "@/services/dashboard";
import { useDashboard } from "@/context/dashboard-context";

export default function StatusBar() {
  const { refreshKey } = useDashboard();

  const [stats, setStats] = useState({
    documents: 0,
    chunks: 0,
  });

  async function load() {
    try {
      const data = await getDashboardStats();

      setStats({
        documents: data.documents,
        chunks: data.chunks,
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    load();
  }, [refreshKey]);

  return (
    <div className="mb-6 grid gap-4 md:grid-cols-4">
      <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
        <CheckCircle className="text-green-600" />

        <div>
          <p className="text-xs text-slate-500">
            Backend
          </p>

          <p className="font-semibold">
            Connected
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
        <Cpu className="text-blue-600" />

        <div>
          <p className="text-xs text-slate-500">
            AI Copilot
          </p>

          <p className="font-semibold">
            Ready
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
        <FileText className="text-indigo-600" />

        <div>
          <p className="text-xs text-slate-500">
            Documents
          </p>

          <p className="font-semibold">
            {stats.documents}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
        <Database className="text-purple-600" />

        <div>
          <p className="text-xs text-slate-500">
            Knowledge Chunks
          </p>

          <p className="font-semibold">
            {stats.chunks}
          </p>
        </div>
      </div>
    </div>
  );
}