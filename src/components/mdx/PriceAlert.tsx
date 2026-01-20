import { AlertTriangle, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceAlertProps {
    price?: string;
    buttonLabel?: string;
    link: string;
}

export function PriceAlert({ price, buttonLabel = "VER PREÇO ATUAL", link }: PriceAlertProps) {
    return (
        <div className="group relative bg-slate-900 rounded-xl p-6 shadow-xl my-8 overflow-hidden">
            {/* Background Texture Effect */}
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center shrink-0 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-amber-500 font-black text-[10px] tracking-[0.3em] uppercase mb-1 flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                            Oferta Detectada
                        </p>
                        {price ? (
                            <p className="text-3xl font-black font-teko text-white leading-none">
                                R$ {price} <span className="text-xs font-bold text-slate-500 tracking-wider">+ FRETE GRÁTIS</span>
                            </p>
                        ) : (
                            <p className="text-2xl font-black font-teko text-white uppercase leading-none tracking-tight">Verificar Disponibilidade</p>
                        )}
                    </div>
                </div>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-10 py-5 bg-amber-500 text-black font-black font-teko text-2xl uppercase rounded-xl shadow-[0_6px_0_rgb(180,83,9)] hover:bg-amber-400 hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 border-2 border-black/10 tracking-widest"
                >
                    <ShoppingCart className="w-6 h-6" />
                    {buttonLabel}
                </a>

            </div>
        </div>
    );
}
