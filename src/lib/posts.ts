import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the base path for content (articles)
// We will store articles in /content/reviews/ for now
const CONTENT_PATH = path.join(process.cwd(), 'content');

export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    content: string;
    // SEO & Rich Snippets
    rating?: string;
    brand?: string;
    model?: string;
    price?: string;
    [key: string]: any; // Allow loose typing for other frontmatter
}

export function getPostBySlug(slug: string, folder: string = 'reviews'): Post | null {
    try {
        const dirPath = path.join(CONTENT_PATH, folder);
        if (!fs.existsSync(dirPath)) return null;

        const files = fs.readdirSync(dirPath);

        // 1. Tenta encontrar pelo nome do arquivo (estratégia rápida)
        let fileName = files.find(file =>
            file === `${slug}.mdx` ||
            file.endsWith(`-${slug}.mdx`) ||
            file.replace(/^\d+-/, '').replace(/\.mdx$/, '') === slug
        );

        // 2. Se não achou pelo nome, varre os arquivos procurando no frontmatter (estratégia SEO)
        if (!fileName) {
            fileName = files.find(file => {
                if (!file.endsWith('.mdx')) return false;
                const fullPath = path.join(dirPath, file);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const { data } = matter(fileContents);
                return data.slug === slug;
            });
        }

        if (!fileName) return null;

        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: data.slug || slug, // Prioriza o slug do frontmatter se existir
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            content,
            ...data,
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

export function getAllPosts(folder: string = 'reviews'): Post[] {
    try {
        const dirPath = path.join(CONTENT_PATH, folder);

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            return [];
        }

        const files = fs.readdirSync(dirPath);

        const posts = files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => {
                const fullPath = path.join(dirPath, file);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const { data } = matter(fileContents);

                // Se tiver slug no frontmatter, usa ele. Se não, limpa o nome do arquivo.
                const finalSlug = data.slug || file.replace(/^\d+-/, '').replace(/\.mdx$/, '');

                return {
                    slug: finalSlug,
                    title: data.title,
                    date: data.date,
                    excerpt: data.excerpt,
                    content: '', // Não precisamos do conteúdo na listagem
                    ...data,
                };
            })
            .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

        return posts;
    } catch (error) {
        console.error(`Error getting all posts from ${folder}:`, error);
        return [];
    }
}
