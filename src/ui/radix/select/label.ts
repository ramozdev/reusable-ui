import { cva } from "class-variance-authority";

const label = cva(
  `mb-1
  pl-2
  pt-1
  font-medium`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "text-neutral-900 dark:text-neutral-300",
      },
    },
  },
);

export { label };
