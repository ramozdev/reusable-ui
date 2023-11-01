import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `absolute
  z-50
  left-0
  top-0
  w-full
  data-[motion=from-end]:animate-navigation-menu-enter-from-right
  data-[motion=from-start]:animate-navigation-menu-enter-from-left
  data-[motion=to-end]:animate-navigation-menu-exit-to-right
  data-[motion=to-start]:animate-navigation-menu-exit-to-left
  sm:w-auto
`,
    ROUNDED,
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
