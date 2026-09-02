"use client";

import * as React from "react";
import { useQuizEngine } from "./core";

export interface QuizTransitionProps {
  children: React.ReactNode;
  /**
   * No default animation class anymore — supply your own (e.g. the
   * `animate-quiz-ui-step-in` utility from the Getting Started guide, or
   * any transition classes of your own).
   */
  className?: string;
}

/** Keys on the current step id so React remounts — and re-animates — the subtree on every transition. */
export function QuizTransition({ children, className }: QuizTransitionProps) {
  const { state } = useQuizEngine();
  return (
    <div key={state.currentStepId} className={className}>
      {children}
    </div>
  );
}