import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white_black";

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
        white_black: `bg-white
          border-neutral-400`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { content };
