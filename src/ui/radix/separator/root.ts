import { cva } from "class-variance-authority";

const root = cva(
  `data-[orientation=horizontal]:h-px
  data-[orientation=horizontal]:w-full
  data-[orientation=horizontal]:my-[15px]
  data-[orientation=vertical]:h-full
  data-[orientation=vertical]:w-px
  data-[orientation=vertical]:mx-[15px]`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "bg-neutral-300 dark:bg-neutral-800",
      },
    },
  },
);

export { root };
