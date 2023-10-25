import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const content = cva(
  twMerge(
    `z-50
  p-2
  min-w-[220px]
  data-[side=top]:animate-slideDownAndFade
  data-[side=right]:animate-slideLeftAndFade
  data-[side=bottom]:animate-slideUpAndFade
  data-[side=left]:animate-slideRightAndFade`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
        border-neutral-400`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { content };
