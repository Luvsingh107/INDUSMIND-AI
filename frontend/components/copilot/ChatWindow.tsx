"use client";

import { useEffect, useRef } from "react";

import { Message } from "@/types/chat";
import MessageBubble from "./MessageBubble";

type Props = {
  messages: Message[];
};

export default function ChatWindow({
  messages,
}: Props) {
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottom.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto p-6 space-y-5">

      {messages.map((m) => (
        <MessageBubble
          key={m.id}
          role={m.role}
          content={m.content}
        />
      ))}

      <div ref={bottom} />

    </div>
  );
}