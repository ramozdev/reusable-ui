import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const card = cva(
  twMerge(
    `w-full
  p-4
  m-px`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "white-black",
    },
    variants: {
      variant: {
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
