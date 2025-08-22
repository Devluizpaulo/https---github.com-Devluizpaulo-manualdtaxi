"use client";

import React, { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { manualSections } from "@/lib/manual-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { cn } from "@/lib/utils";
import { Home, Car, Map, ListChecks, CreditCard, AlertCircle, CircleDot, FileText, ArrowUp, Search, Menu, X, ChevronsUp, ChevronsDown, Palette } from "lucide-react";

type NavLink = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const navLinks: NavLink[] = [
  { id: "intro", label: "Início", icon: Home },
  { id: "padrao", label: "Padrão", icon: Car },
  { id: "estrutura", label: "Estrutura", icon: Map },
  { id: "fluxo", label: "Fluxo", icon: ListChecks },
  { id: "pagamentos", label: "Pagamentos", icon: CreditCard },
  { id: "bolinhas", label: "Bolinhas", icon: CircleDot },
  { id: "regras", label: "Regras", icon: AlertCircle },
  { id: "pda", label: "Manual PDA", icon: FileText },
];

export function ManualPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allOpen, setAllOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExpandToggle = () => {
    setAllOpen((prev) => {
      const newState = !prev;
      document.querySelectorAll("details").forEach((detail) => {
        detail.open = newState;
      });
      return newState;
    });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/80 border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between py-3">
            <div className="flex items-center gap-3 min-w-0">
               <div className="w-14 h-14 rounded-2xl grid place-items-center bg-primary text-primary-foreground shadow-lg flex-shrink-0">
                <Car size={28} />
              </div>
              <div>
                <h1 className="text-lg font-bold truncate text-primary">
                  D-Táxi • Manual Congonhas
                </h1>
                <p className="text-xs text-muted-foreground font-semibold">
                  Guia interativo de operações
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="rounded-xl"
                onClick={handleExpandToggle}
              >
                {allOpen ? <ChevronsUp className="w-4 h-4 mr-2" /> : <ChevronsDown className="w-4 h-4 mr-2" />}
                {allOpen ? "Fechar Tudo" : "Expandir Tudo"}
              </Button>
            </div>
             <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X/> : <Menu />}
              </Button>
            </div>
          </div>
          <nav className={cn("flex-col md:flex-row md:flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4", isMenuOpen ? 'flex' : 'hidden')}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "w-full md:w-auto flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-bold transition-all duration-200",
                  activeSection === link.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card hover:bg-primary/10 hover:border-primary/20"
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
             <div className="w-full md:w-auto pt-2 md:pt-0 md:ml-auto">
               <div className="flex items-center justify-end gap-2 md:hidden">
                <ThemeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl flex-1"
                  onClick={handleExpandToggle}
                >
                  {allOpen ? <ChevronsUp className="w-4 h-4 mr-2" /> : <ChevronsDown className="w-4 h-4 mr-2" />}
                  {allOpen ? "Fechar Seções" : "Expandir Seções"}
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar no manual..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-6 rounded-2xl shadow-sm text-base border-2 border-transparent focus:border-primary"
          />
        </div>

        <div className="space-y-6">
          {manualSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="bg-card border rounded-2xl shadow-lg p-4 md:p-6 scroll-mt-36 transition-all duration-300 hover:shadow-primary/10 hover:border-primary/20"
            >
              <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-primary">
                <section.icon className="w-6 h-6" />
                <Highlight text={section.title} query={searchQuery} />
              </h2>
              <div className="prose prose-sm md:prose-base prose-p:text-muted-foreground dark:prose-invert max-w-none prose-headings:text-foreground prose-strong:text-foreground">
                 {typeof section.content === 'function' ? section.content({ query: searchQuery }) : section.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      {showScrollTop && (
        <div className="fixed right-4 bottom-4 z-50">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-lg h-12 w-12 bg-primary/90 text-primary-foreground hover:bg-primary"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-6 h-6" />
            </Button>
        </div>
      )}

      <footer className="py-8 mt-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-xs">
          <p>© D-Táxi – Manual de Operações (Congonhas). Versão interativa para consulta.</p>
        </div>
      </footer>
    </>
  );
}
