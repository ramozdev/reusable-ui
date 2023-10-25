import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const separator = cva(`h-px`, {
  variants: {
    color: {
      neutral: "bg-neutral-200",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { separator };
