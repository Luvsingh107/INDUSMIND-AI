"use client";

import {
  Database,
  FileText,
  FolderOpen,
  RefreshCcw,
  Download,
  Clock,
  Layers3,
} from "lucide-react";
import SectionCard from "./SectionCard";

const recentDocuments = [
  "Pump_Manual_v2.pdf",
  "ISO_55001_Guide.pdf",
  "Hydraulic_System_SOP.pdf",
];

export default function KnowledgeBaseCard() {
  return (
    <SectionCard
      title="Knowledge Base"
      description="Manage indexed documents and monitor your AI knowledge repository."
      icon={<Database className="h-5 w-5 text-violet-600" />}
    >
      <div className="space-y-6">

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="rounded-2xl border bg-slate-50 p-5">
            <FileText className="mb-3 h-5 w-5 text-blue-600" />

            <p className="text-sm text-slate-500">
              Documents
            </p>

            <p className="mt-2 text-3xl font-bold">
              43
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">
            <Layers3 className="mb-3 h-5 w-5 text-violet-600" />

            <p className="text-sm text-slate-500">
              Chunks
            </p>

            <p className="mt-2 text-3xl font-bold">
              4,892
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">
            <Database className="mb-3 h-5 w-5 text-emerald-600" />

            <p className="text-sm text-slate-500">
              Storage
            </p>

            <p className="mt-2 text-3xl font-bold">
              84 MB
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">
            <Clock className="mb-3 h-5 w-5 text-orange-600" />

            <p className="text-sm text-slate-500">
              Last Indexed
            </p>

            <p className="mt-2 text-xl font-bold">
              2 min ago
            </p>
          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">

          <h3 className="mb-4 text-lg font-semibold">
            Recently Indexed Documents
          </h3>

          <div className="space-y-3">

            {recentDocuments.map((doc) => (
              <div
                key={doc}
                className="flex items-center justify-between rounded-xl border bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center gap-3">

                  <FolderOpen className="h-5 w-5 text-blue-600" />

                  <span className="font-medium">
                    {doc}
                  </span>

                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Indexed
                </span>

              </div>
            ))}

          </div>

        </div>

        <div className="grid gap-3 md:grid-cols-3">

          <button className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition hover:bg-slate-100">

            <RefreshCcw className="h-4 w-4" />

            Re-index Documents

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition hover:bg-slate-100">

            <Download className="h-4 w-4" />

            Export Metadata

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition hover:bg-slate-100">

            <Database className="h-4 w-4" />

            Refresh Statistics

          </button>

        </div>

      </div>
    </SectionCard>
  );
}