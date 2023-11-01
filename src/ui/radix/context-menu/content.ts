import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const content = cva(
  twMerge(
    `z-50
  p-2
  min-w-[220px]
  data-[side=top]:animate-context-menu-slide-down-and-fade
  data-[side=right]:animate-context-menu-slide-left-and-fade
  data-[side=bottom]:animate-context-menu-slide-up-and-fade
  data-[side=left]:animate-context-menu-slide-right-and-fade`,
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
