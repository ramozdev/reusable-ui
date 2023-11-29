import { cva } from "class-variance-authority";

const shortcut = cva(`ml-auto`, {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "text-neutral-600 dark:text-neutral-400",
    },
  },
});

export { shortcut };
