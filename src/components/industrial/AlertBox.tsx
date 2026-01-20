import { AlertTriangle, Info, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrewHead } from "@/components/ui/ScrewHead";

interface AlertBoxProps {
    type: "warning" | "info";
    title: string;
    children: React.ReactNode;
}

export function AlertBox({ type, title, children }: AlertBoxProps) {
    const isWarning = type === "warning";
    const Icon = isWarning ? AlertTriangle : Info;

    return (
        <div className={cn(
            "relative p-6 rounded-lg border-2 my-10 industrial-shadow overflow-hidden",
            isWarning
                ? "bg-yellow-50 border-yellow-500 text-yellow-900"
                : "bg-blue-50 border-blue-500 text-blue-900"
        )}>
            {/* Texture Background */}
            <div className="absolute inset-0 bg-carbon-fiber opacity-[0.03]"></div>

            {/* Corner Screws (Subtle) */}
            <ScrewHead className="absolute top-2 left-2 scale-50 opacity-30" />
            <ScrewHead className="absolute top-2 right-2 scale-50 opacity-30" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3 font-black font-teko uppercase tracking-widest text-lg border-b border-black/5 pb-2">
                    <Icon className={cn("w-6 h-6", isWarning ? "text-yellow-600" : "text-blue-600")} />
                    {title}
                </div>
                <div className="text-sm leading-relaxed font-medium relative pl-6">
                    <Quote className="absolute top-0 left-0 w-4 h-4 opacity-20" />
                    {children}
                </div>
            </div>

            {/* Industrial side stripe */}
            <div className={cn(
                "absolute top-0 bottom-0 right-0 w-1",
                isWarning ? "bg-yellow-500" : "bg-blue-500"
            )}></div>
        </div>
    );
}
