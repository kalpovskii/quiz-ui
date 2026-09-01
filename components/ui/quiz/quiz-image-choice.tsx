"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizImageChoiceOption {
  value: string;
  label: string;
  imageUrl: string;
}

export interface QuizImageChoiceProps {
  options: QuizImageChoiceOption[];
  /** Grid columns at the default breakpoint. Default: 2. */
  columns?: 2 | 3;
  className?: string;
}

/**
 * Single-select grid of image cards, for funnels where answers are
 * visual (style picks, product previews) rather than text. Built on the
 * same Radix RadioGroup as QuizChoiceGroup, so it shares its
 * keyboard/focus behavior.
 *
 * @example
 * <QuizImageChoice
 *   columns={3}
 *   options={[{ value: "modern", label: "Modern", imageUrl: "/modern.jpg" }]}
 * />
 */
export function QuizImageChoice({ options, columns = 2, className }: QuizImageChoiceProps) {
  const { value, setValue } = useQuizAnswers();

  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "grid gap-3",
        columns === 3 ? "grid-cols-3" : "grid-cols-2",
        className
      )}
      value={typeof value === "string" ? value : undefined}
      onValueChange={setValue}
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          key={option.value}
          value={option.value}
          className={cn(
            "group flex flex-col overflow-hidden rounded-md border border-border text-left transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "data-[state=checked]:border-primary data-[state=checked]:ring-2 data-[state=checked]:ring-primary"
          )}
        >
          <img
            src={option.imageUrl}
            alt={option.label}
            className="aspect-square w-full object-cover"
          />
          <span className="px-2 py-1.5 text-sm font-medium text-foreground">
            {option.label}
          </span>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
}
