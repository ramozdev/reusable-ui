import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const label = cva(
  `mb-1
  pl-2
  pt-1
  font-medium`,
  {
    variants: {
      color: {
        neutral: "text-neutral-900",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { label };
