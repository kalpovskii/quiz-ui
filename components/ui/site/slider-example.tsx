"use client";

import * as React from "react";
import {
  QuizRoot,
  QuizStep,
  QuizSlider,
} from "@/components/ui/quiz";
import type { QuizDefinition } from "@/components/ui/quiz/core";

const definition: QuizDefinition = {
  id: "slider-demo",
  title: "Weekly training",
  entry: "hours",
  steps: [
    {
      id: "hours",
      type: "slider",
      props: {
        question: "How many hours a week do you train?",
        min: 0,
        max: 20,
        step: 1,
      },
    },
  ],
};

export function SliderExample() {
  return (
    <QuizRoot definition={definition} className="mx-auto w-full max-w-sm">
      <QuizStep questionClassName="mb-4 text-sm font-medium text-foreground">
        {(step) =>
          step.type === "slider" ? (
            <QuizSlider
              min={0}
              max={20}
              step={1}
              valueClassName="text-2xl font-semibold text-foreground"
              trackClassName="h-2 rounded-full bg-muted"
              rangeClassName="rounded-full bg-primary"
              thumbClassName="block h-5 w-5 rounded-full border-2 border-background bg-primary shadow cursor-pointer"
            />
          ) : null
        }
      </QuizStep>
    </QuizRoot>
  );
}