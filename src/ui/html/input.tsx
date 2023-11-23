import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const input = cva(
  twMerge(
    `appearance-none
  block
  w-full
  px-3
  text-sm
  py-1
  leading-5
  m-px
  transition
  focus:outline-none
  [color-scheme:white]`,
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
        brutalism: `rounded-sm 
          border border-neutral-950 
          dark:border-neutral-50 dark:bg-neutral-950
          bg-neutral-50 
          ring-neutral-950
          dark:ring-neutral-50
          ring-[0.5px]
          `,
      },
      file: {
        true: `
      file:ml-0.5
      file:mr-4 
      file:py-2 
      file:px-3
      file:rounded-md
      file:border-0
      file:font-medium
      file:bg-neutral-100
      file:text-neutral-900`,
      },
      color: {
        neutral: cx(
          `bg-neutral-50
          text-neutral-900
          dark:bg-neutral-800
          dark:text-neutral-100`,

          // PLACEHOLDER
          `placeholder:text-neutral-500
          dark:placeholder:text-neutral-400`,

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
        className: `border-neutral-300`,
      },
      {
        color: "neutral",
        variant: "brutalism",
        className: `text-neutral-950 dark:text-neutral-50`,
      },
    ],
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof input>
>(({ className, color, variant, file, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(input({ color, variant, file }), className)}
    />
  );
});
Input.displayName = "Input";

export default Input;
