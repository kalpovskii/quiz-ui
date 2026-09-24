"use client";

import * as React from "react";
import {
  QuizRoot,
  QuizProgress,
  QuizTransition,
  QuizStep,
  QuizChoiceGroup,
  QuizSlider,
  QuizRating,
  QuizEmailInput,
  QuizNavigation,
  QuizResult,
  useQuizEngine,
} from "@/components/ui/quiz";
import type { QuizDefinition } from "@/components/ui/quiz/core";

const branchingQuiz: QuizDefinition = {
  id: "branching-demo",
  title: "Find your training plan",
  entry: "goal",
  steps: [
    {
      id: "goal",
      type: "choice",
      props: {
        question: "What's your main goal?",
        options: [
          { value: "strength", label: "Build strength", description: "Lift heavier over time" },
          { value: "cardio", label: "Improve cardio", description: "Run, cycle, swim further" },
        ],
      },
      branch: [
        { equals: "strength", goTo: "frequency" },
        { equals: "cardio", goTo: "distance" },
      ],
    },
    {
      id: "frequency",
      type: "rating",
      next: "email",
      props: { question: "How many days a week can you train?", scale: 6, numeric: true },
    },
    {
      id: "distance",
      type: "slider",
      next: "email",
      props: { question: "Current weekly distance (km)?", min: 0, max: 50, step: 1 },
    },
    {
      id: "email",
      type: "email",
      required: true,
      next: "result",
      props: { question: "Where should we send your plan?" },
    },
    { id: "result", type: "result", required: false, props: {} },
  ],
};

function AutoAdvanceOnTerminal() {
  const { state, currentStep, advance } = useQuizEngine();
  React.useEffect(() => {
    const isTerminal = !currentStep.next && !currentStep.branch;
    if (isTerminal && state.status === "in-progress") advance();
  }, [currentStep, state.status, advance]);
  return null;
}

export function BranchingFunnelDemo() {
  return (
    <QuizRoot
      definition={branchingQuiz}
      className="flex flex-col gap-4"
    >
      <AutoAdvanceOnTerminal />

      <QuizProgress
        labelClassName="text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
        trackClassName="relative h-1.5 w-full overflow-hidden rounded-full bg-violet-100 dark:bg-violet-900/40"
        indicatorClassName="h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-300 ease-out"
      />

      <QuizTransition className="animate-quiz-ui-step-in">
        <QuizStep questionClassName="mb-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {(step) => {
            switch (step.type) {
              case "choice":
                return (
                  <QuizChoiceGroup
                    options={(step.props?.options as any) ?? []}
                    className="flex flex-col gap-2"
                    itemClassName="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/50 px-4 py-3 text-left transition-colors hover:border-violet-300 hover:bg-violet-50 dark:border-violet-900/50 dark:bg-violet-950/20 dark:hover:border-violet-700"
                    activeItemClassName="border-violet-500 bg-violet-100 ring-1 ring-violet-500 dark:border-violet-500 dark:bg-violet-900/40"
                    indicatorClassName="flex h-4 w-4 items-center justify-center rounded-full border-2 border-violet-400"
                    labelClassName="font-medium text-zinc-800 dark:text-zinc-100"
                    descriptionClassName="text-xs text-zinc-500 dark:text-zinc-400"
                  />
                );
              case "rating":
                return (
                  <QuizRating
                    scale={(step.props?.scale as number) ?? 5}
                    numeric={Boolean(step.props?.numeric)}
                    className="flex gap-2"
                    itemClassName="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-violet-50/50 text-sm font-semibold text-zinc-600 transition-colors cursor-pointer hover:border-violet-300 dark:border-violet-900/50 dark:bg-violet-950/20 dark:text-zinc-300"
                    activeItemClassName="border-transparent bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md"
                  />
                );
              case "slider":
                return (
                  <QuizSlider
                    min={(step.props?.min as number) ?? 0}
                    max={(step.props?.max as number) ?? 50}
                    step={(step.props?.step as number) ?? 1}
                    valueClassName="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600"
                    trackClassName="h-2 rounded-full bg-violet-100 dark:bg-violet-900/40"
                    rangeClassName="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    thumbClassName="block h-6 w-6 rounded-full border-2 border-white bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md cursor-pointer"
                  />
                );
              case "email":
                return (
                  <QuizEmailInput
                    invalidMessage="Enter a valid email address."
                    wrapperClassName="flex flex-col gap-1.5"
                    className="h-11 w-full rounded-xl border border-violet-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-violet-900/50 dark:bg-zinc-800 dark:text-zinc-100"
                    invalidClassName="border-red-500 focus-visible:ring-red-500"
                    errorMessageClassName="text-xs text-red-500"
                  />
                );
              case "result":
                return (
                  <QuizResult className="flex flex-col gap-2">
                    {(answers) => (
                      <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-5 dark:border-violet-900/50 dark:bg-violet-950/20">
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                          Your plan is ready{answers.email ? `, check ${String(answers.email)}` : "!"}
                        </p>
                        <ul className="mt-2 flex flex-col gap-1 text-xs text-zinc-600 dark:text-zinc-400">
                          <li>Goal: <strong>{String(answers.goal)}</strong></li>
                          {answers.frequency !== undefined && <li>Days/week: <strong>{String(answers.frequency)}</strong></li>}
                          {answers.distance !== undefined && <li>Weekly distance: <strong>{String(answers.distance)} km</strong></li>}
                        </ul>
                      </div>
                    )}
                  </QuizResult>
                );
              default:
                return null;
            }
          }}
        </QuizStep>
      </QuizTransition>

      <QuizNavigation
        className="flex items-center justify-between"
        backButtonClassName="cursor-pointer text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
        nextButtonClassName="ml-auto cursor-pointer rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-violet-500/25 transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      />
    </QuizRoot>
  );
}