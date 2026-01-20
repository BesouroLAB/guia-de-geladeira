import Link from 'next/link';
import { Truck, ChevronRight, Star, ShieldCheck, Filter, ArrowDownWideNarrow } from 'lucide-react';
import { ScrewHead } from '@/components/ui/ScrewHead';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Geladeiras para Caminhão: Catálogo e Análises Técnicas (2026)',
    description: 'Compare as melhores geladeiras 24v para Scania, Volvo e Mercedes. Testes de consumo, durabilidade e capacidade de resfriamento. Resfriar vs Elber.',
};

export default function CaminhaoPage() {
    const reviews = getAllPosts('reviews').filter(post => post.cluster === 'caminhao');

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            <Header />

            {/* Hero Section - Cluster Specific */}
            <section className="relative bg-slate-900 text-white pt-20 pb-40 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/caminhao-hero.png')] bg-cover bg-center opacity-40 transform scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-slate-950/20 to-slate-50"></div>
                <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500 text-slate-950 rounded font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-xl">
                        <Truck className="w-4 h-4" /> Linha Pesada (Caminhão)
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-teko uppercase leading-[0.9] tracking-tighter mb-6 drop-shadow-2xl">
                        Geladeiras para <span className="text-amber-500">Caminhão</span>
                    </h1>
                    <p className="text-slate-300 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                        O guia definitivo para Scania, Volvo, Mercedes e cavalos mecânicos. Testes de temperatura real, consumo de bateria e durabilidade no asfalto brasileiro.
                    </p>
                </div>
            </section>

            {/* CONTENT GRID */}
            <div className="container mx-auto px-6 -mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Sidebar / Filters */}
                    <aside className="lg:col-span-3 space-y-6">
                        <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-metallic relative overflow-hidden">
                            <ScrewHead className="absolute top-2 right-2 opacity-30" />
                            <h3 className="text-xl font-black font-teko uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Filter className="w-5 h-5 text-amber-500" /> Filtro de Busca
                            </h3>
                            <div className="space-y-4">
                                <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-black font-teko uppercase tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all text-sm">Top 3 do Trecho</button>
                                <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-slate-200 transition-all text-sm">Resfriar (7)</button>
                                <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-slate-200 transition-all text-sm">Elber (4)</button>
                                <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-slate-200 transition-all text-sm">Maxiclima (1)</button>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden border-b-4 border-amber-500 shadow-2xl">
                            <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>
                            <h4 className="text-2xl font-black font-teko uppercase leading-none mb-4">Manual de Economia</h4>
                            <p className="text-xs text-slate-300 mb-6 leading-relaxed">Aprenda a configurar sua geladeira para economizar 15% de bateria.</p>
                            <Link href="/manual" className="block text-center py-3 bg-amber-500 text-slate-950 rounded font-black font-teko uppercase tracking-widest text-sm hover:scale-105 transition-transform">Baixar Agora</Link>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-metallic flex items-center justify-between group">
                            <div>
                                <h4 className="font-black font-teko uppercase text-xl leading-none">Blog Técnico</h4>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Todas as matérias</p>
                            </div>
                            <Link href="/blog" className="p-2 bg-slate-900 text-amber-500 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </aside>

                    {/* Review List */}
                    <div className="lg:col-span-9 space-y-8">
                        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
                            <h2 className="text-3xl font-black font-teko uppercase tracking-tight text-slate-900">Análises Técnicas</h2>
                            <div className="flex items-center gap-2 font-bold text-[10px] text-slate-400 uppercase tracking-widest">
                                <ArrowDownWideNarrow className="w-4 h-4 text-amber-500" /> Ordenar: Mais Recentes
                            </div>
                        </div>

                        {reviews.map((post) => (
                            <Link key={post.slug} href={`/caminhao/${post.slug}`} className="block group">
                                <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-metallic overflow-hidden flex flex-col md:flex-row transition-all hover:scale-[1.01] hover:border-amber-500/50">
                                    <div className="md:w-64 h-48 bg-slate-100 relative shrink-0 overflow-hidden inset-metal">
                                        <div className="absolute inset-0 bg-carbon-fiber opacity-[0.05]"></div>
                                        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
                                            <div className="bg-slate-900 text-amber-500 font-black font-teko text-[10px] px-2 py-0.5 rounded shadow-lg uppercase tracking-widest">#{post.id} Analisado</div>
                                            {post.isPillar && (
                                                <div className="bg-amber-500 text-slate-950 font-black font-teko text-[10px] px-2 py-0.5 rounded shadow-lg uppercase tracking-widest animate-pulse">🔥 Destaque</div>
                                            )}
                                        </div>
                                        {/* <Image src={post.image_url} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3">
                                                <Star className="w-4 h-4 fill-current" /> Nota {post.score || '9.0'} / 10
                                            </div>
                                            <h3 className="text-3xl font-black font-teko uppercase leading-tight mb-3 group-hover:text-amber-500 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-50">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{formatDate(post.date)}</span>
                                            <div className="flex items-center gap-1 text-xs font-black text-slate-900 uppercase tracking-widest">
                                                Ler Review <ChevronRight className="w-4 h-4 text-amber-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
            <BottomNav />
        </main>
    );
}
