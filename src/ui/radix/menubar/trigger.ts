import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const trigger = cva(
  twMerge(
    `flex
  cursor-pointer
  select-none
  items-center 
  justify-center
  p-2
  px-3
  py-1.5
  outline-none
  border-transparent
  m-px
  data-[disabled]:pointer-events-none`,
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
        hover:bg-neutral-100
        hover:text-neutral-900
        hover:border-neutral-500
        focus:bg-neutral-100
        focus:text-neutral-900
        focus:border-neutral-500
        data-[state=open]:bg-neutral-100
        data-[disabled]:text-neutral-700
        data-[state=open]:text-neutral-900
        data-[state=open]:border-neutral-500
        hover:data-[state=open]:bg-neutral-200
        focus:data-[state=open]:bg-neutral-200
        dark:text-neutral-200
        dark:hover:bg-neutral-900
        dark:hover:text-neutral-100 
        dark:hover:border-neutral-600 
        dark:focus:bg-neutral-900 
        dark:focus:text-neutral-100 
        dark:focus:border-neutral-600
        dark:data-[state=open]:bg-neutral-900 
        dark:data-[disabled]:text-neutral-400
        dark:data-[state=open]:text-neutral-100
        dark:data-[state=open]:border-neutral-600
        dark:hover:data-[state=open]:bg-neutral-800
        dark:focus:data-[state=open]:bg-neutral-800`,
      },
    },
  },
);

export { trigger };
