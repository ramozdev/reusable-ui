import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const content = cva(
  twMerge(
    `w-[260px]
  p-5
  will-change-[transform,opacity]
  data-[state=open]:data-[side=bottom]:animate-slideUpAndFade
  data-[state=open]:data-[side=left]:animate-slideRightAndFade
  data-[state=open]:data-[side=right]:animate-slideLeftAndFade
  data-[state=open]:data-[side=top]:animate-slideDownAndFade`,
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
