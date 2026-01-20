import React from 'react';
import { Radio, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SlangBoxProps {
    term: string;
    definition: string;
}

export function SlangBox({ term, definition }: SlangBoxProps) {
    return (
        <div className="my-8 bg-slate-100 border-l-4 border-amber-500 p-6 rounded-r-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-5">
                <Radio className="w-12 h-12" />
            </div>

            <div className="flex items-center gap-2 mb-2">
                <Radio className="w-4 h-4 text-amber-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Papo de Estradeiro</span>
            </div>

            <h4 className="text-xl font-black font-teko uppercase text-slate-900 mb-1">
                Termo: <span className="text-amber-600">{term}</span>
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {definition}
            </p>

            <Link
                href="/glossario"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-colors"
            >
                Dicionário Completo <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
