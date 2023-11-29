import { cva } from "class-variance-authority";

const root = cva("", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    required: {
      true: `after:ml-0.5 after:text-red-500 after:content-['*']`,
    },
    color: {
      neutral: "text-neutral-900 dark:text-neutral-100",
    },
  },
});

export { root };
