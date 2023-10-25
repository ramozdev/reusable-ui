import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const range = cva("absolute h-full rounded-full", {
  variants: {
    color: {
      neutral: "bg-neutral-500",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { range };
