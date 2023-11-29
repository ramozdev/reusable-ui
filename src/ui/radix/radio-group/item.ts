import { BORDER, SHADOW } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const item = cva(
  twMerge(
    `flex
  h-6
  w-6
  items-center
  justify-center
  rounded-full
  outline-none
  transition
  duration-100
  focus:outline-none
  data-[disabled]:pointer-events-none
  focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-2`,
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
          focus:border-neutral-500
          focus-visible:border-neutral-500
          active:border-neutral-900
          hover:border-neutral-500 
          border-neutral-300
          data-[disabled]:border-neutral-200 
          dark:bg-neutral-950
          dark:border-neutral-800
          dark:hover:bg-neutral-950
          dark:hover:border-neutral-600 
          dark:focus:border-neutral-600
          dark:focus-visible:border-neutral-600 
          dark:active:border-neutral-500
          dark:data-[disabled]:border-neutral-800`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
      },
    },
  },
);

export { item };
