import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `min-w-[180px]
  overflow-hidden
  p-1`,
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
        neutral: `bg-neutral-50
        border-neutral-400
        dark:bg-neutral-950
        dark:border-neutral-700`,
      },
    },
  },
);

export { content };
