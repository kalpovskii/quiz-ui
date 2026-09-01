"use client";

import * as React from "react";
import { useQuizEngine } from "./core";
import { cn } from "@/lib/utils";

export interface QuizTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fades/slides in its children whenever the current step changes. Keys on
 * `currentStepId` so React remounts (and thus re-animates) the subtree on
 * every transition — deliberately simple over pulling in an animation
 * library, since a single step-change animation doesn't need one.
 *
 * Requires the `quiz-ui-step-in` keyframe below in your Tailwind config
 * (see registry item `meta` for the exact snippet):
 *
 * ```js
 * // tailwind.config.js
 * keyframes: {
 *   "quiz-ui-step-in": {
 *     from: { opacity: 0, transform: "translateY(4px)" },
 *     to: { opacity: 1, transform: "translateY(0)" },
 *   },
 * },
 * animation: {
 *   "quiz-ui-step-in": "quiz-ui-step-in 200ms ease-out",
 * },
 * ```
 *
 * @example
 * <QuizTransition>
 *   <QuizStep>{(step) => <QuizChoiceGroup options={step.props.options} />}</QuizStep>
 * </QuizTransition>
 */
export function QuizTransition({ children, className }: QuizTransitionProps) {
  const { state } = useQuizEngine();

  return (
    <div key={state.currentStepId} className={cn("animate-quiz-ui-step-in", className)}>
      {children}
    </div>
  );
}
