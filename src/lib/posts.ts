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

        // Procura por um arquivo que seja exatamente o slug ou que termine com -slug (para suportar prefixos numéricos 101-, 102-)
        const files = fs.readdirSync(dirPath);
        const fileName = files.find(file =>
            file === `${slug}.mdx` ||
            file.endsWith(`-${slug}.mdx`) ||
            file.replace(/^\d+-/, '').replace(/\.mdx$/, '') === slug
        );

        if (!fileName) return null;

        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug, // Mantemos o slug original na URL
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
            // Create directory if it doesn't exist to avoid crashing
            fs.mkdirSync(dirPath, { recursive: true });
            return [];
        }

        const files = fs.readdirSync(dirPath);

        const posts = files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => {
                // Remove o prefixo numérico (ex: 101-) e a extensão .mdx para criar a slug limpa
                const cleanSlug = file.replace(/^\d+-/, '').replace(/\.mdx$/, '');
                return getPostBySlug(cleanSlug, folder);
            })
            // Filter out nulls and sort by date descending
            .filter((post): post is Post => post !== null)
            .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

        return posts;
    } catch (error) {
        console.error(`Error getting all posts from ${folder}:`, error);
        return [];
    }
}
