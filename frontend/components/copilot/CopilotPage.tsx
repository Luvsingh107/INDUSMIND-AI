"use client";

import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import SuggestedQuestions from "./SuggestedQuestions";

import { useChat } from "@/hooks/useChat";

export default function CopilotPage() {

  const {
    messages,
    loading,
    send,
  } = useChat();

  return (

    <div className="flex h-full flex-col">

      <div className="mb-6">

        <h1 className="text-4xl font-bold">
          Industrial AI Copilot
        </h1>

        <p className="mt-2 text-gray-500">
          Ask questions about manuals, maintenance, SOPs and uploaded documents.
        </p>

      </div>

      <SuggestedQuestions
        onSelect={send}
      />

      <div className="mt-6 flex-1 overflow-hidden rounded-2xl border bg-white shadow-sm">

        <ChatWindow
          messages={messages}
        />

      </div>

      <div className="mt-6">

        <ChatInput
          onSend={send}
          loading={loading}
        />

      </div>

    </div>

  );

}