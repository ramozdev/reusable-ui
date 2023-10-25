import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const title = cva("mb-2 text-lg font-semibold", {
  variants: {
    color: {
      neutral: "text-neutral-900",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { title };
