import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

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
          `bg-neutral-50
      text-neutral-900
      dark:bg-neutral-800
      dark:text-neutral-100`,

          // FOCUS VISIBLE
          `focus-visible:border-neutral-950
          dark:focus-visible:border-neutral-50`,

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
        className: `border-neutral-300 dark:border-neutral-700`,
      },
    ],
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

export { select };

export default Select;
