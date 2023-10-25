import { BORDER } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const root = cva(
  twMerge(
    `relative
  h-5
  w-[300px]
  overflow-hidden
  rounded-full
  [transform:translateZ(0)]`,
    BORDER,
  ),
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
          border-neutral-300`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };
