/* Direção visual: preservar o shell original da campanha “Salva Vidas”, com navegação editorial simples, contraste alto, nota institucional global e menu móvel acessível. */
import { ArrowUpRight, Menu, Radio, ShieldCheck, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/historias", label: "Histórias", index: "01" },
  { href: "/distancia-da-rede", label: "Distância da rede", index: "02" },
  { href: "/em-caso-de-acidente", label: "Em caso de acidente", index: "03" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className={`site-header ${menuOpen ? "menu-active" : ""}`}>
        <Link href="/" className="brand" aria-label="Ir para o início">
          <img src="/manus-storage/rede-symbol-mark_4d66d32b.png" alt="" className="brand-mark" />
          <span className="brand-copy"><strong>SALVA</strong><em>VIDAS</em></span>
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="navegacao-principal">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`menu-scrim ${menuOpen ? "is-visible" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
        <nav id="navegacao-principal" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <div className="mobile-nav-intro"><span>Explorar o guia</span><small>Escolha um caminho de proteção.</small></div>
          {navItems.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? "active" : ""}><span>{item.index}</span>{item.label}<ArrowUpRight size={15} /></Link>)}
          <Link href="/#por-que" className="nav-home-link">Sobre o guia <ArrowUpRight size={15} /></Link>
        </nav>
      </header>
      <main id="conteudo-principal">{children}</main>
      <div className="site-attribution page-width"><Radio size={16} /><p>Conteúdo adaptado do folheto “Salva Vidas: o perigo invisível da rede elétrica”, criado por Paulo Victor Salgado dos Santos. As histórias apontam para as fontes jornalísticas originais.</p></div>
      <footer className="site-footer">
        <div className="footer-brand"><img src="/manus-storage/rede-symbol-mark_4d66d32b.png" alt="" /><span><strong>Rede Elétrica</strong><br />Consciente · guia de apoio</span></div>
        <p>Informação clara pode evitar acidentes. Compartilhe este guia com quem trabalha, brinca e circula perto da rede.</p>
        <Link href="/">Voltar ao início <ArrowUpRight size={15} /></Link>
      </footer>
    </div>
  );
}

export const originalImages = {
  pedreiro: "/manus-storage/rede-story-obra_9f7893b9.jpg",
  andaime: "/manus-storage/rede-safety-detail_ca59746d.jpg",
  pipa: "/manus-storage/rede-story-pipa_3d3bf3be.jpg",
  campo: "/manus-storage/rede-story-campo_0451f7fb.jpg",
  caminhao: "/manus-storage/rede-story-truck_a6d93016.jpg",
  distancia: "/manus-storage/rede-safety-detail_ca59746d.jpg",
  accident: "/manus-storage/rede-accident-scene_b65d9c87.jpg",
};
