import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const content = cva(
  `text-[15px]
  data-[state=closed]:animate-slideUp
  data-[state=open]:animate-slideDown`,
  {
    variants: {
      color: {
        neutral: `text-neutral-950
          bg-neutral-50`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { content };
