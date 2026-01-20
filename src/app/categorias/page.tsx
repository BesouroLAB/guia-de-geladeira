import { Metadata } from 'next';
import Link from 'next/link';
import { Truck, Zap, Wrench, Lightbulb, ChevronRight, Snowflake, Tag } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { ScrewHead } from '@/components/ui/ScrewHead';

export const metadata: Metadata = {
    title: 'Categorias | Guia de Geladeira Automotiva',
    description: 'Explore todas as categorias de conteúdo: geladeiras para caminhão, portáteis 12V, guias técnicos e manutenção.',
};

const categories = [
    {
        title: 'Linha Pesada',
        subtitle: 'Geladeiras para Caminhão 24V',
        description: 'Reviews de Resfriar, Elber e Maxiclima para Scania, Volvo e Mercedes.',
        href: '/caminhao',
        icon: Truck,
        color: 'bg-amber-500',
        textColor: 'text-amber-500',
        articles: 6,
    },
    {
        title: 'Portáteis & 12V',
        subtitle: 'Mini Geladeiras e Coolers',
        description: 'Para carros, vans, camping e motoristas de aplicativo.',
        href: '/portatil',
        icon: Zap,
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        articles: 4,
    },
    {
        title: 'Guia Técnico',
        subtitle: 'Instalação e Elétrica',
        description: 'Como instalar, qual bitola de fio usar, tensão 12V vs 24V.',
        href: '/tecnica',
        icon: Lightbulb,
        color: 'bg-emerald-500',
        textColor: 'text-emerald-500',
        articles: 6,
    },
    {
        title: 'Oficina & Manutenção',
        subtitle: 'SOS Estrada',
        description: 'Conserto, assistência técnica e manutenção preventiva.',
        href: '/manutencao',
        icon: Wrench,
        color: 'bg-red-500',
        textColor: 'text-red-500',
        articles: 3,
    },
];

export default function CategoriasPage() {
    return (
        <main id="main-content" className="min-h-screen bg-slate-50 pb-24">
            <Header />

            {/* Hero */}
            <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-diamond-plate opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 px-4 py-2 rounded text-[11px] font-black uppercase tracking-[0.3em] mb-6">
                        <Snowflake className="w-4 h-4" /> Explorar Conteúdo
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black font-teko uppercase leading-[0.9] tracking-tighter text-white mb-4">
                        Categorias
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Encontre exatamente o que você precisa. De reviews a tutoriais técnicos.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <div className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.href}
                            href={cat.href}
                            className="group relative bg-white rounded-2xl border-2 border-slate-200 shadow-metallic overflow-hidden hover:border-amber-500 transition-all hover:shadow-xl"
                        >
                            <div className="p-8">
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-white shadow-lg relative overflow-hidden shrink-0`}>
                                        <div className="absolute inset-0 bg-diamond-plate opacity-20"></div>
                                        <cat.icon className="w-8 h-8 relative z-10" />
                                        <ScrewHead className="absolute -bottom-1 -right-1 scale-50 opacity-30" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h2 className="text-2xl font-black font-teko uppercase tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                                                {cat.title}
                                            </h2>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                                                {cat.articles} artigos
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                            {cat.subtitle}
                                        </p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {cat.description}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0" />
                                </div>
                            </div>
                            <div className={`h-1 ${cat.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                        </Link>
                    ))}
                </div>

                {/* Ofertas Banner */}
                <Link
                    href="/ofertas"
                    className="block mt-8 relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 overflow-hidden group hover:shadow-2xl transition-shadow"
                >
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]"></div>
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <Tag className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-teko uppercase tracking-tight text-slate-900">
                                    Ofertas do Dia
                                </h3>
                                <p className="text-slate-900/70 text-sm">
                                    Descontos na Amazon e Mercado Livre atualizados diariamente
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-8 h-8 text-slate-900/50 group-hover:text-slate-900 group-hover:translate-x-2 transition-all" />
                    </div>
                </Link>
            </div>

            <Footer />
            <BottomNav />
        </main>
    );
}
