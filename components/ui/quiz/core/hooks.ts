"use client";

import { useQuizContext } from "./QuizProvider";
import type { AnswerValue, QuizAnswers } from "./types";

/**
 * Full engine access: current step, answers, progress, and every
 * transition action. Prefer the narrower hooks below (`useQuizStep`,
 * `useQuizAnswers`) inside individual step/input components — reaching for
 * `useQuizEngine` everywhere causes more re-renders than necessary and
 * makes a component's actual dependencies harder for a reader (human or
 * agent) to see at a glance.
 */
export function useQuizEngine() {
  return useQuizContext();
}

/**
 * Everything a single step's UI needs: which step is active, whether it's
 * answered, and navigation actions. Does not expose other steps' answers.
 */
export function useQuizStep() {
  const { currentStep, isCurrentStepAnswered, advance, back, canGoBack, progress } =
    useQuizContext();
  return { step: currentStep, isAnswered: isCurrentStepAnswered, advance, back, canGoBack, progress };
}

/**
 * Read/write access to the answer for the *current* step, plus the full
 * answers map for components (like QuizResult) that need to read
 * everything collected so far.
 */
export function useQuizAnswers(): {
  value: AnswerValue | undefined;
  setValue: (value: AnswerValue) => void;
  all: QuizAnswers;
} {
  const { state, currentStep, answer } = useQuizContext();
  return {
    value: state.answers[currentStep.id],
    setValue: answer,
    all: state.answers,
  };
}
