import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const separator = cva("my-1.5 h-px", {
  variants: {
    color: {
      neutral: "bg-neutral-300",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { separator };
