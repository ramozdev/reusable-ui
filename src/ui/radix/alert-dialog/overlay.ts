import { cva } from "class-variance-authority";

const overlay = cva(
  `fixed
  inset-0
  data-[state=open]:animate-alert-dialog-overlay-show
  backdrop-blur-[2px]`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "bg-neutral-950/10",
      },
    },
  },
);

export { overlay };
