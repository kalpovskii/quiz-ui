"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface QuizDialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  /** Applied to Dialog.Content. */
  className?: string;
  /** Applied to Dialog.Overlay. */
  overlayClassName?: string;
  closeButtonClassName?: string;
  closeButtonLabel?: React.ReactNode;
}

/**
 * Fixed/centered positioning on the overlay and content is kept as a
 * functional default — without it this isn't a modal, just an
 * unpositioned block in the DOM. Everything else (color, shadow,
 * radius, close-button glyph) is yours via className.
 */
export function QuizDialog({
  trigger,
  children,
  className,
  overlayClassName,
  closeButtonClassName,
  closeButtonLabel = "✕",
  ...props
}: QuizDialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      {trigger ? <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger> : null}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={`fixed inset-0 z-50 ${overlayClassName ?? ""}`} />
        <DialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 ${className ?? ""}`}
        >
          {children}
          <DialogPrimitive.Close className={closeButtonClassName} aria-label="Close">
            {closeButtonLabel}
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}