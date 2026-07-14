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

        <div className="space-y-5 h-[550px] overflow-y-auto">

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