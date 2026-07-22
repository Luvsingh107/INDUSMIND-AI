"use client";

import {
  FileText,
  ExternalLink,
} from "lucide-react";

const documents = [
  {
    name: "Pump_Manual_v2.pdf",
    type: "Equipment Manual",
  },
  {
    name: "Hydraulic_SOP.pdf",
    type: "Operating Procedure",
  },
  {
    name: "Maintenance_Checklist.pdf",
    type: "Inspection Checklist",
  },
];

export default function AssetDocuments() {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div>

        <h3 className="text-xl font-semibold">
          Related Knowledge
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Documents retrieved from the enterprise knowledge base.
        </p>

      </div>

      <div className="mt-6 space-y-4">

        {documents.map((doc) => (

          <div
            key={doc.name}
            className="flex items-center justify-between rounded-2xl border bg-slate-50 p-4 transition hover:bg-slate-100"
          >

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-100 p-3">

                <FileText className="h-5 w-5 text-cyan-700" />

              </div>

              <div>

                <h4 className="font-medium text-slate-900">
                  {doc.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {doc.type}
                </p>

              </div>

            </div>

            <ExternalLink className="h-5 w-5 text-slate-400" />

          </div>

        ))}

      </div>

    </div>
  );
}