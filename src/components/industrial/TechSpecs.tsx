import { cn } from "@/lib/utils";
import { ScrewHead } from "@/components/ui/ScrewHead";

interface TechSpecsProps {
    data: { label: string; value: string }[];
}

export function TechSpecs({ data = [] }: TechSpecsProps) {
    return (
        <div className="relative overflow-hidden rounded-xl border-2 border-slate-200 my-10 bg-white industrial-shadow">
            {/* Texture Header */}
            <div className="h-2 bg-slate-900 bg-diamond-plate opacity-20"></div>

            {/* Corner Screws */}
            <ScrewHead className="absolute top-4 left-4 scale-75 opacity-50" />
            <ScrewHead className="absolute top-4 right-4 scale-75 opacity-50" />

            <div className="p-6 pt-8">
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 flex items-center gap-2">
                    <span className="w-2 h-4 bg-amber-500"></span>
                    Ficha Técnica Detalhada
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {data?.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1 p-3 bg-slate-50/50 rounded-lg border border-slate-100 group">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none group-hover:text-blue-600 transition-colors">
                                {item.label}
                            </span>
                            <span className="text-lg font-black text-slate-900 font-teko uppercase tracking-wider leading-none">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom hazard line */}
            <div className="hazard-border-bottom opacity-20"></div>
        </div>
    );
}
