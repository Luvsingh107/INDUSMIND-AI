"use client";

import { useState } from "react";

type Props = {
    onSend: (question: string) => void;
    loading: boolean;
};

export default function ChatInput({
    onSend,
    loading,
}: Props) {

    const [text, setText] = useState("");

    function submit() {

        if (!text.trim()) return;

        onSend(text);

        setText("");
    }

    return (

        <div className="flex gap-3">

            <input

                value={text}

                onChange={(e) =>
                    setText(e.target.value)
                }

                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        submit();
                }}

                className="flex-1 border rounded-xl p-4"

                placeholder="Ask about maintenance..."

            />

            <button

                onClick={submit}

                disabled={loading}

                className="px-6 rounded-xl bg-blue-600 text-white"

            >

                {loading
                    ? "Thinking..."
                    : "Send"}

            </button>

        </div>

    );

}