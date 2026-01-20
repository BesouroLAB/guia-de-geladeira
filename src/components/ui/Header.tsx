'use client';

import { useState } from 'react';
import { Menu, X, ChevronRight, Phone, MessageSquare, Info } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Blog', href: '/blog', desc: 'Dicas, Reviews e Notícias' },
        { label: 'Linha Pesada', href: '/caminhao', desc: 'Resfriar, Elber e Maxiclima' },
        { label: 'Portáteis', href: '/portatil', desc: 'A bateria e 12V/24V' },
        { label: 'Guia Técnico', href: '/tecnica', desc: 'Elétrica e Instalação' },
        { label: 'Oficina', href: '/manutencao', desc: 'Esquemas e Conserto' },
    ];

    return (
        <>
            <header className="sticky top-0 z-[60] bg-slate-900/90 backdrop-blur-md border-b-4 border-amber-600 shadow-2xl overflow-hidden transition-all">
                <div className="absolute inset-0 bg-diamond-plate opacity-10 pointer-events-none"></div>
                <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-10 transition-all">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <Logo light className="scale-90 md:scale-100 origin-left" />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-xs font-black uppercase tracking-widest text-slate-300 hover:text-amber-500 transition-colors font-teko text-lg"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 text-amber-500 hover:bg-slate-700 transition-colors active:scale-95"
                        aria-label="Abrir Menu"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </header>

            {/* OVERLAY MENU */}
            <div className={cn(
                "fixed inset-0 z-[55] bg-slate-950/95 backdrop-blur-md transition-all duration-500 md:duration-300",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="container mx-auto px-4 pt-32 pb-20 h-full flex flex-col justify-between">
                    <nav className="space-y-6">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center justify-between group p-4 rounded-2xl border border-white/5 hover:border-amber-500/30 hover:bg-white/5 transition-all text-left",
                                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                                )}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div>
                                    <span className="block text-4xl font-black font-teko uppercase text-white group-hover:text-amber-500 transition-colors tracking-tight">
                                        {item.label}
                                    </span>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.desc}</span>
                                </div>
                                <ChevronRight className="w-8 h-8 text-slate-700 group-hover:text-amber-500 transition-all transform group-hover:translate-x-2" />
                            </Link>
                        ))}
                    </nav>

                    <div className={cn(
                        "mt-10 p-6 bg-amber-500 rounded-3xl border-4 border-black/10 transition-all duration-700 delay-300",
                        isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    )}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block text-xl font-black font-teko uppercase text-slate-950 leading-none">Dúvida Técnica?</span>
                                <span className="text-[10px] font-bold text-slate-900/60 uppercase tracking-widest leading-none">Fale com o Tiago agora</span>
                            </div>
                        </div>
                        <Link
                            href="https://wa.me/550000000000"
                            className="w-full flex items-center justify-center gap-2 py-4 bg-slate-950 text-white rounded-2xl font-black font-teko text-xl uppercase tracking-widest hover:bg-slate-800 transition-colors"
                        >
                            <Phone className="w-5 h-5" /> Iniciar Protocolo
                        </Link>
                    </div>
                </div>

                {/* Background texture for menu */}
                <div className="absolute top-0 right-0 w-full h-full bg-diamond-plate opacity-[0.03] pointer-events-none"></div>
            </div>
        </>
    );
}
