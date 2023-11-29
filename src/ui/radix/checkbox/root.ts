import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `peer
  flex
  h-6
  w-6 
  shrink-0
  items-center
  justify-center
  outline-none 
  transition
  duration-100
  focus:outline-none
  focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-2`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-50
          border-neutral-300
          hover:border-neutral-500
          data-[disabled]:border-neutral-200 
          focus:border-neutral-500
          focus-visible:border-neutral-500
          active:border-neutral-900
          dark:bg-neutral-950
          dark:border-neutral-800
          dark:hover:bg-neutral-950
          dark:hover:border-neutral-600 
          dark:focus:border-neutral-600
          dark:focus-visible:border-neutral-600 
          dark:active:border-neutral-500
          dark:data-[disabled]:border-neutral-800`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
      },
    },
  },
);

export { root };
