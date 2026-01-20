'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ExternalLink, Star, TrendingDown, Clock, Zap, Flame, RefreshCw } from 'lucide-react';
import { ScrewHead } from '@/components/ui/ScrewHead';

interface Product {
    id: string;
    name: string;
    brand: string;
    category: 'caminhao' | 'portatil' | 'acessorio';
    originalPrice: number;
    currentPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    link: string;
    store: 'amazon' | 'mercadolivre';
    image?: string;
    isPrime?: boolean;
    isFullService?: boolean;
    isBestSeller?: boolean;
    isLightningDeal?: boolean;
    stock?: 'high' | 'medium' | 'low';
    lastUpdated: string;
}

function formatPrice(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ProductSkeleton() {
    return (
        <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden animate-pulse">
            <div className="aspect-square bg-slate-200" />
            <div className="p-6 space-y-4">
                <div className="h-4 bg-slate-200 rounded w-1/3" />
                <div className="h-6 bg-slate-200 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-1/2" />
                <div className="h-8 bg-slate-200 rounded w-2/3" />
                <div className="h-12 bg-slate-200 rounded" />
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const stockLabels = {
        high: { text: 'Em estoque', color: 'text-green-600 bg-green-50' },
        medium: { text: 'Últimas unidades', color: 'text-amber-600 bg-amber-50' },
        low: { text: 'Quase esgotado!', color: 'text-red-600 bg-red-50' },
    };

    const storeConfig = {
        amazon: {
            name: 'Amazon',
            color: 'bg-[#FF9900] text-slate-900',
            btnColor: 'bg-[#FF9900] hover:bg-[#FFB84D] shadow-[0_4px_0_#cc7a00]',
            icon: '🛒',
        },
        mercadolivre: {
            name: 'Mercado Livre',
            color: 'bg-[#FFE600] text-slate-900',
            btnColor: 'bg-[#FFE600] hover:bg-[#FFF066] shadow-[0_4px_0_#ccb800]',
            icon: '🛍️',
        },
    };

    const store = storeConfig[product.store];

    return (
        <div className="group relative bg-white rounded-2xl border-2 border-slate-200 shadow-metallic overflow-hidden hover:border-amber-500 transition-all hover:shadow-xl">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isLightningDeal && (
                    <span className="flex items-center gap-1 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider animate-pulse">
                        <Zap className="w-3 h-3" /> Oferta Relâmpago
                    </span>
                )}
                {product.isBestSeller && (
                    <span className="flex items-center gap-1 bg-amber-500 text-slate-900 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                        <Flame className="w-3 h-3" /> Mais Vendido
                    </span>
                )}
                <span className="flex items-center gap-1 bg-green-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                    <TrendingDown className="w-3 h-3" /> -{product.discount}%
                </span>
            </div>

            {/* Store Badge */}
            <div className="absolute top-4 right-4 z-10">
                <span className={`text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider ${store.color}`}>
                    {store.icon} {store.name}
                </span>
            </div>

            {/* Image */}
            <div className="relative aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-carbon-fiber opacity-5"></div>
                {product.image ? (
                    <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
                ) : (
                    <div className="text-center p-8">
                        <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-2" />
                        <span className="text-slate-400 font-teko uppercase tracking-widest text-sm">{product.brand}</span>
                    </div>
                )}
                <ScrewHead className="absolute bottom-2 right-2 scale-50 opacity-20" />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{product.brand}</span>
                    {product.isPrime && (
                        <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase">Prime</span>
                    )}
                    {product.isFullService && (
                        <span className="text-[9px] font-black text-green-600 bg-green-50 px-1.5 py-0.5 rounded uppercase">Full</span>
                    )}
                </div>

                <h3 className="font-black font-teko text-xl uppercase leading-tight mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-slate-300'}`}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <span className="text-3xl font-black font-teko text-slate-900">{formatPrice(product.currentPrice)}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 line-through">{formatPrice(product.originalPrice)}</span>
                        <span className="text-xs font-black text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                            Economia de {formatPrice(product.originalPrice - product.currentPrice)}
                        </span>
                    </div>
                </div>

                {/* Stock */}
                {product.stock && (
                    <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded mb-4 inline-flex items-center gap-1 ${stockLabels[product.stock].color}`}>
                        <Clock className="w-3 h-3" /> {stockLabels[product.stock].text}
                    </div>
                )}

                {/* CTA */}
                <a
                    href={product.store === 'amazon' ? 'https://www.amazon.com.br/deals?ref_=nav_cs_gb&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%252218914210011%252F19702094011%252F19702096011%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522' : product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn w-full flex items-center justify-center gap-2 py-4 text-slate-900 rounded-xl font-black font-teko text-lg uppercase tracking-wider transition-all hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${store.btnColor}`}
                >
                    <ShoppingCart className="w-5 h-5" />
                    Ver no {store.name}
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </a>
            </div>
        </div>
    );
}

export function DynamicOffers() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/ofertas');
            if (!response.ok) throw new Error('Failed to fetch');

            const data = await response.json();
            setProducts(data.products);
            setLastUpdated(data.lastUpdated);
        } catch (err) {
            setError('Não foi possível carregar as ofertas. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const caminhaoProducts = products.filter(p => p.category === 'caminhao');
    const portatilProducts = products.filter(p => p.category === 'portatil');

    return (
        <div className="space-y-12">
            {/* Loading State */}
            {loading && (
                <div className="text-center py-8">
                    <div className="inline-flex items-center gap-3 bg-slate-100 px-6 py-3 rounded-xl">
                        <RefreshCw className="w-5 h-5 text-amber-500 animate-spin" />
                        <span className="text-slate-600 font-bold">Buscando melhores preços...</span>
                    </div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="text-center py-8">
                    <p className="text-red-500 mb-4">{error}</p>
                    <button
                        onClick={fetchProducts}
                        className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-black uppercase"
                    >
                        <RefreshCw className="w-4 h-4" /> Tentar Novamente
                    </button>
                </div>
            )}

            {/* Products */}
            {!loading && !error && (
                <>
                    {/* Caminhão Section */}
                    {caminhaoProducts.length > 0 && (
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black font-teko uppercase tracking-tight text-slate-900">
                                    Linha Pesada (Caminhão)
                                </h2>
                                <Link href="/caminhao" className="text-amber-600 font-bold text-xs uppercase tracking-widest hover:underline">
                                    Ver Reviews →
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {caminhaoProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Portáteis Section */}
                    {portatilProducts.length > 0 && (
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black font-teko uppercase tracking-tight text-slate-900">
                                    Portáteis & 12V
                                </h2>
                                <Link href="/portatil" className="text-amber-600 font-bold text-xs uppercase tracking-widest hover:underline">
                                    Ver Reviews →
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {portatilProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Last Updated */}
                    {lastUpdated && (
                        <p className="text-center text-xs text-slate-400">
                            Preços atualizados em: {new Date(lastUpdated).toLocaleString('pt-BR')}
                        </p>
                    )}
                </>
            )}

            {/* Loading Skeletons */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))}
                </div>
            )}
        </div>
    );
}
