import { BORDER } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

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
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `bg-neutral-50
          border-neutral-300`,
      },
    },
  },
);

export { root };
