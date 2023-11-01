import { cva } from "class-variance-authority";

const description = cva("mb-6", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "text-neutral-900",
    },
  },
});

export { description };
