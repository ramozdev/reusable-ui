import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "white_black";

const corner = cva("", {
  variants: {
    color: {
      white_black: "bg-white",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { corner };
