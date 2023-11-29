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
  data-[disabled]:pointer-events-none
  data-[disabled]:opacity-50`,
    ROUNDED,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          // SELECTED
          `aria-selected:bg-neutral-200
  aria-selected:text-neutral-950
  dark:aria-selected:bg-neutral-800
  dark:aria-selected:text-neutral-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-neutral-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-neutral-50`,
        ),
      },
    },
  },
);

export { item };
