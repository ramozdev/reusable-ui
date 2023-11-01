import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `select-none
  px-4
  py-3
  text-[15px]
  leading-none
  will-change-[transform,opacity]
  data-[state=delayed-open]:data-[side=top]:animate-tooltip-slide-down-and-fade
  data-[state=delayed-open]:data-[side=right]:animate-tooltip-slide-left-and-fade
  data-[state=delayed-open]:data-[side=left]:animate-tooltip-slide-right-and-fade
  data-[state=delayed-open]:data-[side=bottom]:animate-tooltip-slide-up-and-fade`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `bg-neutral-50
        border-neutral-300
        text-neutral-900`,
      },
    },
  },
);

export { content };
