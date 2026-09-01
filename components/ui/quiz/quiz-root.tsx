"use client";

import * as React from "react";
import { QuizProvider, type QuizProviderProps } from "./core";
import { cn } from "@/lib/utils";

export interface QuizRootProps
  extends QuizProviderProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

/**
 * Top-level wrapper for a funnel: owns the engine (via QuizProvider) and
 * renders a styled container. Compose the rest of the funnel inside it,
 * typically a <QuizProgress>, one <QuizStep>, and a <QuizNavigation>.
 *
 * @example
 * <QuizRoot definition={myQuiz} onComplete={(answers) => submit(answers)}>
 *   <QuizProgress />
 *   <QuizStep />
 *   <QuizNavigation />
 * </QuizRoot>
 */
export function QuizRoot({
  definition,
  onComplete,
  children,
  className,
  ...props
}: QuizRootProps) {
  return (
    <QuizProvider definition={definition} onComplete={onComplete}>
      <div
        className={cn(
          "mx-auto flex w-full max-w-md flex-col gap-6 rounded-lg border border-border bg-background p-6",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </QuizProvider>
  );
}
