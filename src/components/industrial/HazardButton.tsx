import { ChevronRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface HazardButtonProps {
    text: string;
    subtext?: string;
    link: string;
    size?: "normal" | "large";
}

export function HazardButton({ text, subtext, link, size = "normal" }: HazardButtonProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group relative block w-full bg-amber-500 text-black rounded-xl shadow-[0_8px_0_rgb(146,64,14)] hover:shadow-[0_4px_0_rgb(146,64,14)] hover:translate-y-[4px] active:translate-y-[8px] active:shadow-none transition-all overflow-hidden my-12 border-2 border-black/10",
                size === "large" ? "py-7 px-10" : "py-5 px-8"
            )}
        >
            {/* High Contrast Hazard Stripes Sides */}
            <div className="absolute top-0 bottom-0 left-0 w-5 bg-[repeating-linear-gradient(-45deg,#000,#000_10px,transparent_10px,transparent_20px)] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute top-0 bottom-0 right-0 w-5 bg-[repeating-linear-gradient(-45deg,#000,#000_10px,transparent_10px,transparent_20px)] opacity-20 group-hover:opacity-30 transition-opacity"></div>

            {/* Inset shadow for depth */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/40"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-black/20"></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <span className={cn(
                    "font-black font-teko uppercase tracking-tight flex items-center gap-4 leading-none",
                    size === "large" ? "text-4xl md:text-5xl" : "text-2xl"
                )}>
                    {text} <ChevronRight className={cn("transition-transform group-hover:translate-x-2", size === "large" ? "w-10 h-10" : "w-6 h-6")} />
                </span>
                {subtext && (
                    <div className="flex items-center gap-2 mt-2 bg-black/5 px-3 py-0.5 rounded-full border border-black/5">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em]">
                            {subtext}
                        </span>
                    </div>
                )}
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 bg-diamond-plate opacity-[0.03] pointer-events-none"></div>
        </a>
    );
}
