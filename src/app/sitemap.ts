import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://guiadegeladeira.com.br';

    // Core pages
    const routes = [
        '',
        '/caminhao',
        '/portatil',
        '/tecnica',
        '/manutencao',
        '/ofertas',
        '/categorias',
        '/legal/sobre',
        '/legal/termos-de-uso',
        '/legal/politica-de-privacidade',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes from cluster articles
    const clusters = ['caminhao', 'portatil', 'tecnica', 'manutencao'];
    const posts = getAllPosts('reviews');

    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/${post.cluster}/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
