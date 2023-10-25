import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "white_black";

const viewport = cva(
  `data-[state=open]:animate-scaleIn
  data-[state=closed]:animate-scaleOut
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
    variants: {
      color: {
        white_black: "bg-white",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { viewport };
