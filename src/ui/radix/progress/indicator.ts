import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const indicator = cva(
  `h-full
    w-full
    transition-transform
    duration-[660ms]
    ease-[cubic-bezier(0.65,0,0.35,1)]`,
  {
    variants: {
      color: {
        neutral: "bg-neutral-500",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { indicator };
