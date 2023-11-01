import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const overlay = cva(
  `fixed
  inset-0
  data-[state=open]:animate-alert-dialog-overlay-show
  backdrop-blur-[2px]`,
  {
    variants: {
      color: {
        neutral: "bg-neutral-950/10",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { overlay };
