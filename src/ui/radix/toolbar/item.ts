import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const item = cva(
  twMerge(
    `flex
  cursor-pointer
  items-center
  justify-center
  p-2
  outline-none 
  data-[disabled]:pointer-events-none
  border-transparent`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `text-neutral-900
    hover:bg-neutral-50
    hover:text-neutral-900
    hover:border-neutral-500
    focus:bg-neutral-50
    focus:text-neutral-900
    focus:border-neutral-500
    data-[state=on]:bg-neutral-50
    data-[disabled]:text-neutral-700
    data-[state=on]:text-neutral-900
    data-[state=on]:border-neutral-500
    hover:data-[state=on]:bg-neutral-200
    focus:data-[state=on]:bg-neutral-200`,
      },
    },
  },
);

export { item };
