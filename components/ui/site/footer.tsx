import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <Image src="/logo.svg" alt="quiz-ui" width={24} height={24} className="h-6 w-auto" />
            <span>quiz-ui</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            Radix-based components for building quiz funnels — installed as
            source, no npm package.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Footer navigation">
          <span className="font-medium text-foreground">Resources</span>
          <Link
            href="/docs"
            className="text-foreground/80 underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            Docs
          </Link>
          <Link
            href="/example"
            className="text-foreground/80 underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            Example
          </Link>
          <a
            href="https://github.com/kalpovskii/quiz-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} quiz-ui. Built with Radix UI and shadcn/ui.
        </p>
      </div>
    </footer>
  );
}