import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const trigger = cva(
  twMerge(
    `flex
  group
  items-center
  justify-center
  gap-1
  transition-colors
  px-3
  py-2
  outline-none  
  select-none
  text-[15px]
  font-medium
  leading-none `,
    ROUNDED,
  ),
  {
    variants: {
      color: {
        neutral: "hover:bg-neutral-100",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { trigger };
