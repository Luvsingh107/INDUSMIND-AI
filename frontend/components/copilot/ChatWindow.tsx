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

    if (messages.length === 0) {
        return (
            <div className="flex h-full items-center justify-center p-10">

                <div className="max-w-3xl text-center">

                    <div className="text-6xl mb-6">
                        🤖
                    </div>

                    <h2 className="text-3xl font-bold">
                        Welcome to INDUSMIND AI
                    </h2>

                    <p className="mt-4 text-gray-500 text-lg">
                        Your Industrial Maintenance Copilot powered by
                        Retrieval-Augmented Generation.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-4">

                        <div className="rounded-xl border bg-gray-50 p-5">
                            <div className="text-3xl font-bold text-blue-600">
                                43
                            </div>

                            <div className="text-sm text-gray-500">
                                Documents
                            </div>
                        </div>

                        <div className="rounded-xl border bg-gray-50 p-5">
                            <div className="text-3xl font-bold text-green-600">
                                4493
                            </div>

                            <div className="text-sm text-gray-500">
                                Knowledge Chunks
                            </div>
                        </div>

                        <div className="rounded-xl border bg-gray-50 p-5">
                            <div className="text-3xl font-bold text-orange-600">
                                AI
                            </div>

                            <div className="text-sm text-gray-500">
                                Grounded Responses
                            </div>
                        </div>

                        <div className="rounded-xl border bg-gray-50 p-5">
                            <div className="text-3xl font-bold text-purple-600">
                                📚
                            </div>

                            <div className="text-sm text-gray-500">
                                Source Citations
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }

    return (

        <div className="h-full overflow-y-auto p-6 space-y-6">

            {messages.map((m) => (

                <MessageBubble
                    key={m.id}
                    role={m.role}
                    content={m.content}
                    confidence={m.confidence}
                    sources={m.sources}
                    metrics={m.metrics}
                />

            ))}

            <div ref={bottom} />

        </div>

    );
}