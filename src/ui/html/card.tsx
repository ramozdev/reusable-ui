import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const card = cva(
  twMerge(
    `w-full
    font-mono
    p-4
    m-px`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      variant: "default",
      color: "white-black",
    },
    variants: {
      variant: {
        default: `
        border-2 border-neutral-950 dark:border-neutral-50
        bg-neutral-50 dark:bg-neutral-950
        text-neutral-950 dark:text-neutral-50 
        rounded`,
        outline: "",
        plane: "border-transparent",
      },
      color: {
        "white-black": "bg-white",
      },
    },
    compoundVariants: [
      {
        color: "white-black",
        variant: "outline",
        className: "border-neutral-300 dark:border-neutral-700",
      },
    ],
  },
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof card>
>(({ className, color, variant, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(card({ variant, color }), className)}
    />
  );
});
Card.displayName = "Card";

export { card as cardVariants };

export default Card;
