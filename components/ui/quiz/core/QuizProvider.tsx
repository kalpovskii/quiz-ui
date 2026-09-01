"use client";

import * as React from "react";
import type {
  AnswerValue,
  QuizAnswers,
  QuizDefinition,
  QuizEngineState,
} from "./types";
import {
  createInitialState,
  createQuizReducer,
  estimateProgress,
  getStep,
  isStepAnswered,
} from "./engine";

export interface QuizContextValue {
  definition: QuizDefinition;
  state: QuizEngineState;
  /** 0–1 estimate of how far through the funnel the user is. */
  progress: number;
  currentStep: ReturnType<typeof getStep>;
  isCurrentStepAnswered: boolean;
  canGoBack: boolean;
  answer: (value: AnswerValue) => void;
  advance: () => void;
  back: () => void;
  goTo: (stepId: string) => void;
  reset: () => void;
}

const QuizContext = React.createContext<QuizContextValue | null>(null);

export interface QuizProviderProps {
  definition: QuizDefinition;
  children: React.ReactNode;
  /** Called once, when the engine transitions into "complete". */
  onComplete?: (answers: QuizAnswers) => void;
}

/**
 * Owns a single quiz engine instance for the subtree. This is the only
 * component in the library that touches `useReducer` directly — everything
 * else (QuizRoot, QuizStep, individual inputs) reads through the hooks in
 * `./hooks`, so swapping the underlying state implementation later only
 * requires changes here.
 */
export function QuizProvider({ definition, children, onComplete }: QuizProviderProps) {
  const reducer = React.useMemo(() => createQuizReducer(definition), [definition]);
  const [state, dispatch] = React.useReducer(reducer, definition, createInitialState);

  const hasCompletedRef = React.useRef(false);
  React.useEffect(() => {
    if (state.status === "complete" && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onComplete?.(state.answers);
    }
    if (state.status === "in-progress") {
      hasCompletedRef.current = false;
    }
  }, [state.status, state.answers, onComplete]);

  const currentStep = getStep(definition, state.currentStepId);

  const value = React.useMemo<QuizContextValue>(
    () => ({
      definition,
      state,
      progress: estimateProgress(definition, state),
      currentStep,
      isCurrentStepAnswered: isStepAnswered(currentStep, state.answers),
      canGoBack: state.history.length > 1,
      answer: (value: AnswerValue) =>
        dispatch({ type: "ANSWER", stepId: currentStep.id, value }),
      advance: () => dispatch({ type: "ADVANCE" }),
      back: () => dispatch({ type: "BACK" }),
      goTo: (stepId: string) => dispatch({ type: "GO_TO", stepId }),
      reset: () => dispatch({ type: "RESET" }),
    }),
    [definition, state, currentStep]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext(): QuizContextValue {
  const ctx = React.useContext(QuizContext);
  if (!ctx) {
    throw new Error(
      "quiz-ui: this hook must be used inside a <QuizProvider> / <QuizRoot>."
    );
  }
  return ctx;
}
