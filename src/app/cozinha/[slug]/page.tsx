import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar, User, Clock, ArrowLeft, Home, ChefHat } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import { ScrewHead } from '@/components/ui/ScrewHead';

// Components for MDX
import { AlertBox } from '@/components/industrial/AlertBox';
import { ProsCons } from '@/components/industrial/ProsCons';
import { TechSpecs } from '@/components/industrial/TechSpecs';
import { BestOffer } from '@/components/industrial/BestOffer';
import { FAQBox } from '@/components/industrial/FAQBox';
import { ProductScore } from '@/components/industrial/ProductScore';

const components = {
    AlertBox,
    ProsCons,
    TechSpecs,
    BestOffer,
    FAQBox,
    ProductScore
};

interface PostParams {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts('reviews').filter(post => post.cluster === 'cozinha');
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PostParams) {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'reviews');

    if (!post) {
        return {
            title: 'Artigo Não Encontrado',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

export default async function CozinhaPost({ params }: PostParams) {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'reviews');

    if (!post) {
        notFound();
    }

    // Identificar posts relacionados (mesmo cluster)
    const relatedPosts = getAllPosts('reviews')
        .filter(p => p.cluster === 'cozinha' && p.slug !== slug)
        .slice(0, 3);

    // Generic Schema Generator with Breadcrumbs
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `https://guiadegeladeira.com.br/cozinha/${slug}#article`,
                "headline": post.title,
                "name": post.title,
                "description": post.excerpt,
                "image": post.coverImage ? `https://guiadegeladeira.com.br${post.coverImage}` : `https://guiadegeladeira.com.br/og-image.jpg`,
                "datePublished": post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
                "dateModified": post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
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
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://guiadegeladeira.com.br/cozinha/${slug}`
                },
                "isPartOf": {
                    "@id": "https://guiadegeladeira.com.br/#website"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://guiadegeladeira.com.br/cozinha/${slug}#breadcrumb`,
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
                        "name": "Cozinha",
                        "item": "https://guiadegeladeira.com.br/cozinha"
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
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            {/* Article Header */}
            <header className="relative bg-slate-900 text-white py-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-90 z-10"></div>
                {post.coverImage && (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                )}

                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                        <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors"><Home className="w-3 h-3" /> Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/cozinha" className="hover:text-amber-400 text-amber-500 transition-colors">Cozinha & Caixas</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-500 truncate max-w-[200px]">{post.title}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black font-teko uppercase leading-none mb-8 max-w-4xl tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
                        <div className="flex items-center gap-2">
                            <span className="p-1 bg-amber-500 rounded-full text-slate-900"><User className="w-3 h-3" /></span>
                            {post.author || 'Redação Guia'}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-500" />
                            {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-amber-500" />
                            Reading time: 5 min
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Container */}
            <div className="container mx-auto px-6 -mt-20 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Main Content */}
                    <article className="lg:col-span-8 bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-t-4 border-amber-500">
                        <div className="prose prose-lg prose-slate max-w-none 
                            prose-headings:font-teko prose-headings:uppercase prose-headings:tracking-tight prose-headings:font-black
                            prose-h2:text-3xl prose-h2:text-slate-900 prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-slate-100
                            prose-h3:text-2xl prose-h3:text-slate-800 prose-h3:mt-8
                            prose-p:leading-relaxed prose-p:text-slate-600
                            prose-a:text-amber-600 prose-a:no-underline prose-a:border-b-2 prose-a:border-amber-200 hover:prose-a:border-amber-500 hover:prose-a:bg-amber-50 transition-all
                            prose-strong:text-slate-900 prose-strong:font-black
                            prose-ul:list-square prose-li:marker:text-amber-500">

                            <MDXRemote source={post.content} components={components} />
                        </div>

                        {/* Author Bio Simple */}
                        <div className="mt-16 pt-10 border-t border-slate-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-black font-teko uppercase text-lg leading-none mb-1">Escrito por {post.author}</p>
                                <p className="text-xs text-slate-500">Especialista em equipamentos de estrada.</p>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar / TOC / Related */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Sticky offer or navigation could go here */}
                        <div className="bg-slate-900 p-6 rounded-2xl text-white sticky top-24 shadow-2xl border-2 border-slate-800">
                            <ScrewHead className="mb-4 opacity-50" />
                            <h3 className="font-black font-teko uppercase text-2xl mb-4 text-amber-500">Mais sobre Cozinha</h3>
                            <nav className="flex flex-col gap-3">
                                {relatedPosts.map(p => (
                                    <Link key={p.slug} href={`/cozinha/${p.slug}`} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                        <div className="mt-1 w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition-transform"></div>
                                        <div>
                                            <h4 className="font-bold text-sm leading-tight group-hover:text-amber-400 transition-colors">{p.title}</h4>
                                            <span className="text-[10px] text-slate-500 uppercase tracking-widest">{formatDate(p.date)}</span>
                                        </div>
                                    </Link>
                                ))}
                                <Link href="/cozinha" className="mt-4 text-center py-3 bg-white/10 text-white rounded font-bold uppercase text-xs hover:bg-amber-500 hover:text-slate-900 transition-all flex items-center justify-center gap-2">
                                    <ArrowLeft className="w-3 h-3" /> Voltar para o Índice
                                </Link>
                            </nav>
                        </div>
                    </aside>

                </div>
            </div>

            <Footer />
            <BottomNav />
        </main>
    );
}
