import { ShoppingCart, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { ScrewHead } from '@/components/ui/ScrewHead';

interface BestOfferProps {
    productName: string;
    price?: string;
    originalPrice?: string;
    link: string;
    store?: string;
}

export function BestOffer({ productName, price, originalPrice, link, store = "Amazon.com.br" }: BestOfferProps) {
    return (
        <div className="mt-12 relative overflow-hidden bg-slate-100 rounded-2xl border-2 border-slate-300 shadow-metallic group">
            {/* Texture Background */}
            <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

            {/* Corner Screws */}
            <ScrewHead className="absolute top-2 left-2 scale-75 opacity-50" />
            <ScrewHead className="absolute top-2 right-2 scale-75 opacity-50" />
            <ScrewHead className="absolute bottom-2 left-2 scale-75 opacity-50" />
            <ScrewHead className="absolute bottom-2 right-2 scale-75 opacity-50" />

            {/* Header Flare */}
            <div className="h-2 w-full bg-[repeating-linear-gradient(-45deg,#f59e0b,#f59e0b_10px,#000_10px,#000_20px)] opacity-50"></div>

            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                {/* Product Info */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-sm mb-4">
                        <Zap className="w-3 h-3 fill-current" /> Melhor Oferta Hoje
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black font-teko uppercase text-slate-900 leading-none mb-4">
                        {productName}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-3 text-slate-500">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                        <span className="text-xs font-bold uppercase tracking-widest">Loja Segura: {store}</span>
                    </div>
                </div>

                {/* Pricing & CTA */}
                <div className="relative bg-white p-8 rounded-2xl shadow-xl md:w-80 w-full flex flex-col items-center border border-slate-200">
                    {originalPrice && (
                        <span className="text-sm font-bold text-slate-400 line-through mb-1">
                            De {originalPrice}
                        </span>
                    )}
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">Por apenas:</span>
                        <span className="text-5xl font-black text-slate-950 font-teko leading-none mb-2">
                            {price || "Ver Preço"}
                        </span>
                    </div>

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-6 py-5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-black font-teko text-3xl uppercase tracking-[0.1em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_10px_0_#b45309] hover:shadow-[0_5px_0_#b45309] hover:translate-y-[5px]"
                    >
                        Ver na Loja <ExternalLink className="w-6 h-6 border-l-2 border-slate-950/40 pl-1" />
                    </a>

                    <span className="mt-6 text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">
                        Estoque Limitado. Preço sujeito à alteração.
                    </span>
                </div>
            </div>
        </div>
    );
}
