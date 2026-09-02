"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizRatingProps {
  scale?: number;
  numeric?: boolean;
  /** Applied to the row wrapping all items. */
  className?: string;
  /** Applied to every item, regardless of state. */
  itemClassName?: string;
  /** Applied on top of `itemClassName` when that item is the selected one. */
  activeItemClassName?: string;
}

/**
 * Fully headless. The active/inactive state is computed in React (not
 * via a `data-[state=on]:` CSS selector), so it's immune to any external
 * stylesheet with higher specificity silently overriding it — a real bug
 * this project hit once already. Style every state via the className props.
 */
export function QuizRating({
  scale = 5,
  numeric = false,
  className,
  itemClassName,
  activeItemClassName,
}: QuizRatingProps) {
  const { value, setValue } = useQuizAnswers();
  const selected = typeof value === "number" ? String(value) : undefined;

  return (
    <ToggleGroupPrimitive.Root
      type="single"
      value={selected}
      onValueChange={(v) => {
        if (v) setValue(Number(v));
      }}
      className={cn("flex", className)}
      aria-label="Rating"
    >
      {Array.from({ length: scale }, (_, i) => i + 1).map((n) => {
        const isOn = selected === String(n);
        return (
          <ToggleGroupPrimitive.Item
            key={n}
            value={String(n)}
            className={cn(itemClassName, isOn && activeItemClassName)}
          >
            {numeric ? n : "★"}
          </ToggleGroupPrimitive.Item>
        );
      })}
    </ToggleGroupPrimitive.Root>
  );
}