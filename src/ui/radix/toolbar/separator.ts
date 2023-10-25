import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const separator = cva(`mx-[10px] w-[1px]`, {
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
