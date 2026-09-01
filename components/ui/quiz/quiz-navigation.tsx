"use client";

import * as React from "react";
import { useQuizStep } from "./core";
import { cn } from "@/lib/utils";

export interface QuizNavigationProps {
  nextLabel?: string;
  backLabel?: string;
  /** Hide the back button entirely, even on steps after the first. */
  hideBack?: boolean;
  className?: string;
}

/**
 * Back/Next controls for the active step. Next is disabled automatically
 * when the step is required and unanswered (see `QuizStepDefinition.required`
 * and `isStepAnswered` in the core engine). Back is hidden on the entry
 * step since there's no history to return to.
 *
 * @example
 * <QuizNavigation nextLabel="Continue" />
 */
export function QuizNavigation({
  nextLabel = "Next",
  backLabel = "Back",
  hideBack = false,
  className,
}: QuizNavigationProps) {
  const { isAnswered, advance, back, canGoBack } = useQuizStep();

  return (
    <div className={cn("flex items-center justify-between gap-3 pt-2", className)}>
      {!hideBack && canGoBack ? (
        <button
          type="button"
          onClick={back}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {backLabel}
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={advance}
        disabled={!isAnswered}
        className={cn(
          "ml-auto rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        {nextLabel}
      </button>
    </div>
  );
}
