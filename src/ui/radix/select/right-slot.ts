import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const rightSlot = cva(
  `ml-auto
  pl-5`,
  {
    variants: {
      color: {
        neutral: "text-neutral-900",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { rightSlot };
