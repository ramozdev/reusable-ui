import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const textarea = cva(
  twMerge(
    `appearance-none
  block
  w-full
  px-3
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
        brutalism: `rounded`,
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
        className: `border-neutral-300 dark:border-neutral-700`,
      },
      {
        color: "neutral",
        variant: "brutalism",
        className: `
        border-[1.5px]
        border-neutral-950
        dark:border-neutral-50
        bg-neutral-50
        dark:bg-neutral-950
        text-neutral-950
        dark:text-neutral-50
        
        `,
      },
    ],
  },
);

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    VariantProps<typeof textarea>
>(({ className, color, variant, ...props }, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={twMerge(textarea({ color, variant }), className)}
    />
  );
});
Textarea.displayName = "Textarea";

export { textarea };

export default Textarea;
