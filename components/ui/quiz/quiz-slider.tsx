"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizSliderProps {
  min?: number;
  max?: number;
  step?: number;
  /** Used when no answer has been recorded yet. */
  defaultValue?: number;
  /** Formats the displayed value, e.g. `(v) => `$${v}`` for currency. */
  formatValue?: (value: number) => string;
  className?: string;
}

/**
 * Single-thumb range input for numeric answers (budget, age, quantity).
 *
 * @example
 * <QuizSlider min={0} max={100} step={5} formatValue={(v) => `${v}%`} />
 */
export function QuizSlider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  formatValue,
  className,
}: QuizSliderProps) {
  const { value, setValue } = useQuizAnswers();
  const numericValue =
    typeof value === "number" ? value : defaultValue ?? Math.round((min + max) / 2);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="text-2xl font-semibold text-foreground" aria-live="polite">
        {formatValue ? formatValue(numericValue) : numericValue}
      </span>
      <SliderPrimitive.Root
        className="relative flex h-5 w-full touch-none select-none items-center"
        min={min}
        max={max}
        step={step}
        value={[numericValue]}
        onValueChange={([v]) => setValue(v)}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow rounded-full bg-white/20">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-foreground" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block h-5 w-5 rounded-full border-2 border-background bg-foreground shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          aria-label="Value"
        />
      </SliderPrimitive.Root>
    </div>
  );
}
