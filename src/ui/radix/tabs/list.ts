import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const list = cva("flex shrink-0 border-b", {
  variants: {
    color: {
      neutral: "border-neutral-300",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { list };
