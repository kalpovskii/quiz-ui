"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/ui/site/copy-button";

export interface PromptCodeTabsProps {
  prompt: string;
  code: string;
  /** Server-rendered highlighted code block (kept mounted, toggled via hidden/visible). */
  codeBlock?: React.ReactNode;
}

/**
 * Prompt / Code tabs. Unlike Radix Tabs (which unmount the inactive panel
 * and would drop server-rendered highlighted code), both panels stay mounted
 * and visibility is toggled with CSS — so the shiki-highlighted code block
 * rendered server-side remains intact in the DOM.
 */
export function PromptCodeTabs({ prompt, code, codeBlock }: PromptCodeTabsProps) {
  const [tab, setTab] = React.useState<"prompt" | "code">("prompt");

  return (
    <div className="w-full">
      <div className="flex items-center gap-1 border-b pb-2">
        <TabButton active={tab === "prompt"} onClick={() => setTab("prompt")}>
          Prompt
        </TabButton>
        <TabButton active={tab === "code"} onClick={() => setTab("code")}>
          Code
        </TabButton>
      </div>

      {/* Prompt panel */}
      <div className={cn("mt-2", tab !== "prompt" && "hidden")}>
        <div className="flex flex-col gap-2">
          <CopyButton text={prompt} label="prompt" />
          <pre className="max-h-72 w-full overflow-auto rounded-md border bg-muted/50 p-4 text-xs leading-relaxed whitespace-pre-wrap text-foreground">
            {prompt}
          </pre>
        </div>
      </div>

      {/* Code panel (always mounted; highlighted server-side) */}
      <div className={cn("mt-2", tab !== "code" && "hidden")}>
        <div className="flex flex-col gap-2">
          <CopyButton text={code} label="code" />
          <div className="overflow-hidden rounded-md border bg-muted/50 [&>pre]:m-0! [&>pre]:rounded-none! [&>pre]:bg-transparent! [&>pre]:p-4! [&>pre]:text-xs!">
            {codeBlock}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-sm px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}