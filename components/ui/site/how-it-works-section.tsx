import * as React from "react";
import { BranchingFunnelDemo } from "@/components/ui/site/branching-funnel-demo";

const ARCHITECTURE = [
  {
    name: "QuizRoot",
    role: "The funnel wrapper that owns the engine state.",
    detail: "Drop a QuizDefinition in and it wires up the state machine for every step below it.",
  },
  {
    name: "QuizStep",
    role: "Renders the active step's question and answer input.",
    detail: "Switch on step.type to pick which answer component shows for that step.",
  },
  {
    name: "QuizProgress",
    role: "A progress bar driven by step history.",
    detail: "Reads the engine's progress estimate so you never compute it yourself.",
  },
  {
    name: "QuizNavigation",
    role: "Back / Next controls that auto-disable until answered.",
    detail: "Guards advancement so a step can't be skipped when it's required.",
  },
  {
    name: "Branching",
    role: "Data-driven routing between steps.",
    detail: "Each step declares branch rules; the first match wins, else it falls through to next.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="w-full border-t bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How quiz-ui fits together
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            A funnel is a plain QuizDefinition object plus a handful of
            structural components. Try the live example on the right — answer
            &ldquo;Build strength&rdquo; vs &ldquo;Improve cardio&rdquo; and
            watch it branch to a different follow-up question.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: architecture explanation */}
          <div className="flex flex-col gap-4">
            {ARCHITECTURE.map((item, i) => (
              <div
                key={item.name}
                className="flex gap-4 rounded-xl border bg-muted/30 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono text-sm font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-foreground/90">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: live branching funnel demo */}
          <div className="flex items-start justify-center rounded-2xl border bg-muted/20 p-6 sm:p-8">
            <div className="w-full max-w-sm">
              <BranchingFunnelDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}