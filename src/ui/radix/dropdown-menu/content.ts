import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `z-50
  p-2
  min-w-[220px]
  data-[side=top]:animate-dropdown-menu-slide-down-and-fade
  data-[side=right]:animate-dropdown-menu-slide-left-and-fade
  data-[side=bottom]:animate-dropdown-menu-slide-up-and-fade
  data-[side=left]:animate-dropdown-menu-slide-right-and-fade`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": `bg-white
          border-neutral-400`,
      },
    },
  },
);

export { content };
