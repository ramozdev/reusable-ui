import { cva } from "class-variance-authority";

const description = cva("mb-5 mt-4 text-[15px] leading-normal", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "text-neutral-900 dark:text-neutral-200",
    },
  },
});

export { description };
