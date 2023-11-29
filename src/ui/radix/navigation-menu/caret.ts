import { cva } from "class-variance-authority";

const caret = cva(
  `relative
  top-px
  duration-[250ms]
  transition-transform
  ease-in
  group-data-[state=open]:rotate-180`,
  {
    variants: {
      color: {
        neutral: "text-neutral-900 dark:text-neutral-100",
      },
    },
    defaultVariants: {
      color: "neutral",
    },
  },
);

export { caret };
