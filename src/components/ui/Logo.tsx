import { Snowflake, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3 group select-none", className)}>
            {/* Marcante & Criativo Icon: stylized cooling box symbol */}
            <div className="relative">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg border-2 border-amber-500 overflow-hidden group-hover:scale-105 transition-transform">
                    {/* Subtle diamond plate inside icon */}
                    <div className="absolute inset-0 bg-diamond-plate opacity-20"></div>

                    {/* Creative Icon Element: Truck merging with cooling snowflake */}
                    <div className="relative flex flex-col items-center justify-center">
                        <Snowflake className="w-8 h-8 text-amber-500 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute -bottom-1 bg-slate-900 px-1">
                            <Truck className="w-4 h-4 text-amber-500" />
                        </div>
                    </div>
                </div>

                {/* Screw details on the icon box */}
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-slate-400 rounded-full shadow-inner"></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-slate-400 rounded-full shadow-inner"></div>
            </div>

            <div className="flex flex-col">
                <h1 className={cn(
                    "text-2xl md:text-3xl font-black uppercase font-teko leading-none tracking-tight",
                    light ? "text-white" : "text-slate-900"
                )}>
                    GUIA DE <span className="text-amber-500 skew-x-[-10deg] inline-block drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)]">GELADEIRA</span>
                </h1>
                <div className="flex items-center gap-2">
                    <div className="h-[2px] w-6 bg-amber-500"></div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-bold">
                        Mestre do Trecho
                    </span>
                </div>
            </div>
        </div>
    );
}
