import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const label = cva("font-medium leading-loose", {
  variants: {
    required: {
      true: `after:ml-0.5 after:text-red-500 after:content-['*']`,
    },
    color: {
      neutral: "text-neutral-900",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { label };
