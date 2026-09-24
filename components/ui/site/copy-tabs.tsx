"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export interface CopyTabsProps {
  prompt: string;
  code: string;
}

/**
 * Two tabs — "Prompt" and "Code" — each with a copy-to-clipboard button.
 * Reusable across the intro page and SEO landing pages.
 */
export function CopyTabs({ prompt, code }: CopyTabsProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <Tabs defaultValue="prompt" className="w-full">
      <div className="flex items-center justify-between gap-2 border-b pb-2">
        <TabsList>
          <TabsTrigger value="prompt">Prompt</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="prompt" className="mt-2">
        <ClipboardPanel
          text={prompt}
          copied={copied}
          onCopy={() => copy(prompt)}
          label="prompt"
        />
      </TabsContent>

      <TabsContent value="code" className="mt-2">
        <ClipboardPanel
          text={code}
          copied={copied}
          onCopy={() => copy(code)}
          label="code"
          monospace
        />
      </TabsContent>
    </Tabs>
  );
}

interface ClipboardPanelProps {
  text: string;
  copied: boolean;
  onCopy: () => void;
  label: string;
  monospace?: boolean;
}

function ClipboardPanel({ text, copied, onCopy, label, monospace = false }: ClipboardPanelProps) {
  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        size="sm"
        className="self-start"
        onClick={onCopy}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied!" : "Copy"}
      </Button>
      <pre
        className={`max-h-72 w-full overflow-auto rounded-md border bg-muted/50 p-4 text-xs leading-relaxed text-foreground ${
          monospace ? "font-mono whitespace-pre" : "font-sans whitespace-pre-wrap"
        }`}
      >
        {text}
      </pre>
    </div>
  );
}