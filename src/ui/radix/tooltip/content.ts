import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const content = cva(
  twMerge(
    `select-none
  px-4
  py-3
  text-[15px]
  leading-none
  will-change-[transform,opacity]
  data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade
  data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade
  data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade
  data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade`,
    ROUNDED,
    BORDER,
  ),
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
        border-neutral-300
        text-neutral-900`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { content };
