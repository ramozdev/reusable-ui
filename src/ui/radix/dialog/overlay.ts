import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "white_black";

const overlay = cva(
  `fixed
  inset-0
  animate-overlay-show
  backdrop-blur-[2px]`,
  {
    variants: {
      color: {
        white_black: "bg-black/10",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { overlay };
