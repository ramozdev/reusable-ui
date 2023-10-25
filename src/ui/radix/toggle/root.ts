import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

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
        focus:data-[state=on]:border-neutral-900`,

          // FOCUS
          `focus:ring-neutral-950`,
        ),
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };
