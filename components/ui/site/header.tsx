"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NAV_LINKS = [
  { href: "/docs", label: "Docs" },
  { href: "/example", label: "Example" },
] as const;

export function SiteHeader() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <Image src="/logo.svg" alt="quiz-ui" width={24} height={24} className="h-6 w-auto" />
          <span className="hidden sm:inline">quiz-ui</span>
        </Link>

        {isMobile === false ? (
          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Button key={link.href} variant="ghost" size="sm" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button variant="ghost" size="sm" asChild className="gap-1.5">
              <a href="https://github.com/kalpovskii/quiz-ui" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            </Button>
          </nav>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </div>

      {isMobile && menuOpen ? (
        <nav
          className={cn("flex flex-col gap-1 border-t bg-background px-4 pb-3 pt-2")}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              className="justify-start"
              asChild
              onClick={() => setMenuOpen(false)}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            asChild
            onClick={() => setMenuOpen(false)}
          >
            <a href="https://github.com/kalpovskii/quiz-ui" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}