import Link from 'next/link';
import { Home, Grid, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex justify-around py-3 px-2 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] safe-area-pb">
            <Link href="/" className="flex flex-col items-center text-amber-500 group">
                <Home className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-teko">Início</span>
            </Link>
            <Link href="/categorias" className="flex flex-col items-center text-slate-400 hover:text-white transition-colors group">
                <Grid className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-teko">Categorias</span>
            </Link>
            <Link href="/ofertas" className="flex flex-col items-center text-slate-400 hover:text-white transition-colors group relative">
                <div className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-slate-900 shadow-sm animate-pulse">
                    !
                </div>
                <ShoppingBag className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-teko">Ofertas</span>
            </Link>
        </nav>
    );
}
