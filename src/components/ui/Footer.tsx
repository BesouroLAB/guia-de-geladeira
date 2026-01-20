import { Snowflake, Truck, Mail, Instagram, Youtube, ShieldCheck, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/img/footer-bg.png')] bg-cover bg-center opacity-10 grayscale"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-slate-950"></div>
            {/* Texture Layer */}
            <div className="absolute inset-0 bg-diamond-plate opacity-[0.03] pointer-events-none"></div>

            {/* Top Border Hazard Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[repeating-linear-gradient(-45deg,#f59e0b,#f59e0b_10px,#000_10px,#000_20px)] opacity-30"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Logo light className="scale-110 origin-left" />
                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                            A autoridade definitiva em refrigeração automotiva no Brasil. Testamos o equipamento no limite para você não ficar na mão no trecho.
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            <Link href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Sitemaps */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-xl font-black font-teko uppercase tracking-wider text-amber-500">Navegação Técnica</h4>
                        <ul className="space-y-4">
                            <li><Link href="/caminhao" className="text-slate-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Linha Pesada</Link></li>
                            <li><Link href="/portatil" className="text-slate-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Portáteis & 12V</Link></li>
                            <li><Link href="/manutencao" className="text-slate-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Oficina & Elétrica</Link></li>
                            <li><Link href="/manual" className="text-slate-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Manuais PDF</Link></li>
                        </ul>
                    </div>

                    {/* Legal/Trust */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-xl font-black font-teko uppercase tracking-wider text-amber-500">Transparência</h4>
                        <div className="p-5 bg-slate-900 rounded-2xl border border-white/5 space-y-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-relaxed">
                                    Nossas avaliações são independentes. Quando você compra por nossos links, podemos receber uma comissão sem custo adicional.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-relaxed">
                                    Base de Operações: Ribeirão Preto - SP | Brasil
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Area */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-8 bg-amber-500"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                                Guia de Geladeira &copy; 2026 | Todos os direitos reservados
                            </span>
                        </div>
                        <span className="text-slate-700">•</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Desenvolvido por{' '}
                            <a
                                href="https://besourolab.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-500 hover:text-amber-400 transition-colors"
                            >
                                BesouroLAB
                            </a>
                            {' '}| Tiago Fernandes
                        </span>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/legal/politica-de-privacidade" className="text-[8px] font-bold text-slate-500 uppercase hover:text-white transition-colors tracking-widest">Privacidade</Link>
                        <Link href="/legal/termos-de-uso" className="text-[8px] font-bold text-slate-500 uppercase hover:text-white transition-colors tracking-widest">Termos de Uso</Link>
                        <Link href="/legal/sobre" className="text-[8px] font-bold text-slate-500 uppercase hover:text-white transition-colors tracking-widest">Sobre</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
