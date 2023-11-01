import { cva } from "class-variance-authority";

const separator = cva("my-1.5 h-px", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "bg-neutral-300",
    },
  },
});

export { separator };
