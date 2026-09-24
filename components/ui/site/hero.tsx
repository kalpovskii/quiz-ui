import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface SiteHeroProps {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function SiteHero({
  title,
  description,
  primaryHref = "/docs",
  primaryLabel = "Browse docs",
  secondaryHref = "/example",
  secondaryLabel = "View example",
}: SiteHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-100/50 via-background to-background dark:from-purple-950/20 dark:via-background dark:to-background">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-primary px-8 font-semibold shadow-md hover:bg-primary/90 sm:w-auto"
          >
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
        </Button>
        </div>
      </div>
    </section>
  );
}