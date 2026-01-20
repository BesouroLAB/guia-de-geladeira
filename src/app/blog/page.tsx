import Link from 'next/link';
import { BookOpen, ChevronRight, Calendar, Star, ArrowDownWideNarrow } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog Técnico e Reviews | Guia de Geladeira',
    description: 'Acompanhe as últimas notícias, reviews e dicas técnicas sobre refrigeração automotiva e portátil.',
};

export default function BlogPage() {
    const posts = getAllPosts('reviews').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const clusterColors: Record<string, string> = {
        caminhao: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
        portatil: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        tecnica: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        manutencao: 'text-red-500 bg-red-500/10 border-red-500/20',
    };

    const clusterNames: Record<string, string> = {
        caminhao: 'Linha Pesada',
        portatil: 'Portáteis',
        tecnica: 'Guia Técnico',
        manutencao: 'Oficina (SOS)',
    };

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white pt-20 pb-40 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/hero-bg.png')] bg-cover bg-center opacity-30 transform scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-950/80 to-slate-50"></div>
                <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500 text-slate-950 rounded font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-xl">
                        <BookOpen className="w-4 h-4" /> Central de Conteúdo
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-teko uppercase leading-[0.9] tracking-tighter mb-6 drop-shadow-2xl">
                        Blog <span className="text-amber-500">Técnico</span>
                    </h1>
                    <p className="text-slate-300 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                        Análises profundas, guias de compra e dicas de manutenção para quem vive no trecho ou no camping.
                    </p>
                </div>
            </section>

            {/* BLOG LIST */}
            <div className="container mx-auto px-6 -mt-24 relative z-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
                        <h2 className="text-3xl font-black font-teko uppercase tracking-tight text-slate-900">Todos os Artigos</h2>
                        <div className="flex items-center gap-2 font-bold text-[10px] text-slate-400 uppercase tracking-widest">
                            <ArrowDownWideNarrow className="w-4 h-4 text-amber-500" /> Ordenar: Mais Recentes
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/${post.cluster || 'caminhao'}/${post.slug}`} className="block group">
                                <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-metallic overflow-hidden flex flex-col md:flex-row transition-all hover:scale-[1.01] hover:border-amber-500/50">
                                    <div className="md:w-64 h-48 bg-slate-900 relative shrink-0 overflow-hidden inset-metal">
                                        <div className="absolute inset-0 bg-diamond-plate opacity-10"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <BookOpen className="w-12 h-12 text-slate-700 opacity-20" />
                                        </div>
                                        <div className="absolute top-2 left-2 z-10">
                                            <div className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest border ${clusterColors[post.cluster || 'caminhao']}`}>
                                                {clusterNames[post.cluster || 'caminhao']}
                                            </div>
                                        </div>
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
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                <Calendar className="w-3 h-3" /> {formatDate(post.date)}
                                            </span>
                                            <div className="flex items-center gap-1 text-xs font-black text-slate-900 uppercase tracking-widest">
                                                Ler Artigo <ChevronRight className="w-4 h-4 text-amber-500" />
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
