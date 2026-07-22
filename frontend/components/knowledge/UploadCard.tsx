"use client";

import { useState } from "react";
import {
  Upload,
  FileText,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { uploadDocument } from "@/services/documents";
import { useDashboard } from "@/context/dashboard-context";
import { useActivityStore } from "@/stores/activity-store";

type Props = {
  onUploadSuccess?: () => void;
};

export default function UploadCard({
  onUploadSuccess,
}: Props) {
  const { refresh } = useDashboard();

  const addActivity = useActivityStore(
    (state) => state.addActivity
  );

  const [uploading, setUploading] = useState(false);
  
  type UploadResult = {
  filename: string;
  pages: number;
  chunks: number;
  };

  const [result, setResult] =
  useState<UploadResult | null>(null);

  async function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    addActivity({
      type: "Upload Started",
      description: `Uploading ${file.name}`,
    });

    try {
      const response = await uploadDocument(file);

      setResult(response);

      addActivity({
        type: "Document Uploaded",
        description: `${response.filename} uploaded successfully`,
      });

      addActivity({
        type: "Knowledge Extraction",
        description: `${response.chunks} knowledge chunks generated`,
      });

      addActivity({
        type: "Vector Database",
        description: "Document indexed into ChromaDB",
      });

      addActivity({
        type: "AI Ready",
        description: `${response.filename} is ready for semantic search`,
      });

      refresh();

      onUploadSuccess?.();
    } catch (err) {
      console.error(err);

      addActivity({
        type: "Upload Failed",
        description: `${file.name} could not be processed`,
      });

      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <Upload className="h-7 w-7 text-blue-600" />

        <div>

          <h2 className="text-2xl font-semibold">
            Upload Industrial Manual
          </h2>

          <p className="text-sm text-gray-500">
            PDF documents are automatically indexed for AI search.
          </p>

        </div>

      </div>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-300 p-12 transition hover:bg-blue-50">

        <FileText className="mb-4 h-12 w-12 text-blue-600" />

        <span className="text-lg font-semibold">
          Click to upload a PDF
        </span>

        <span className="mt-2 text-sm text-gray-500">
          Upload maintenance manuals, SOPs or equipment documentation
        </span>

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFile}
        />

      </label>

      {uploading && (
        <div className="mt-6 rounded-xl bg-blue-50 p-5">

          <div className="flex items-center gap-3">

            <Loader2 className="h-6 w-6 animate-spin text-blue-600" />

            <div>

              <div className="font-semibold">
                Processing Document...
              </div>

              <div className="text-sm text-gray-500">
                Extracting text • Chunking • Generating embeddings • Indexing
              </div>

            </div>

          </div>

        </div>
      )}

      {result && (
        <div className="mt-6 rounded-xl border border-green-300 bg-green-50 p-6">

          <div className="mb-5 flex items-center gap-2 text-xl font-semibold text-green-700">

            <CheckCircle2 className="h-6 w-6" />

            Document Indexed Successfully

          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">

            <div>📄 {result.filename}</div>

            <div>📑 {result.pages} pages</div>

            <div>🧩 {result.chunks} chunks</div>

            <div>🧠 AI Ready</div>

          </div>

        </div>
      )}

    </div>
  );
}