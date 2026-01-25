import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQBoxProps {
    questions: FAQItem[];
    title?: string;
}

export function FAQBox({ questions, title = "Perguntas Frequentes" }: FAQBoxProps) {
    // Schema.org JSON-LD for FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        }))
    };

    return (
        <section className="my-8 rounded-xl border-2 border-slate-200 bg-white overflow-hidden shadow-sm not-prose">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-500" />
                <h3 className="font-black font-teko uppercase text-xl text-slate-800 tracking-wide m-0">
                    {title}
                </h3>
            </div>

            <div className="divide-y divide-slate-100">
                {questions.map((item, index) => (
                    <details key={index} className="group p-4 open:bg-amber-50/30 transition-colors">
                        <summary className="font-bold text-slate-800 cursor-pointer flex items-center justify-between list-none focus:outline-none">
                            <span className="pr-4">{item.question}</span>
                            <span className="transition-transform group-open:rotate-180 text-amber-500">
                                <ChevronDown className="w-5 h-5" />
                            </span>
                        </summary>
                        <div className="mt-3 text-slate-600 text-sm leading-relaxed pl-1 border-l-2 border-amber-200 ml-1">
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
