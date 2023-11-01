import { cva } from "class-variance-authority";

const separator = cva(`h-px`, {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "bg-neutral-200",
    },
  },
});

export { separator };
