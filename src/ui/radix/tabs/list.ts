import { cva } from "class-variance-authority";

const list = cva("flex shrink-0 border-b", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "border-neutral-300 dark:border-neutral-800",
    },
  },
});

export { list };
