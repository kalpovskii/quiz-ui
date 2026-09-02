"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { useQuizAnswers } from "./core";

export interface QuizImageChoiceOption {
  value: string;
  label: string;
  imageUrl: string;
}

export interface QuizImageChoiceProps {
  options: QuizImageChoiceOption[];
  /** Applied to the grid wrapper — column count is now entirely your responsibility via className. */
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  imageClassName?: string;
  labelClassName?: string;
}

export function QuizImageChoice({
  options,
  className,
  itemClassName,
  activeItemClassName,
  imageClassName,
  labelClassName,
}: QuizImageChoiceProps) {
  const { value, setValue } = useQuizAnswers();

  return (
    <RadioGroupPrimitive.Root
      className={className}
      value={typeof value === "string" ? value : undefined}
      onValueChange={setValue}
    >
      {options.map((option) => {
        const isOn = value === option.value;
        return (
          <RadioGroupPrimitive.Item
            key={option.value}
            value={option.value}
            className={isOn && activeItemClassName ? `${itemClassName ?? ""} ${activeItemClassName}` : itemClassName}
          >
            <img src={option.imageUrl} alt={option.label} className={imageClassName} />
            <span className={labelClassName}>{option.label}</span>
          </RadioGroupPrimitive.Item>
        );
      })}
    </RadioGroupPrimitive.Root>
  );
}