import { Star, Award, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrewHead } from "@/components/ui/ScrewHead";

interface ProductScoreProps {
    score: string;
    stars: number;
    badge?: string;
    summary?: string;
    className?: string;
}

export function ProductScore({ score, stars, badge, summary, className }: ProductScoreProps) {
    return (
        <div className={cn("relative bg-white p-6 rounded-xl border border-slate-200 shadow-metallic my-10 overflow-hidden group", className)}>

            {/* Industrial Metallic Border Effect */}
            <div className="absolute inset-0 border-4 border-slate-300 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity" style={{ borderImage: 'linear-gradient(to bottom right, #cbd5e1, #f8fafc, #94a3b8) 1' }}></div>

            {/* Corner Screws */}
            <ScrewHead className="absolute top-2 left-2" />
            <ScrewHead className="absolute top-2 right-2" />
            <ScrewHead className="absolute bottom-2 left-2" />
            <ScrewHead className="absolute bottom-2 right-2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between mb-4">

                {/* Score Gauge / Circle */}
                <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 bg-slate-950 rounded-2xl flex flex-col items-center justify-center border-2 border-amber-500 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform">
                        {/* Subtle Diamond Plate Texture */}
                        <div className="absolute inset-0 bg-diamond-plate opacity-20"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>

                        <span className="relative z-10 text-4xl font-black text-amber-500 font-teko leading-none tracking-tighter">{score}</span>
                        <span className="relative z-10 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Pontos</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 uppercase font-teko tracking-tight leading-none mb-2">
                            Métrica de Performance
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="flex text-amber-500">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn("w-5 h-5", i < (stars || Math.round(Number(score) / 2)) ? "fill-current" : "text-slate-200")}
                                    />
                                ))}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-2">
                                Calibrado em 2026
                            </span>
                        </div>
                    </div>
                </div>

                {/* Badge (Industrial Tag) */}
                {badge && (
                    <div className="flex items-center gap-3 bg-slate-900 text-amber-500 px-6 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em] border-2 border-amber-500/20 shadow-xl group-hover:border-amber-500/50 transition-colors">
                        <Award className="w-5 h-5 animate-pulse" />
                        {badge}
                    </div>
                )}
            </div>

            {/* Summary Text (Curated Insight) */}
            {summary && (
                <div className="mt-6 pt-4 border-t border-slate-100 relative">
                    <span className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Veredito do Trecho
                    </span>
                    <p className="italic text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-amber-500">
                        &quot;{summary}&quot;
                    </p>
                </div>
            )}
        </div>
    );
}
