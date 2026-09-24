import * as React from "react";
import { ExampleCard } from "@/components/ui/site/example-card";
import { quizExamples } from "@/components/ui/site/quiz-examples-data";

export function ExamplesSection() {
  return (
    <section className="w-full border-t bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            See it in action
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every component ships headless — no colors, borders, or layout baked
            in — so you style it to match your own design. The demos below are
            just one possible look. Copy the prompt to generate it with an LLM,
            or copy the code to drop it straight into your project.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {quizExamples.map((example) => (
            <ExampleCard key={example.id} example={example} />
          ))}
        </div>
      </div>
    </section>
  );
}