"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface QuizEmailInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
  label?: string;
  /** Shown when the field has been touched and doesn't match a basic email pattern. */
  invalidMessage?: string;
}

/**
 * Email capture input. Validation is intentionally basic (format check
 * only, no verification) — this component only decides what to *show*;
 * whether an invalid-looking email blocks advancing is up to how you use
 * `isCurrentStepAnswered` / `required` on the step definition.
 *
 * @example
 * <QuizEmailInput label="Where should we send your results?" />
 */
export const QuizEmailInput = React.forwardRef<HTMLInputElement, QuizEmailInputProps>(
  ({ label, invalidMessage = "Enter a valid email address.", className, id, ...props }, ref) => {
    const { value, setValue } = useQuizAnswers();
    const [touched, setTouched] = React.useState(false);
    const inputId = id ?? React.useId();
    const stringValue = typeof value === "string" ? value : "";
    const isInvalid = touched && stringValue.length > 0 && !EMAIL_PATTERN.test(stringValue);

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
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-invalid={isInvalid}
          className={cn(
            "h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            isInvalid && "border-destructive focus-visible:ring-destructive",
            className
          )}
          value={stringValue}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          {...props}
        />
        {isInvalid ? (
          <span className="text-xs text-destructive">{invalidMessage}</span>
        ) : null}
      </div>
    );
  }
);
QuizEmailInput.displayName = "QuizEmailInput";
