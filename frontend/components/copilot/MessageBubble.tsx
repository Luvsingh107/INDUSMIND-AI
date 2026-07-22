"use client";

import { Copy, Check, FileText, ShieldCheck, Database } from "lucide-react";
import { useState } from "react";
import { Source } from "@/types/chat";
import ExplainabilityPanel from "./ExplainabilityPanel";
import { RAGMetrics } from "@/types/chat";

type Props = {
  role: "user" | "assistant";
  content: string;
  confidence?: number;
  sources?: Source[];
  metrics?: RAGMetrics;
};

export default function MessageBubble({
  role,
  content,
  confidence,
  sources,
  metrics,
}: Props) {
  const isUser = role === "user";

  const [copied, setCopied] = useState(false);

  async function copyAnswer() {
    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-5xl rounded-2xl shadow-sm ${
          isUser
            ? "bg-blue-600 text-white px-6 py-5"
            : "border border-slate-200 bg-white"
        }`}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap leading-7">
            {content}
          </div>
        ) : (
          <>
            <div className="border-b bg-slate-50 px-6 py-5 rounded-t-2xl">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white text-xl">
                    🤖
                  </div>

                  <div>

                    <h3 className="text-lg font-semibold">
                      INDUSMIND AI
                    </h3>

                    <p className="text-sm text-slate-500">
                      Grounded Industrial Copilot
                    </p>

                  </div>

                </div>

                <button
                  onClick={copyAnswer}
                  className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm transition hover:bg-slate-100"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>

              </div>

            </div>

            <div className="border-b px-6 py-5">

              <h4 className="mb-4 font-semibold">
                AI Insight Panel
              </h4>

              <div className="grid gap-4 md:grid-cols-4">

                <div className="rounded-xl border bg-blue-50 p-4">

                  <div className="mb-2 flex items-center gap-2">

                    <ShieldCheck className="h-5 w-5 text-blue-600" />

                    <span className="text-sm font-medium">
                      Confidence
                    </span>

                  </div>

                  <div className="text-2xl font-bold">
                    {confidence ?? 0}%
                  </div>

                </div>

                <div className="rounded-xl border bg-green-50 p-4">

                  <div className="mb-2 flex items-center gap-2">

                    <FileText className="h-5 w-5 text-green-600" />

                    <span className="text-sm font-medium">
                      Sources
                    </span>

                  </div>

                  <div className="text-2xl font-bold">
                    {sources?.length ?? 0}
                  </div>

                </div>

                <div className="rounded-xl border bg-purple-50 p-4">

                  <div className="mb-2 flex items-center gap-2">

                    <Database className="h-5 w-5 text-purple-600" />

                    <span className="text-sm font-medium">
                      Retrieval
                    </span>

                  </div>

                  <div className="text-lg font-semibold text-green-600">
                    Complete
                  </div>

                </div>

                <div className="rounded-xl border bg-orange-50 p-4">

                  <div className="mb-2 text-sm font-medium">
                    AI Status
                  </div>

                  <div className="text-lg font-semibold text-green-600">
                    Verified
                  </div>

                </div>

              </div>

            </div>

            <div className="px-6 py-6">

              <div className="mb-4 text-lg font-semibold">
                Response
              </div>

            {content.includes("Searching industrial knowledge base") ? (

                <div className="space-y-4">

                    <div className="rounded-xl border bg-blue-50 p-5">

                    <div className="mb-4 text-lg font-semibold">
                        🤖 INDUSMIND AI
                    </div>

                    <div className="space-y-3">

                        <div>🔍 Searching industrial knowledge base...</div>

                        <div>📚 Retrieving semantic document embeddings...</div>

                        <div>🧩 Ranking relevant knowledge chunks...</div>

                        <div className="animate-pulse font-medium text-blue-700">
                            🤖 Generating grounded response...
                        </div>

                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">

                        <div className="h-full w-2/3 animate-pulse rounded-full bg-blue-600" />

                    </div>

                    <div className="mt-3 text-sm text-slate-500">
                        Processing your request...
                    </div>

                    </div>

                </div>

            ) : (

                <div className="whitespace-pre-wrap leading-8 text-slate-700">
                    {content}
                </div>

            )}

            </div>

            {confidence !== undefined && (

              <div className="border-t px-6 py-5">

                <div className="mb-2 flex items-center justify-between text-sm">

                  <span className="font-medium">
                    Confidence Score
                  </span>

                  <span>
                    {confidence}%
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="h-full rounded-full bg-green-500 transition-all duration-700"
                    style={{
                      width: `${confidence}%`,
                    }}
                  />

                </div>

              </div>

            )}

            <ExplainabilityPanel metrics={metrics} />

            {sources && sources.length > 0 && (

              <div className="border-t px-6 py-6">

                <h4 className="mb-5 text-lg font-semibold">
                  Retrieved Sources
                </h4>

                <div className="space-y-4">

                  {sources.map((source, index) => (

                    <div
                      key={index}
                      className="rounded-xl border bg-slate-50 p-5 transition hover:bg-slate-100"
                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <div className="font-semibold">
                            📄 {source.filename}
                          </div>

                          <div className="mt-1 text-sm text-slate-500">
                            Semantic Retrieval Result
                          </div>

                        </div>

                        <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                          {source.score}%

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            )}

          </>
        )}
      </div>
    </div>
  );
}