import { cva } from "class-variance-authority";

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
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `bg-neutral-50
        text-neutral-900
        dark:bg-neutral-950
        dark:text-neutral-200`,
      },
    },
  },
);

export { fallback };
