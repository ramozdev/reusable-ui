import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `z-50
  p-2
  min-w-[220px]
  data-[side=top]:animate-menubar-slide-down-and-fade
  data-[side=right]:animate-menubar-slide-left-and-fade
  data-[side=bottom]:animate-menubar-slide-up-and-fade
  data-[side=left]:animate-menubar-slide-right-and-fade`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    variants: {
      color: {
        "white-black": `bg-white
        border-neutral-400`,
      },
    },
    defaultVariants: {
      color: "white-black",
    },
  },
);

export { content };
