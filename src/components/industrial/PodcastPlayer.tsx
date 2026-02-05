"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ShoppingCart, Headphones, X, Volume2, VolumeX } from 'lucide-react';

interface PodcastPlayerProps {
    audioUrl: string;
    amazonLink: string;
    title?: string;
}

export const PodcastPlayer: React.FC<PodcastPlayerProps> = ({
    audioUrl,
    amazonLink,
    title = "Dica Especial do Trecho"
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            const p = (audio.currentTime / audio.duration) * 100;
            setProgress(p || 0);
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', () => setIsPlaying(false));

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 z-[90] md:max-w-md md:left-auto md:right-6 animate-in slide-in-from-bottom-10 duration-500">
            {/* Container Principal com Glassmorphism e Borda Industrial */}
            <div className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl border-2 border-slate-700 shadow-2xl p-4 overflow-hidden group">

                {/* Diamond Plate Pattern Opacity Mask */}
                <div className="absolute inset-0 bg-diamond-plate opacity-10 pointer-events-none"></div>

                {/* Barra de Progresso Superior */}
                <div className="absolute top-0 left-0 h-1 bg-amber-500 transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{ width: `${progress}%` }}></div>

                <div className="relative z-10 flex items-center gap-4">
                    {/* Botão Play/Pause */}
                    <button
                        onClick={togglePlay}
                        className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0 group/play"
                    >
                        {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
                    </button>

                    {/* Info do Podcast */}
                    <div className="flex-1 min-w-0">
                        <h4 className="font-black font-teko text-xl uppercase tracking-wider leading-none text-white mb-1 truncate">
                            {title}
                        </h4>
                        <p className="text-amber-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 leading-none">
                            <Headphones className="w-3 h-3" /> Exclusivo para você
                        </p>
                    </div>

                    {/* Ações Rápidas */}
                    <div className="flex items-center gap-2">
                        <button onClick={toggleMute} className="p-2 text-slate-400 hover:text-white transition-colors">
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                        <button onClick={() => setIsVisible(false)} className="p-2 text-slate-400 hover:text-white transition-colors bg-slate-800/50 rounded-lg">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Linha Separadora */}
                <div className="h-px bg-slate-700/50 my-4"></div>

                {/* CTA Amazon - Sempre Visível */}
                <a
                    href={amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-amber-500 hover:bg-amber-400 p-3 rounded-xl transition-all shadow-lg group/btn active:scale-[0.98]"
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-slate-950/10 p-2 rounded-lg group-hover/btn:scale-110 transition-transform">
                            <ShoppingCart className="w-5 h-5 text-slate-950" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-950 uppercase tracking-tighter leading-none mb-1 text-center">Menor preço na</p>
                            <p className="font-black text-slate-950 font-teko text-2xl leading-none uppercase tracking-wide">COMPRAR NA AMAZON</p>
                        </div>
                    </div>
                    <div className="bg-slate-950 rounded-lg px-3 py-2 shadow-inner">
                        <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest animate-pulse">OFERTA</p>
                    </div>
                </a>

                {/* Elemento de Áudio Oculto */}
                <audio ref={audioRef} src={audioUrl}></audio>
            </div>

            {/* Glow Effect Industrial */}
            <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-amber-500/20 blur-2xl rounded-full"></div>
        </div>
    );
};
