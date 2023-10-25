import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const overlay = cva(
  `fixed
  inset-0
  animate-overlay-show
  data-[state=open]:animate-overlayShow`,
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
