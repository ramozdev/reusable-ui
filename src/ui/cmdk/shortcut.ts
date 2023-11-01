import { cva } from "class-variance-authority";

const shortcut = cva(`ml-auto`, {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "text-neutral-600",
    },
  },
});

export { shortcut };
