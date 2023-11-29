import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const dialog = cva(
  twMerge(
    `fixed
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  data-[state=open]:animate-cmdk-content-show
  focus:outline-none`,
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
        [&_[dialog-overlay]]:bg-neutral-100
        border-neutral-400
        dark:bg-neutral-950
        dark:[&_[dialog-overlay]]:bg-neutral-950
        dark:border-neutral-700`,
      },
    },
  },
);

export { dialog };
