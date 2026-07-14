"use client";

const questions = [

    "What is preventive maintenance?",

    "How often should bearings be inspected?",

    "List all lubrication intervals.",

    "Explain pump maintenance.",

    "Show safety precautions.",

];

export default function SuggestedQuestions({

    onSelect,

}: {

    onSelect: (q: string) => void;

}) {

    return (

        <div className="flex flex-wrap gap-3">

            {questions.map((q) => (

                <button

                    key={q}

                    onClick={() => onSelect(q)}

                    className="rounded-full border px-4 py-2 hover:bg-gray-100"

                >

                    {q}

                </button>

            ))}

        </div>

    );

}