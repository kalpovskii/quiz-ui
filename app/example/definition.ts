import type { QuizDefinition } from "@/components/ui/quiz/core";

/**
 * A 4-step fitness-goal funnel demonstrating branching: the "goal" step
 * routes to a different follow-up question depending on the answer, and
 * both paths converge back on "email" before the shared "result" step.
 *
 *   goal ─┬─ (strength) ─→ frequency ─┐
 *         └─ (cardio)   ─→ distance  ─┴─→ email → result
 */
export const fitnessQuiz: QuizDefinition = {
  id: "fitness-goal",
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
          { value: "flexibility", label: "Improve flexibility", description: "Yoga, Pilates, stretching" },
        ],
      },
      branch: [
        { equals: "strength", goTo: "frequency" },
        { equals: "cardio", goTo: "distance" },
        { equals: "flexibility", goTo: "frequency" },
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
      props: {
        question: "What's your current weekly distance (km)?",
        min: 0,
        max: 50,
        step: 1,
      },
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
      props: {},
    },
  ],
};
