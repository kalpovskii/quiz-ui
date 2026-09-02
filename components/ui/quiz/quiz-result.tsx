"use client";

import * as React from "react";
import { useQuizEngine, type QuizAnswers } from "./core";

export interface QuizResultProps {
  children: React.ReactNode | ((answers: QuizAnswers) => React.ReactNode);
  className?: string;
}

export function QuizResult({ children, className }: QuizResultProps) {
  const { state } = useQuizEngine();
  if (state.status !== "complete") return null;

  return (
    <div className={className}>
      {typeof children === "function" ? children(state.answers) : children}
    </div>
  );
}