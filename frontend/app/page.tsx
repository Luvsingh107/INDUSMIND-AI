"use client";

import { useEffect, useState } from "react";
import AppShell from "@/components/layout/app-shell";
import api from "@/services/api";

interface Document {
  filename: string;
  pages: number;
  equipment: string[];
  maintenance_intervals: string[];
}

export default function KnowledgePage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDocuments() {
      try {
        const { data } = await api.get<Document[]>("/knowledge/documents");
        setDocuments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDocuments();
  }, []);

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold">
          Knowledge Hub
        </h1>

        <p className="mt-2 text-slate-500">
          Uploaded industrial manuals and extracted knowledge
        </p>

        {loading && (
          <div className="mt-10 text-lg">
            Loading documents...
          </div>
        )}

        <div className="mt-8 grid gap-6">

          {documents.map((doc) => (
            <div
              key={doc.filename}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">
                {doc.filename}
              </h2>

              <div className="mt-3 flex gap-8 text-sm text-slate-500">
                <span>Pages: {doc.pages}</span>
                <span>Assets: {doc.equipment.length}</span>
                <span>Intervals: {doc.maintenance_intervals.length}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">

                {doc.equipment.map((asset) => (
                  <span
                    key={asset}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm"
                  >
                    {asset}
                  </span>
                ))}

              </div>

              <div className="mt-4 flex flex-wrap gap-2">

                {doc.maintenance_intervals.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-green-100 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </AppShell>
  );
}