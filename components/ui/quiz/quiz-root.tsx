"use client";

import * as React from "react";
import { QuizProvider, type QuizProviderProps } from "./core";

export interface QuizRootProps
  extends QuizProviderProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> { }

export function QuizRoot({ definition, onComplete, children, className, ...props }: QuizRootProps) {
  return (
    <QuizProvider definition={definition} onComplete={onComplete}>
      <div className={className} {...props}>
        {children}
      </div>
    </QuizProvider>
  );
}