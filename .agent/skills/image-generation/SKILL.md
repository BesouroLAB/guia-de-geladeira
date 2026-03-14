---
name: image-generation
description: Regras rigorosas para geração de imagens no Guia de Geladeira. DEVE ser consultado ANTES de qualquer chamada ao generate_image.
skills: []
---

# Protocolo de Geração de Imagens — Guia de Geladeira

> 🔴 **OBRIGATÓRIO:** Leia e siga TODAS as regras abaixo ANTES de gerar qualquer imagem para o projeto.

---

## 1. REGRA DE OURO: Não Invente o que Não Sabe

**NUNCA coloque um produto (geladeira, bateria, acessório) em uma posição ou local que você NÃO TEM CERTEZA ABSOLUTA de que é real.**

O público-alvo são caminhoneiros profissionais brasileiros. Eles conhecem cada centímetro da cabine. Uma geladeira colocada no lugar errado destrói a credibilidade instantaneamente.

| ✅ PODE (Cenários Seguros - Pipeline Híbrido V2)        | ❌ PROIBIDO (Cenários Inventados)                       |
| --------------------------------------------------- | ------------------------------------------------------- |
| **BGs e Fundos** gerados por IA (Postos, oficinas)  | **Gerar Produtos Heróis** (Geladeiras principais) por IA |
| Produto **REAL** inserido no site ou Photoshop      | Produto "encaixado" dentro de cabine de caminhão         |
| Produto REAL numa bancada de oficina de autoelétrica| Interior de cabine com layout inventado                  |
| Close-up de detalhes OBTIDOS DE FOTOS REAIS          | Motorista usando o produto de forma irreal               |
| Descrições literais de CENÁRIOS no prompt            | Nomes Comerciais (ex: Resfriar 31L) gerados 100% por IA  |
| Caminhões genéricos de fundo em rodovias             | Caminhão com compartimentos que não existem               |
| Textos em **pt-BR** (placas, letreiros, etiquetas)   | Textos em inglês (exceto nomes reais de marcas/modelos)   |

> 🛑 **PIPELINE HÍBRIDO (V2) - REGRA ABSOLUTA PARA PRODUTOS:**
> Como somos um site de reviews com credibilidade técnica, **É ESTRITAMENTE PROIBIDO tentar gerar a imagem principal do produto resenhado (Ex: Resfriar 31L, Elber RC65) via prompt de IA (Text-to-Image)**. Modelos de IA não conseguem replicar 100% o design do fabricante e criam "produtos que não existem" ou "cofres".
>
> **O FLUXO OBRIGATÓRIO É:**
> 1. Para capas de review (Tier 1), o agente DEVE solicitar que o usuário (Tiago) forneça a URL ou o arquivo PNG/JPG da **imagem oficial real** do produto.
> 2. A IA só deve ser usada para gerar FUNDOS (Backgrounds) contextuais ricos (oficinas, rodovias, postos).
> 3. Os painéis e erros explícitos (*Close-ups*) também devem priorizar fotos reais, usando IA apenas para elementos acessórios.
| Textos em **pt-BR** (placas, letreiros, etiquetas)   | Textos em inglês (exceto nomes reais de marcas/modelos)   |
| Descrição literal do produto                         | Palavras que remetem a cofre (safe, security box, vault) |

> 🛠️ **ESTRATÉGIA DE NOMES LITERAIS:** Sempre inclua o nome comercial exato do produto no início do prompt. A IA possui conhecimento interno de milhares de produtos reais; usar o nome exato (ex: "Geladeira Resfriar 31 Litros") ativa esse conhecimento e gera um resultado muito mais fiel do que descrições genéricas.

> 🚫 **PALAVRAS PROIBIDAS (Trigger de Cofre):** NUNCA use "safe", "security box", "vault", "heavy-duty lock", "metal box" (sozinho) ou "safe-like" nos prompts. Isso faz a IA criar um cofre em vez de uma geladeira.

> 🛠️ **ESTRATÉGIA ANTI-COFRE (Para Elber 65L):**
> Para evitar que a geladeira de metal pareça um cofre, **OBRIGATORIAMENTE** inclua no prompt um destes elementos:
> 1. **Porta entreaberta:** Mostrando o interior com prateleiras, garrafas de água e comida.
> 2. **Cena de uso:** Alguém colocando uma garrafa dentro (sem mostrar o rosto).
> 3. **Elementos térmicos:** Mencione explicitamente "cooling fins", "ventilation grill" ou "internal LED light".
> 4. **Contexto Inequívoco:** Coloque o produto dentro de uma "caixa de cozinha de madeira de caminhão" (Brazilian truck kitchen box/caixa de rancho).

> ⚠️ **REGRA DE IDIOMA:** Todo e qualquer texto visível na imagem (placas, letreiros, etiquetas, displays, adesivos) **DEVE estar em português brasileiro (pt-BR)**. A única exceção são nomes de marcas reais que já são em inglês por natureza (ex: "Bluetooth", "LED"). Nomes de marcas brasileiras (Resfriar, Elber, Moura, Maxiclima) ficam como são. Adicione **sempre** ao prompt: `"All visible text, signs and labels must be in Brazilian Portuguese."`

---

## 2. Hierarquia de Tipos de Imagem (Ordem de Preferência)

Sempre que possível, siga esta ordem:

### Tier 1: Product Hero Shot (Preferido para SERP)
- Produto **centralizado**, ocupando 60-70% do quadro.
- Fundo limpo: cinza industrial, gradiente escuro, ou concreto.
- Iluminação de estúdio profissional (3 pontos).
- **Ideal para:** Capas de artigo / coverImage / Thumbnails do Google.

### Tier 2: Close-up de Detalhes
- Macro do painel digital, do interior com comida, do compressor, do logo da marca.
- **Ideal para:** Imagens dentro do artigo, seções técnicas.

### Tier 3: Contexto Ambiental Seguro
- Produto em cenários onde SABEMOS que faz sentido:
  - No chão de um pátio de posto de estrada brasileiro.
  - Numa bancada de oficina especializada (auto-elétrica de caminhão).
  - Sendo transportado por um técnico (sem rosto).
- **Ideal para:** Artigos de assistência técnica, instalação, comparativos.

### Tier 4: Cenários Genéricos de Estrada (Sem produto)
- Fotos ambientais: estradas brasileiras, postos, oficinas, pátios.
- Sem produtos específicos posicionados.
- **Ideal para:** Fundos, headers de seção, artigos de lifestyle.

---

## 3. Contexto Brasileiro — O que Incluir

## 3. Contexto Brasileiro — Referência Visual Completa

### 🚛 Caminhões Brasileiros (Top Vendas 2025/2026)

> Use ESTES modelos nos prompts. São os caminhões que o motorista brasileiro dirige.

| Modelo | Segmento | Cor Típica da Cabine | Detalhes Visuais Marcantes |
|---|---|---|---|
| **Volvo FH 540** | Pesado (1º lugar vendas) | Cinza prata, branco ou azul escuro | Cabine alta "globetrotter", faróis em V, grade cromada imponente, teto solar |
| **Volvo FH 460** | Pesado (2º lugar) | Similar ao FH 540 | Mesma cabine, diferença é no motor |
| **Scania R 460 (Super)** | Pesado (3º lugar) | Branco, prata ou vermelho | Cabine "Highline", faróis com LED em faixa, grade com "V" cromado central |
| **Mercedes Actros 2548** | Pesado | Branco (frota) ou prata | Cabine "MegaSpace", faróis retangulares modernos, grade preta com estrela cromada |
| **Mercedes Axor 2544** | Pesado (relançado 2025) | Branco, azul | Cabine mais quadrada/clássica que o Actros, grade com estrela |
| **VW Constellation 25.460** | Pesado | Branco (99% frota) | Cabine "Robust", design mais simples/quadrado, grade com logo VW |
| **VW Delivery 11.180** | Médio (campeão geral) | Branco | Cabine curta, sem leito, uso urbano |

**Palavras-chave para caminhões brasileiros:**
```
Brazilian cab-over truck (NOT American long-nose). Flat front cab design.
European-style truck cab. Models: Volvo FH, Scania R, Mercedes Actros.
Clean white or silver paint. Brazilian license plates (Mercosul format).
```

### 🏠 Interior de Cabine (Detalhes Verificados)

| Elemento | Scania R 460 | Volvo FH 540 | Mercedes Actros |
|---|---|---|---|
| **Painel** | Digital colorido, volante revestido couro, central multimídia com GPS | Tela digital 12" colorida, multimídia 9" touch, volante couro | Display digital, multimídia integrada |
| **Cama** | Cama larga atrás dos bancos, colchão espesso | Cama com conforto "recalibrado", ampla | Cama "MegaSpace", gavetas sob a cama |
| **Geladeira de fábrica** | Opcional pequena (sob cama ou maleiro) | Geladeira integrada de fábrica (pequena) | Opcional integrada |
| **Cores internas** | Tons escuros (preto/cinza), painéis texturizados | Tons escuros com detalhes em alumínio escovado | Cinza escuro, plásticos texturizados |
| **Detalhes** | Compartimento secreto no maleiro de teto, mesa extensível | Teto solar (saída emergência), espaços de arrumo | Banco passageiro giratório |

> ⚠️ **ATENÇÃO:** Só reproduza interiores de cabine se estiver usando detalhes DESTA tabela. Se o artigo não exige mostrar o interior, use Tier 1 (produto solo) ou Tier 2 (close-up).

### ⛽ Postos de Gasolina Brasileiros

| Rede | Cores | Detalhes Visuais |
|---|---|---|
| **Petrobras (BR)** | Verde e amarelo (bandeira nacional) | Totem alto verde/amarelo, testeira da cobertura com faixa verde, logo "BR" |
| **Ipiranga** | Azul e amarelo/laranja | Totem azul com triângulo amarelo, testeira azul, loja "AM/PM" (laranja) |
| **Shell** | Amarelo e vermelho | Concha amarela/vermelha, testeira amarela, loja "Select" |
| **Graal** | Vermelho e branco | Complexo de serviços grande, restaurante, estacionamento amplo |
| **Posto sem bandeira** | Variado | Letreiros artesanais, visual mais simples, comuns no interior |

**Características visuais de pátios brasileiros:**
```
Large open asphalt parking lot for trucks. Concrete or dirt ground.
Bright fluorescent lighting at night. Metal/concrete canopy over fuel pumps.
Signs in Portuguese ("Diesel S10", "Borracharia", "Restaurante 24h").
Rows of parked cab-over trucks. Security cameras. Chain-link fencing.
Warm tropical lighting (golden hour or harsh midday sun).
```

**Serviços típicos visíveis num posto de estrada:**
- Restaurante/PF (Prato Feito) com letreiro simples
- Borracharia (pneus empilhados na frente)
- Auto-elétrica (letreiro pintado à mão)
- Loja de acessórios de caminhão
- Chuveiros e banheiros (placa "Banheiro R$ 3,00")

### 🛣️ Estradas Brasileiras (Referência por Região)

| Rodovia | Região | Paisagem Visual |
|---|---|---|
| **BR-116 (Via Dutra)** | SP-RJ | Duplicada, asfalto bom, serras, vegetação densa (Mata Atlântica), neblina |
| **BR-116 (Régis Bittencourt)** | SP-PR | Serra sinuosa, perigo, Mata Atlântica, bananeiras, pista escorregadia |
| **BR-101 (Translitorânea)** | Litoral | Praias, costões, duplicada em parte, planícies no Nordeste |
| **BR-163** | MT-PA | Reta interminável, soja/milho dos dois lados, terra vermelha, poeira |
| **BR-153 (Transbrasiliana)** | GO-TO | Cerrado, chapadas, sol escaldante, asfalto com buracos |
| **Interior geral** | Qualquer | Asfalto com remendos, acostamento de terra, placas de "PARE" desbotadas |

**Palavras-chave para estradas brasileiras:**
```
Brazilian highway, two-lane road with patchy asphalt. Red dirt shoulder.
Tropical vegetation (palm trees, cerrado scrubland, or dense Atlantic forest).
Road signs in Portuguese. Km markers. Harsh tropical sunlight.
NOT European: no perfect smooth highways, no green grass medians.
```

**Biomas por contexto de artigo:**
- **Nordeste/Sertão:** Caatinga seca, sol forte, terra clara, mandacarus
- **Sudeste/Dutra:** Serra verde, neblina, asfalto molhado
- **Centro-Oeste/BR-163:** Chapadas de soja, terra vermelha, céu aberto imenso
- **Sul:** Araucárias, serras, frio (geada nos caminhões)
- **Norte/Amazônia:** Floresta densa, umidade, rios, terra vermelha

### O que Evitar (Reforço)
- ❌ Caminhões americanos "nariz longo" (Peterbilt, Kenworth, Freightliner)
- ❌ Truck stops americanos (grama perfeita, neve, letreiros em inglês)
- ❌ Estradas europeias (asfalto perfeito, guard-rails brilhantes)
- ❌ Placas em inglês ou espanhol
- ❌ Pessoas com aparência não-brasileira
- ❌ Paisagens que não existem no Brasil (montanhas nevadas, desertos de areia)

---

## 4. Otimização para SERP e Layout (Google Search Thumbnail)
 
As `coverImage` dos artigos aparecem como miniatura nos resultados do Google e usam `aspect-video` (16:9) no código do site. 
 
> 🔴 **FORMATO E ÁREA DE SEGURANÇA:** Embora o site use `aspect-video` (16:9), a IA pode acabar gerando imagens 1:1 (quadradas). 
> **A REGRA É:** O produto principal deve estar centralizado horizontalmente, ocupando a faixa central da imagem, com "respiro" (espaço vazio) nas laterais e um pouco no topo/base. Isso garante que, quando o site realizar o corte automático para 16:9, o produto não seja "degolado" ou cortado.
>
> **Estratégia no Prompt:** Use termos como "Cinematographic Widescreen 16:9 frame", "Panoramic horizontal composition" e "Centralized subject with negative space on sides".
 
Para maximizar o CTR:

- **Assunto Grande:** O objeto principal deve ocupar a maior parte da imagem.
- **Alto Contraste:** Cores saturadas e vibrantes. Nada desbotado ou com tons pastel.
- **Legibilidade em 100x100px:** Teste mental: "se eu reduzir isso para um selo de 1cm, ainda dá pra saber o que é?"
- **Fundo Limpo:** Sem excesso de detalhes pequenos que viram "ruído" em miniatura.

---

## 5. Checklist Pré-Geração (OBRIGATÓRIO)

Antes de chamar `generate_image`, responda mentalmente:

1. ☐ Li o artigo / conteúdo que esta imagem vai representar?
2. ☐ A posição do produto no prompt é REAL e VERIFICÁVEL?
3. ☐ Se não tenho certeza da posição, estou usando um Tier 1 (studio) ou Tier 2 (close-up)?
4. ☐ O cenário ambiental é brasileiro e não europeu/americano?
5. ☐ A imagem vai ter impacto visual em miniatura (SERP)?
6. ☐ Estou usando marcas brasileiras (Moura, Resfriar, Elber) quando aplicável?

> Se qualquer resposta for "não", **REVISE O PROMPT antes de gerar.**

---

## 6. Template de Prompt Padrão

Use este esqueleto como base para todos os prompts:

```
[TIPO: Product Hero / Close-up / Ambiente Seguro]

[DESCRIÇÃO DO OBJETO PRINCIPAL] — centralizado no quadro, ocupando [X%] do espaço.

Contexto: [fundo neutro industrial / bancada de oficina brasileira / pátio de posto de estrada].
Iluminação: [estúdio 3 pontos / sol tropical forte / luz de oficina fluorescente].
Marcas visíveis: [Resfriar / Elber / Moura / etc.].

Estilo: Fotografia profissional, realista, 8k. Sem pessoas ou sem rostos visíveis.
Formato: Widescreen (16:9).
Otimizado para miniatura: Alto contraste, assunto grande, fundo limpo.
Idioma: All visible text, signs and labels must be in Brazilian Portuguese (pt-BR).
```

---

> **Lembre-se:** É melhor uma imagem "simples e real" do que uma imagem "cinematográfica e fake". O motorista sabe quando é mentira.

---

## 7. Catálogo de Referência Visual (Produtos Reais)

> 🔴 **USE ESTAS FICHAS como base para os prompts.** Elas descrevem a aparência REAL de cada produto.

---

### 🔵 Resfriar 31L (Portátil — Campeã de Vendas)

| Atributo | Descrição Real |
|---|---|
| **Tipo** | Portátil (vai dentro da cabine) |
| **Cor** | **Preta** (gabinete inteiro preto) |
| **Material Externo** | Plástico injetado de alta densidade |
| **Painel** | Digital no topo da tampa, com display LED azul/verde mostrando temperatura |
| **Tampa** | Abre para cima, vedação forte (borracha grossa) |
| **Alças** | 2 alças laterais de plástico rígido (ponto fraco relatado) |
| **Interior** | Plástico branco, divisória interna, iluminação LED |
| **Dimensões** | 63cm (C) x 34,5cm (L) x 42,2cm (A) |
| **Peso** | 15 kg vazio |
| **Detalhes visuais marcantes** | Logo "Resfriar" em relevo na frente; acabamento texturizado fosco; cabo de força saindo da lateral |
| **Recursos visíveis** | Bluetooth (adesivo), display digital, dreno inferior |

**Palavras-chave para prompt:**
```
Black portable truck cooler box, plastic body, digital LED panel on top lid,
two side handles, "Resfriar" brand logo embossed on front, textured matte
black finish, compact rectangular shape, 63x34x42cm proportions.
```

**Onde REALMENTE fica no caminhão (posições verificadas):**
- No chão do lado do passageiro (entre o banco e a porta).
- No chão entre os dois bancos dianteiros.
- Em cima da cama (quando parado).
- ⚠️ NÃO tem suporte fixo — é literalmente uma caixa solta no chão.

---

### 🟤 Elber RC65 (Externa — Caixa de Cozinha)

| Atributo | Descrição Real |
|---|---|
| **Tipo** | Externa (vai no chassi do caminhão ou dentro da caixa de cozinha/rancho) |
| **Cor** | **Cinza claro** (chapa de aço galvanizado, tom metálico) |
| **Material Externo** | Chapa de aço galvanizado (metal, não plástico!) |
| **Tampa/Porta** | Porta frontal com trava progressiva com chave |
| **Interior** | 2 compartimentos: refrigerador (50,7L) + congelador (14,3L), prateleiras removíveis, porta-latas interno |
| **Dimensões** | 51,3cm (A) x 45,8cm (L) x 65cm (P) |
| **Peso** | 33 kg vazio |
| **Detalhes visuais marcantes** | Aspecto industrial robusto; logo "Elber" em azul; dobradiças externas visíveis; dupla vedação; defletor anti-poeira |
| **Isolamento** | PU injetado 40mm (paredes grossas, aspecto robusto) |

**Palavras-chave para prompt:**
```
Industrial grey galvanized steel truck refrigerator, boxy rectangular shape,
front-opening door with progressive lock and key, blue "Elber" logo on front,
visible external hinges, dust deflector, heavy-duty construction, 51x46x65cm
proportions. Robust galvanized metal finish.
```

**Onde REALMENTE fica no caminhão (posições verificadas):**
- Dentro da caixa de cozinha de madeira ou aço (caixa de rancho), fixada no chassi.
- Embutida em longarina lateral do caminhão.
- NUNCA dentro da cabine (é grande e pesada demais — 33kg!).

---

### 🟢 Maxiclima X-Power 20L (Portátil Compacta)

| Atributo | Descrição Real |
|---|---|
| **Tipo** | Portátil (a mais compacta) |
| **Cor** | **Cinza escuro com detalhes pretos** |
| **Material Externo** | Plástico resistente |
| **Painel** | Digital no topo, com botões touch |
| **Tampa** | Abre para cima |
| **Alças** | 2 alças laterais embutidas |
| **Interior** | Plástico branco, iluminação LED, USB |
| **Dimensões** | 58,6cm (C) x 41,2cm (L) x 32cm (A) — mais baixa e larga |
| **Peso** | 10,1 kg vazio (a mais leve!) |
| **Detalhes visuais marcantes** | Logo "Maxiclima" na lateral; porta USB frontal; abridor de garrafas embutido na alça; design mais moderno/arredondado que a Resfriar |
| **Extras** | Bateria interna opcional (vendida separada) |

**Palavras-chave para prompt:**
```
Dark grey compact portable cooler, modern rounded design, digital touch panel
on top, "Maxiclima" logo on side, built-in USB port, integrated bottle opener,
lighter and wider than competitors, 59x41x32cm proportions.
```

**Onde REALMENTE fica no caminhão (posições verificadas):**
- No chão da cabine (mesmo que a Resfriar — é solta).
- Popular em vans, VUCs e veículos menores (HR, Sprinter).

---

### 🔵 Elber CAB 31 (Portátil Premium)

| Atributo | Descrição Real |
|---|---|
| **Tipo** | Portátil (concorrente direta da Resfriar 31L) |
| **Cor** | **Preta** com detalhes cinza |
| **Material Externo** | Plástico de alta densidade |
| **Painel** | Digital com Bluetooth (controle via app) |
| **Tampa** | Abre para cima |
| **Interior** | 2 ambientes independentes, cesto removível |
| **Dimensões** | 58,5cm (P) x 35cm (L) x 38cm (A) — um pouco mais baixa que a Resfriar |
| **Peso** | ~15 kg |
| **Detalhes** | Logo "Elber" em relevo; acabamento premium; mais cara que a Resfriar |

**Palavras-chave para prompt:**
```
Black portable truck cooler, premium build quality, digital panel with
Bluetooth icon, "Elber" logo embossed, two internal compartments,
removable basket, 58x35x38cm proportions.
```

---

### 🔋 Baterias de Caminhão (Referência Visual)

| Marca | Cor Predominante | Detalhes Visuais |
|---|---|---|
| **Moura** | **Verde** com detalhes amarelos | Logo "MOURA" grande em branco; borda superior amarela; caixa verde vibrante |
| **Heliar** | **Preta** com detalhes vermelhos/brancos | Logo "HELIAR" em branco; faixa vermelha lateral; visual mais sóbrio |

**Palavras-chave para baterias:**
```
MOURA: Large green truck battery, bright yellow top edge, white "MOURA" logo,
150Ah label, heavy-duty terminals on top.

HELIAR: Large black truck battery, red stripe detail, white "HELIAR" logo,
professional look, heavy-duty terminals.
```

**Onde REALMENTE ficam:**
- No cofre de bateria do caminhão (compartimento externo na lateral, abaixo da cabine).
- Sempre em pares (2x 150Ah em caminhões 24v).

---

## 8. Mapa: Qual Imagem para Qual Artigo?

| Artigo | Produto Principal | Tier Recomendado | Foco do Prompt |
|---|---|---|---|
| 101 (Ranking) | Resfriar + Elber + Maxiclima | Tier 1 (3 produtos lado a lado) | Comparativo visual, fundo limpo |
| 102 (Review Resfriar) | Resfriar 31L | Tier 1 (produto solo) | Detalhes do painel e logo |
| 103 (Review Elber 65L) | Elber RC65 | Tier 1 (produto solo) | Aspecto metálico/industrial |
| 107 (Review Elber 31L) | Elber CAB 31 | Tier 1 (produto solo) | Premium, Bluetooth |
| 301 (Instalação) | Fiação + Bateria | Tier 2 (close-up de cabos) | Mãos conectando fio 6mm² |
| 303 (Bateria) | Bateria Moura/Heliar | Tier 2/3 (close-up ou oficina) | Multímetro testando bateria |
| 304 (Erros) | Painel da Resfriar | Tier 2 (macro do display) | Display mostrando E1 |
| 402 (Assistência) | Geladeira em oficina | Tier 3 (ambiente seguro) | Bancada de oficina brasileira |
| 501 (Motorhome) | Geladeira portátil genérica | Tier 3/4 (vanlife) | Interior de van/kombi |
| 503 (Solar) | Painel solar | Tier 3/4 (cenário seguro) | Painel no teto — vista de cima |
