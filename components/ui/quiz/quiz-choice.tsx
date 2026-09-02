"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { useQuizAnswers } from "./core";
import { cn } from "@/lib/utils";

export interface QuizChoiceOption {
  value: string;
  label: string;
  description?: string;
}

export interface QuizChoiceStyleProps {
  indicatorClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
}

export interface QuizChoiceProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
  QuizChoiceStyleProps {
  label: string;
  description?: string;
}

/**
 * A single radio answer card.
 */
export const QuizChoice = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  QuizChoiceProps
>(
  (
    {
      className,
      label,
      description,
      indicatorClassName,
      labelClassName,
      descriptionClassName,
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={className}
        {...props}
      >
        <RadioGroupPrimitive.Indicator asChild>
          <span className={indicatorClassName} />
        </RadioGroupPrimitive.Indicator>

        <span className={labelClassName}>{label}</span>

        {description ? (
          <span className={descriptionClassName}>{description}</span>
        ) : null}
      </RadioGroupPrimitive.Item>
    );
  }
);

QuizChoice.displayName = "QuizChoice";

export interface QuizChoiceCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  QuizChoiceStyleProps {
  label: string;
  description?: string;
}

/**
 * A single checkbox answer card.
 */
export const QuizChoiceCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  QuizChoiceCheckboxProps
>(
  (
    {
      className,
      label,
      description,
      indicatorClassName,
      labelClassName,
      descriptionClassName,
      ...props
    },
    ref
  ) => {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={className}
        {...props}
      >
        <CheckboxPrimitive.Indicator asChild>
          <span className={indicatorClassName}>✓</span>
        </CheckboxPrimitive.Indicator>

        <span className={labelClassName}>{label}</span>

        {description ? (
          <span className={descriptionClassName}>
            {description}
          </span>
        ) : null}
      </CheckboxPrimitive.Root>
    );
  }
);

QuizChoiceCheckbox.displayName = "QuizChoiceCheckbox";

export interface QuizChoiceGroupProps extends QuizChoiceStyleProps {
  options: QuizChoiceOption[];
  multiple?: boolean;
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}

export function QuizChoiceGroup({
  options,
  multiple = false,
  className,
  itemClassName,
  activeItemClassName,
  indicatorClassName,
  labelClassName,
  descriptionClassName,
}: QuizChoiceGroupProps) {
  const { value, setValue } = useQuizAnswers();

  /*
   * Multiple choice
   */
  if (multiple) {
    const selected = Array.isArray(value) ? value : [];

    const toggle = (
      optionValue: string,
      checked: boolean
    ) => {
      if (checked) {
        // Prevent duplicates.
        if (!selected.includes(optionValue)) {
          setValue([...selected, optionValue]);
        }
      } else {
        setValue(
          selected.filter((item) => item !== optionValue)
        );
      }
    };

    return (
      <div className={className} role="group">
        {options.map((option) => {
          const isSelected = selected.includes(option.value);

          return (
            <QuizChoiceCheckbox
              key={option.value}
              label={option.label}
              description={option.description}
              checked={isSelected}
              onCheckedChange={(checked) =>
                toggle(option.value, checked === true)
              }
              className={cn(
                itemClassName,
                isSelected && activeItemClassName
              )}
              indicatorClassName={indicatorClassName}
              labelClassName={labelClassName}
              descriptionClassName={descriptionClassName}
            />
          );
        })}
      </div>
    );
  }

  /*
   * Single choice
   */
  return (
    <RadioGroupPrimitive.Root
      className={className}
      value={typeof value === "string" ? value : ""}
      onValueChange={setValue}
    >
      {options.map((option) => {
        const isSelected = value === option.value;

        return (
          <QuizChoice
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.description}
            className={cn(
              itemClassName,
              isSelected && activeItemClassName
            )}
            indicatorClassName={indicatorClassName}
            labelClassName={labelClassName}
            descriptionClassName={descriptionClassName}
          />
        );
      })}
    </RadioGroupPrimitive.Root>
  );
}
