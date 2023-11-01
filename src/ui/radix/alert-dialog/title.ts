import { cva } from "class-variance-authority";

const title = cva("m-0 text-[17px] font-medium", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "text-neutral-900",
    },
  },
});

export { title };
