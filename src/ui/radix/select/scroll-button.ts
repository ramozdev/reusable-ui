import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

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
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "bg-neutral-50",
      },
    },
  },
);

export { scrollButton };
