"use client";

import * as React from "react";
import {
  QuizRoot,
  QuizStep,
  QuizProgress,
  QuizChoiceGroup,
  QuizImageChoice,
  QuizSlider,
  QuizRating,
  QuizTextInput,
  QuizEmailInput,
} from "@/components/ui/quiz";
import type { QuizDefinition } from "@/components/ui/quiz/core";

/**
 * Each demo renders inside a funnel chrome wrapper (progress bar + question
 * label) so it looks like a real quiz funnel step, not a bare component.
 * Colors are gradient/violet-accented to show how a headless component is
 * styled by the consumer.
 */

function FunnelChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-violet-200 bg-white p-5 shadow-sm dark:border-violet-900/50 dark:bg-zinc-900">
      <QuizProgress
        showLabel={false}
        className="mb-4"
        trackClassName="relative h-1.5 w-full overflow-hidden rounded-full bg-violet-100 dark:bg-violet-900/40"
        indicatorClassName="h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-300 ease-out"
      />
      {children}
    </div>
  );
}

function SingleStepDemo({ stepType, question, children }: { stepType: string; question: string; children: React.ReactNode }) {
  const definition = React.useMemo<QuizDefinition>(
    () => ({
      id: `demo-${stepType}`,
      entry: "step",
      steps: [{ id: "step", type: stepType, props: { question } }],
    }),
    [stepType, question],
  );

  return (
    <QuizRoot definition={definition} className="w-full">
      <FunnelChrome>
        <QuizStep questionClassName="mb-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {() => children}
        </QuizStep>
      </FunnelChrome>
    </QuizRoot>
  );
}

export function ChoiceExample() {
  return (
    <SingleStepDemo stepType="choice" question="What's your main fitness goal?">
      <QuizChoiceGroup
        options={[
          { value: "strength", label: "Build strength", description: "Lift heavier over time" },
          { value: "cardio", label: "Improve cardio", description: "Run, cycle, swim further" },
          { value: "flexibility", label: "Improve flexibility", description: "Yoga, Pilates, stretching" },
        ]}
        className="flex flex-col gap-2"
        itemClassName="flex w-full items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/50 px-4 py-3 text-left transition-colors hover:border-violet-300 hover:bg-violet-50 dark:border-violet-900/50 dark:bg-violet-950/20 dark:hover:border-violet-700"
        activeItemClassName="border-violet-500 bg-violet-100 ring-1 ring-violet-500 dark:border-violet-500 dark:bg-violet-900/40"
        indicatorClassName="flex h-4 w-4 items-center justify-center rounded-full border-2 border-violet-400"
        labelClassName="font-medium text-zinc-800 dark:text-zinc-100"
        descriptionClassName="text-xs text-zinc-500 dark:text-zinc-400"
      />
    </SingleStepDemo>
  );
}

export function ImageChoiceExample() {
  return (
    <SingleStepDemo stepType="image-choice" question="Pick a training style">
      <QuizImageChoice
        options={[
          { value: "strength", label: "Strength", imageUrl: "https://picsum.photos/seed/strength/300/300" },
          { value: "cardio", label: "Cardio", imageUrl: "https://picsum.photos/seed/cardio/300/300" },
          { value: "yoga", label: "Yoga", imageUrl: "https://picsum.photos/seed/yoga/300/300" },
        ]}
        className="grid grid-cols-2 gap-3"
        itemClassName="flex flex-col overflow-hidden rounded-xl border border-violet-100 bg-violet-50/50 text-left transition-all hover:border-violet-300 dark:border-violet-900/50 dark:bg-violet-950/20"
        activeItemClassName="border-fuchsia-500 ring-2 ring-fuchsia-500"
        imageClassName="aspect-square w-full object-cover"
        labelClassName="px-2.5 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-100"
      />
    </SingleStepDemo>
  );
}

export function SliderExample() {
  return (
    <SingleStepDemo stepType="slider" question="How many hours a week do you train?">
      <QuizSlider
        min={0}
        max={20}
        step={1}
        valueClassName="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600"
        trackClassName="h-2 rounded-full bg-violet-100 dark:bg-violet-900/40"
        rangeClassName="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
        thumbClassName="block h-6 w-6 rounded-full border-2 border-white bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md cursor-pointer"
      />
    </SingleStepDemo>
  );
}

export function RatingExample() {
  return (
    <SingleStepDemo stepType="rating" question="How motivated are you right now?">
      <QuizRating
        scale={5}
        numeric
        className="flex gap-2"
        itemClassName="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-violet-50/50 text-sm font-semibold text-zinc-600 transition-colors cursor-pointer hover:border-violet-300 dark:border-violet-900/50 dark:bg-violet-950/20 dark:text-zinc-300"
        activeItemClassName="border-transparent bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md"
      />
    </SingleStepDemo>
  );
}

export function TextInputExample() {
  return (
    <SingleStepDemo stepType="text" question="What should we call you?">
      <QuizTextInput
        placeholder="Your name"
        wrapperClassName="flex flex-col gap-1.5"
        className="h-11 w-full rounded-xl border border-violet-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-violet-900/50 dark:bg-zinc-800 dark:text-zinc-100"
      />
    </SingleStepDemo>
  );
}

export function EmailInputExample() {
  return (
    <SingleStepDemo stepType="email" question="Where should we send your plan?">
      <QuizEmailInput
        invalidMessage="Enter a valid email address."
        wrapperClassName="flex flex-col gap-1.5"
        className="h-11 w-full rounded-xl border border-violet-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-violet-900/50 dark:bg-zinc-800 dark:text-zinc-100"
        invalidClassName="border-red-500 focus-visible:ring-red-500"
        errorMessageClassName="text-xs text-red-500"
      />
    </SingleStepDemo>
  );
}