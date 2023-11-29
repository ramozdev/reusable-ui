import { ROUNDED } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const subTrigger = cva(
  twMerge(
    `relative
  flex
  select-none
  items-center
  p-2
  outline-none
  md:py-1
  text-neutral-900`,
    ROUNDED,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-neutral-900
           data-[highlighted]:text-neutral-50
           dark:data-[highlighted]:bg-neutral-200 
           dark:data-[highlighted]:text-neutral-950`,

          `data-[highlighted]:data-[state=open]:bg-neutral-900
           data-[highlighted]:data-[state=open]:text-neutral-50
           dark:data-[highlighted]:data-[state=open]:bg-neutral-200
           dark:data-[highlighted]:data-[state=open]:text-neutral-950`,

          // OPEN
          `data-[state=open]:bg-neutral-950
           data-[state=open]:text-neutral-50
           dark:data-[state=open]:bg-neutral-900
           dark:data-[state=open]:text-neutral-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[state=open]:text-neutral-50
           dark:[&_>_[data-role=right-slot]]:data-[state=open]:text-neutral-50`,

          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-neutral-50
           [&_>_[data-role=right-slot]]:data-[highlighted]:data-[state=open]:text-neutral-50
           dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-neutral-950
           dark:[&_>_[data-role=right-slot]]:data-[highlighted]:data-[state=open]:text-neutral-950`,
        ),
      },
    },
  },
);

export { subTrigger };
