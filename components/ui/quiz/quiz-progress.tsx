"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useQuizEngine } from "./core";

export interface QuizProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  showLabel?: boolean;
  /** Applied to the "Step N of M" text. */
  labelClassName?: string;
  /** Applied to the track (Progress.Root) — needs a visible size/background to read as a bar. */
  trackClassName?: string;
  /** Applied to the filled indicator. Position is computed via inline style; color/height is yours. */
  indicatorClassName?: string;
}

export function QuizProgress({
  className,
  showLabel = true,
  labelClassName,
  trackClassName,
  indicatorClassName,
  ...props
}: QuizProgressProps) {
  const { progress, definition, state } = useQuizEngine();
  const stepNumber = state.history.length;
  const totalSteps = definition.steps.length;

  return (
    <div className={className}>
      {showLabel ? (
        <span className={labelClassName}>
          Step {stepNumber} of {totalSteps}
        </span>
      ) : null}
      <ProgressPrimitive.Root
        className={trackClassName}
        value={Math.round(progress * 100)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={indicatorClassName}
          style={{ transform: `translateX(-${100 - progress * 100}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
}