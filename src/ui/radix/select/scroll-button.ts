import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const scrollButton = cva(
  twMerge(
    `flex
  cursor-default
  items-center
  justify-center
  py-0.5`,
    ROUNDED,
  ),
  {
    variants: {
      color: {
        neutral: "bg-neutral-50",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { scrollButton };
