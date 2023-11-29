import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
  w-full
  min-w-max
  p-3`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": `bg-white
    text-neutral-900
    ring-neutral-300
    dark:bg-black
    dark:text-neutral-200
    dark:ring-neutral-800`,
      },
    },
  },
);

export { root };
