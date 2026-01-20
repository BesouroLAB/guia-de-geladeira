import { Metadata } from 'next';
import Link from 'next/link';
import { Truck, ShieldCheck, Clock, Zap, Tag, ChevronRight } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { DynamicOffers } from '@/components/offers/DynamicOffers';

export const metadata: Metadata = {
    title: 'Ofertas de Geladeiras para Caminhão | Amazon e Mercado Livre 2026',
    description: 'As melhores ofertas de geladeiras automotivas. Resfriar, Elber, Black+Decker com desconto na Amazon e Mercado Livre.',
};

export default function OfertasPage() {
    return (
        <main id="main-content" className="min-h-screen bg-slate-50 pb-24">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-amber-500 via-amber-400 to-orange-500 pt-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-diamond-plate opacity-10"></div>
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-500 px-4 py-2 rounded text-[11px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl">
                            <Tag className="w-4 h-4" /> Ofertas Exclusivas
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-teko uppercase leading-[0.9] tracking-tighter text-slate-900 mb-6 drop-shadow-sm">
                            Economize no <span className="text-white drop-shadow-lg">Trecho</span>
                        </h1>
                        <p className="text-lg text-slate-900/80 font-medium max-w-xl mx-auto mb-8">
                            As melhores geladeiras automotivas com preços imbatíveis. Ofertas verificadas na Amazon e Mercado Livre.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider shadow-lg">
                                <Truck className="w-4 h-4 text-blue-600" /> Frete Grátis Prime
                            </div>
                            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider shadow-lg">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> Garantia do Vendedor
                            </div>
                            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider shadow-lg">
                                <Clock className="w-4 h-4 text-amber-600" /> Preços Atualizados
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="container mx-auto px-6 -mt-16 relative z-20">

                {/* Lightning Deals Banner */}
                <div className="bg-red-600 text-white rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Zap className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <div>
                            <h3 className="font-black font-teko text-2xl uppercase tracking-wider">Ofertas em Tempo Real</h3>
                            <p className="text-red-100 text-sm">Preços buscados diretamente das lojas. Atualize para ver os valores!</p>
                        </div>
                    </div>
                    <Link
                        href="#produtos"
                        className="relative z-10 flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-black font-teko text-lg uppercase tracking-wider hover:bg-red-50 transition-colors"
                    >
                        Ver Ofertas <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Dynamic Products Section */}
                <section id="produtos">
                    <DynamicOffers />
                </section>

                {/* Affiliate Disclaimer */}
                <div className="mt-12 bg-slate-100 rounded-xl p-6 text-center border border-slate-200">
                    <p className="text-xs text-slate-500 leading-relaxed">
                        <strong>Aviso:</strong> Este site participa do Programa de Associados da Amazon e do Mercado Livre. Links de afiliado geram uma pequena comissão quando você compra,
                        sem custo adicional para você. Os preços e disponibilidade podem variar. As imagens dos produtos são meramente ilustrativas.
                    </p>
                </div>

            </div>

            <Footer />
            <BottomNav />
        </main>
    );
}
