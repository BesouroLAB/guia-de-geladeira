import Image from 'next/image';
import Link from 'next/link';
import { ChefHat, ChevronRight, Star, ArrowDownWideNarrow, Warehouse, Truck, Hammer } from 'lucide-react';
import { ScrewHead } from '@/components/ui/ScrewHead';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Caixa de Cozinha para Caminhão: O Guia Completo (Madeira, Aço, Resfriar)',
    description: 'Tudo sobre Caixas de Cozinha. Projetos em madeira, modelos prontos da Resfriar, Bepo e D\'Marco. Organização e praticidade para sua carreta.',
};

export default function CozinhaPage() {
    // Filter posts for this cluster
    const reviews = getAllPosts('reviews').filter(post => post.cluster === 'cozinha');

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white pt-20 pb-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500 text-slate-900 rounded font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-xl">
                        <ChefHat className="w-4 h-4" /> Gourmet da Estrada
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-teko uppercase leading-[0.9] tracking-tighter mb-6 drop-shadow-2xl">
                        Cozinha de <span className="text-amber-500">Caminhão</span>
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                        Não é só uma caixa, é o seu restaurante particular. Analisamos as melhores caixas de boia, fogareiros e kits completos para carreta.
                    </p>
                </div>
            </section>

            {/* CONTENT GRID */}
            <div className="container mx-auto px-6 -mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Sidebar */}
                    <aside className="lg:col-span-3 space-y-6">
                        <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-metallic relative overflow-hidden">
                            <ScrewHead className="absolute top-2 right-2 opacity-30" />
                            <h3 className="text-xl font-black font-teko uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Warehouse className="w-5 h-5 text-amber-500" /> Materiais
                            </h3>
                            <div className="space-y-4">
                                <button className="w-full py-3 bg-amber-50 text-amber-700 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-amber-100 transition-all text-sm flex items-center justify-center gap-2">
                                    <Hammer className="w-4 h-4" /> Madeira Naval
                                </button>
                                <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-slate-200 transition-all text-sm">
                                    Aço Inox
                                </button>
                                <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-lg font-black font-teko uppercase tracking-widest hover:bg-slate-200 transition-all text-sm">
                                    Plástico Injetado
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-2xl text-white relative overflow-hidden border-b-4 border-amber-500 shadow-2xl">
                            <div className="absolute inset-0 bg-diamond-plate opacity-10 pointer-events-none"></div>
                            <h4 className="text-2xl font-black font-teko uppercase leading-none mb-4 flex items-center gap-2"><Truck className="w-6 h-6 text-amber-500" /> Instalação</h4>
                            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                                Suportes de longarina, medidas padrão para Randon/Facchini e dicas para fixação segura.
                            </p>
                            <Link href="#" className="block text-center py-3 bg-amber-500 text-slate-900 rounded font-black font-teko uppercase tracking-widest text-sm hover:bg-amber-400 transition-all">
                                Ver Gabaritos
                            </Link>
                        </div>
                    </aside>

                    {/* List */}
                    <div className="lg:col-span-9 space-y-8">
                        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
                            <h2 className="text-3xl font-black font-teko uppercase tracking-tight text-slate-900">Projetos & Reviews</h2>
                            <div className="flex items-center gap-2 font-bold text-[10px] text-slate-400 uppercase tracking-widest">
                                <ArrowDownWideNarrow className="w-4 h-4 text-amber-500" /> Recentes
                            </div>
                        </div>

                        {reviews.length > 0 ? reviews.map((post) => (
                            <Link key={post.slug} href={`/cozinha/${post.slug}`} className="block group">
                                <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-metallic overflow-hidden flex flex-col md:flex-row transition-all hover:scale-[1.01] hover:border-amber-500/50">
                                    <div className="md:w-64 h-48 bg-slate-100 relative shrink-0 overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-200"></div>
                                        {/* Placeholder for image - article template handles real image */}
                                        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
                                            <div className="bg-amber-500 text-slate-900 font-black font-teko text-[10px] px-2 py-0.5 rounded shadow-lg uppercase tracking-widest">Caixa & Cozinha</div>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3">
                                                <Star className="w-4 h-4 fill-current" /> Guia Especializado
                                            </div>
                                            <h3 className="text-3xl font-black font-teko uppercase leading-tight mb-3 group-hover:text-amber-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-50">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{formatDate(post.date)}</span>
                                            <div className="flex items-center gap-1 text-xs font-black text-slate-900 uppercase tracking-widest">
                                                Ler Matéria <ChevronRight className="w-4 h-4 text-amber-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="p-20 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-center">
                                <p className="text-slate-400 font-bold uppercase tracking-widest">Nenhuma review de cozinha catalogada ainda.</p>
                                <p className="text-xs text-slate-300 mt-2">Em breve: Resfriar vs Bepo.</p>
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
