import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const root = cva(
  `data-[orientation=horizontal]:h-px
  data-[orientation=horizontal]:w-full
  data-[orientation=horizontal]:my-[15px]
  data-[orientation=vertical]:h-full
  data-[orientation=vertical]:w-px
  data-[orientation=vertical]:mx-[15px]`,
  {
    variants: {
      color: {
        neutral: "bg-neutral-300",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };
