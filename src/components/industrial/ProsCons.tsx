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
            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                <h4 className="flex items-center gap-2 text-green-800 font-bold uppercase font-oswald mb-4 border-b border-green-200 pb-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Pontos Positivos
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
