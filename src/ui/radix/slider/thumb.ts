import { BORDER } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

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
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-800
    hover:border-neutral-600`,

          // FOCUS
          `focus:ring-neutral-950`,
        ),
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { thumb };
