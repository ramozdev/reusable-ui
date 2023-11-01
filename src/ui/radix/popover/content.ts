import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `w-[260px]
  p-5
  will-change-[transform,opacity]
  data-[state=open]:data-[side=bottom]:animate-popover-slide-up-and-fade
  data-[state=open]:data-[side=left]:animate-popover-slide-right-and-fade
  data-[state=open]:data-[side=right]:animate-popover-slide-left-and-fade
  data-[state=open]:data-[side=top]:animate-popover-slide-down-and-fade`,
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
