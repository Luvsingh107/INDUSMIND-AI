"use client";

type Props = {
    onSelect: (question: string) => void;
};

const QUESTIONS = [
    "What spare parts are required?",
    "Show lubrication intervals.",
    "What safety precautions should be followed?",
    "Explain the maintenance procedure.",
];

export default function SuggestedQuestions({
    onSelect,
}: Props) {
    return (
        <div className="mt-6">
            <div className="font-semibold mb-3 text-sm text-gray-700">
                💡 Suggested Questions
            </div>

            <div className="flex flex-wrap gap-2">
                {QUESTIONS.map((question) => (
                    <button
                        key={question}
                        onClick={() => onSelect(question)}
                        className="rounded-full border px-4 py-2 text-sm bg-gray-50 hover:bg-blue-50 hover:border-blue-500 transition"
                    >
                        {question}
                    </button>
                ))}
            </div>
        </div>
    );
}