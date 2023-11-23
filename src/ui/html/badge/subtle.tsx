import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { globalBadgeStyles } from "@/ui/html/badge/global-styles";
import { twMerge } from "tailwind-merge";

const subtleBadge = cva(globalBadgeStyles, {
  defaultVariants: {
    variant: "default",
    color: "neutral",
  },
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
                text-neutral-900
                dark:bg-neutral-800
                dark:text-neutral-100`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-100
                border-neutral-300
                text-neutral-900
                dark:bg-neutral-800
                dark:border-neutral-700
                dark:text-neutral-100`,
    },
  ],
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
