"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useQuizEngine } from "./core";
import { cn } from "@/lib/utils";

export interface QuizProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  /** Show "Step N of M" text alongside the bar. Default: true. */
  showLabel?: boolean;
}

export function QuizProgress({ className, showLabel = true, ...props }: QuizProgressProps) {
  const { progress, definition, state } = useQuizEngine();
  const stepNumber = state.history.length;
  const totalSteps = definition.steps.length;

  return (
    <div className="flex flex-col gap-1.5">
      {showLabel ? (
        <span className="text-xs text-muted-foreground">
          Step {stepNumber} of {totalSteps}
        </span>
      ) : null}
      <ProgressPrimitive.Root
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-muted",
          className
        )}
        value={Math.round(progress * 100)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-primary transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${100 - progress * 100}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
}
