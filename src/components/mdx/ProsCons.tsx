import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProsConsProps {
    pros: string[];
    cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6 my-8">
            {/* Pros */}
            <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-metallic relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <h4 className="text-xl font-black font-teko uppercase tracking-tight text-slate-900 mb-6 border-b border-slate-50 pb-2 flex items-center gap-2">
                    <div className="w-2 h-4 bg-red-500"></div>
                    Pontos Fracos
                </h4>
                <ul className="space-y-3">
                    {pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-900 leading-relaxed">
                            <span className="block w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                            {pro}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
                <h4 className="flex items-center gap-2 text-red-800 font-bold uppercase font-oswald mb-4 border-b border-red-200 pb-2">
                    <XCircle className="w-5 h-5" />
                    Pontos Negativos
                </h4>
                <ul className="space-y-3">
                    {cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-900 leading-relaxed">
                            <span className="block w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                            {con}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
