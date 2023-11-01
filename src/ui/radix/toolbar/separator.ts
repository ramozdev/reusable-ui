import { cva } from "class-variance-authority";

const separator = cva(`mx-[10px] w-[1px]`, {
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
