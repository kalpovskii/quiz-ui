"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useQuizAnswers } from "./core";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface QuizEmailInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
  label?: string;
  invalidMessage?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  /** Applied on top of `className` when the field is touched and invalid. */
  invalidClassName?: string;
  errorMessageClassName?: string;
}

export const QuizEmailInput = React.forwardRef<HTMLInputElement, QuizEmailInputProps>(
  (
    {
      label,
      invalidMessage = "Enter a valid email address.",
      wrapperClassName,
      labelClassName,
      invalidClassName,
      errorMessageClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const { value, setValue } = useQuizAnswers();
    const [touched, setTouched] = React.useState(false);
    const inputId = id ?? React.useId();
    const stringValue = typeof value === "string" ? value : "";
    const isInvalid = touched && stringValue.length > 0 && !EMAIL_PATTERN.test(stringValue);

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
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-invalid={isInvalid}
          className={isInvalid && invalidClassName ? `${className ?? ""} ${invalidClassName}` : className}
          value={stringValue}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          {...props}
        />
        {isInvalid ? <span className={errorMessageClassName}>{invalidMessage}</span> : null}
      </div>
    );
  }
);
QuizEmailInput.displayName = "QuizEmailInput";