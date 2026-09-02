"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizRatingProps {
  /** Number of rating options. Default: 5. */
  scale?: number;
  /** Render numbers (1, 2, 3...) instead of stars. Default: false. */
  numeric?: boolean;
  className?: string;
}

/**
 * Single-select rating scale (stars by default, or numbers for NPS-style
 * questions). Backed by Radix ToggleGroup in single-selection mode so
 * arrow-key navigation between options works out of the box.
 *
 * @example
 * <QuizRating scale={10} numeric />
 */
export function QuizRating({ scale = 5, numeric = false, className }: QuizRatingProps) {
  const { value, setValue } = useQuizAnswers();
  const selected = typeof value === "number" ? String(value) : undefined;

  return (
    <ToggleGroupPrimitive.Root
      type="single"
      value={selected}
      onValueChange={(v) => {
        if (v) setValue(Number(v));
      }}
      className={cn("mx-auto flex gap-2", className)}
      aria-label="Rating"
    >
      {Array.from({ length: scale }, (_, i) => i + 1).map((n) => {
        const isOn = selected === String(n);
        return (
          <ToggleGroupPrimitive.Item
            key={n}
            value={String(n)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md border-2 text-sm font-semibold transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
              isOn
                ? "border-foreground bg-white text-black"
                : "border-foreground/20 text-foreground/60 hover:border-foreground/50 hover:text-foreground"
            )}
          >
            {numeric ? n : "★"}
          </ToggleGroupPrimitive.Item>
        );
      })}
    </ToggleGroupPrimitive.Root>
  );
}