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
  // Single theme (no `--shiki-dark` vars) so the pre has one clean, neutral
  // background we fully control — avoids shiki's white block bleeding out.
  const highlighted = await codeToHtml(example.code, {
    lang: "tsx",
    theme: "github-dark",
  });

  const DemoComponent = DEMO_MAP[example.id];

  // Strip shiki's outer <pre> so the highlighted <code> slots directly into
  // the PromptCodeTabs frame (which owns padding/scroll/rounding).
  const innerHtml = highlighted.replace(/^<pre[^>]*>/, "").replace(/<\/pre>\s*$/, "");

  const codeBlock = (
    <code
      className="block whitespace-pre p-3 text-[11px] leading-relaxed [&_span]:!text-[11px]"
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
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