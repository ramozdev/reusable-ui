import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const DEFAULT_COLOR = "neutral";
const DEFAULT_VARIANT = "outline";

const select = cva(
  twMerge(
    `appearance-none
  block
  px-3
  pr-9
  py-2
  m-px
  transition
  focus:outline-none`,
    ROUNDED,
    BORDER,
  ),
  {
    variants: {
      variant: {
        outline: "",
        plane: "border-transparent",
      },
      color: {
        neutral: cx(
          `bg-neutral-50
      text-neutral-900`,

          // FOCUS VISIBLE
          `focus-visible:border-neutral-950`,

          // FOCUS
          `focus:ring-neutral-950`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: "outline",
        className: `border-neutral-300`,
      },
    ],
    defaultVariants: {
      variant: DEFAULT_VARIANT,
      color: DEFAULT_COLOR,
    },
  },
);

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & VariantProps<typeof select>
>(({ className, color, variant, ...props }, ref) => {
  return (
    <select
      {...props}
      ref={ref}
      className={twMerge(select({ color, variant }), className)}
    />
  );
});
Select.displayName = "Select";

export { Select };
