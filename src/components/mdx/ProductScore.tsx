import { Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductScoreProps {
    score: string;
    stars: number;
    badge?: string;
    className?: string;
}

export function ProductScore({ score, stars, badge, className }: ProductScoreProps) {
    return (
        <div className={cn("bg-white p-6 rounded-xl border-2 border-slate-200 shadow-md my-8", className)}>
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">

                {/* Score Circle */}
                <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-lg">
                        <span className="text-3xl font-black text-white font-oswald">{score}</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 uppercase font-oswald leading-tight">
                            Nota do Editor
                        </h3>
                        <div className="flex text-yellow-500 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={cn("w-5 h-5", i < stars ? "fill-current" : "text-slate-300")}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Badge (Optional) */}
                {badge && (
                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg border border-green-200">
                        <Award className="w-6 h-6 text-green-700" />
                        <span className="font-bold text-green-800 uppercase text-sm tracking-wide">
                            {badge}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
