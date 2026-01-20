'use client';

import { useState, useMemo } from 'react';
import { Calculator, RefreshCw, Info, Plus, Minus, Beef, Beer, Timer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrewHead } from '@/components/ui/ScrewHead';

export function LitersCalculator() {
    const [days, setDays] = useState(3);
    const [people, setPeople] = useState(1);
    const [bottles, setBottles] = useState(2); // garrafas 2L
    const [marmitas, setMarmitas] = useState(2);

    const totalLitros = useMemo(() => {
        const espacoBebida = bottles * 2.5;
        const espacoComida = marmitas * 1.5;
        const base = (espacoBebida + espacoComida) * (people === 1 ? 1 : 1.6);
        return Math.round(base * 1.2);
    }, [bottles, marmitas, people]);

    const recomendacao = useMemo(() => {
        if (totalLitros <= 18) return { size: "12L a 18L", model: "Compacta / Console", color: "text-blue-400" };
        if (totalLitros <= 31) return { size: "26L a 31L", model: "Linha Média (Padrão)", color: "text-amber-500" };
        if (totalLitros <= 45) return { size: "38L a 45L", model: "Linha Pesada", color: "text-orange-500" };
        return { size: "65L+", model: "Geladeira Externa", color: "text-red-500" };
    }, [totalLitros]);

    return (
        <section className="relative bg-slate-900 text-white p-6 md:p-10 rounded-3xl border-2 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden my-16 max-w-2xl mx-auto industrial-shadow">
            <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none"></div>

            {/* Corner Screws */}
            <ScrewHead className="absolute top-4 left-4 scale-75 opacity-40" />
            <ScrewHead className="absolute top-4 right-4 scale-75 opacity-40" />
            <ScrewHead className="absolute bottom-4 left-4 scale-75 opacity-40" />
            <ScrewHead className="absolute bottom-4 right-4 scale-75 opacity-40" />

            <div className="relative z-10">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)] border-2 border-black/10">
                            <Calculator className="w-8 h-8 text-slate-950" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black font-teko uppercase tracking-tight leading-none text-white">Dimensionamento <span className="text-amber-500">Pro</span></h2>
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mt-1 italic">Protocolo de Cálculo de Carga v2.4</p>
                        </div>
                    </div>
                    <button
                        onClick={() => { setPeople(1); setBottles(2); setMarmitas(2); setDays(3); }}
                        aria-label="Resetar calculadora de litros"
                        className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-white"
                    >
                        <RefreshCw className="w-3 h-3" /> Resetar
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {/* Coluna 1: Tripulação e Tempo */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-[11px] font-black text-amber-500 uppercase tracking-widest">
                                <div className="w-1.5 h-3 bg-amber-500"></div>
                                Composição da Boleia
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2].map(n => (
                                    <button
                                        key={n}
                                        onClick={() => setPeople(n)}
                                        aria-label={`${n} Motorista(s)`}
                                        aria-pressed={people === n}
                                        className={cn(
                                            "relative h-20 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1",
                                            people === n
                                                ? "bg-amber-500 border-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                                                : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500"
                                        )}
                                    >
                                        <span className="font-teko text-2xl font-black">{n === 1 ? "SINGLE" : "DUPLO"}</span>
                                        <span className="text-[8px] font-bold uppercase opacity-60">{n === 1 ? "1 Motorista" : "+ Ajudante"}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-[11px] font-black text-amber-500 uppercase tracking-widest">
                                <div className="w-1.5 h-3 bg-amber-500"></div>
                                Estimativa de Viagem
                            </label>
                            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
                                <Timer className="w-5 h-5 text-slate-500" />
                                <div className="flex-1">
                                    <input
                                        type="range" min="1" max="15" value={days}
                                        aria-label="Dias de viagem"
                                        onChange={(e) => setDays(Number(e.target.value))}
                                        className="w-full accent-amber-500 h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between mt-2 text-[9px] font-black text-slate-500 uppercase tracking-tighter">
                                        <span>1 Dia</span>
                                        <span>8 Dias</span>
                                        <span>15 Dias</span>
                                    </div>
                                </div>
                                <div className="w-12 text-center">
                                    <span className="text-2xl font-black font-teko text-white">{days}</span>
                                    <span className="text-[8px] block font-bold text-slate-500">DIAS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Carga */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-[11px] font-black text-amber-500 uppercase tracking-widest">
                                <div className="w-1.5 h-3 bg-amber-500"></div>
                                Volume de Bebidas
                            </label>
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 relative overflow-hidden flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 border border-slate-700">
                                        <Beer className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-white block">Garrafas (2L)</span>
                                        <span className="text-[9px] text-slate-500 font-bold uppercase">Água / Refri</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setBottles(Math.max(0, bottles - 1))} aria-label="Remover garrafa" className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-slate-700 border border-slate-600 active:translate-y-0.5"><Minus className="w-4 h-4 text-white" /></button>
                                    <span className="w-8 text-center text-3xl font-black font-teko text-amber-500">{bottles}</span>
                                    <button onClick={() => setBottles(bottles + 1)} aria-label="Adicionar garrafa" className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center hover:bg-amber-400 border border-amber-300 active:translate-y-0.5"><Plus className="w-4 h-4 text-slate-950" /></button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-[11px] font-black text-amber-500 uppercase tracking-widest">
                                <div className="w-1.5 h-3 bg-amber-500"></div>
                                Volume de Mantimentos
                            </label>
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 relative overflow-hidden flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 border border-slate-700">
                                        <Beef className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-white block">Marmitas / Latas</span>
                                        <span className="text-[9px] text-slate-500 font-bold uppercase">Comida Sólida</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setMarmitas(Math.max(0, marmitas - 1))} aria-label="Remover marmita" className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-slate-700 border border-slate-600 active:translate-y-0.5"><Minus className="w-4 h-4 text-white" /></button>
                                    <span className="w-8 text-center text-3xl font-black font-teko text-amber-500">{marmitas}</span>
                                    <button onClick={() => setMarmitas(marmitas + 1)} aria-label="Adicionar marmita" className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center hover:bg-amber-400 border border-amber-300 active:translate-y-0.5"><Plus className="w-4 h-4 text-slate-950" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAINEL DE RESULTADO (TECHNICAL GAUGE STYLE) */}
                <div className="relative group">
                    {/* Brilho de fundo */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>

                    <div className="relative bg-slate-950 p-8 rounded-2xl border-4 border-slate-800 overflow-hidden shadow-inner flex flex-col md:flex-row items-center gap-8">
                        <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

                        {/* Gauge Circular */}
                        <div className="relative w-40 h-40 shrink-0">
                            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="transparent" stroke="#1e293b" strokeWidth="8" />
                                <circle
                                    cx="50" cy="50" r="45" fill="transparent"
                                    stroke="#f59e0b"
                                    strokeWidth="8"
                                    strokeDasharray="283"
                                    strokeDashoffset={283 - (Math.min(totalLitros, 100) / 100) * 283}
                                    strokeLinecap="round"
                                    className="transition-all duration-700 ease-out"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                                <span className="text-5xl font-black font-teko text-white tracking-tighter">{totalLitros}</span>
                                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest mt-1">Litros</span>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2 block">Capacidade Recomendada</span>
                            <h3 className={cn("text-4xl md:text-5xl font-black font-teko uppercase leading-none mb-3", recomendacao.color)}>
                                {recomendacao.size}
                            </h3>
                            <div className="inline-flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-white/5 shadow-lg">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b]"></div>
                                <span className="text-xs font-black uppercase tracking-widest text-slate-300">{recomendacao.model}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        <Info className="w-4 h-4 text-amber-500" />
                        <span>Baseado no consumo médio de {people} {people === 1 ? 'pessoa' : 'pessoas'} por {days} dias</span>
                    </div>
                    <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest italic leading-tight max-w-[200px]">
                        * Categoria do equipamento pode variar conforme marca e compressor.
                    </p>
                </footer>
            </div>
        </section>
    );
}
