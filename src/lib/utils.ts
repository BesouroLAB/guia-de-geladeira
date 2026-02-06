import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string | Date) {
    let date: Date;

    if (typeof dateStr === 'string') {
        // Parse as UTC to avoid timezone offset issues
        // "2026-01-19" should display as "19 de janeiro de 2026" regardless of local timezone
        const [year, month, day] = dateStr.split('-').map(Number);
        date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0)); // Use noon UTC to avoid edge cases
    } else {
        date = dateStr;
    }

    if (isNaN(date.getTime())) return "Data Indisponível";

    return date.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'America/Sao_Paulo' // Ensure consistent output for Brazilian audience
    });
}

export function sanitizePrice(priceStr: string): string {
    if (!priceStr) return "0";

    // 1. Get first part if range (handles normal hyphen, en dash, em dash)
    let cleaned = priceStr.split(/[-–—]/)[0].trim();

    // 2. Remove Currency symbols and any character that is not a digit, comma or dot
    cleaned = cleaned.replace(/[^\d.,]/g, '');

    if (!cleaned) return "0";

    // 3. Brazilian format handling:
    // If it has BOTH '.' and ',', it's definitely "1.800,00" -> "1800.00"
    if (cleaned.includes('.') && cleaned.includes(',')) {
        return cleaned.replace(/\./g, '').replace(',', '.');
    }

    // If it has only ',', it's "1800,00" -> "1800.00"
    if (cleaned.includes(',')) {
        return cleaned.replace(',', '.');
    }

    // If it has only '.', it could be a thousand separator "1.800" OR decimal "1800.00"
    if (cleaned.includes('.')) {
        const parts = cleaned.split('.');
        const lastPart = parts[parts.length - 1];

        // Heuristic: If last part has 3 digits, it's very likely a thousand separator in BR context.
        // Also if there's more than one dot, they are definitely thousand separators.
        if (lastPart.length === 3 || parts.length > 2) {
            return cleaned.replace(/\./g, '');
        }
    }

    return cleaned || "0";
}
