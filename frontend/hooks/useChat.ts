"use client";

import { useState } from "react";

import { askAI } from "@/services/chat";

import { Message } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  async function send(question: string) {
    if (!question.trim()) return;

    const user: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
    };

    setMessages((m) => [...m, user]);

    setLoading(true);

    try {
      const response = await askAI(question);

      const assistant: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer,
      };

      setMessages((m) => [...m, assistant]);
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