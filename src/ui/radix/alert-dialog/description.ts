import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const description = cva("mb-5 mt-4 text-[15px] leading-normal", {
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
