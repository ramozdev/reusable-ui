import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

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
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": `border-neutral-300
         bg-white
         text-neutral-900
         dark:border-neutral-700
         dark:bg-black
         dark:text-neutral-200`,
      },
    },
  },
);

export { root };
