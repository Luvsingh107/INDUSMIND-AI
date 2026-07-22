"use client";

import { useEffect, useState } from "react";

import AppShell from "@/components/layout/app-shell";
import UploadCard from "@/components/knowledge/UploadCard";

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

  async function loadDocuments() {

    try {

      const { data } =
        await api.get<Document[]>("/knowledge/documents");

      setDocuments(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

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

        <div className="mt-8">

          <UploadCard
            onUploadSuccess={loadDocuments}
          />

        </div>

        {loading && (

          <div className="mt-8 text-lg">

            Loading documents...

          </div>

        )}

        <div className="mt-10 space-y-6">

          {documents.map((doc) => (

            <div
              key={doc.filename}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-2xl font-semibold">
                    📄 {doc.filename}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-500">

                    <span>
                      📑 {doc.pages} Pages
                    </span>

                    <span>
                      ⚙️ {doc.equipment.length} Assets
                    </span>

                    <span>
                      🔧 {doc.maintenance_intervals.length} Maintenance Intervals
                    </span>

                  </div>

                </div>

              </div>

              <div className="mt-6">

                <h3 className="mb-3 font-semibold">
                  Equipment
                </h3>

                <div className="flex flex-wrap gap-2">

                  {doc.equipment.length === 0 ? (

                    <span className="text-sm text-gray-500">
                      No equipment extracted.
                    </span>

                  ) : (

                    doc.equipment.map((item) => (

                      <span
                        key={item}
                        className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                      >
                        {item}
                      </span>

                    ))

                  )}

                </div>

              </div>

              <div className="mt-6">

                <h3 className="mb-3 font-semibold">
                  Maintenance Intervals
                </h3>

                <div className="flex flex-wrap gap-2">

                  {doc.maintenance_intervals.length === 0 ? (

                    <span className="text-sm text-gray-500">
                      No maintenance intervals extracted.
                    </span>

                  ) : (

                    doc.maintenance_intervals.map((item) => (

                      <span
                        key={item}
                        className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
                      >
                        {item}
                      </span>

                    ))

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </AppShell>

  );

}