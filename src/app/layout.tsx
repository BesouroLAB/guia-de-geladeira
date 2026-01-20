import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  metadataBase: new URL('https://guiadegeladeira.com.br'),
  title: "Guia de Geladeira de Caminhão: Reviews, Instalação e Ofertas (2026)",
  description: "O maior portal de refrigeração automotiva. Reviews técnicos da Resfriar, Elber e Maxiclima. Aprenda a instalar, consertar e economizar bateria.",
  verification: {
    google: "iC93wur6Np56TI-uw7FXtBiIIEG1zLUlqyEBaGQiYmU",
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${teko.variable} antialiased bg-slate-50 text-slate-900 font-sans`}
      >
        {/* Skip Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-amber-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-black focus:uppercase focus:tracking-wider focus:text-sm focus:shadow-xl"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
      <GoogleAnalytics gaId="G-4SZZDXR8LH" />
    </html>
  );
}
