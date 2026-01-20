import Link from 'next/link';
import { Wrench, ChevronRight, AlertTriangle, Cog, Info, FileText, Settings, Zap } from 'lucide-react';
import { ScrewHead } from '@/components/ui/ScrewHead';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Manutenção e Peças: Geladeira de Caminhão | Assistência Técnica',
    description: 'Sua geladeira parou? Guia de diagnóstico de defeitos, lista de assistências técnicas Resfriar/Elber e dicas de manutenção preventiva.',
};

export default function ManutencaoPage() {
    const manuals = getAllPosts('reviews').filter(post => post.cluster === 'manutencao');

    return (
        <main className="min-h-screen bg-slate-900 text-white font-sans pb-20">
            <Header />

            {/* Hero Section - SOS Style */}
            <section className="relative pt-20 pb-32 overflow-hidden border-b-8 border-red-600 bg-slate-900">
                <div className="absolute inset-0 bg-[url('/img/manutencao-hero.png')] bg-cover bg-center opacity-30 grayscale transform scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-slate-950/30 to-slate-950"></div>
                <div className="absolute inset-0 bg-diamond-plate opacity-[0.03]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(220,38,38,0.3)] mb-8 animate-pulse">
                            <Wrench className="w-10 h-10" />
                        </div>
                        <div className="inline-block bg-red-600/20 border border-red-500/30 px-4 py-1.5 rounded text-red-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">SOS Estrada</div>
                        <h1 className="text-5xl md:text-8xl font-black font-teko uppercase leading-none tracking-tighter mb-6">
                            Oficina do <span className="text-red-500">Trecho</span>
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                            Diagnóstico rápido para quem está parado na estrada. Descubra se é fusível, gás ou compressor antes de chamar o mecânico.
                        </p>
                    </div>
                </div>
            </section>

            {/* EMERGENCY TRIAGE CARD */}
            <div className="container mx-auto px-6 -mt-16 relative z-20">
                <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-red-500 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest w-fit mb-4">
                            <AlertTriangle className="w-4 h-4" /> Leitura Obrigatória
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black font-teko uppercase mb-4">Sua geladeira parou de gelar?</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Faça nossa triagem de 5 minutos. Muitas vezes é apenas um mau contato no plugue ou sujeira na ventoinha. Não gaste dinheiro à toa.
                        </p>
                        <Link href="/manutencao/conserto-geladeira-caminhao-guia-defeitos" className="inline-block bg-red-600 text-white font-black font-teko text-xl uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg">
                            FAZER DIAGNÓSTICO AGORA
                        </Link>
                    </div>
                    <div className="w-full md:w-1/4 bg-red-50 p-6 rounded-2xl text-center border border-red-100">
                        <span className="text-6xl block mb-4">🔧</span>
                        <p className="text-red-800 font-black font-teko text-xl uppercase">Economize até R$ 500 no conserto</p>
                    </div>
                </div>
            </div>

            {/* CONTENT GRID */}
            <div className="container mx-auto px-6 py-20">
                <h3 className="text-2xl font-black font-teko uppercase tracking-wider mb-8 text-white border-l-4 border-red-500 pl-4">Guias de Manutenção</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {manuals.map((post) => (
                        <Link key={post.slug} href={`/manutencao/${post.slug}`} className="group">
                            <div className="bg-slate-800/50 rounded-2xl border-2 border-slate-700 p-8 hover:border-red-500 transition-all hover:bg-slate-800 relative overflow-hidden h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                        <Wrench className="w-6 h-6" />
                                    </div>
                                    <span className="bg-slate-700 text-slate-300 text-[9px] font-black px-2 py-0.5 rounded uppercase">Manual #{post.id}</span>
                                    {post.isPillar && (
                                        <span className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase animate-pulse">Pilar</span>
                                    )}
                                </div>
                                <h3 className="text-xl font-black font-teko uppercase tracking-wide mb-3 group-hover:text-red-500 transition-colors flex-1">{post.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>

                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-red-500 transition-colors mt-auto">
                                    Acessar Guia <ChevronRight className="w-4 h-4" />
                                </div>

                                <ScrewHead className="absolute top-4 right-4 scale-50 opacity-20" />
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* SEO TEXT */}
                <div className="mt-20 max-w-3xl">
                    <h3 className="text-2xl font-black font-teko uppercase text-white mb-6">Quando vale a pena consertar sua geladeira de caminhão?</h3>
                    <div className="text-slate-400 space-y-4 leading-relaxed">
                        <p>
                            A regra de ouro é simples: se o <strong className="text-white">orçamento do conserto passar de 50% do valor de uma nova</strong>, não conserte. Compre uma nova com garantia e parcelamento.
                        </p>
                        <p>
                            Defeitos como ventoinha queimada (R$ 50-100) ou sensor de temperatura (R$ 100-200) são baratos e valem a pena. Já vazamento de gás no gabinete interno ou compressor queimado (R$ 800-1.500) geralmente significam perda total.
                        </p>
                        <p>
                            Nesta seção, ensinamos você a fazer o diagnóstico básico antes de chamar o técnico, encontrar a assistência técnica autorizada mais próxima e cuidar da sua geladeira para ela durar mais de 10 anos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 flex justify-center">
                <Link href="/blog" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-900 font-black font-teko text-xl uppercase tracking-widest hover:border-red-500 hover:text-red-600 transition-all shadow-metallic group">
                    Ver Todos os Artigos no Blog <ChevronRight className="w-6 h-6 text-red-500 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <Footer />
            <BottomNav />
        </main>
    );
}
