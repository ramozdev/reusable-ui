import { cva } from "class-variance-authority";

const rightSlot = cva(
  `ml-auto
  pl-5`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "text-neutral-900",
      },
    },
  },
);

export { rightSlot };
