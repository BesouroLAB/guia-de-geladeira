import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponents } from "@/components/mdx";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ShieldCheck, Clock, User, Share2, Info, Wrench } from 'lucide-react';
import { BottomNav } from "@/components/ui/BottomNav";
import { ScrewHead } from "@/components/ui/ScrewHead";
import { formatDate } from "@/lib/utils";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { RelatedPosts } from "@/components/industrial/RelatedPosts";
import { BestOffer } from "@/components/industrial/BestOffer";
import { Metadata } from 'next';

export async function generateMetadata({ params }: ManutencaoReviewPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'reviews');

    if (!post) {
        return { title: 'Dica não encontrada' };
    }

    const fullTitle = `${post.title} | Guia de Geladeira`;
    const fullDescription = post.excerpt || `Guia prático de manutenção para ${post.title}. Aprenda a diagnosticar e resolver problemas.`;
    const url = `https://guiadegeladeira.com.br/${post.cluster}/${slug}`;
    const image = post.coverImage ? `https://guiadegeladeira.com.br${post.coverImage}` : 'https://guiadegeladeira.com.br/og-image.jpg';

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

interface ManutencaoReviewPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts('reviews').filter(post => post.cluster === 'manutencao');
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ManutencaoReviewPage({ params }: ManutencaoReviewPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'reviews');

    if (!post || post.cluster !== 'manutencao') {
        notFound();
    }

    const allPosts = getAllPosts('reviews');
    const relatedPosts = allPosts
        .filter(p => p.cluster === post.cluster && p.slug !== slug)
        .slice(0, 3);

    // JSON-LD Structured Data
    const jsonLd: any = {
        "@context": "https://schema.org",
        "@type": post.schemaType === 'FAQ' ? "FAQPage" : post.schemaType === 'HowTo' ? "HowTo" : "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.coverImage ? `https://guiadegeladeira.com.br${post.coverImage}` : undefined,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author || "Equipe Técnica",
            "url": "https://guiadegeladeira.com.br/legal/sobre"
        }
    };

    // Add FAQ specific structure
    if (post.schemaType === 'FAQ' && post.questions) {
        jsonLd.mainEntity = post.questions.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        }));
    }

    // Add HowTo specific structure
    if (post.schemaType === 'HowTo' && post.steps) {
        jsonLd.step = post.steps.map((s: any) => ({
            "@type": "HowToStep",
            "name": s.name,
            "text": s.text,
            "url": `https://guiadegeladeira.com.br/manutencao/${slug}#${s.id || ''}`
        }));
    }

    if (jsonLd["@type"] === "Article") {
        jsonLd.publisher = {
            "@type": "Organization",
            "name": "Guia de Geladeira",
            "logo": {
                "@type": "ImageObject",
                "url": "https://guiadegeladeira.com.br/logo.png"
            }
        };
        jsonLd.mainEntityOfPage = {
            "@type": "WebPage",
            "@id": `https://guiadegeladeira.com.br/${post.cluster}/${slug}`
        };
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            {/* ARTICLE WRAPPER */}
            <article className="container mx-auto px-4 max-w-2xl py-8">

                {/* BREADCRUMBS */}
                <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-6">
                    <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                    <span className="opacity-30">/</span>
                    <Link href="/manutencao" className="hover:text-slate-600 transition-colors">Oficina</Link>
                    <span className="opacity-30">/</span>
                    <span className="text-slate-600">Guia # {post.id || '---'}</span>
                </nav>

                {/* HERO DO ARTICLE */}
                <header className="mb-10 relative">
                    <div className="mb-4 flex flex-wrap items-center gap-4">
                        <span className="bg-red-100 text-red-800 text-[10px] font-black px-2 py-1 rounded uppercase tracking-[0.2em] border border-red-200 flex items-center gap-2 transition-all">
                            <Wrench className="w-3 h-3" /> SOS Estrada # {post.id || '---'}
                        </span>
                        <div className="flex items-center gap-4 text-slate-300 text-[10px] font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(post.date)}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 8 Min De Leitura</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 font-teko leading-none mb-6 uppercase tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg border border-slate-200 inset-metal transition-all">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg relative overflow-hidden">
                            <User className="w-5 h-5 relative z-10" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none mb-1">Escrito por</p>
                            <p className="font-black text-slate-900 font-teko text-lg leading-none uppercase tracking-wide">{post.author || "Equipe Técnica"}</p>
                        </div>
                        <button className="ml-auto p-2 text-slate-400 hover:text-slate-900 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* IMAGE HERO SECTION - Optimized for LCP */}
                <div className="relative w-full aspect-video bg-slate-900 rounded-xl mb-12 overflow-hidden shadow-metallic group border-2 border-slate-200">
                    <div className="absolute inset-0 bg-diamond-plate opacity-10 z-10"></div>
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
                            <span className="text-slate-500 font-teko text-xl uppercase tracking-[0.5em] opacity-30 select-none">Manual de Reparo</span>
                        </div>
                    )}
                </div>

                {/* CONTEÚDO MDX */}
                <div className="prose prose-slate prose-lg max-w-none 
                    prose-headings:font-teko prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                    prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-slate-100 prose-h2:pb-2 prose-h2:mt-12
                    prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-slate-900 prose-strong:font-black
                    prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                    prose-a:text-red-600 prose-a:no-underline prose-a:font-black hover:prose-a:underline
                    prose-li:marker:text-red-500 prose-img:rounded-xl prose-img:shadow-lg transition-all">

                    <MDXRemote
                        source={post.content}
                        components={{
                            ...MdxComponents,
                            BestOffer,
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

                {/* AUTHORITY FOOTER BOX */}
                <div className="mt-16 relative p-8 bg-red-600 text-white rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-diamond-plate opacity-10"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-2 bg-slate-900"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-red-500 shadow-xl border-4 border-red-500/20">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="font-black font-teko text-2xl uppercase tracking-wider leading-none text-white">Pronto Socorro do Caminhoneiro</h4>
                                <p className="text-red-100 text-xs uppercase tracking-widest mt-1">Soluções rápidas para não ficar na mão</p>
                            </div>
                        </div>

                        <p className="text-white text-sm leading-relaxed mb-6 font-medium italic opacity-90">
                            &quot;Se não dá para consertar barato, a gente te ajuda a escolher uma nova. Nosso compromisso é que você nunca mais passe calor no trecho.&quot;
                        </p>
                    </div>
                </div>

            </article>

            <Footer />
            <BottomNav />
        </main>
    );
}
