import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white-black";

const content = cva(
  twMerge(
    `fixed
  left-1/2
  top-1/2
  max-h-[85vh]
  w-[90vw]
  max-w-[500px]
  -translate-x-1/2
  -translate-y-1/2
  p-4
  focus:outline-none
  md:p-6
  data-[state=open]:animate-alert-dialog-content-show`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    variants: {
      color: {
        "white-black": `bg-white
        border-neutral-300`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { content };
