import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const content = cva(
  `text-[15px]
  data-[state=closed]:animate-accordion-slide-up
  data-[state=open]:animate-accordion-slide-down`,
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
