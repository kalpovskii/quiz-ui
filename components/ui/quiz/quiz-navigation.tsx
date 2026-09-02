"use client";

import * as React from "react";
import { useQuizStep } from "./core";

export interface QuizNavigationProps {
  nextLabel?: string;
  backLabel?: string;
  hideBack?: boolean;
  /** Applied to the row wrapping both buttons. */
  className?: string;
  backButtonClassName?: string;
  nextButtonClassName?: string;
}

export function QuizNavigation({
  nextLabel = "Next",
  backLabel = "Back",
  hideBack = false,
  className,
  backButtonClassName,
  nextButtonClassName,
}: QuizNavigationProps) {
  const { isAnswered, advance, back, canGoBack } = useQuizStep();

  return (
    <div className={className}>
      {!hideBack && canGoBack ? (
        <button type="button" onClick={back} className={backButtonClassName}>
          {backLabel}
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={advance}
        disabled={!isAnswered}
        className={nextButtonClassName}
      >
        {nextLabel}
      </button>
    </div>
  );
}