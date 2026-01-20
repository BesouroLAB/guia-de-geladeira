import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ChevronRight, Star, Filter, ArrowDownWideNarrow, Search, AlertTriangle } from 'lucide-react';
import { ScrewHead } from '@/components/ui/ScrewHead';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guia de Compra: Geladeira de Caminhão Usada e Seminova (2026)',
    description: 'Aprenda a inspecionar geladeiras usadas antes de comprar. Testes de compressor, gás e módulo. Fuja de ciladas na OLX e grupos.',
};

export default function UsadasPage() {
    // Read from 'reviews' folder and filter by cluster
    const reviews = getAllPosts('reviews').filter(post => post.cluster === 'usadas');

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            <Header />

            {/* Hero Section - Cluster Specific */}
            <section className="relative bg-orange-900 text-white pt-20 pb-40 overflow-hidden">
                <Image
                    src="/img/usadas-hero.png"
                    alt="Pátio com caminhões"
                    fill
                    priority
                    className="object-cover object-center opacity-40 transform scale-105"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-slate-950/20 to-slate-50"></div>
                <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-slate-950 rounded font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-xl">
                        <ShoppingBag className="w-4 h-4" /> Mercado de Oportunidades
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-teko uppercase leading-[0.9] tracking-tighter mb-6 drop-shadow-2xl">
                        Geladeiras <span className="text-yellow-400">Usadas</span>
                    </h1>
                    <p className="text-slate-100 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                        O guia anti-golpe. Saiba como testar compressor, gás e módulo antes de fechar negócio. O barato pode sair caro.
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
                                <Filter className="w-5 h-5 text-amber-500" /> O que olhar?
                            </h3>
                            <div className="space-y-4">
                                <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-black font-teko uppercase tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all text-sm">Inspeção Completa</button>
                                <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-slate-200 transition-all text-sm">Preços de Tabela</button>
                                <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-slate-200 transition-all text-sm">Auto-Elétricas</button>
                            </div>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-2xl text-white relative overflow-hidden border-b-4 border-yellow-500 shadow-2xl">
                            <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>
                            <h4 className="text-2xl font-black font-teko uppercase leading-none mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-6 h-6 text-yellow-500" /> Cuidado!
                            </h4>
                            <p className="text-xs text-slate-300 mb-6 leading-relaxed">Nunca compre geladeira sem ver a grade esquentar. "Só botar gás" é cilada.</p>
                            <Link href="/usadas/geladeira-caminhao-usada-guia-inspecao" className="block text-center py-3 bg-yellow-500 text-slate-950 rounded font-black font-teko uppercase tracking-widest text-sm hover:scale-105 transition-transform">Ler Guia Completo</Link>
                        </div>
                    </aside>

                    {/* Review List */}
                    <div className="lg:col-span-9 space-y-8">
                        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
                            <h2 className="text-3xl font-black font-teko uppercase tracking-tight text-slate-900">Manuais de Inspeção</h2>
                            <div className="flex items-center gap-2 font-bold text-[10px] text-slate-400 uppercase tracking-widest">
                                <ArrowDownWideNarrow className="w-4 h-4 text-amber-500" /> Ordenar: Relevância
                            </div>
                        </div>

                        {reviews.length > 0 ? (
                            reviews.map((post) => (
                                <Link key={post.slug} href={`/usadas/${post.slug}`} className="block group">
                                    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-metallic overflow-hidden flex flex-col md:flex-row transition-all hover:scale-[1.01] hover:border-yellow-500/50">
                                        <div className="md:w-64 h-48 bg-slate-100 relative shrink-0 overflow-hidden inset-metal">
                                            <div className="absolute inset-0 bg-carbon-fiber opacity-[0.05]"></div>
                                            <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
                                                <div className="bg-slate-900 text-yellow-400 font-black font-teko text-[10px] px-2 py-0.5 rounded shadow-lg uppercase tracking-widest text-center">
                                                    {post.rating ? `Nota ${post.rating}` : 'Dica Técnica'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3">
                                                    <Search className="w-4 h-4" /> Inspeção Técnica
                                                </div>
                                                <h3 className="text-3xl font-black font-teko uppercase leading-tight mb-3 group-hover:text-yellow-600 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            </div>
                                            <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-50">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{formatDate(post.date)}</span>
                                                <div className="flex items-center gap-1 text-xs font-black text-slate-900 uppercase tracking-widest">
                                                    Ver Checklist <ChevronRight className="w-4 h-4 text-amber-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="p-12 text-center bg-white rounded-2xl border-2 border-dashed border-slate-300">
                                <p className="text-slate-500 font-medium">Nenhum artigo encontrado neste cluster ainda.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <Footer />
            <BottomNav />
        </main>
    );
}
