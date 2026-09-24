/**
 * Static, serializable content for the intro-page examples section.
 * One entry per quiz-ui component: a prompt (for an LLM) and the code
 * (for copy-paste). The prompt describes a *single* component, not a
 * whole funnel.
 */

export interface QuizExample {
  id: string;
  /** Component name, e.g. "Slider". */
  title: string;
  /** One-line description shown under the title. */
  description: string;
  /** Natural-language prompt for an LLM to produce this single component. */
  prompt: string;
  /** Copy-paste code rendering the component inside a minimal funnel. */
  code: string;
}

export const quizExamples: QuizExample[] = [
  {
    id: "choice",
    title: "Choice",
    description: "Single-select answer cards built on Radix radio group.",
    prompt: `Use the quiz-ui QuizChoiceGroup component to render a single-select question with three options ("Build strength", "Improve cardio", "Improve flexibility"), each with a short description. Style the items as bordered cards with rounded corners.`,
    code: `<QuizRoot definition={definition} className="w-full">
  <QuizStep>
    {(step) => (
      <QuizChoiceGroup
        options={[
          { value: "strength", label: "Build strength", description: "Lift heavier over time" },
          { value: "cardio", label: "Improve cardio", description: "Run, cycle, swim further" },
          { value: "flexibility", label: "Improve flexibility", description: "Yoga, Pilates, stretching" },
        ]}
        className="flex flex-col gap-2"
        itemClassName="flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left cursor-pointer"
        activeItemClassName="border-primary bg-muted"
        indicatorClassName="h-4 w-4 rounded-full border-2 border-foreground"
        labelClassName="font-medium"
        descriptionClassName="text-xs text-muted-foreground"
      />
    )}
  </QuizStep>
</QuizRoot>`,
  },
  {
    id: "image-choice",
    title: "Image Choice",
    description: "Visual single-select grid of image cards.",
    prompt: `Use the quiz-ui QuizImageChoice component to render a grid (2 columns) of three image options ("Strength", "Cardio", "Yoga"), each with an image URL and a label below. Highlight the selected option with a primary border and ring.`,
    code: `<QuizRoot definition={definition} className="w-full">
  <QuizStep>
    {(step) => (
      <QuizImageChoice
        options={[
          { value: "strength", label: "Strength", imageUrl: "https://picsum.photos/seed/strength/300/300" },
          { value: "cardio", label: "Cardio", imageUrl: "https://picsum.photos/seed/cardio/300/300" },
          { value: "yoga", label: "Yoga", imageUrl: "https://picsum.photos/seed/yoga/300/300" },
        ]}
        className="grid grid-cols-2 gap-3"
        itemClassName="flex flex-col overflow-hidden rounded-md border text-left"
        activeItemClassName="border-primary ring-2 ring-primary"
        imageClassName="aspect-square w-full object-cover"
        labelClassName="px-2 py-1.5 text-sm font-medium"
      />
    )}
  </QuizStep>
</QuizRoot>`,
  },
  {
    id: "slider",
    title: "Slider",
    description: "Numeric range answer, dragging the thumb updates the value live.",
    prompt: `Use the quiz-ui QuizSlider component to capture a number from 0 to 20 in steps of 1, showing the current value above the track. Style the track as a rounded muted bar with a primary-filled range and a round thumb.`,
    code: `<QuizRoot definition={definition} className="w-full">
  <QuizStep>
    {(step) => (
      <QuizSlider
        min={0}
        max={20}
        step={1}
        valueClassName="text-2xl font-semibold"
        trackClassName="h-2 rounded-full bg-muted"
        rangeClassName="rounded-full bg-primary"
        thumbClassName="block h-5 w-5 rounded-full border-2 border-background bg-primary shadow cursor-pointer"
      />
    )}
  </QuizStep>
</QuizRoot>`,
  },
  {
    id: "rating",
    title: "Rating",
    description: "Star or numeric rating scale for a 1–N answer.",
    prompt: `Use the quiz-ui QuizRating component to render a 5-step numeric rating scale (buttons 1 through 5). Style unselected items as muted bordered squares and the selected item as a filled primary square.`,
    code: `<QuizRoot definition={definition} className="w-full">
  <QuizStep>
    {(step) => (
      <QuizRating
        scale={5}
        numeric
        className="flex gap-2"
        itemClassName="flex h-10 w-10 items-center justify-center rounded-md border text-sm"
        activeItemClassName="border-primary bg-primary text-primary-foreground"
      />
    )}
  </QuizStep>
</QuizRoot>`,
  },
  {
    id: "text-input",
    title: "Text Input",
    description: "Free-text answer with an optional label.",
    prompt: `Use the quiz-ui QuizTextInput component to render a text input with the label "What should we call you?" and placeholder "Your name". Style it as a bordered, rounded input.`,
    code: `<QuizRoot definition={definition} className="w-full">
  <QuizStep>
    {(step) => (
      <QuizTextInput
        label="What should we call you?"
        placeholder="Your name"
        wrapperClassName="flex flex-col gap-1.5"
        labelClassName="text-sm font-medium"
        className="h-10 w-full rounded-md border bg-background px-3 text-sm"
      />
    )}
  </QuizStep>
</QuizRoot>`,
  },
  {
    id: "email-input",
    title: "Email Input",
    description: "Email capture with format validation and an inline error.",
    prompt: `Use the quiz-ui QuizEmailInput component to render an email input with the label "Where should we send your plan?" and inline validation that shows the message "Enter a valid email address." when the value is malformed.`,
    code: `<QuizRoot definition={definition} className="w-full">
  <QuizStep>
    {(step) => (
      <QuizEmailInput
        label="Where should we send your plan?"
        invalidMessage="Enter a valid email address."
        wrapperClassName="flex flex-col gap-1.5"
        labelClassName="text-sm font-medium"
        className="h-10 w-full rounded-md border bg-background px-3 text-sm"
        invalidClassName="border-destructive"
        errorMessageClassName="text-xs text-destructive"
      />
    )}
  </QuizStep>
</QuizRoot>`,
  },
];
