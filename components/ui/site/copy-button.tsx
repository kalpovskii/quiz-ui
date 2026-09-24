"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export interface CopyButtonProps {
  text: string;
  label: string;
}

export function CopyButton({ text, label }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer self-start py-1 text-[11px] h-auto"
      onClick={() => copy(text)}
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <Check className="h-3 w-3" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}