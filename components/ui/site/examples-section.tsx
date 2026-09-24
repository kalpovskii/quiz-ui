"use client";

import * as React from "react";
import { SliderExample } from "@/components/ui/site/slider-example";
import { CopyTabs } from "@/components/ui/site/copy-tabs";
import { sliderExample } from "@/components/ui/site/quiz-examples-data";

export function ExamplesSection() {
  return (
    <section className="w-full border-t bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            See it in action
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every example is a real, working funnel built with the library.
            Copy the prompt to regenerate it with an agent, or copy the code to
            drop it straight into your project.
          </p>
        </div>

        {/* Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: prompt / code tabs */}
          <div className="w-full">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              {sliderExample.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {sliderExample.description}
            </p>
            <CopyTabs prompt={sliderExample.prompt} code={sliderExample.code} />
          </div>

          {/* Right: live example component */}
          <div className="flex w-full items-center justify-center rounded-lg border bg-background p-6 sm:p-8">
            <SliderExample />
          </div>
        </div>
      </div>
    </section>
  );
}