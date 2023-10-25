import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const arrow = cva("", {
  variants: {
    color: {
      neutral: "fill-neutral-300",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { arrow };
