import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const kbd = cva(
  twMerge(
    `whitespace-nowrap
  px-1.5
  mx-0.5`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "neutral",
    },
    variants: {
      variant: {
        outline: ``,
        plane: "border-transparent",
        skeuomorphic: twMerge(`border-b-4`, SHADOW),
      },
      color: {
        neutral: `bg-neutral-100
          text-neutral-900
          dark:bg-neutral-950
          dark:text-neutral-200`,
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: ["skeuomorphic", "outline"],
        className: `border-neutral-300
                  dark:border-neutral-800`,
      },
    ],
  },
);

const Kbd = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof kbd>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <kbd
      {...props}
      ref={ref}
      className={twMerge(kbd({ variant, color }), className)}
    />
  );
});
Kbd.displayName = "Kbd";

export default Kbd;
