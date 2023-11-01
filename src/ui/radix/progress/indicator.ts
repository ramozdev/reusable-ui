import { cva } from "class-variance-authority";

const indicator = cva(
  `h-full
    w-full
    transition-transform
    duration-[660ms]
    ease-[cubic-bezier(0.65,0,0.35,1)]`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "bg-neutral-500",
      },
    },
  },
);

export { indicator };
