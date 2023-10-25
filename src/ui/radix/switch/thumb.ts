import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const thumb = cva(
  `block
    h-[21px]
    w-[21px]
    rounded-full
    transition-transform
    duration-100
    translate-x-0.5
    will-change-transform
    data-[state=checked]:translate-x-[19px]`,
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
          data-[state=checked]:bg-neutral-100`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { thumb };
