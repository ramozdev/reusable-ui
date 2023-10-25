import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const root = cva("[&_>_img]:h-full [&_>_img]:w-full [&_>_img]:object-cover", {
  variants: {
    color: {
      neutral: "bg-neutral-50",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { root };
