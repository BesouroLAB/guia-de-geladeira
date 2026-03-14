import { Play, Youtube } from 'lucide-react';

interface VideoPlaceholderProps {
    title: string;
    description?: string;
}

export function VideoPlaceholder({ title, description }: VideoPlaceholderProps) {
    return (
        <div className="my-12 relative group cursor-pointer">
            {/* Outer Frame */}
            <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl transition-all group-hover:border-amber-500/50">
                
                {/* Static/Noise overlay effect */}
                <div className="absolute inset-0 bg-diamond-plate opacity-20 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-20"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-30 p-6 text-center">
                    <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-500 mb-6">
                        <Play className="w-10 h-10 text-slate-900 fill-current ml-1" />
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-black font-teko text-white uppercase tracking-wider mb-2 drop-shadow-lg">
                        {title}
                    </h4>
                    
                    {description && (
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest max-w-md">
                            {description}
                        </p>
                    )}
                </div>

                {/* Bottom Bar Styling */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-500 w-1/3 shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
                </div>

                {/* YouTube Icon Badge */}
                <div className="absolute top-4 right-4 bg-red-600 p-2 rounded-lg shadow-lg z-30 opacity-80">
                    <Youtube className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Label below */}
            <div className="mt-4 flex items-center justify-center gap-3">
                <span className="w-8 h-[2px] bg-slate-300"></span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    Conteúdo em Vídeo (Em Breve)
                </span>
                <span className="w-8 h-[2px] bg-slate-300"></span>
            </div>
        </div>
    );
}
