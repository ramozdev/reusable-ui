import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const description = cva("mb-6", {
  variants: {
    color: {
      neutral: "text-neutral-900",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { description };
