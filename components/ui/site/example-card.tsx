import * as React from "react";
import { codeToHtml } from "shiki";
import { PromptCodeTabs } from "@/components/ui/site/prompt-code-tabs";
import {
  ChoiceExample,
  ImageChoiceExample,
  SliderExample,
  RatingExample,
  TextInputExample,
  EmailInputExample,
} from "@/components/ui/site/quiz-examples";
import type { QuizExample } from "@/components/ui/site/quiz-examples-data";

const DEMO_MAP: Record<string, React.ComponentType> = {
  choice: ChoiceExample,
  "image-choice": ImageChoiceExample,
  slider: SliderExample,
  rating: RatingExample,
  "text-input": TextInputExample,
  "email-input": EmailInputExample,
};

interface ExampleCardProps {
  example: QuizExample;
}

export async function ExampleCard({ example }: ExampleCardProps) {
  const highlighted = await codeToHtml(example.code, {
    lang: "tsx",
    themes: { light: "github-light", dark: "github-dark" },
  });

  const DemoComponent = DEMO_MAP[example.id];

  // Server-rendered highlighted code (static, inlined into the DOM).
  const codeBlock = (
    <div dangerouslySetInnerHTML={{ __html: highlighted }} className="h-full" />
  );

  return (
    <div className="grid w-full grid-cols-1 gap-8 rounded-lg border bg-gradient-to-br from-purple-50/40 to-background p-6 dark:from-purple-950/10 md:grid-cols-2">
      {/* Left: prompt / code tabs */}
      <div className="w-full min-w-0">
        <h3 className="mb-1 text-lg font-semibold text-foreground">
          {example.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          {example.description}
        </p>
        <PromptCodeTabs
          prompt={example.prompt}
          code={example.code}
          codeBlock={codeBlock}
        />
      </div>

      {/* Right: live example */}
      <div className="flex w-full min-w-0 items-center justify-center rounded-lg border bg-background p-4 sm:p-6">
        {DemoComponent ? <DemoComponent /> : null}
      </div>
    </div>
  );
}