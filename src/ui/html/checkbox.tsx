import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const checkbox = cva(
  twMerge(
    `focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-2
  w-5
  h-5
  m-px
  transition
  focus:outline-none`,
    ROUNDED,
    SHADOW,
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
      dark:bg-neutral-950`,

          // CHECKED
          `checked:text-neutral-500
        dark:checked:text-neutral-900`,

          // HOVER CHECKED
          `hover:checked:text-neutral-700
      dark:hover:checked:text-neutral-900`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: "outline",
        className: `border-neutral-300
                  dark:border-neutral-800`,
      },
    ],
  },
);

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof checkbox>
>(({ className, color, variant, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="checkbox"
      className={twMerge(checkbox({ color, variant }), className)}
    />
  );
});
Checkbox.displayName = "Checkbox";

export { checkbox as checkboxVariants };

export default Checkbox;
