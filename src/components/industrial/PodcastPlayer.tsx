"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    Play,
    Pause,
    ShoppingCart,
    Headphones,
    X,
    Volume2,
    VolumeX,
    RotateCcw,
    RotateCw,
    FastForward,
    Rewind
} from 'lucide-react';

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
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const setAudioData = () => setDuration(audio.duration);
        const setAudioTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', () => setIsPlaying(false));

        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
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

    const skip = (amount: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime += amount;
        }
    };

    const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressBarRef.current && audioRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = pos * audioRef.current.duration;
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        setVolume(val);
        if (audioRef.current) {
            audioRef.current.volume = val;
            audioRef.current.muted = val === 0;
            setIsMuted(val === 0);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 left-4 right-4 z-[100] md:max-w-lg md:left-auto md:right-6 animate-in slide-in-from-bottom-10 duration-500">
            <div className="relative bg-slate-900 border-2 border-slate-700 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

                {/* Diamond Plate Pattern */}
                <div className="absolute inset-0 bg-diamond-plate opacity-[0.05] pointer-events-none"></div>

                {/* Top Hazard Bar */}
                <div className="h-1.5 w-full bg-[repeating-linear-gradient(-45deg,#f59e0b,#f59e0b_10px,#000_10px,#000_20px)] opacity-40"></div>

                <div className="p-5 relative z-10">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-2 right-2 p-1.5 text-slate-500 hover:text-white transition-colors bg-slate-800/50 rounded-full"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    {/* Title & Badge */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900 shadow-lg">
                            <Headphones className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-black font-teko text-xl uppercase tracking-wider leading-none text-white truncate">{title}</h4>
                            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1 italic">Podcast Exclusivo</p>
                        </div>
                    </div>

                    {/* Player Main Controls */}
                    <div className="bg-black/40 rounded-2xl p-4 border border-slate-800 shadow-inner mb-4">

                        {/* Time Display */}
                        <div className="flex justify-between items-end mb-2">
                            <span className="font-mono text-xs text-amber-500/80 tracking-tighter">{formatTime(currentTime)}</span>
                            <div className="flex flex-col items-center">
                                <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-600 animate-pulse' : 'bg-slate-700'}`}></div>
                                <span className="text-[8px] font-black text-slate-500 uppercase mt-1">Status</span>
                            </div>
                            <span className="font-mono text-xs text-slate-500">{formatTime(duration)}</span>
                        </div>

                        {/* Custom Progress Bar */}
                        <div
                            ref={progressBarRef}
                            onClick={handleProgressChange}
                            className="h-2 bg-slate-800 rounded-full cursor-pointer relative mb-6 overflow-hidden group"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-amber-500 shadow-[0_0_10px_#f59e0b] transition-all duration-100 ease-linear"
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            ></div>
                        </div>

                        {/* Controls Row */}
                        <div className="flex items-center justify-center gap-6">
                            <button onClick={() => skip(-10)} className="text-slate-400 hover:text-white transition-all transform active:scale-90">
                                <RotateCcw className="w-6 h-6" />
                                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold">10s</span>
                            </button>

                            <button
                                onClick={togglePlay}
                                className="w-14 h-14 bg-white hover:bg-amber-500 rounded-full flex items-center justify-center text-slate-900 transition-all transform active:scale-95 shadow-xl"
                            >
                                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 ml-1 fill-current" />}
                            </button>

                            <button onClick={() => skip(10)} className="text-slate-400 hover:text-white transition-all transform active:scale-90 relative">
                                <RotateCw className="w-6 h-6" />
                                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold">10s</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer: Volume & Amazon Link */}
                    <div className="flex items-center gap-4">
                        {/* Volume Control */}
                        <div className="flex items-center gap-2 group">
                            <button onClick={() => setIsMuted(!isMuted)} className="text-slate-500 hover:text-white">
                                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                        </div>

                        {/* Amazon Sticker CTA */}
                        <a
                            href={amazonLink}
                            target="_blank"
                            className="flex-1 bg-amber-500 hover:bg-amber-400 p-2.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-slate-950 shadow-lg group/btn"
                        >
                            <ShoppingCart className="w-4 h-4 group-hover/btn:scale-120 transition-transform" />
                            <span className="font-black font-teko text-lg uppercase leading-none tracking-tight">OFERTA NA AMAZON</span>
                        </a>
                    </div>
                </div>

                {/* Hidden Audio Element */}
                <audio ref={audioRef} src={audioUrl}></audio>
            </div>
        </div>
    );
};
