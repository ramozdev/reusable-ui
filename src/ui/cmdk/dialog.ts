import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const dialog = cva(
  twMerge(
    `fixed
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  data-[state=open]:animate-content-show
  focus:outline-none`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
        [&_[dialog-overlay]]:bg-neutral-100
        border-neutral-400`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { dialog };
