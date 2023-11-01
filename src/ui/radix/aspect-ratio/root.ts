import { cva } from "class-variance-authority";

const root = cva("[&_>_img]:h-full [&_>_img]:w-full [&_>_img]:object-cover", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      neutral: "bg-neutral-50",
    },
  },
});

export { root };
