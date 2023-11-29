import { cva } from "class-variance-authority";

const title = cva("mb-2 text-lg font-semibold", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "text-neutral-900 dark:text-neutral-200",
    },
  },
});

export { title };
