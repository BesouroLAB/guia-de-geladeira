import { cn } from "@/lib/utils";

interface ScrewHeadProps {
    className?: string;
}

export function ScrewHead({ className }: ScrewHeadProps) {
    return (
        <div className={cn("relative w-2.5 h-2.5 rounded-full bg-slate-400 shadow-inner overflow-hidden", className)}>
            {/* Phillips Head Cross */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="absolute w-3/4 h-[1px] bg-slate-900 rotate-45"></div>
                <div className="absolute w-3/4 h-[1px] bg-slate-900 -rotate-45"></div>
            </div>
            {/* Metallic Shine */}
            <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white opacity-40 rounded-full blur-[0.5px]"></div>
        </div>
    );
}
