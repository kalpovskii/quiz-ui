"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/ui/site/copy-button";

export interface PromptCodeTabsProps {
  prompt: string;
  code: string;
  codeBlock?: React.ReactNode;
}

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
      <div className={cn("mt-3", tab !== "prompt" && "hidden")}>
        <div className="flex flex-col gap-2">
          <CopyButton text={prompt} label="prompt" />
          <pre className="max-h-72 w-full overflow-auto whitespace-pre-wrap break-words rounded-md border bg-muted/50 p-3 text-xs leading-relaxed text-foreground">
            {prompt}
          </pre>
        </div>
      </div>

      {/* Code panel */}
      <div className={cn("mt-3", tab !== "code" && "hidden")}>
        <div className="flex flex-col gap-2">
          <CopyButton text={code} label="code" />
          <div className="max-h-72 overflow-auto rounded-md border bg-zinc-900">
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
        "inline-flex cursor-pointer items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-accent text-accent-foreground shadow-sm ring-1 ring-border"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}