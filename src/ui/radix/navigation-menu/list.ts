import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const list = cva(
  twMerge(
    `m-0
  flex
  list-none
  justify-center
  gap-x-2
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
        "white-black": `bg-white
        text-neutral-900
        border-neutral-300`,
      },
    },
  },
);

export { list };
