# Ideias de direção visual — Rede Elétrica Consciente

## Abordagens consideradas

### 1. Editorial ecológico contemporâneo
**Very Brief Intro:** Uma experiência educativa com clima de revista de design: marfim, verde floresta, amarelo solar e composição assimétrica. A sensação é de confiança, clareza e proximidade, sem perder sofisticação.

**Probability:** 0.07

### 2. Oficina técnica modular
**Very Brief Intro:** Uma linguagem utilitária inspirada em sinalização industrial, diagramas de segurança e painéis de campo. O foco seria objetividade, leitura rápida e blocos modulares.

**Probability:** 0.03

### 3. Jardim digital luminoso
**Very Brief Intro:** Uma direção leve e sensorial, com tons claros, ilustrações orgânicas e transições suaves para aproximar o tema da energia do cotidiano. O resultado seria mais lúdico e contemplativo.

**Probability:** 0.09

## Abordagem escolhida — Editorial ecológico contemporâneo

### Design Movement
Editorial digital contemporâneo com referências de publicações de sustentabilidade, design suíço humanizado e materiais impressos reciclados. A interface deve parecer uma publicação educativa premium, não um dashboard genérico.

### Core Principles
1. **Clareza em camadas:** cada seção possui uma ação principal e uma hierarquia evidente; o conteúdo pode ser explorado sem sobrecarga visual.
2. **Contraste humano:** verde profundo para autoridade, marfim para acolhimento e amarelo solar para indicar descoberta, foco e ação.
3. **Assimetria funcional:** o layout usa colunas desbalanceadas, recortes, números de seção e cartões deslocados para guiar o olhar sem parecer desorganizado.
4. **Polimento tátil:** botões, links e cards respondem ao toque com feedback curto, foco visível e transições que não bloqueiam a leitura.

### Color Philosophy
O verde floresta representa responsabilidade e continuidade; o marfim reduz a sensação institucional e cria uma superfície quente, confortável em longas leituras; o amarelo solar funciona como sinal de energia e direção, reservado a CTAs, indicadores e momentos de descoberta. Tons de grafite mantêm a acessibilidade e evitam o contraste duro do preto puro.

### Layout Paradigm
A home começa com um hero em duas camadas: uma coluna editorial com título e ação, e um painel visual deslocado que funciona como objeto de energia. Abaixo, o conteúdo alterna blocos amplos com uma faixa de navegação horizontal e cartões de leitura. Em telas pequenas, a assimetria vira uma sequência vertical com respiro, sem exigir zoom nem rolagem horizontal.

### Signature Elements
- **Marginalia de energia:** números de seção, pequenas legendas e linhas de medição lembrando páginas editoriais e esquemas elétricos.
- **Cartões de descoberta:** blocos com bordas suaves, ícone grande e estados de hover/foco que revelam uma microfrase ou ação.
- **Pulso solar:** pequenos sinais amarelos animados com moderação, usados para indicar atividade, seleção ou confirmação.

### Interaction Philosophy
Interações devem ensinar ou orientar, nunca apenas enfeitar. O menu móvel entra como uma lâmina curta e clara; cards podem ser explorados com teclado e toque; filtros e accordions revelam contexto sem saltos de layout; toda ação importante gera confirmação visual ou toast discreto.

### Animation
Usar entradas com fade + deslocamento curto apenas em blocos relevantes. Hover deve elevar o card poucos pixels, mudar a borda e reforçar o ícone; active deve reduzir a escala para 0.97 em aproximadamente 150ms. Menus e drawers entram em 220–280ms com curva ease-out. Respeitar `prefers-reduced-motion`, removendo deslocamentos e pulsos não essenciais.

### Typography System
- **Display:** Fraunces, pesos 500–700, para títulos e números de destaque; serif humanista com personalidade editorial.
- **Interface/body:** Manrope, pesos 400–700, para navegação, textos de apoio e controles; leitura limpa em telas pequenas.
- Hierarquia: títulos responsivos entre `clamp(2.65rem, 7vw, 6.6rem)`, subtítulos com largura controlada, labels em caixa alta apenas para metadados curtos. Nunca usar texto pequeno como único veículo de informação.

### Brand Essence
**Posicionamento:** Um guia visual e prático para entender a rede elétrica e agir com mais segurança e consciência no dia a dia — feito para estudantes, famílias e comunidades.

**Personalidade:** atento, confiável, estimulante.

### Brand Voice
Headlines são diretas, curiosas e visuais; CTAs usam verbos de ação simples; microcopy tranquiliza e explica o próximo passo.

Exemplos:
- “Energia segura começa antes da tomada.”
- “Escolha um caminho e veja o que muda.”

### Wordmark & Logo
Um símbolo sem texto formado por três linhas de condução que se unem em um pequeno raio solar, sugerindo rede, cuidado e fluxo. O wordmark deve aparecer em Manrope semibold com espaçamento controlado; o símbolo funciona sozinho em tamanhos menores e como favicon.

### Signature Brand Color
**Verde Consciente — `#145C4B`**. Um verde profundo, levemente azulado, proprietário o bastante para diferenciar a marca e estável o bastante para sustentar texto, navegação e estados ativos.

## Regras de implementação

- O contador de “vidas salvas” e qualquer métrica equivalente não deve aparecer em nenhuma rota ou bloco da interface.
- A navegação deve ter menu compacto no mobile, com alvos de toque de pelo menos 44px e fechamento ao selecionar uma rota.
- Evitar overflow horizontal, textos cortados e cards estreitos em larguras entre 320px e 430px.
- Utilizar `min-height: 100svh`, `env(safe-area-inset-*)` e tipografia com `clamp()` onde fizer sentido.
- Preservar foco visível, semântica de botões/links e suporte a teclado.
- Toda imagem de destaque deve ter `alt` significativo e comportamento responsivo; o layout não deve depender de uma imagem para manter contraste de texto.
- Interações principais: navegação móvel com drawer, indicador de rolagem, cards com feedback de hover/foco, accordions para conteúdo denso, toast para ações concluídas e botão de retorno ao topo.

## Style Decisions

- O hero deve abrir com uma frase de campanha completa e memorável, não apenas com uma descrição atmosférica do tema.
- “REDE ELÉTRICA CONSCIENTE” é o wordmark principal do guia; o símbolo atua como identidade de apoio e favicon.
- O amarelo solar fica reservado a ações, números, estados ativos, alertas e instruções decisivas; os cards editoriais comuns não usam grandes superfícies amarelas.
- A numeração “01 / 02 / 03” deve atravessar cabeçalhos, blocos de orientação e transições para que a experiência pareça um único protocolo contínuo.
- O registro de emergência usa terracota somente como alerta crítico, mantendo tipografia, espaçamento e lógica editorial do restante do site.
- Antes de qualquer escolha visual ou de conteúdo, perguntar: **“Isso reforça ou dilui a ideia de informação prática que protege?”**
