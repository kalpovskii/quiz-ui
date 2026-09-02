"use client";

import * as React from "react";
import { useQuizStep, type QuizStepDefinition } from "./core";
import { cn } from "@/lib/utils";

export interface QuizStepProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Render prop for the step's answer input(s). Receives the active step
   * definition so you can switch on `step.type` to pick which input
   * component to render (QuizChoiceGroup, QuizSlider, etc). Omit if you're
   * rendering a fixed input directly as `children` instead.
   */
  children?: React.ReactNode | ((step: QuizStepDefinition) => React.ReactNode);
  /** Renders `step.props.question` above the input, if present. Default: true. */
  showQuestion?: boolean;
  /** Applied to the question heading, if `showQuestion` and `step.props.question` are set. */
  questionClassName?: string;
}

/**
 * Renders the currently-active step: an optional question heading plus
 * whatever answer input you provide. Re-renders automatically when the
 * engine advances to a new step.
 *
 * @example
 * <QuizStep>
 *   {(step) =>
 *     step.type === "choice" ? (
 *       <QuizChoiceGroup options={step.props.options} />
 *     ) : step.type === "slider" ? (
 *       <QuizSlider {...step.props} />
 *     ) : null
 *   }
 * </QuizStep>
 */
export function QuizStep({
  children,
  showQuestion = true,
  className,
  questionClassName,
  ...props
}: QuizStepProps) {
  const { step } = useQuizStep();
  const question = typeof step.props?.question === "string" ? step.props.question : undefined;

  return (
    <div
      className={className}
      role="group"
      aria-labelledby={question ? `${step.id}-question` : undefined}
      {...props}
    >
      {showQuestion && question ? (
        <h2 id={`${step.id}-question`} className={questionClassName}>
          {question}
        </h2>
      ) : null}
      {typeof children === "function" ? children(step) : children}
    </div>
  );
}
