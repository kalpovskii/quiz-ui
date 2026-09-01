"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export interface QuizDialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps a funnel (QuizRoot and its contents, passed as `children`) in a
 * Radix Dialog, for funnels launched from a button rather than embedded
 * inline on the page. Handles focus trapping and Escape-to-close for
 * free via Radix.
 *
 * @example
 * <QuizDialog trigger={<button>Take the quiz</button>}>
 *   <QuizRoot definition={myQuiz}>...</QuizRoot>
 * </QuizDialog>
 */
export function QuizDialog({ trigger, children, className, ...props }: QuizDialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      {trigger ? <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger> : null}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=open]:fade-in" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-0 shadow-lg",
            className
          )}
        >
          {children}
          <DialogPrimitive.Close
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close"
          >
            ✕
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
