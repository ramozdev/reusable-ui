import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const caret = cva(
  `relative
  top-px
  duration-[250ms]
  transition-transform
  ease-in
  group-data-[state=open]:rotate-180`,
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

export { caret };
