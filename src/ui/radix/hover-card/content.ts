import { BORDER } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white_black";

const content = cva(
  twMerge(
    `w-[300px]
  p-5
  data-[state=open]:transition-all
  data-[side=bottom]:animate-slideUpAndFade
  data-[side=right]:animate-slideLeftAndFade
  data-[side=left]:animate-slideRightAndFade
  data-[side=top]:animate-slideDownAndFade`,
    BORDER,
  ),
  {
    variants: {
      color: {
        white_black: `bg-white
        border-neutral-300`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { content };
