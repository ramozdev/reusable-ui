import { cva } from "class-variance-authority";

const range = cva("absolute h-full rounded-full", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "bg-neutral-500 dark:bg-neutral-500",
    },
  },
});

export { range };
