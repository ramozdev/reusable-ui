import { cva } from "class-variance-authority";

const viewport = cva(
  `data-[state=open]:animate-navigation-menu-scale-in
  data-[state=closed]:animate-navigation-menu-scale-out
  relative
  mt-[10px]
  h-[var(--radix-navigation-menu-viewport-height)]
  w-full
  origin-[top_center]
  overflow-hidden
  rounded-[6px]
  transition-[width,_height]
  duration-300
  sm:w-[var(--radix-navigation-menu-viewport-width)]`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": "bg-white dark:bg-black",
      },
    },
  },
);

export { viewport };
