import { cva } from "class-variance-authority";

const arrow = cva("relative top-[70%] h-3 w-3 rotate-45", {
  variants: {
    color: {
      neutral: "bg-neutral-300",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

export { arrow };
