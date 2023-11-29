import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
  select-none
  items-center
  justify-center
  h-[32px]
  w-[32px]
  outline-none
  transition
  focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-2`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-50
        text-neutral-900
        border-neutral-300
        hover:border-neutral-500
        focus:border-neutral-500
        data-[state=on]:bg-neutral-200
        data-[state=on]:text-neutral-950
        data-[disabled]:text-neutral-700
        data-[state=on]:border-neutral-400
        hover:data-[state=on]:border-neutral-900
        focus:data-[state=on]:border-neutral-900
        dark:bg-neutral-950
        dark:text-neutral-100
        dark:border-neutral-800
        dark:hover:border-neutral-600 
        dark:focus:border-neutral-600
        dark:data-[state=on]:bg-neutral-800
        dark:data-[state=on]:text-neutral-50
        dark:data-[disabled]:text-neutral-400
        dark:data-[state=on]:border-neutral-600
        dark:hover:data-[state=on]:border-neutral-400
        dark:focus:data-[state=on]:border-neutral-400`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
      },
    },
  },
);

export { root };
