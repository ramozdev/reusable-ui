import { BORDER, ROUNDED } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const trigger = cva(
  twMerge(
    `inline-flex
  items-center
  justify-center
  gap-2
  outline-none
  outline-none
  px-3
  text-sm
  py-1
  leading-5
  m-px
  transition
  focus:outline-none
  focus:ring-1`,
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
          dark:bg-neutral-950
          dark:text-neutral-100`,

          // PLACEHOLDER
          `placeholder:text-neutral-500
          dark:placeholder:text-neutral-400`,

          // FOCUS VISIBLE
          `focus-visible:border-neutral-950
          dark:focus-visible:border-neutral-300`,

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

export { trigger };
