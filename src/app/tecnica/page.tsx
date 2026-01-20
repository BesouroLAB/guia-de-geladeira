import Image from 'next/image';
import Link from 'next/link';
import { BatteryMedium, ChevronRight, Zap, Info, ShieldCheck, Sun, Lightbulb, ZapOff } from 'lucide-react';
import { getAllPosts } from '@/lib/posts';
import { ScrewHead } from '@/components/ui/ScrewHead';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guia Técnico: Instalação Elétrica e Consumo 12v/24v',
    description: 'Manual completo de instalação elétrica para geladeiras automotivas. Tabelas de bitola de fio, cálculo de bateria e esquemas de ligação.',
};

export default function TecnicaPage() {
    const manuals = getAllPosts('reviews').filter(post => post.cluster === 'tecnica');

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900 text-white border-b-4 border-amber-500">
                <Image
                    src="/img/tecnica-hero.png"
                    alt="Esquema técnico e manutenção"
                    fill
                    priority
                    className="object-cover object-center opacity-30 transform scale-110 grayscale-[0.5]"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-slate-950/30 to-slate-900"></div>
                <div className="absolute inset-0 bg-diamond-plate opacity-5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-500 rounded text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-fit border border-amber-500/30">
                            <Lightbulb className="w-4 h-4" /> Inteligência Elétrica
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black font-teko uppercase leading-[0.85] tracking-tighter mb-6">
                            Guia <span className="text-amber-500 text-shadow-lg">Técnico</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                            Não basta ter a geladeira, precisa saber instalar. Aprenda tudo sobre voltagem, bitola de fio e eficiência energética para não ficar no escuro.
                        </p>
                    </div>
                </div>
            </section>

            {/* TACTICAL TOPICS GRID */}
            <div className="container mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {manuals.map((post) => (
                        <div key={post.slug} className="group relative bg-white rounded-[2rem] border-2 border-slate-200 p-10 hover:border-amber-500 transition-all hover:shadow-2xl overflow-hidden shadow-metallic">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-500 shadow-xl shrink-0 group-hover:scale-110 transition-transform">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-3xl font-black font-teko uppercase tracking-tight">{post.title}</h3>
                                        <span className="bg-slate-100 text-slate-500 text-[9px] font-black px-2 py-0.5 rounded uppercase">Manual #{post.id}</span>
                                    </div>
                                    <p className="text-slate-500 leading-relaxed mb-6 font-medium">{post.excerpt}</p>

                                    <Link href={`/tecnica/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-amber-600 transition-colors">
                                        Estudar Manual <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            <ScrewHead className="absolute top-4 right-4 opacity-10" />
                        </div>
                    ))}
                </div>

                {/* Technical Deep Dive Article */}
                <div className="mt-20 bg-slate-900 rounded-[3rem] p-1 shadow-2xl relative overflow-hidden overflow-hidden">
                    <div className="absolute inset-0 bg-diamond-plate opacity-5"></div>
                    <div className="bg-slate-900 rounded-[2.9rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 border-2 border-slate-800">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-1 bg-amber-500"></div>
                                <span className="text-amber-500 font-black font-teko text-xl uppercase tracking-widest">Protocolo de Instalação</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black font-teko text-white uppercase leading-[0.9] mb-8">
                                O Erro de <span className="text-amber-500">Bitola</span> que Queima sua Placa
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Mais de 60% das falhas em geladeiras no trecho são causadas por fiação fina demais. Quando o compressor tenta dar a partida, a voltagem cai e o painel acusa erro E1. Aprenda a bitola correta para cada distância.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-amber-500 text-slate-900 font-black font-teko text-xl uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-all shadow-xl">
                                    Calcular Bitola de Fio
                                </button>
                                <button className="px-8 py-4 bg-slate-800 text-white font-black font-teko text-xl uppercase tracking-widest rounded-xl hover:bg-slate-700 transition-all">
                                    Ver Tabela Completa
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/3 shrink-0 relative">
                            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative bg-slate-800 border-4 border-slate-700 p-8 rounded-3xl shadow-inner-metal aspect-square flex flex-col items-center justify-center text-center">
                                <BatteryMedium className="w-24 h-24 text-amber-500 mb-6" />
                                <div className="text-5xl font-black font-teko text-white uppercase leading-none mb-2">12.8V</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Leitura de Tensão Ideal</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6 py-12 flex justify-center">
                    <Link href="/blog" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-900 font-black font-teko text-xl uppercase tracking-widest hover:border-amber-500 hover:text-amber-600 transition-all shadow-metallic group">
                        Explorar Todos os Artigos no Blog <ChevronRight className="w-6 h-6 text-amber-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <Footer />
            <BottomNav />
        </main>
    );
}
