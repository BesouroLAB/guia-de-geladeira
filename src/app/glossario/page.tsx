import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { BottomNav } from "@/components/ui/BottomNav";
import { GlossaryList } from "@/components/industrial/GlossaryList";
import { BookOpen, Radio, Truck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Glossário do Trecho: Gírias e Termos de Geladeira | Guia de Geladeira',
    description: 'Entenda o papo de estradeiro. De QSJ a Quadrivolt, nosso glossário visual explica as gírias dos caminhoneiros e termos técnicos de refrigeração.',
};

export default function GlossaryPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <Header />

            {/* HERO SECTION */}
            <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-diamond-plate opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
                            <Radio className="w-4 h-4 text-amber-500 animate-pulse" />
                            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">Frequência do Trecho</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white font-teko leading-none mb-6 uppercase tracking-tight">
                            Glossário <span className="text-amber-500 uppercase">Visual</span>
                        </h1>

                        <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Para quem vive no tapetão, comunicação é tudo. Entenda as gírias do rádio PX e os termos técnicos que todo dono de geladeira precisa saber.
                        </p>
                    </div>
                </div>

                {/* DECORATIVE TRUCK */}
                <div className="absolute -bottom-10 -right-20 opacity-10 hidden lg:block pointer-events-none">
                    <Truck size={400} className="text-white" />
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <GlossaryList />
                </div>
            </section>

            {/* PERSONA QUOTE */}
            <section className="py-12 bg-white border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 shadow-xl border-4 border-slate-800">
                            <BookOpen className="w-8 h-8" />
                        </div>
                    </div>
                    <p className="text-2xl font-black font-teko uppercase text-slate-800 tracking-wide italic leading-tight">
                        &quot;No trecho, falar a língua certa é o que separa o estradeiro profissional do motorista de passeio. Fique no QAP!&quot;
                    </p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-4">— Equipe Guia de Geladeira</p>
                </div>
            </section>

            <Footer />
            <BottomNav />
        </main>
    );
}
