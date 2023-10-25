import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const root = cva(
  twMerge(
    `flex
  flex-col
  w-[300px]`,
    ROUNDED,
    BORDER,
  ),
  {
    variants: {
      color: {
        neutral: "border-neutral-300",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };
