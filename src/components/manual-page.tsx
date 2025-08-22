"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { manualSections } from "@/lib/manual-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { AiAssistant } from "@/components/ai-assistant";
import { cn } from "@/lib/utils";

type NavLink = {
  id: string;
  label: string;
  icon: string;
};

const navLinks: NavLink[] = [
  { id: "intro", label: "Início", icon: "i-rules" },
  { id: "padrao", label: "Padrão", icon: "i-uniform" },
  { id: "estrutura", label: "Estrutura", icon: "i-map" },
  { id: "fluxo", label: "Fluxo", icon: "i-rules" },
  { id: "pagamentos", label: "Pagamentos", icon: "i-pay" },
  { id: "bolinhas", label: "Bolinhas", icon: "i-dot" },
  { id: "regras", label: "Regras gerais", icon: "i-alert" },
  { id: "pda", label: "Manual PDA", icon: "i-rules" },
];

export function ManualPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allOpen, setAllOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
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
      setShowScrollTop(window.scrollY > 200);
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
              <div className="w-14 h-14 rounded-xl grid place-items-center bg-card shadow-sm flex-shrink-0">
                <Icon id="i-logo" className="w-9 h-9" />
              </div>
              <div>
                <h1 className="text-lg font-bold truncate">
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
                <Icon
                  id={allOpen ? "i-collapse" : "i-expand"}
                  className="w-4 h-4 mr-2"
                />
                {allOpen ? "Fechar Tudo" : "Expandir Tudo"}
              </Button>
            </div>
          </div>
          <nav className="flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  "flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-bold transition-colors",
                  activeSection === link.id
                    ? "bg-primary/10 border-primary/20 text-primary-foreground"
                    : "bg-card hover:bg-accent/50"
                )}
              >
                <Icon id={link.icon} className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-6">
          <Icon id="i-search" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar no manual..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-6 rounded-xl shadow-sm"
          />
        </div>

        <div className="space-y-4">
          {manualSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="bg-gradient-to-b from-card to-secondary/10 dark:to-card/50 border rounded-2xl shadow-lg p-4 md:p-6 scroll-mt-28"
            >
              <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
                <Icon id={section.icon} className="w-5 h-5" />
                <Highlight text={section.title} query={searchQuery} />
              </h2>
              <div className="prose prose-sm md:prose-base prose-p:text-muted-foreground dark:prose-invert max-w-none">
                 {typeof section.content === 'function' ? section.content({ query: searchQuery }) : section.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
        <AiAssistant />
        {showScrollTop && (
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-12 w-12"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
          >
            <Icon id="i-up" className="w-5 h-5" />
          </Button>
        )}
      </div>

      <footer className="py-8 text-center text-muted-foreground text-xs">
        <p>© D-Táxi – Manual de Operações (Congonhas). Versão interativa para consulta.</p>
      </footer>
    </>
  );
}
