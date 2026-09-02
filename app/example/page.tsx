"use client";

import * as React from "react";
import {
  QuizRoot,
  QuizProgress,
  QuizTransition,
  QuizStep,
  QuizChoiceGroup,
  QuizImageChoice,
  QuizSlider,
  QuizRating,
  QuizTextInput,
  QuizEmailInput,
  QuizNavigation,
  QuizResult,
  useQuizEngine,
} from "@/components/ui/quiz";
import type { QuizDefinition } from "@/components/ui/quiz/core";
import Link from "next/link";

const demoQuiz: QuizDefinition = {
  id: "component-showcase",
  title: "Every quiz-ui component",
  entry: "goal",
  steps: [
    {
      id: "goal",
      type: "choice",
      next: "features",
      props: {
        question: "What's your main goal?",
        options: [
          { value: "strength", label: "Build strength", description: "Lift heavier over time" },
          { value: "cardio", label: "Improve cardio", description: "Run, cycle, swim further" },
          { value: "flexibility", label: "Improve flexibility", description: "Mobility and recovery" },
        ],
      },
    },
    {
      id: "features",
      type: "choice-multiple",
      next: "style",
      props: {
        question: "Which days work for you? (pick any)",
        options: [
          { value: "mon", label: "Monday" },
          { value: "wed", label: "Wednesday" },
          { value: "fri", label: "Friday" },
          { value: "sat", label: "Saturday" },
        ],
      },
    },
    {
      id: "style",
      type: "image-choice",
      next: "budget",
      props: {
        question: "Pick a training style",
        options: [
          { value: "strength", label: "Strength", imageUrl: "https://picsum.photos/seed/strength/300/300" },
          { value: "cardio", label: "Cardio", imageUrl: "https://picsum.photos/seed/cardio/300/300" },
          { value: "yoga", label: "Yoga", imageUrl: "https://picsum.photos/seed/yoga/300/300" },
        ],
      },
    },
    {
      id: "budget",
      type: "slider",
      next: "satisfaction",
      props: { question: "Monthly budget for coaching?", min: 0, max: 200, step: 10 },
    },
    {
      id: "satisfaction",
      type: "rating",
      next: "name",
      props: { question: "How motivated are you feeling right now?", scale: 5, numeric: true },
    },
    {
      id: "name",
      type: "text",
      next: "email",
      props: { question: "What should we call you?" },
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
    if (isTerminal && state.status === "in-progress") {
      advance();
    }
  }, [currentStep, state.status, advance]);

  return null;
}

function QuizFooterNav() {
  const { state } = useQuizEngine();
  if (state.status === "complete") return null;
  return (
    <QuizNavigation
      className="mt-2 flex items-center justify-between"
      backButtonClassName="text-sm text-neutral-400 transition-colors hover:text-white"
      nextButtonClassName="ml-auto rounded-md bg-white px-5 py-2 text-sm font-medium text-neutral-950 transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
    />
  );
}

export default function ExamplePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col gap-6 bg-neutral-950 p-4 text-neutral-100">
      <QuizRoot
        className="flex flex-col gap-6"
        definition={demoQuiz}
        onComplete={(answers) => console.log("quiz complete:", answers)}
      >
        <AutoAdvanceOnTerminal />

        <QuizProgress
          className="flex flex-col gap-1.5"
          labelClassName="text-xs text-neutral-400"
          trackClassName="relative h-1.5 w-full overflow-hidden rounded-full bg-neutral-800"
          indicatorClassName="h-full w-full bg-white transition-transform duration-300 ease-out"
        />

        <QuizTransition className="animate-quiz-ui-step-in">
          <QuizStep
            className="flex flex-col gap-4"
            questionClassName="text-lg font-medium text-white"
          >
            {(step) => {
              switch (step.type) {
                case "choice":
                  return (
                    <QuizChoiceGroup
                      className="flex flex-col gap-2"
                      options={step.props?.options as any}
                      itemClassName="flex w-full cursor-pointer items-center gap-3 rounded-md border border-neutral-800 px-4 py-3 text-left text-sm transition-colors hover:bg-neutral-900"
                      activeItemClassName="border-white bg-neutral-900"
                      indicatorClassName="h-4 w-4 shrink-0 rounded-full border-2 border-white bg-white"
                      labelClassName="font-medium text-white"
                      descriptionClassName="text-xs text-neutral-400"
                    />
                  );
                case "choice-multiple":
                  return (
                    <QuizChoiceGroup
                      multiple
                      className="flex flex-col gap-2"
                      options={step.props?.options as any}
                      itemClassName="flex w-full cursor-pointer items-center gap-3 rounded-md border border-neutral-800 px-4 py-3 text-left text-sm transition-colors hover:bg-neutral-900"
                      activeItemClassName="border-white bg-neutral-900"
                      indicatorClassName="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 border-white bg-white text-neutral-950"
                      labelClassName="font-medium text-white"
                      descriptionClassName="text-xs text-neutral-400"
                    />
                  );
                case "image-choice":
                  return (
                    <QuizImageChoice
                      className="grid grid-cols-2 gap-3"
                      options={step.props?.options as any}
                      itemClassName="flex flex-col overflow-hidden rounded-md border border-neutral-800 text-left transition-colors"
                      activeItemClassName="border-white ring-2 ring-white"
                      imageClassName="aspect-square w-full object-cover"
                      labelClassName="px-2 py-1.5 text-sm font-medium text-white"
                    />
                  );
                case "slider":
                  return (
                    <QuizSlider
                      min={step.props?.min as number}
                      max={step.props?.max as number}
                      step={step.props?.step as number}
                      className="flex flex-col gap-3"
                      valueClassName="text-2xl font-semibold text-white"
                      trackClassName="h-2 rounded-full bg-neutral-800"
                      rangeClassName="rounded-full bg-white"
                      thumbClassName="h-5 w-5 rounded-full border-2 border-neutral-950 bg-white shadow"
                    />
                  );
                case "rating":
                  return (
                    <QuizRating
                      scale={step.props?.scale as number}
                      numeric={step.props?.numeric as boolean}
                      className="flex gap-2"
                      itemClassName="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 text-neutral-300 transition-colors hover:border-neutral-400"
                      activeItemClassName="border-white bg-white text-neutral-950"
                    />
                  );
                case "text":
                  return (
                    <QuizTextInput
                      placeholder="Your name"
                      wrapperClassName="flex flex-col gap-1.5"
                      className="h-10 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    />
                  );
                case "email":
                  return (
                    <QuizEmailInput
                      wrapperClassName="flex flex-col gap-1.5"
                      className="h-10 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      invalidClassName="border-red-500 focus-visible:ring-red-500"
                      errorMessageClassName="text-xs text-red-400"
                    />
                  );
                case "result":
                  return (
                    <QuizResult className="flex flex-col gap-2">
                      {(answers) => (
                        <div>
                          <p className="text-base font-medium text-white">
                            Thanks{answers.name ? `, ${String(answers.name)}` : ""}! Here's what you told us:
                          </p>
                          <ul className="mt-2 flex flex-col gap-1 text-sm text-neutral-300">
                            <li>Goal: {String(answers.goal)}</li>
                            <li>
                              Available days:{" "}
                              {Array.isArray(answers.features) ? answers.features.join(", ") : "—"}
                            </li>
                            <li>Style: {String(answers.style)}</li>
                            <li>Budget: ${String(answers.budget)}/mo</li>
                            <li>Motivation: {String(answers.satisfaction)}/5</li>
                            <li>Email: {String(answers.email)}</li>
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

        <QuizFooterNav />
      </QuizRoot>

      <Link href="/docs" className="text-sm text-neutral-400 underline underline-offset-4 hover:text-white">
        Back to docs
      </Link>
    </main>
  );
}