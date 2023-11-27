import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { globalBadgeStyles } from "@/ui/html/badge/global-styles";
import { twMerge } from "tailwind-merge";

const solidBadge = cva(globalBadgeStyles, {
  defaultVariants: {
    variant: "default",
    color: "neutral",
  },
  variants: {
    variant: {
      default: `
      border-neutral-950
      dark:border-neutral-50
      text-neutral-50
      dark:text-neutral-50
      rounded
      bg-neutral-50
      dark:bg-neutral-950`,
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
      className: `bg-neutral-600 
                  dark:bg-neutral-500`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-600
                border-neutral-800
                dark:bg-neutral-500
                dark:border-neutral-600`,
    },
    {
      color: "neutral",
      className: ``,
    },
  ],
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
