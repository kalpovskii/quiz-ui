"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizTextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label?: string;
}

/**
 * Free-text answer input, wired to the current step's answer.
 *
 * @example
 * <QuizTextInput label="What's your goal?" placeholder="e.g. Run a 5k" />
 */
export const QuizTextInput = React.forwardRef<HTMLInputElement, QuizTextInputProps>(
  ({ label, className, id, ...props }, ref) => {
    const { value, setValue } = useQuizAnswers();
    const inputId = id ?? React.useId();

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <LabelPrimitive.Root
            htmlFor={inputId}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </LabelPrimitive.Root>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          type="text"
          className={cn(
            "h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            className
          )}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      </div>
    );
  }
);
QuizTextInput.displayName = "QuizTextInput";
