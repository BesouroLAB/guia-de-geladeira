# 🚚 Guia de Geladeira (Industrial Premium)

O **Guia de Geladeira** é uma plataforma de autoridade focada no nicho de refrigeração automotiva e portabilidade para o mercado brasileiro. O projeto combina um design "Hybrid Industrial Premium" com uma arquitetura de conteúdo focada em conversão, SEO avançado e performance técnica.

## 🏗️ Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS (Arquitetura Utilitária)
- **Content:** MDX (Markdown for Component Era) com `next-mdx-remote`
- **Performance:** Imagens otimizadas (AVIF/WebP), Code Splitting e Lazy Loading
- **SEO:** JSON-LD Dinâmico, Metadados OpenGraph/Twitter e Sitemap Automático
- **Icons:** Lucide React

## 💎 Diferenciais do Projeto
1. **Design System Industrial:** Paleta de cores baseada em Slate e Amber, texturas de *Diamond Plate*, fontes robustas (Teko) e efeitos de micro-animação.
2. **Arquitetura de Silos:** Conteúdo organizado em clusters estratégicos (Linha Pesada, Portáteis, Técnica e Manutenção).
3. **Calculadora Inteligente:** Componente interativo para cálculo de litragem ideal baseado no perfil de uso do motorista.
4. **Ofertas em Tempo Real:** Integração (simulada via API Route) com Amazon e Mercado Livre para preços atualizados e selos de oferta.
5. **Acessibilidade (WCAG):** Conformidade com altos padrões de contraste de cor, navegação por teclado (skip-links) e suporte a Screen Readers (aria-labels).

## 🚀 Metas de Performance
- **LCP:** < 1.2s
- **CLS:** 0 (Estabilidade visual total)
- **Accessibility Score:** 100/100 (Lighthouse)

## 🛠️ Como Rodar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/guia-de-geladeira.git
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto**
   Abra `http://localhost:3000` no seu navegador. As edições nos arquivos `content/reviews/*.mdx` são refletidas instantaneamente.

---
*Desenvolvido com foco no estradeiro brasileiro.*
