import { BORDER } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const thumb = cva(
  twMerge(
    `block
    h-5
    w-5
    rounded-full
    outline-none
    border-transparent
    transition
    focus:outline-none
    focus:ring-offset-2
    focus:ring-offset-white
    focus:ring-2`,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-800
    hover:border-neutral-600
    dark:bg-neutral-200
    dark:hover:border-neutral-400`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
      },
    },
  },
);

export { thumb };
