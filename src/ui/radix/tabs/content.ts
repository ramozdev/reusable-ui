import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "white_black";

const content = cva(
  `grow
  p-5
  rounded-b-md
  outline-none
  focus:ring-1`,
  {
    variants: {
      color: {
        white_black: `bg-white
          focus:ring-neutral-950`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { content };
