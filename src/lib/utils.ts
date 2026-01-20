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
