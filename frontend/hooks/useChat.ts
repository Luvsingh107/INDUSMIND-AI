import { useState } from "react";

import { askAI } from "@/services/chat";
import { Message } from "@/types/chat";
import { useActivityStore } from "@/stores/activity-store";

export function useChat() {

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const addActivity = useActivityStore(
    (state) => state.addActivity
  );

  async function send(question: string) {

    if (!question.trim()) return;

    addActivity({
      type: "AI Query",
      description: question,
    });

    const user: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
    };

    const loadingMessage: Message = {
      id: "loading",
      role: "assistant",
      content: [
        "🔍 Searching industrial knowledge base...",
        "📚 Retrieving semantic document embeddings...",
        "🧩 Ranking relevant knowledge chunks...",
        "🤖 Generating grounded AI response..."
      ].join("\n"),
      loading: true,
    };

    setMessages((m) => [
      ...m,
      user,
      loadingMessage,
    ]);

    setLoading(true);

    try {

      const response = await askAI(question);

      addActivity({
        type: "Retrieval",
        description: `${response.sources.length} source documents retrieved`,
      });

      addActivity({
        type: "Confidence",
        description: `${response.confidence}% confidence score`,
      });

      addActivity({
        type: "AI Response",
        description: "Grounded response generated successfully",
      });

      const assistant: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer,
        confidence: response.confidence,
        sources: response.sources,
        metrics: response.metrics,
      };

      setMessages((m) => [
        ...m.filter((msg) => msg.id !== "loading"),
        assistant,
      ]);

    } catch (error) {

      console.error(error);

      addActivity({
        type: "AI Error",
        description: "Failed to generate response",
      });

      setMessages((m) => [
        ...m.filter((msg) => msg.id !== "loading"),
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Unable to generate a response. Please try again.",
        },
      ]);

    } finally {

      setLoading(false);

    }

  }

  return {
    messages,
    loading,
    send,
  };

}