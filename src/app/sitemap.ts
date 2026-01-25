import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://guiadegeladeira.com.br';

    // Core pages
    const routes = [
        '',
        '/caminhao',
        '/portatil',
        '/cozinha',
        '/motorhome',
        '/usadas',
        '/tecnica',
        '/manutencao',
        '/ofertas',
        '/categorias',
        '/glossario',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes from cluster articles
    const posts = getAllPosts('reviews');

    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/${post.cluster}/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
