import { cva } from "class-variance-authority";

const arrow = cva("", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "fill-neutral-300 dark:fill-neutral-700",
    },
  },
});

export { arrow };
