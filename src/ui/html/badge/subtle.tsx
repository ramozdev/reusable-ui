import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { globalBadgeStyles } from "@/ui/html/badge/global-styles";
import { twMerge } from "tailwind-merge";

const DEFUALT_VARIANT = "default";
const DEFAULT_COLOR = "neutral";

const subtleBadge = cva(globalBadgeStyles, {
  variants: {
    variant: {
      default: "border-transparent",
      outline: "",
    },
    color: {
      neutral: "",
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-100
                text-neutral-900`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-100
                border-neutral-300
                text-neutral-900`,
    },
  ],
  defaultVariants: {
    variant: DEFUALT_VARIANT,
    color: DEFAULT_COLOR,
  },
});

const SubtleBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof subtleBadge>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(subtleBadge({ variant, color }), className)}
    />
  );
});
SubtleBadge.displayName = "SubtleBadge";

const Subtle = SubtleBadge;

export { Subtle };
