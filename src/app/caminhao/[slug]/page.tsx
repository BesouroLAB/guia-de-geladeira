import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponents } from "@/components/mdx";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ShieldCheck, Clock, User, Share2, Info } from 'lucide-react';
import { BottomNav } from "@/components/ui/BottomNav";
import { ScrewHead } from "@/components/ui/ScrewHead";
import { formatDate, sanitizePrice } from "@/lib/utils";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { RelatedPosts } from "@/components/industrial/RelatedPosts";
import { BestOffer } from "@/components/industrial/BestOffer";
import { Metadata } from 'next';

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'reviews');

    if (!post) {
        return { title: 'Review não encontrada' };
    }

    const fullTitle = `${post.title} | Guia de Geladeira`;
    const fullDescription = post.excerpt || `Análise técnica detalhada da ${post.title}. Confira performance, consumo e durabilidade.`;
    const url = `https://guiadegeladeira.com.br/${post.cluster}/${slug}`;
    const imageSuffix = post.coverImage?.startsWith('http') ? post.coverImage : `https://guiadegeladeira.com.br${post.coverImage}`;
    const image = post.coverImage ? imageSuffix : 'https://guiadegeladeira.com.br/og-image.jpg';

    return {
        title: fullTitle,
        description: fullDescription,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url: url,
            siteName: 'Guia de Geladeira',
            images: [{ url: image, width: 1200, height: 630 }],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author || 'Tiago Fernandes'],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: fullDescription,
            images: [image],
        },
    };
}

interface ReviewPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts('reviews');
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ReviewPage({ params }: ReviewPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'reviews');

    if (!post) {
        notFound();
    }

    const allPosts = getAllPosts('reviews');
    const relatedPosts = allPosts
        .filter(p => p.cluster === post.cluster && p.slug !== slug)
        .slice(0, 3);

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": post.rating ? "Product" : "Article", // Smart switch: if rating exists, it's a Product/Review
                "name": post.title,
                "description": post.excerpt,
                "image": post.coverImage ? (post.coverImage.startsWith('http') ? post.coverImage : `https://guiadegeladeira.com.br${post.coverImage}`) : undefined,

                // Product Specific Data (Only if Frontmatter exists)
                ...(post.rating && {
                    "brand": {
                        "@type": "Brand",
                        "name": post.brand || "Genérica"
                    },
                    "model": post.model,
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "BRL",
                        "price": sanitizePrice(post.price || "0"),
                        "priceValidUntil": "2026-12-31",
                        "url": `https://guiadegeladeira.com.br/caminhao/${slug}`,
                        "availability": "https://schema.org/InStock",
                        "shippingDetails": {
                            "@type": "OfferShippingDetails",
                            "shippingRate": {
                                "@type": "MonetaryAmount",
                                "value": "0",
                                "currency": "BRL"
                            },
                            "shippingDestination": {
                                "@type": "DefinedRegion",
                                "addressCountry": "BR"
                            },
                            "deliveryTime": {
                                "@type": "ShippingDeliveryTime",
                                "handlingTime": {
                                    "@type": "QuantitativeValue",
                                    "minValue": 0,
                                    "maxValue": 2,
                                    "unitCode": "DAY"
                                },
                                "transitTime": {
                                    "@type": "QuantitativeValue",
                                    "minValue": 1,
                                    "maxValue": 7,
                                    "unitCode": "DAY"
                                }
                            }
                        },
                        "hasMerchantReturnPolicy": {
                            "@type": "MerchantReturnPolicy",
                            "applicableCountry": "BR",
                            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                            "merchantReturnDays": 7,
                            "returnMethod": "https://schema.org/ReturnByMail",
                            "returnFees": "https://schema.org/FreeReturn"
                        }
                    },
                    "review": {
                        "@type": "Review",
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": post.rating,
                            "bestRating": "10",
                            "worstRating": "1"
                        },
                        "author": {
                            "@type": "Person",
                            "name": post.author || "Equipe GuiaDeGeladeira",
                            "url": "https://guiadegeladeira.com.br/legal/sobre"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Guia de Geladeira",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://guiadegeladeira.com.br/logo.png"
                            }
                        }
                    }
                })
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://guiadegeladeira.com.br"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Caminhão",
                        "item": "https://guiadegeladeira.com.br/caminhao"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            {/* ARTICLE WRAPPER */}
            <article className="container mx-auto px-4 max-w-2xl py-8">

                {/* BREADCRUMBS TÉCNICOS */}
                <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-6">
                    <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                    <span className="opacity-30">/</span>
                    <span className="text-slate-600">Review # {post.id || '---'}</span>
                </nav>

                {/* HERO DO ARTICLE */}
                <header className="mb-10 relative">
                    <div className="mb-4 flex flex-wrap items-center gap-4">
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-1 rounded uppercase tracking-[0.2em] border border-amber-200">
                            Análise Técnica # {post.id || '---'}
                        </span>
                        <div className="flex items-center gap-4 text-slate-300 text-[10px] font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(post.date)}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 8 Min De Leitura</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 font-teko leading-none mb-6 uppercase tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg border border-slate-200 inset-metal">
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 shadow-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-diamond-plate opacity-20"></div>
                            <User className="w-5 h-5 relative z-10" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none mb-1">Escrito por</p>
                            <p className="font-black text-slate-900 font-teko text-lg leading-none uppercase tracking-wide">{post.author || "Tiago Fernandes"}</p>
                        </div>
                        <button className="ml-auto p-2 text-slate-400 hover:text-slate-900 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* IMAGE HERO SECTION - Optimized for LCP */}
                <div className="relative w-full aspect-video bg-slate-900 rounded-xl mb-12 overflow-hidden shadow-metallic group border-2 border-slate-200">
                    <div className="absolute inset-0 bg-diamond-plate opacity-10 z-10"></div>
                    {/* Corner Screws */}
                    <ScrewHead className="absolute top-2 left-2 z-20" />
                    <ScrewHead className="absolute top-2 right-2 z-20" />
                    <ScrewHead className="absolute bottom-2 left-2 z-20" />
                    <ScrewHead className="absolute bottom-2 right-2 z-20" />

                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 672px"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-slate-500 font-teko text-xl uppercase tracking-[0.5em] opacity-30 select-none">Imagem Industrial</span>
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                </div>

                {/* CONTEÚDO MDX (PROSE REFINADA) */}
                <div className="prose prose-slate prose-lg max-w-none 
                    prose-headings:font-teko prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                    prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-slate-100 prose-h2:pb-2 prose-h2:mt-12
                    prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-slate-900 prose-strong:font-black
                    prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                    prose-a:text-amber-600 prose-a:no-underline prose-a:font-black hover:prose-a:underline
                    prose-li:marker:text-amber-500 prose-img:rounded-xl prose-img:shadow-lg">

                    <MDXRemote
                        source={post.content}
                        components={{
                            ...MdxComponents,
                            BestOffer, // Inject locally to the MDX
                        }}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                            },
                        }}
                    />
                </div>

                {/* RELACIONADOS */}
                <RelatedPosts posts={relatedPosts} currentSlug={slug} />

                {/* TRUST & AUTHORITY FOOTER BOX */}
                <div className="mt-16 relative p-8 bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-diamond-plate opacity-10"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-2 bg-amber-500"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 shadow-xl border-4 border-slate-800">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="font-black font-teko text-2xl uppercase tracking-wider leading-none">Compromisso com o Estradeiro</h4>
                                <p className="text-slate-300 text-xs uppercase tracking-widest mt-1">Sua confiança é nosso maior patrimônio</p>
                            </div>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium italic">
                            &quot;Não estamos aqui para vender geladeira. Estamos aqui para garantir que você não jogue seu dinheiro suado no lixo com equipamento que gela mal e quebra na primeira buraqueira.&quot;
                        </p>

                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 bg-slate-800/50 p-3 rounded border border-slate-700">
                            <Info className="w-4 h-4 text-amber-500 shrink-0" />
                            <span className="uppercase tracking-widest">Nota: Podemos ganhar uma pequena comissão se você comprar pelos nossos links. Isso mantém o site no ar sem custar um centavo a mais para você.</span>
                        </div>
                    </div>
                </div>

            </article>

            <Footer />
            <BottomNav />

        </main>
    );
}
