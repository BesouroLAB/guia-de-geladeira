import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrewHead } from '../ui/ScrewHead';

interface LinkCardProps {
    title: string;
    desc: string;
    link: string;
    cta?: string;
    className?: string;
}

export function LinkCard({ title, desc, link, cta = "LER AGORA", className }: LinkCardProps) {
    return (
        <Link href={link} className={cn("block group relative my-10", className)}>
            <div className="bg-slate-900 rounded-2xl p-8 border-2 border-slate-800 shadow-2xl overflow-hidden transition-all group-hover:border-amber-500/50 group-hover:bg-slate-800/80">
                {/* Visual Texture */}
                <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

                {/* Decorative Elements */}
                <ScrewHead className="absolute top-3 left-3 opacity-20" />
                <ScrewHead className="absolute bottom-3 right-3 opacity-20" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-[2px] bg-amber-500"></div>
                            <span className="text-amber-500 font-black font-teko text-xs uppercase tracking-[0.3em]">Review Técnico</span>
                        </div>
                        <h3 className="text-3xl font-black font-teko uppercase text-white leading-none mb-3 group-hover:text-amber-500 transition-colors">
                            {title}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
                            {desc}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 py-3 px-6 bg-amber-500 text-slate-900 rounded-xl font-black font-teko text-xl uppercase tracking-widest group-hover:bg-amber-400 transition-all shadow-[0_4px_0_rgb(180,83,9)] active:shadow-none active:translate-y-1">
                        {cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/10 to-transparent pointer-events-none"></div>
            </div>
        </Link>
    );
}
