"use client";

import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const choicebox = cva(
  twMerge(
    `focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-2
  w-5
  h-5
  m-px
  transition
  focus:outline-none`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "neutral",
    },
    variants: {
      variant: {
        outline: "",
        plane: "border-transparent",
      },
      color: {
        neutral: cx(
          `bg-neutral-50`,

          // CHECKED
          `checked:text-neutral-500
          dark:checked:text-neutral-400`,

          // HOVER CHECKED
          `hover:checked:text-neutral-700
          dark:hover:checked:text-neutral-300`,

          // FOCUS
          `focus:ring-neutral-950
          dark:focus:ring-neutral-50`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: "outline",
        className: `
        border-neutral-300
        dark:border-neutral-700`,
      },
    ],
  },
);

const Choicebox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof choicebox>
>(({ className, color, variant, children, ...props }, ref) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div
      onClick={(checked) => setChecked(!checked)}
      className={twMerge(
        "group m-10 flex max-w-max space-x-4 rounded px-4 py-2 ring-1 ring-neutral-900 focus:bg-blue-200 focus:ring-blue-600 dark:ring-neutral-50 dark:focus:bg-blue-950 dark:focus:ring-blue-500",
        checked ? "bg-blue-300" : "",
      )}
    >
      <div className="text-neutral-900 group-focus:text-neutral-900 dark:text-neutral-50 group-focus:dark:text-neutral-50">
        {children}
      </div>
      <div className="flex items-center">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          className={twMerge(choicebox({ color, variant }), className)}
        />
      </div>
    </div>
  );
});
Choicebox.displayName = "Choicebox";

export { choicebox as choiceboxVariants };

export default Choicebox;
