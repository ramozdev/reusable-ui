import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const shortcut = cva(`ml-auto`, {
  variants: {
    color: {
      neutral: "text-neutral-600",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { shortcut };
