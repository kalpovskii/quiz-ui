"use client";

import * as React from "react";
import {
  QuizRoot,
  QuizStep,
  QuizChoiceGroup,
  QuizImageChoice,
  QuizSlider,
  QuizRating,
  QuizTextInput,
  QuizEmailInput,
} from "@/components/ui/quiz";
import type { QuizDefinition } from "@/components/ui/quiz/core";

/**
 * Restrained, professional palette built on semantic tokens. A single violet
 * accent signals "interactive" without being garish.
 */

function FunnelChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl border bg-card p-5 shadow-sm">
      {children}
    </div>
  );
}

function SingleStepDemo({
  stepType,
  question,
  children,
}: {
  stepType: string;
  question: string;
  children: React.ReactNode;
}) {
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
        <QuizStep questionClassName="mb-3 text-sm font-semibold text-foreground">
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
        itemClassName="flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left cursor-pointer transition-colors hover:bg-muted/50"
        activeItemClassName="border-violet-500 bg-violet-50/70 dark:bg-violet-950/30"
        indicatorClassName="flex h-4 w-4 items-center justify-center rounded-full border-2 border-muted-foreground"
        labelClassName="font-medium text-sm"
        descriptionClassName="text-xs text-muted-foreground"
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
        itemClassName="flex flex-col overflow-hidden rounded-lg border text-left cursor-pointer transition-all hover:border-violet-200 dark:hover:border-violet-800"
        activeItemClassName="border-violet-500 ring-1 ring-violet-500"
        imageClassName="aspect-square w-full object-cover"
        labelClassName="px-2.5 py-2 text-sm font-medium text-foreground"
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
        valueClassName="text-2xl font-bold text-violet-600 dark:text-violet-400"
        trackClassName="h-2 rounded-full bg-muted"
        rangeClassName="rounded-full bg-violet-500"
        thumbClassName="block h-5 w-5 rounded-full border-2 border-background bg-violet-600 shadow-sm cursor-pointer"
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
        itemClassName="flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium cursor-pointer transition-colors hover:border-violet-200 hover:bg-muted/50 dark:hover:border-violet-800"
        activeItemClassName="border-violet-500 bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300"
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
        className="h-10 w-full rounded-lg border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
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
        className="h-10 w-full rounded-lg border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
        invalidClassName="border-destructive focus-visible:ring-destructive/50"
        errorMessageClassName="text-xs text-destructive"
      />
    </SingleStepDemo>
  );
}