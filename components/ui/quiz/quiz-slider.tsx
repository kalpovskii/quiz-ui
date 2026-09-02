"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  formatValue?: (value: number) => string;
  /** Applied to the outer wrapper (value display + track stacked vertically). */
  className?: string;
  /** Applied to the value display text above the track. */
  valueClassName?: string;
  /** Applied to the track — this is what needs a visible background/height. */
  trackClassName?: string;
  /** Applied to the filled portion of the track. */
  rangeClassName?: string;
  /** Applied to the draggable thumb. */
  thumbClassName?: string;
}

/**
 * Fully headless — no default colors, sizing, or borders. Every visual
 * choice lives in the className props; only structural/functional
 * classes (positioning Radix needs to compute drag behavior) are baked
 * in. Style it entirely from the consumer side.
 */
export function QuizSlider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  formatValue,
  className,
  valueClassName,
  trackClassName,
  rangeClassName,
  thumbClassName,
}: QuizSliderProps) {
  const { value, setValue } = useQuizAnswers();
  const numericValue =
    typeof value === "number" ? value : defaultValue ?? Math.round((min + max) / 2);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className={cn(valueClassName)} aria-live="polite">
        {formatValue ? formatValue(numericValue) : numericValue}
      </span>
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        min={min}
        max={max}
        step={step}
        value={[numericValue]}
        onValueChange={([v]) => setValue(v)}
      >
        <SliderPrimitive.Track className={cn("relative w-full grow", trackClassName)}>
          <SliderPrimitive.Range className={cn("absolute h-full", rangeClassName)} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={cn("block", thumbClassName)} aria-label="Value" />
      </SliderPrimitive.Root>
    </div>
  );
}