import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const DEFAULT_COLOR = "white-black";
const DEFAULT_VARIANT = "outline";

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
        className: "border-neutral-300",
      },
    ],
    defaultVariants: {
      variant: DEFAULT_VARIANT,
      color: DEFAULT_COLOR,
    },
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
