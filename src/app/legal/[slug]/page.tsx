import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { BottomNav } from '@/components/ui/BottomNav';
import Link from 'next/link';

interface LegalPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const legalDir = path.join(process.cwd(), 'content', 'legal');

function getLegalPage(slug: string) {
    const filePath = path.join(legalDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title || 'Página Legal',
        description: data.description || '',
        content,
    };
}

export async function generateStaticParams() {
    if (!fs.existsSync(legalDir)) {
        return [];
    }

    const files = fs.readdirSync(legalDir).filter(f => f.endsWith('.mdx'));
    return files.map(file => ({
        slug: file.replace('.mdx', ''),
    }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getLegalPage(slug);

    if (!page) {
        return { title: 'Página não encontrada' };
    }

    return {
        title: `${page.title} | Guia de Geladeira`,
        description: page.description,
    };
}

export default async function LegalPage({ params }: LegalPageProps) {
    const { slug } = await params;
    const page = getLegalPage(slug);

    if (!page) {
        notFound();
    }

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 pb-24">
            <Header />

            <article className="container mx-auto px-6 max-w-3xl py-12">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
                    <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                    <span className="opacity-30">/</span>
                    <span className="text-slate-600">{page.title}</span>
                </nav>

                {/* Content */}
                <div className="prose prose-slate prose-lg max-w-none
                    prose-headings:font-teko prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                    prose-h1:text-4xl prose-h1:mb-8
                    prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2 prose-h2:mt-10
                    prose-h3:text-xl prose-h3:mt-8
                    prose-p:text-slate-700 prose-p:leading-relaxed
                    prose-strong:text-slate-900
                    prose-ul:text-slate-700
                    prose-li:marker:text-amber-500">

                    <MDXRemote
                        source={page.content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                            },
                        }}
                    />
                </div>
            </article>

            <Footer />
            <BottomNav />
        </main>
    );
}
