import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { globalBadgeStyles } from "@/ui/html/badge/global-styles";
import { twMerge } from "tailwind-merge";

const DEFAULT_VARIANT = "default";
const DEFAULT_COLOR = "neutral";

const solidBadge = cva(globalBadgeStyles, {
  variants: {
    variant: {
      default: "border-transparent text-white",
      outline: "text-white",
    },
    color: {
      neutral: "",
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-600`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-600
                border-neutral-800`,
    },
  ],
  defaultVariants: {
    variant: DEFAULT_VARIANT,
    color: DEFAULT_COLOR,
  },
});

const SolidBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof solidBadge>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(solidBadge({ variant, color }), className)}
    />
  );
});
SolidBadge.displayName = "SolidBadge";

const Solid = SolidBadge;

export { Solid };
