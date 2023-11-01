import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white_black";

const content = cva(
  twMerge(
    `z-50
  p-2
  min-w-[220px]
  data-[side=top]:animate-dropdown-menu-slide-down-and-fade
  data-[side=right]:animate-dropdown-menu-slide-left-and-fade
  data-[side=bottom]:animate-dropdown-menu-slide-up-and-fade
  data-[side=left]:animate-dropdown-menu-slide-right-and-fade`,
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
