import { NextResponse } from 'next/server';

// Product ASINs/IDs to fetch (these are your curated products)
const AMAZON_PRODUCTS = [
    { asin: 'B0XXXXXXXXX', name: 'Resfriar 31L Quadrivolt', category: 'caminhao' },
    { asin: 'B0YYYYYYYYY', name: 'Elber RC55 Gaveta', category: 'caminhao' },
    { asin: 'B0ZZZZZZZZZ', name: 'Black+Decker 24L', category: 'portatil' },
];

const MERCADOLIVRE_PRODUCTS = [
    { mlb: 'MLB1234567890', name: 'Resfriar 31L', category: 'caminhao' },
    { mlb: 'MLB0987654321', name: 'Elber Gaveta 55L', category: 'caminhao' },
    { mlb: 'MLB1122334455', name: 'Cooler Portátil 12V', category: 'portatil' },
];

// Simulated product data (replace with real API calls when credentials are available)
// Structure matches what PA-API 5.0 and ML API would return
interface ProductData {
    id: string;
    name: string;
    brand: string;
    category: 'caminhao' | 'portatil' | 'acessorio';
    originalPrice: number;
    currentPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    link: string;
    store: 'amazon' | 'mercadolivre';
    image?: string;
    isPrime?: boolean;
    isFullService?: boolean;
    isBestSeller?: boolean;
    isLightningDeal?: boolean;
    stock?: 'high' | 'medium' | 'low';
    lastUpdated: string;
}

// Simulated fetch function - replace with real API calls
async function fetchAmazonProducts(): Promise<ProductData[]> {
    // TODO: Replace with PA-API 5.0 when credentials available
    // const paapi = require('paapi5-nodejs-sdk');
    // const response = await paapi.getItems({ ItemIds: AMAZON_PRODUCTS.map(p => p.asin) });

    // Simulated response with realistic data
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    return [
        {
            id: 'resfriar-31l-amz',
            name: 'Resfriar 31 Litros Quadrivolt',
            brand: 'Resfriar',
            category: 'caminhao',
            originalPrice: 1899.00,
            currentPrice: 1699.00,
            discount: 11,
            rating: 4.8,
            reviewCount: 547,
            link: 'https://www.amazon.com.br/dp/B0XXXXXXXXX?tag=guiadegeladeira-20',
            store: 'amazon',
            isPrime: true,
            isBestSeller: true,
            stock: 'medium',
            lastUpdated: new Date().toISOString(),
        },
        {
            id: 'elber-rc55-amz',
            name: 'Elber RC55 Gaveta Premium',
            brand: 'Elber',
            category: 'caminhao',
            originalPrice: 2499.00,
            currentPrice: 2199.00,
            discount: 12,
            rating: 4.7,
            reviewCount: 312,
            link: 'https://www.amazon.com.br/dp/B0YYYYYYYYY?tag=guiadegeladeira-20',
            store: 'amazon',
            isPrime: true,
            stock: 'high',
            lastUpdated: new Date().toISOString(),
        },
        {
            id: 'blackdecker-24l-amz',
            name: 'Black+Decker 24L Termoelétrica',
            brand: 'Black+Decker',
            category: 'portatil',
            originalPrice: 599.00,
            currentPrice: 449.00,
            discount: 25,
            rating: 4.3,
            reviewCount: 1247,
            link: 'https://www.amazon.com.br/dp/B0ZZZZZZZZZ?tag=guiadegeladeira-20',
            store: 'amazon',
            isPrime: true,
            isLightningDeal: true,
            stock: 'low',
            lastUpdated: new Date().toISOString(),
        },
    ];
}

async function fetchMercadoLivreProducts(): Promise<ProductData[]> {
    // TODO: Replace with ML API when credentials available
    // const response = await fetch(`https://api.mercadolibre.com/items/${mlb}`);

    await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay

    return [
        {
            id: 'resfriar-31l-ml',
            name: 'Resfriar 31L Quadrivolt 12/24V',
            brand: 'Resfriar',
            category: 'caminhao',
            originalPrice: 1950.00,
            currentPrice: 1649.00,
            discount: 15,
            rating: 4.9,
            reviewCount: 823,
            link: 'https://www.mercadolivre.com.br/geladeira-resfriar-31l?matt_tool=guiadegeladeira',
            store: 'mercadolivre',
            isFullService: true,
            stock: 'high',
            lastUpdated: new Date().toISOString(),
        },
        {
            id: 'elber-gaveta-ml',
            name: 'Elber Gaveta 55L Caminhão',
            brand: 'Elber',
            category: 'caminhao',
            originalPrice: 2599.00,
            currentPrice: 2299.00,
            discount: 12,
            rating: 4.8,
            reviewCount: 456,
            link: 'https://www.mercadolivre.com.br/geladeira-elber-gaveta?matt_tool=guiadegeladeira',
            store: 'mercadolivre',
            isFullService: true,
            isBestSeller: true,
            stock: 'medium',
            lastUpdated: new Date().toISOString(),
        },
        {
            id: 'cooler-portatil-ml',
            name: 'Cooler Portátil 12V 8L Mini',
            brand: 'Nautika',
            category: 'portatil',
            originalPrice: 399.00,
            currentPrice: 279.00,
            discount: 30,
            rating: 4.2,
            reviewCount: 1589,
            link: 'https://www.mercadolivre.com.br/cooler-portatil-12v?matt_tool=guiadegeladeira',
            store: 'mercadolivre',
            isFullService: true,
            stock: 'high',
            lastUpdated: new Date().toISOString(),
        },
    ];
}

// Simple in-memory cache
let cache: { data: ProductData[]; timestamp: number } | null = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

export async function GET() {
    try {
        // Check cache
        if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
            return NextResponse.json({
                products: cache.data,
                cached: true,
                lastUpdated: new Date(cache.timestamp).toISOString(),
            });
        }

        // Fetch from both sources in parallel
        const [amazonProducts, mlProducts] = await Promise.all([
            fetchAmazonProducts(),
            fetchMercadoLivreProducts(),
        ]);

        const allProducts = [...amazonProducts, ...mlProducts];

        // Update cache
        cache = {
            data: allProducts,
            timestamp: Date.now(),
        };

        return NextResponse.json({
            products: allProducts,
            cached: false,
            lastUpdated: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}
