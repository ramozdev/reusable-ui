import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white_black";

const root = cva(
  twMerge(
    `flex
  h-12
  items-center
  gap-x-2
  space-x-1
  p-2`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    variants: {
      color: {
        white_black: `border-neutral-300
            bg-white
            text-neutral-900`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };
