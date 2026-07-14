"use client";

type Props = {
    role: "user" | "assistant";
    content: string;
};

export default function MessageBubble({
    role,
    content,
}: Props) {

    const user = role === "user";

    return (

        <div
            className={`flex ${
                user
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            <div
                className={`max-w-3xl rounded-2xl px-5 py-4 whitespace-pre-wrap ${
                    user
                        ? "bg-blue-600 text-white"
                        : "bg-white border"
                }`}
            >
                {content}
            </div>

        </div>

    );

}