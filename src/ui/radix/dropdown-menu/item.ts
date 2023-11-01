import { ROUNDED } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const item = cva(
  twMerge(
    `relative
  flex
  select-none
  items-center
  p-2
  outline-none
  md:py-1
  data-[disabled]:opacity-50
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
  data-[highlighted]:text-neutral-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-neutral-50`,
        ),
      },
    },
  },
);

export { item };
