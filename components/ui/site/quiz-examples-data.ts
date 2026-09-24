/**
 * Static, serializable content for the intro-page examples section.
 * Kept out of client components so the strings are dead simple and the
 * page can ship them through the RSC boundary without surprises.
 */

export interface QuizExample {
  id: string;
  title: string;
  description: string;
  /** Natural-language prompt an agent would use to generate this example. */
  prompt: string;
  /** The code that renders the example. */
  code: string;
}

export const sliderExample: QuizExample = {
  id: "slider",
  title: "Slider answer",
  description:
    "A one-step funnel whose answer is a numeric range — drag the thumb and watch the value update live.",
  prompt: `Create a quiz-ui funnel with a single step that asks "How many hours a week do you train?" and captures the answer with a slider (range 0–20, step 1). Show the current value above the track.`,
  code: `const demo: QuizDefinition = {
  id: "hours",
  title: "Weekly training",
  entry: "hours",
  steps: [
    {
      id: "hours",
      type: "slider",
      props: { question: "How many hours a week do you train?", min: 0, max: 20, step: 1 },
    },
  ],
};

<QuizRoot definition={demo} className="mx-auto w-full max-w-sm">
  <QuizStep>
    {(step) => (
      <QuizSlider
        min={0}
        max={20}
        step={1}
        valueClassName="text-2xl font-semibold text-foreground"
        trackClassName="h-2 rounded-full bg-muted"
        rangeClassName="rounded-full bg-primary"
        thumbClassName="block h-5 w-5 rounded-full border-2 border-background bg-primary shadow"
      />
    )}
  </QuizStep>
</QuizRoot>`,
};
