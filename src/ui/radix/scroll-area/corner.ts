import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "white-black";

const corner = cva("", {
  variants: {
    color: {
      "white-black": "bg-white",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { corner };
