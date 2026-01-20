# 🔧 Diagnóstico de Design System & Plano de Otimização Web Core Vitals

**Projeto:** Guia de Geladeira  
**Data:** 19/01/2026  
**Versão do Análise:** 1.0

---

## 📊 RESUMO EXECUTIVO

O site "Guia de Geladeira" apresenta uma base sólida com o design system "Hybrid Industrial Premium" bem aplicado. No entanto, foram identificadas oportunidades de otimização em **performance (Web Core Vitals)**, **acessibilidade** e **consistência visual**.

### Pontuação Estimada Atual (Lighthouse Mobile)
| Métrica | Estimativa | Meta |
|---------|-----------|------|
| Performance | 65-75 | 90+ |
| Accessibility | 80-85 | 100 |
| Best Practices | 85-90 | 100 |
| SEO | 90-95 | 100 |

---

## 🔍 PROBLEMAS IDENTIFICADOS

### 1. Performance (LCP/CLS)

#### 1.1 Imagens sem Otimização
**Severidade:** 🔴 Alta  
**Impacto:** LCP (Largest Contentful Paint)

- Os placeholders de imagem não utilizam `next/image` com `priority`
- Ausência de dimensões reservadas (`aspect-ratio`) causa CLS (Layout Shift)
- Imagens herói nos artigos são renderizadas como div vazias

**Arquivos Afetados:**
- `src/app/caminhao/[slug]/page.tsx` (linhas 83-93)
- `src/app/portatil/[slug]/page.tsx`
- `src/app/tecnica/[slug]/page.tsx`
- `src/app/manutencao/[slug]/page.tsx`

#### 1.2 Fontes Google Fonts
**Severidade:** 🟡 Média  
**Impacto:** FCP (First Contentful Paint)

- 4 fontes carregadas: Inter, Oswald, Teko, Space_Grotesk
- Apenas Inter e Teko são amplamente usadas
- Oswald e Space_Grotesk podem ser removidas ou lazy-loaded

**Arquivo Afetado:**
- `src/app/layout.tsx` (linhas 5-23)

#### 1.3 Componente LitersCalculator Pesado
**Severidade:** 🟡 Média  
**Impacto:** TBT (Total Blocking Time)

- Arquivo com 15.5KB de JavaScript
- Renderizado na homepage acima do fold
- Pode ser lazy-loaded com `dynamic` import

**Arquivo Afetado:**
- `src/components/industrial/LitersCalculator.tsx`
- `src/app/page.tsx` (linha 141)

---

### 2. Acessibilidade (A11y)

#### 2.1 Contraste de Cores
**Severidade:** 🟡 Média  
**Impacto:** WCAG 2.1 AA

| Combinação | Ratio | Mínimo | Status |
|------------|-------|--------|--------|
| Amber (#f59e0b) em Slate-900 (#0f172a) | 7.2:1 | 4.5:1 | ✅ OK |
| Slate-400 (#94a3b8) em Slate-900 (#0f172a) | 4.3:1 | 4.5:1 | ⚠️ Limite |
| Slate-500 (#64748b) em White | 4.6:1 | 4.5:1 | ⚠️ Limite |

**Recomendação:** Aumentar contraste de textos secundários (Slate-400 → Slate-300)

#### 2.2 Labels de Formulário
**Severidade:** 🟢 Baixa

- Calculadora de Litros não possui `aria-labels` em todos inputs
- Botão de menu mobile tem `aria-label` ✅

#### 2.3 Skip Links Ausentes
**Severidade:** 🟢 Baixa

- Não há link "Pular para conteúdo" para usuários de teclado

---

### 3. Consistência Visual

#### 3.1 Data dos Artigos Incorreta
**Severidade:** 🔴 Alta  
**Impacto:** Credibilidade/SEO

- Artigos mostram "18 de janeiro de 2026" ao invés de "19 de janeiro de 2026"
- Problema de conversão de timezone no `formatDate()`

**Arquivo Afetado:**
- `src/lib/utils.ts` (função `formatDate`)

#### 3.2 Erro de Hidratação (Next.js)
**Severidade:** 🔴 Alta  
**Impacto:** Performance/Console Errors

- Badge "1 Issue" visível no canto da tela (modo dev)
- Possível mismatch entre server e client rendering

#### 3.3 Espaçamento Mobile
**Severidade:** 🟡 Média

- Títulos grandes ("GELADEIRAS DE ALTA RESISTÊNCIA") muito próximos das bordas em mobile
- Recomendado aumentar `px-4` para `px-6` em hero sections mobile

#### 3.4 Botão Menu Sempre Visível
**Severidade:** 🟢 Baixa

- Menu hamburger visível mesmo em desktop (redundante com menu horizontal)
- Sugestão: Ocultar em `md:hidden`

---

### 4. SEO & Meta Tags

#### 4.1 Open Graph / Twitter Cards
**Severidade:** 🟡 Média

- Metadados OG não configurados para artigos individuais
- Imagens de compartilhamento ausentes

#### 4.2 Schema.org / JSON-LD
**Severidade:** 🟡 Média

- Ausência de structured data para:
  - `Article`
  - `Product` (reviews)
  - `FAQPage`
  - `HowTo` (artigos técnicos)

---

## ✅ PLANO DE IMPLEMENTAÇÃO

### Fase 1: Performance Crítica (Impacto Alto)
**Tempo Estimado:** 2-3 horas

| # | Tarefa | Arquivo | Prioridade |
|---|--------|---------|------------|
| 1.1 | Implementar `next/image` nos hero images | `[slug]/page.tsx` (4 arquivos) | P0 |
| 1.2 | Adicionar `priority` nas imagens above-the-fold | `[slug]/page.tsx` | P0 |
| 1.3 | Corrigir função `formatDate` para UTC | `src/lib/utils.ts` | P0 |
| 1.4 | Lazy load LitersCalculator com `dynamic` | `src/app/page.tsx` | P1 |
| 1.5 | Remover fontes não utilizadas (Oswald, Space_Grotesk) | `layout.tsx` | P1 |

### Fase 2: Acessibilidade (WCAG)
**Tempo Estimado:** 1-2 horas

| # | Tarefa | Arquivo | Prioridade |
|---|--------|---------|------------|
| 2.1 | Aumentar contraste Slate-400 → Slate-300 | `globals.css` / components | P1 |
| 2.2 | Adicionar skip-link "Pular para conteúdo" | `Header.tsx` | P2 |
| 2.3 | Adicionar aria-labels na Calculadora | `LitersCalculator.tsx` | P2 |

### Fase 3: Refinamento Visual
**Tempo Estimado:** 1-2 horas

| # | Tarefa | Arquivo | Prioridade |
|---|--------|---------|------------|
| 3.1 | Aumentar padding lateral em mobile (hero) | `page.tsx` (clusters) | P2 |
| 3.2 | Ocultar hamburger em desktop | `Header.tsx` | P2 |
| 3.3 | Adicionar backdrop-blur no Header/BottomNav | `Header.tsx`, `BottomNav.tsx` | P3 |
| 3.4 | Investigar erro de hidratação | Debug console | P1 |

### Fase 4: SEO Avançado
**Tempo Estimado:** 2-3 horas

| # | Tarefa | Arquivo | Prioridade |
|---|--------|---------|------------|
| 4.1 | Configurar OG/Twitter meta em artigos | `[slug]/page.tsx` | P2 |
| 4.2 | Implementar JSON-LD para Article schema | `[slug]/page.tsx` | P2 |
| 4.3 | Criar sitemap.xml dinâmico | `app/sitemap.ts` | P2 |
| 4.4 | Configurar robots.txt | `public/robots.txt` | P3 |

---

## 📋 CONFIGURAÇÕES NEXT.JS RECOMENDADAS

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizeCss: true,
  },
};
```

---

## 🎯 MÉTRICAS ALVO PÓS-OTIMIZAÇÃO

| Métrica | Atual | Meta | Melhoria |
|---------|-------|------|----------|
| LCP | ~3.5s | <2.5s | -30% |
| CLS | ~0.15 | <0.1 | -33% |
| FCP | ~2.0s | <1.8s | -10% |
| Performance Score | 65-75 | 90+ | +25pts |

---

## 📌 ORDEM DE EXECUÇÃO RECOMENDADA

1. **Sprint 1 (Hoje):** Tarefas 1.1, 1.2, 1.3, 3.4
2. **Sprint 2 (Amanhã):** Tarefas 1.4, 1.5, 2.1, 3.1
3. **Sprint 3 (Semana):** Tarefas 4.1, 4.2, 4.3, 4.4
4. **Backlog:** Tarefas 2.2, 2.3, 3.2, 3.3

---

**Documento gerado automaticamente pelo Antigravity AI**  
**Próxima revisão:** Após implementação da Fase 1
