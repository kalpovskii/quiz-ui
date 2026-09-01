"use client";

import * as React from "react";
import { useQuizEngine, type QuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizResultProps {
  /** Only renders once the engine status is "complete". */
  children: React.ReactNode | ((answers: QuizAnswers) => React.ReactNode);
  className?: string;
}

/**
 * Renders its children only once the funnel is complete, passing the full
 * answers map to a render-prop `children` if you need to compute an
 * outcome (a score, a recommended product, a segment) from the collected
 * answers. Renders nothing while the funnel is still in progress.
 *
 * @example
 * <QuizResult>
 *   {(answers) => <p>Recommended plan: {scorePlan(answers)}</p>}
 * </QuizResult>
 */
export function QuizResult({ children, className }: QuizResultProps) {
  const { state } = useQuizEngine();

  if (state.status !== "complete") return null;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {typeof children === "function" ? children(state.answers) : children}
    </div>
  );
}
