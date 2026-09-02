"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useQuizAnswers } from "./core";

export interface QuizTextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

export const QuizTextInput = React.forwardRef<HTMLInputElement, QuizTextInputProps>(
  ({ label, wrapperClassName, labelClassName, className, id, ...props }, ref) => {
    const { value, setValue } = useQuizAnswers();
    const inputId = id ?? React.useId();

    return (
      <div className={wrapperClassName}>
        {label ? (
          <LabelPrimitive.Root htmlFor={inputId} className={labelClassName}>
            {label}
          </LabelPrimitive.Root>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          type="text"
          className={className}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      </div>
    );
  }
);
QuizTextInput.displayName = "QuizTextInput";