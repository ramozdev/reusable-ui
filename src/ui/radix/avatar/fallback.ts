import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const fallback = cva(
  `flex
  h-full
  w-full
  items-center
  justify-center
  rounded-full
  leading-1
  text-[15px]
  font-medium`,
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
        text-neutral-900`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { fallback };
