import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";

const root = cva(
  twMerge(
    `p-[15px]
  grid
  [grid-template-areas:_'title_action'_'description_action']
  grid-cols-[auto_max-content]
  gap-x-[15px]
  items-center
  data-[state=open]:animate-slideIn
  data-[state=closed]:animate-hide
  data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
  data-[swipe=cancel]:translate-x-0
  data-[swipe=cancel]:transition-[transform_200ms_ease-out]
  data-[swipe=end]:animate-swipeOut`,
    ROUNDED,
    BORDER,
  ),
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
        border-neutral-400`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };
