"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizChoiceOption {
  value: string;
  label: string;
  description?: string;
}

const choiceCard = cva(
  "flex w-full cursor-pointer items-center gap-3 rounded-md border border-border px-4 py-3 text-left text-sm transition-colors hover:bg-accent data-[state=checked]:border-primary data-[state=checked]:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
);

/** A single answer card. Used internally by QuizChoiceGroup; exported for custom layouts. */
export const QuizChoice = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof choiceCard> & { label: string; description?: string }
>(({ className, label, description, ...props }, ref) => (
  <RadioGroupPrimitive.Item ref={ref} className={cn(choiceCard(), className)} {...props}>
    <RadioGroupPrimitive.Indicator asChild>
      <span className="h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-primary" />
    </RadioGroupPrimitive.Indicator>
    <span className="flex flex-col">
      <span className="font-medium text-foreground">{label}</span>
      {description ? (
        <span className="text-xs text-muted-foreground">{description}</span>
      ) : null}
    </span>
  </RadioGroupPrimitive.Item>
));
QuizChoice.displayName = "QuizChoice";

/** A single answer card for multi-select groups. */
const QuizChoiceCheckbox = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label: string;
    description?: string;
  }
>(({ className, label, description, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn(choiceCard(), className)} {...props}>
    <CheckboxPrimitive.Indicator asChild>
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 border-primary bg-primary text-primary-foreground">
        ✓
      </span>
    </CheckboxPrimitive.Indicator>
    <span className="flex flex-col">
      <span className="font-medium text-foreground">{label}</span>
      {description ? (
        <span className="text-xs text-muted-foreground">{description}</span>
      ) : null}
    </span>
  </CheckboxPrimitive.Root>
));
QuizChoiceCheckbox.displayName = "QuizChoiceCheckbox";

export interface QuizChoiceGroupProps {
  options: QuizChoiceOption[];
  /** Allow selecting more than one option. Default: false (single-select). */
  multiple?: boolean;
  className?: string;
}

/**
 * Renders a list of QuizChoice cards and wires selection straight to the
 * current step's answer via `useQuizAnswers`. Single-select is backed by
 * Radix RadioGroup; multi-select by a group of Radix Checkboxes.
 *
 * @example
 * <QuizChoiceGroup
 *   options={[
 *     { value: "cardio", label: "Cardio", description: "Running, cycling" },
 *     { value: "strength", label: "Strength training" },
 *   ]}
 * />
 */
export function QuizChoiceGroup({ options, multiple = false, className }: QuizChoiceGroupProps) {
  const { value, setValue } = useQuizAnswers();

  if (multiple) {
    const selected = Array.isArray(value) ? value : [];
    const toggle = (optionValue: string, checked: boolean) => {
      setValue(
        checked ? [...selected, optionValue] : selected.filter((v) => v !== optionValue)
      );
    };
    return (
      <div className={cn("flex flex-col gap-2", className)} role="group">
        {options.map((option) => (
          <QuizChoiceCheckbox
            key={option.value}
            label={option.label}
            description={option.description}
            checked={selected.includes(option.value)}
            onCheckedChange={(checked) => toggle(option.value, checked === true)}
          />
        ))}
      </div>
    );
  }

  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-col gap-2", className)}
      value={typeof value === "string" ? value : undefined}
      onValueChange={setValue}
    >
      {options.map((option) => (
        <QuizChoice
          key={option.value}
          value={option.value}
          label={option.label}
          description={option.description}
        />
      ))}
    </RadioGroupPrimitive.Root>
  );
}
