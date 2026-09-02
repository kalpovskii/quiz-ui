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
        columns: 3,
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
      props: {
        question: "Monthly budget for coaching?",
        min: 0,
        max: 200,
        step: 10,
      },
    },
    {
      id: "satisfaction",
      type: "rating",
      next: "name",
      props: {
        question: "How motivated are you feeling right now?",
        scale: 5,
        numeric: true,
      },
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
    {
      id: "result",
      type: "result",
      required: false,
      props: {},
    },
  ],
};

/** Fires the instant a step with no `next`/`branch` is reached, so the
 * result screen appears immediately instead of needing an extra click
 * on a step that never collects an answer. */
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

/** Hides Back/Next once the funnel is complete — nothing left to navigate to. */
function QuizFooterNav() {
  const { state } = useQuizEngine();
  if (state.status === "complete") return null;
  return <QuizNavigation />;
}

export default function ExamplePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-muted/30 p-6">
      <QuizRoot
        definition={demoQuiz}
        onComplete={(answers) => {
          console.log("quiz complete:", answers);
        }}
      >
        <AutoAdvanceOnTerminal />
        <QuizProgress />
        <QuizTransition>
          <QuizStep>
            {(step) => {
              switch (step.type) {
                case "choice":
                  return <QuizChoiceGroup options={step.props?.options as any} />;
                case "choice-multiple":
                  return <QuizChoiceGroup multiple options={step.props?.options as any} />;
                case "image-choice":
                  return (
                    <QuizImageChoice
                      columns={step.props?.columns as 2 | 3}
                      options={step.props?.options as any}
                    />
                  );
                case "slider":
                  return (
                    <QuizSlider
                      min={step.props?.min as number}
                      max={step.props?.max as number}
                      step={step.props?.step as number}
                    />
                  );
                case "rating":
                  return (
                    <QuizRating
                      scale={step.props?.scale as number}
                      numeric={step.props?.numeric as boolean}
                    />
                  );
                case "text":
                  return <QuizTextInput placeholder="Your name" />;
                case "email":
                  return <QuizEmailInput />;
                case "result":
                  return (
                    <QuizResult>
                      {(answers) => (
                        <div className="flex flex-col gap-2 text-sm text-foreground">
                          <p className="text-base font-medium">
                            Thanks{answers.name ? `, ${String(answers.name)}` : ""}! Here's what you told us:
                          </p>
                          <ul className="flex flex-col gap-1 text-muted-foreground">
                            <li>Goal: {String(answers.goal)}</li>
                            <li>Available days: {Array.isArray(answers.features) ? answers.features.join(", ") : "—"}</li>
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

      <Link
        href="/docs"
        className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
      >
        Back to docs
      </Link>
    </main>
  );
}