"use client";

import React, { useState } from 'react';
import { MessageSquare, Settings, Search, Info } from 'lucide-react';
import { glossaryTerms, GlossaryTerm } from '@/lib/glossary';
import { ScrewHead } from '@/components/ui/ScrewHead';
import { cn } from '@/lib/utils';

export function GlossaryList() {
    const [filter, setFilter] = useState<'all' | 'slang' | 'technical'>('all');
    const [search, setSearch] = useState('');

    const filteredTerms = glossaryTerms.filter(t => {
        const matchesFilter = filter === 'all' || t.category === filter;
        const matchesSearch = t.term.toLowerCase().includes(search.toLowerCase()) ||
            t.meaning.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="w-full">
            {/* CONTROLS */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Pesquisar termo ou gíria..."
                        className="w-full bg-white border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 font-bold text-slate-900 focus:border-amber-500 outline-none transition-all shadow-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="flex gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
                    <button
                        onClick={() => setFilter('all')}
                        className={cn(
                            "px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all",
                            filter === 'all' ? "bg-slate-900 text-white shadow-lg" : "text-slate-500 hover:text-slate-900"
                        )}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setFilter('slang')}
                        className={cn(
                            "px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                            filter === 'slang' ? "bg-amber-600 text-white shadow-lg" : "text-slate-500 hover:text-amber-600"
                        )}
                    >
                        <MessageSquare className="w-3 h-3" /> Gírias
                    </button>
                    <button
                        onClick={() => setFilter('technical')}
                        className={cn(
                            "px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                            filter === 'technical' ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-blue-600"
                        )}
                    >
                        <Settings className="w-3 h-3" /> Técnico
                    </button>
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTerms.map((t, idx) => (
                    <div
                        key={t.term}
                        className={cn(
                            "relative p-8 rounded-2xl border-2 transition-all group overflow-hidden",
                            t.category === 'slang'
                                ? "bg-amber-50 border-amber-100 hover:border-amber-400"
                                : "bg-blue-50 border-blue-100 hover:border-blue-400"
                        )}
                    >
                        {/* BACKGROUND PATTERN */}
                        <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

                        {/* SCREWS */}
                        <ScrewHead className="absolute top-2 left-2 size-3 opacity-20" />
                        <ScrewHead className="absolute top-2 right-2 size-3 opacity-20" />
                        <ScrewHead className="absolute bottom-2 left-2 size-3 opacity-20" />
                        <ScrewHead className="absolute bottom-2 right-2 size-3 opacity-20" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className={cn(
                                    "text-3xl font-black font-teko uppercase tracking-tight leading-none",
                                    t.category === 'slang' ? "text-amber-900" : "text-blue-900"
                                )}>
                                    {t.term}
                                </h3>
                                <span className={cn(
                                    "text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded border",
                                    t.category === 'slang'
                                        ? "bg-amber-100 border-amber-200 text-amber-700"
                                        : "bg-blue-100 border-blue-200 text-blue-700"
                                )}>
                                    {t.category === 'slang' ? 'Gíria do Trecho' : 'Termo Técnico'}
                                </span>
                            </div>

                            <p className="text-slate-700 font-medium leading-relaxed mb-4">
                                {t.meaning}
                            </p>

                            <div className="bg-white/50 p-4 rounded-xl border border-white/80 italic text-slate-500 text-sm flex gap-3">
                                <Info className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                                <span>&quot;{t.example}&quot;</span>
                            </div>
                        </div>

                        {/* CORNER ACCENT */}
                        <div className={cn(
                            "absolute -bottom-4 -right-4 w-12 h-12 rotate-45 transition-transform group-hover:scale-125",
                            t.category === 'slang' ? "bg-amber-400/20" : "bg-blue-400/20"
                        )}></div>
                    </div>
                ))}

                {filteredTerms.length === 0 && (
                    <div className="col-span-full py-20 text-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-300">
                        <p className="font-teko text-3xl text-slate-400 uppercase tracking-widest">Nenhum termo encontrado</p>
                        <p className="text-slate-400 text-sm">Tente pesquisar com outras palavras.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
