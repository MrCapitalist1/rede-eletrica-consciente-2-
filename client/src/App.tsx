import { Toaster } from "@/components/ui/sonner";
import { useCallback, useEffect, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Historias from "./pages/Historias";
import DistanciaDaRede from "./pages/DistanciaDaRede";
import EmCasoDeAcidente from "./pages/EmCasoDeAcidente";
import NotFound from "./pages/NotFound";

// Direção visual: Editorial Cívico. Esta casca mantém o verde Proteção, o ritmo editorial
// e a navegação clara entre páginas de utilidade pública.
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}

function useGithubHashLocation(): [string, (to: string) => void] {
  const readLocation = () => window.location.hash.replace(/^#/, "") || "/";
  const [location, setLocation] = useState(readLocation);
  const navigate = useCallback((to: string) => {
    const nextHash = `#${to || "/"}`;
    if (window.location.hash === nextHash) {
      setLocation(readLocation());
      return;
    }
    window.location.hash = nextHash;
  }, []);

  useEffect(() => {
    const onHashChange = () => setLocation(readLocation());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return [location, navigate];
}

function Router() {
  const useGithubPagesRouting = import.meta.env.VITE_GITHUB_PAGES === "true";

  return (
    <WouterRouter hook={useGithubPagesRouting ? useGithubHashLocation : undefined}>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/historias" component={Historias} />
      <Route path="/distancia-da-rede" component={DistanciaDaRede} />
      <Route path="/em-caso-de-acidente" component={EmCasoDeAcidente} />
      <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
