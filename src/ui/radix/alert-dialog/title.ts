import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const title = cva("m-0 text-[17px] font-medium", {
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
