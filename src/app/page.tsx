import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Truck, Zap, Wrench, ChevronRight, Award, Star, BatteryMedium, Caravan, ShoppingBag } from 'lucide-react';
import { BottomNav } from '@/components/ui/BottomNav';
import { ScrewHead } from '@/components/ui/ScrewHead';
import dynamic from 'next/dynamic';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { cn } from '@/lib/utils';

// --- DADOS ESTRUTURADOS ---
const content = {
  hero: {
    badge: "GUIA OFICIAL 2026",
    title: "Sua Cozinha na Estrada.",
    subtitle: "Chega de gastar com comida ruim. O guia definitivo das melhores geladeiras testadas no trecho.",
    cta: "VER TOP 3 DE 2026",
    ctaLink: "/caminhao"
  },
  clusters: [
    {
      id: "caminhao",
      title: "Caminhão",
      desc: "Linha Pesada 31L+, Scania, Volvo e MB.",
      icon: <Truck className="w-8 h-8 text-amber-500" />,
      link: "/caminhao",
      count: "12 Catálogos",
      accent: "bg-amber-500"
    },
    {
      id: "portatil",
      title: "Portáteis",
      desc: "Compactas 12V/24V para Vans e Pickup.",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      link: "/portatil",
      count: "08 Reviews",
      accent: "bg-blue-500"
    },
    {
      id: "motorhome",
      title: "Motorhome",
      desc: "Autonomia 12v para Vanlife e Camping.",
      icon: <Caravan className="w-8 h-8 text-amber-500" />,
      link: "/motorhome",
      count: "05 Guias",
      accent: "bg-teal-500"
    },
    {
      id: "usadas",
      title: "Usadas",
      desc: "O guia anti-golpe para comprar seminovas.",
      icon: <ShoppingBag className="w-8 h-8 text-amber-500" />,
      link: "/usadas",
      count: "04 Dicas",
      accent: "bg-orange-500"
    },
    {
      id: "tecnica",
      title: "Técnica",
      desc: "12V vs 24V, Solar e Instalação na Bateria.",
      icon: <BatteryMedium className="w-8 h-8 text-amber-500" />,
      link: "/tecnica",
      count: "18 Guias",
      accent: "bg-green-600"
    },
    {
      id: "manutencao",
      title: "Oficina",
      desc: "Peças, esquemas e como consertar no pátio.",
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      link: "/manutencao",
      count: "84 Esquemas",
      accent: "bg-orange-600"
    }
  ],
  featuredProduct: {
    badge: "A CAMPEÃ DE VENDAS",
    name: "Resfriar 31 Litros (Quadrivolt)",
    rating: "4.9",
    pros: ["Gela a -21ºC Real", "Proteção de Bateria Inteligente", "Garantia Nacional Assistida"],
    cta: "LER ANÁLISE COMPLETA",
    link: "/caminhao/geladeira-caminhao-resfriar-31-litros"
  }
};

// Lazy load calculator to improve TBT (Total Blocking Time) via code splitting
const LitersCalculator = dynamic(
  () => import('@/components/industrial/LitersCalculator').then(mod => mod.LitersCalculator),
  {
    loading: () => (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="h-64 bg-slate-200 rounded-2xl animate-pulse flex items-center justify-center">
          <span className="text-slate-400 font-teko uppercase tracking-widest">Carregando Calculadora...</span>
        </div>
      </div>
    )
  }
);

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24">
      <Header />

      {/* --- HERO SECTION (High Impact) --- */}
      <section className="relative bg-slate-900 text-white pt-24 pb-40 px-6 overflow-hidden border-b-8 border-slate-950">
        <div className="absolute inset-0 select-none">
          <Image
            src="/img/hero-bg.png"
            alt="Interior de caminhão na estrada"
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-60 scale-105"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-slate-950/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-diamond-plate opacity-5 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 text-[11px] font-black tracking-[0.3em] text-slate-950 bg-amber-500 rounded-sm uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            <Award className="w-4 h-4" /> {content.hero.badge}
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 font-teko leading-[0.85] uppercase tracking-tighter text-white drop-shadow-2xl">
            {content.hero.title}
          </h1>
          <p className="text-slate-400 mb-12 text-xl font-medium leading-relaxed max-w-lg mx-auto opacity-90">
            {content.hero.subtitle}
          </p>

          <Link href={content.hero.ctaLink} className="group relative inline-flex items-center justify-center px-16 py-6 text-3xl font-black text-slate-950 uppercase transition-all bg-amber-500 rounded shadow-[0_10px_0_rgb(180,83,9)] hover:shadow-[0_6px_0_rgb(180,83,9)] hover:translate-y-[4px] active:translate-y-[10px] active:shadow-none overflow-hidden font-teko tracking-widest">
            <div className="absolute top-0 bottom-0 left-0 w-4 bg-[repeating-linear-gradient(-45deg,transparent,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
            <div className="absolute top-0 bottom-0 right-0 w-4 bg-[repeating-linear-gradient(-45deg,transparent,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
            <span className="relative flex items-center gap-4">
              {content.hero.cta} <ChevronRight className="w-10 h-10 transition-transform group-hover:translate-x-2" />
            </span>
          </Link>
        </div>
      </section>

      {/* --- TACTICAL CLUSTER GRID --- */}
      <section className="relative z-20 px-4 -mt-20 max-w-6xl mx-auto">
        {/* Hidden Heading for Accessibility Structure (H1 -> H2 -> H3) */}
        <h2 className="sr-only">Categorias de Geladeiras e Equipamentos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.clusters.map((cluster) => (
            <Link key={cluster.id} href={cluster.link} className="block group h-full">
              <div className="bg-white rounded-2xl shadow-metallic border-2 border-slate-200 p-2 h-full flex flex-col transition-all group-hover:translate-y-[-8px] group-hover:border-amber-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative overflow-hidden">

                {/* Visual Accent Bar */}
                <div className={cn("h-1 w-full rounded-full mb-1 opacity-40 group-hover:opacity-100 transition-opacity", cluster.accent)}></div>

                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-20 h-20 bg-slate-900 rounded-2xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-diamond-plate opacity-10"></div>
                    <div className="relative z-10 scale-125">{cluster.icon}</div>
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </div>

                  <h3 className="text-3xl font-black text-slate-950 uppercase font-teko tracking-tight mb-2">
                    {cluster.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug font-bold uppercase tracking-tight mb-6">
                    {cluster.desc}
                  </p>

                  <div className="mt-auto w-full pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{cluster.count}</span>
                    <div className="flex items-center gap-1 text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                      Explorar Guide <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <ScrewHead className="absolute top-2 right-2 scale-50 opacity-10 group-hover:opacity-50" />
                <ScrewHead className="absolute bottom-2 left-2 scale-50 opacity-10 group-hover:opacity-50" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- CALCULADORA DE LITROS --- */}
      <div className="bg-slate-50 py-10" id="calculadora">
        <LitersCalculator />
      </div>

      {/* --- TRUST BADGE --- */}
      <section className="py-20 px-6 border-y border-slate-200 flex flex-col items-center text-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-diamond-plate opacity-[0.02] pointer-events-none"></div>
        <div className="w-16 h-1 w- amber-500 mb-8"></div>
        <div className="flex items-center gap-3 bg-slate-50 pr-8 pl-6 py-4 rounded-full border-2 border-slate-200 shadow-sm transition-all hover:shadow-lg">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="text-left">
            <span className="block text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Independência Total</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Análises feitas por quem vive no trecho</span>
          </div>
        </div>
      </section>

      {/* --- MONEY MAKER (Featured Product) --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-4 bg-amber-500/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative bg-white rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-2 border-slate-200 overflow-hidden flex flex-col lg:flex-row">

            <div className="lg:w-2/5 p-12 bg-slate-50 flex items-center justify-center relative border-r-2 border-slate-100">
              <div className="absolute inset-0 bg-carbon-fiber opacity-[0.03]"></div>
              <div className="relative z-10 w-full aspect-square bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center scale-90 lg:scale-110 overflow-hidden">
                <span className="text-slate-200 font-teko text-7xl font-black uppercase tracking-tighter opacity-10 absolute rotate-12">RESFRIAR</span>
                <span className="text-slate-300 font-black font-teko uppercase text-xs tracking-[0.4em] relative z-20">Foto do Campeão</span>
              </div>
            </div>

            <div className="flex-1 p-12">
              <div className="inline-flex items-center gap-2 text-amber-600 font-black font-teko text-lg uppercase tracking-widest mb-4">
                <Star className="w-6 h-6 fill-current" /> Nota 9.8 Especialista
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-950 font-teko mb-6 uppercase leading-[0.9] tracking-tighter">
                {content.featuredProduct.name}
              </h2>

              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                A favorita absoluta dos caminhoneiros brasileiros. Eficiência térmica profissional em um gabinete indestrutível.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {content.featuredProduct.pros.map((pro, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-black text-slate-700 uppercase tracking-tight">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    {pro}
                  </li>
                ))}
              </ul>

              <Link href={content.featuredProduct.link} className="w-full lg:w-max flex items-center justify-center gap-4 py-6 px-12 bg-slate-950 text-white rounded-2xl font-black font-teko text-2xl uppercase tracking-widest hover:bg-slate-900 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] active:scale-95">
                {content.featuredProduct.cta} <ChevronRight className="w-8 h-8 text-amber-500" />
              </Link>
            </div>

            <ScrewHead className="absolute top-6 right-6" />
            <ScrewHead className="absolute bottom-6 right-6" />
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
