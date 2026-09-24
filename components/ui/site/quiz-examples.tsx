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
 * Minimal single-step funnel wrapper. Each example is a self-contained
 * QuizRoot with exactly one step, so the component demo is a "mere quiz
 * component", not a whole funnel.
 */
function SingleStepDemo({ stepType, children }: { stepType: string; children: React.ReactNode }) {
  const definition = React.useMemo<QuizDefinition>(
    () => ({
      id: `demo-${stepType}`,
      entry: "step",
      steps: [{ id: "step", type: stepType, props: {} }],
    }),
    [stepType],
  );

  return (
    <QuizRoot definition={definition} className="w-full">
      <QuizStep showQuestion={false}>{() => children}</QuizStep>
    </QuizRoot>
  );
}

export function ChoiceExample() {
  return (
    <SingleStepDemo stepType="choice">
      <QuizChoiceGroup
        options={[
          { value: "strength", label: "Build strength", description: "Lift heavier over time" },
          { value: "cardio", label: "Improve cardio", description: "Run, cycle, swim further" },
          { value: "flexibility", label: "Improve flexibility", description: "Yoga, Pilates, stretching" },
        ]}
        className="flex flex-col gap-2"
        itemClassName="flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left cursor-pointer"
        activeItemClassName="border-primary bg-muted"
        indicatorClassName="flex h-4 w-4 items-center justify-center rounded-full border-2 border-foreground"
        labelClassName="font-medium"
        descriptionClassName="text-xs text-muted-foreground"
      />
    </SingleStepDemo>
  );
}

export function ImageChoiceExample() {
  return (
    <SingleStepDemo stepType="image-choice">
      <QuizImageChoice
        options={[
          { value: "strength", label: "Strength", imageUrl: "https://picsum.photos/seed/strength/300/300" },
          { value: "cardio", label: "Cardio", imageUrl: "https://picsum.photos/seed/cardio/300/300" },
          { value: "yoga", label: "Yoga", imageUrl: "https://picsum.photos/seed/yoga/300/300" },
        ]}
        className="grid grid-cols-2 gap-3"
        itemClassName="flex flex-col overflow-hidden rounded-md border text-left cursor-pointer"
        activeItemClassName="border-primary ring-2 ring-primary"
        imageClassName="aspect-square w-full object-cover"
        labelClassName="px-2 py-1.5 text-sm font-medium"
      />
    </SingleStepDemo>
  );
}

export function SliderExample() {
  return (
    <SingleStepDemo stepType="slider">
      <QuizSlider
        min={0}
        max={20}
        step={1}
        valueClassName="text-2xl font-semibold text-foreground"
        trackClassName="h-2 rounded-full bg-muted"
        rangeClassName="rounded-full bg-primary"
        thumbClassName="block h-5 w-5 rounded-full border-2 border-background bg-primary shadow cursor-pointer"
      />
    </SingleStepDemo>
  );
}

export function RatingExample() {
  return (
    <SingleStepDemo stepType="rating">
      <QuizRating
        scale={5}
        numeric
        className="flex gap-2"
        itemClassName="flex h-10 w-10 items-center justify-center rounded-md border text-sm"
        activeItemClassName="border-primary bg-primary text-primary-foreground"
      />
    </SingleStepDemo>
  );
}

export function TextInputExample() {
  return (
    <SingleStepDemo stepType="text">
      <QuizTextInput
        label="What should we call you?"
        placeholder="Your name"
        wrapperClassName="flex flex-col gap-1.5"
        labelClassName="text-sm font-medium"
        className="h-10 w-full rounded-md border bg-background px-3 text-sm text-foreground"
      />
    </SingleStepDemo>
  );
}

export function EmailInputExample() {
  return (
    <SingleStepDemo stepType="email">
      <QuizEmailInput
        label="Where should we send your plan?"
        invalidMessage="Enter a valid email address."
        wrapperClassName="flex flex-col gap-1.5"
        labelClassName="text-sm font-medium"
        className="h-10 w-full rounded-md border bg-background px-3 text-sm text-foreground"
        invalidClassName="border-destructive"
        errorMessageClassName="text-xs text-destructive"
      />
    </SingleStepDemo>
  );
}
