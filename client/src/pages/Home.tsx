/* Direção visual: preservar a campanha editorial original do ZIP, com hero de utilidade pública, linguagem “Salva Vidas” e blocos práticos; as melhorias entram apenas como contraste, responsividade e dados reais. */
import { ArrowRight, BookOpen, ChevronDown, MoveUpRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { SiteLayout, originalImages } from "@/components/SiteLayout";

const topicCards = [
  { index: "01", title: "Histórias que alertam", text: "Casos reais mostram como um segundo de distração pode mudar tudo.", href: "/historias", label: "Ler histórias", image: originalImages.pedreiro, tone: "photo-card", alt: "Trabalhador próximo a uma estrutura de obra" },
  { index: "02", title: "Distância da rede", text: "Aprenda a reconhecer a zona de risco antes de levantar, brincar ou operar.", href: "/distancia-da-rede", label: "Ver guia", image: originalImages.distancia, tone: "lime-card", alt: "Fita de segurança próxima a uma instalação elétrica" },
  { index: "03", title: "Se algo acontecer", text: "O que fazer — e, principalmente, o que não fazer — em uma emergência.", href: "/em-caso-de-acidente", label: "Saber agora", image: originalImages.accident, tone: "dark-card", alt: "Área isolada próxima a um cabo elétrico" },
];

export default function Home() {
  return (
    <SiteLayout>
      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="hero-grid">
          <div className="hero-copy reveal-in">
            <div className="eyebrow"><span className="eyebrow-line" /> Folheto de conscientização</div>
            <p className="hero-index">CAMPANHA SALVA VIDAS / GUIA 2026</p>
            <h1>A eletricidade não avisa. <em>Você pode.</em></h1>
            <p className="hero-lead">O perigo invisível da rede elétrica pode ser evitado. Conheça os riscos, reconheça a distância segura e ajude a manter mais pessoas protegidas.</p>
            <div className="hero-actions">
              <Link href="/distancia-da-rede" className="button-primary">Começar pelo essencial <ArrowRight size={18} /></Link>
              <a href="#por-que" className="text-link">Por que isso importa? <ChevronDown size={16} /></a>
            </div>
          </div>
          <aside className="hero-guide-note reveal-in delay-1">
            <div className="guide-note-top"><ShieldCheck size={19} /><span>Nota de campo</span><span className="guide-note-index">01 / 03</span></div>
            <strong>Olhe para cima.<br /><em>Planeje antes.</em></strong>
            <p>A distância segura começa antes da ferramenta, da brincadeira ou da máquina se mover.</p>
            <Link href="/distancia-da-rede" className="guide-note-link">Abrir guia de distância <ArrowRight size={16} /></Link>
          </aside>
        </div>
        <div className="hero-caption"><span>01</span><span>Observe antes de agir</span><span className="caption-dash" /><a href="#por-que">Role para explorar <ChevronDown size={14} /></a></div>
      </section>

      <section id="por-que" className="intro-section page-width">
        <div className="section-marker"><span>00</span><span>O ponto de partida</span></div>
        <div className="intro-content">
          <div><p className="section-kicker">Por que falar sobre isso?</p><h2>A eletricidade não precisa ser <em>vista</em> para ser perigosa.</h2></div>
          <div className="intro-aside"><p>Um fio aparentemente distante, uma caçamba levantada ou uma pipa enroscada podem criar uma situação de risco em poucos segundos.</p><p className="muted-copy">Este guia foi criado para transformar atenção em hábito — no campo, na rua, no trabalho e na brincadeira.</p></div>
        </div>
      </section>

      <section className="topics-section page-width">
        <div className="section-heading"><div><p className="section-kicker">Navegue pelo guia</p><h2>Três cuidados que <em>fazem diferença.</em></h2></div><p className="section-count">03 tópicos<br />essenciais</p></div>
        <div className="topic-grid">
          {topicCards.map((card) => <Link key={card.href} href={card.href} className={`topic-card ${card.tone}`}>
            <div className="topic-image"><img src={card.image} alt={card.alt} loading="lazy" /><span className="topic-number">{card.index}</span></div>
            <div className="topic-body"><div><h3>{card.title}</h3><p>{card.text}</p></div><span className="topic-link">{card.label} <MoveUpRight size={16} /></span></div>
          </Link>)}
        </div>
      </section>

      <section className="stats-section page-width" aria-labelledby="dados-2024-titulo"><div className="stats-heading"><div><p className="section-kicker">O retrato dos acidentes</p><h2 id="dados-2024-titulo">Menos ocorrências. <em>Mais atenção.</em></h2></div><p>Dois recortes ajudam a dimensionar o desafio: o acompanhamento de 2024 e o total registrado no Brasil.</p></div><div className="stats-scopes"><div className="stats-scope"><p className="stats-scope-label">Recorte de 2024</p><div className="stats-grid"><article className="stat-card"><span className="stat-card-label">Acidentes totais</span><strong>685</strong><p>ocorrências registradas com a rede elétrica em 2024.</p></article><article className="stat-card stat-card-alert"><span className="stat-card-label">Acidentes fatais</span><strong>257</strong><p>fatalidades registradas no mesmo período.</p></article></div><a className="stats-source" href="https://www.osetoreletrico.com.br/numero-de-acidentes-com-a-rede-eletrica-cai-124-entre-2023-e-2024/" target="_blank" rel="noreferrer">Fonte: reportagem do Setor Elétrico sobre os dados de 2024 <MoveUpRight size={14} /></a></div><div className="stats-scope stats-scope-national"><p className="stats-scope-label">Total registrado no Brasil</p><div className="stats-grid"><article className="stat-card stat-card-national"><span className="stat-card-label">Acidentes totais</span><strong>2.373</strong><p>ocorrências registradas no Brasil.</p></article><article className="stat-card stat-card-national-alert"><span className="stat-card-label">Acidentes fatais</span><strong>870</strong><p>fatalidades registradas no Brasil.</p></article></div></div></div><span className="stats-source stats-source-note">Dados de referência do material encaminhado</span></section>

      <section className="impact-strip">
        <div className="page-width impact-inner"><div className="impact-icon"><ShieldCheck size={27} /></div><div><p className="section-kicker">Uma decisão simples</p><h2>Ver a rede é o primeiro passo para <em>respeitar a distância.</em></h2></div><Link href="/em-caso-de-acidente" className="button-secondary">Guardar o protocolo <BookOpen size={17} /></Link></div>
      </section>
    </SiteLayout>
  );
}
