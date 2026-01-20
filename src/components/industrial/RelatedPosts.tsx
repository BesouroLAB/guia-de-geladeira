import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';
import { ChevronRight, MessageSquare, TrendingUp } from 'lucide-react';

interface RelatedPostsProps {
    posts: Post[];
    currentSlug: string;
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
    const related = posts
        .filter(p => p.slug !== currentSlug)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-3xl font-black font-teko uppercase tracking-tight text-slate-900 mb-8 flex items-center gap-3">
                <TrendingUp className="text-amber-500 w-8 h-8" />
                Continue sua Pesquisa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((post) => (
                    <Link key={post.slug} href={`/${post.cluster}/${post.slug}`} className="group">
                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:border-amber-500/50 flex flex-col h-full">
                            <div className="relative aspect-video bg-slate-100 overflow-hidden">
                                {post.coverImage ? (
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-teko uppercase">
                                        Imagem técnica
                                    </div>
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-2 left-3 text-[9px] font-black text-white uppercase tracking-widest bg-amber-600 px-1.5 py-0.5 rounded">
                                    {post.cluster}
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h4 className="text-xl font-black font-teko uppercase leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
