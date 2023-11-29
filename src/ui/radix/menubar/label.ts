import { cva } from "class-variance-authority";

const label = cva(
  `mb-1
  pl-6`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "text-neutral-900 dark:text-neutral-100",
      },
    },
  },
);

export { label };
