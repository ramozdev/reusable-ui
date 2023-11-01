import { cva } from "class-variance-authority";

const overlay = cva(
  `fixed
  inset-0
  data-[state=open]:animate-dialog-overlay-show
  backdrop-blur-[2px]`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": "bg-black/10",
      },
    },
  },
);

export { overlay };
