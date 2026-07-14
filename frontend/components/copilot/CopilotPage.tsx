"use client";

import ChatWindow from "./ChatWindow";

import ChatInput from "./ChatInput";

import SuggestedQuestions from "./SuggestedQuestions";

import { useChat } from "@/hooks/useChat";

export default function CopilotPage() {

    const {

        messages,

        loading,

        send,

    } = useChat();

    return (

        <div className="max-w-6xl mx-auto py-10 space-y-8">

            <div>

                <h1 className="text-4xl font-bold">

                    Industrial AI Copilot

                </h1>

                <p className="text-gray-500 mt-2">

                    Ask questions about manuals,
                    maintenance,
                    SOPs
                    and uploaded documents.

                </p>

            </div>

            <SuggestedQuestions

                onSelect={send}

            />

            <ChatWindow

                messages={messages}

            />

            <ChatInput

                onSend={send}

                loading={loading}

            />

        </div>

    );

}