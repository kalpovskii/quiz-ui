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
        labelClassName="text-[11px] font-medium text-muted-foreground"
        trackClassName="relative h-1.5 w-full overflow-hidden rounded-full bg-muted"
        indicatorClassName="h-full w-full rounded-full bg-violet-500 transition-transform duration-300 ease-out"
      />

      <QuizTransition className="animate-quiz-ui-step-in">
        <QuizStep questionClassName="mb-3 text-sm font-semibold text-foreground">
          {(step) => {
            switch (step.type) {
              case "choice":
                return (
                  <QuizChoiceGroup
                    options={(step.props?.options as any) ?? []}
                    className="flex flex-col gap-2"
                    itemClassName="flex w-full cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors hover:bg-muted/50"
                    activeItemClassName="border-violet-500 bg-violet-50/70 dark:bg-violet-950/30"
                    indicatorClassName="flex h-4 w-4 items-center justify-center rounded-full border-2 border-muted-foreground"
                    labelClassName="font-medium text-sm"
                    descriptionClassName="text-xs text-muted-foreground"
                  />
                );
              case "rating":
                return (
                  <QuizRating
                    scale={(step.props?.scale as number) ?? 5}
                    numeric={Boolean(step.props?.numeric)}
                    className="flex gap-2"
                    itemClassName="flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium cursor-pointer transition-colors hover:border-violet-200 hover:bg-muted/50 dark:hover:border-violet-800"
                    activeItemClassName="border-violet-500 bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300"
                  />
                );
              case "slider":
                return (
                  <QuizSlider
                    min={(step.props?.min as number) ?? 0}
                    max={(step.props?.max as number) ?? 50}
                    step={(step.props?.step as number) ?? 1}
                    valueClassName="text-2xl font-bold text-violet-600 dark:text-violet-400"
                    trackClassName="h-2 rounded-full bg-muted"
                    rangeClassName="rounded-full bg-violet-500"
                    thumbClassName="block h-5 w-5 rounded-full border-2 border-background bg-violet-600 shadow-sm cursor-pointer"
                  />
                );
              case "email":
                return (
                  <QuizEmailInput
                    invalidMessage="Enter a valid email address."
                    wrapperClassName="flex flex-col gap-1.5"
                    className="h-10 w-full rounded-lg border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
                    invalidClassName="border-destructive focus-visible:ring-destructive/50"
                    errorMessageClassName="text-xs text-destructive"
                  />
                );
              case "result":
                return (
                  <QuizResult className="flex flex-col gap-2">
                    {(answers) => (
                      <div className="rounded-lg border bg-muted/30 p-5">
                        <p className="text-sm font-semibold text-foreground">
                          Your plan is ready{answers.email ? `, check ${String(answers.email)}` : "!"}
                        </p>
                        <ul className="mt-2 flex flex-col gap-1 text-xs text-muted-foreground">
                          <li>Goal: <strong className="text-foreground">{String(answers.goal)}</strong></li>
                          {answers.frequency !== undefined && (
                            <li>Days/week: <strong className="text-foreground">{String(answers.frequency)}</strong></li>
                          )}
                          {answers.distance !== undefined && (
                            <li>Weekly distance: <strong className="text-foreground">{String(answers.distance)} km</strong></li>
                          )}
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
        backButtonClassName="cursor-pointer text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        nextButtonClassName="ml-auto cursor-pointer rounded-lg bg-violet-600 px-5 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
      />
    </QuizRoot>
  );
}