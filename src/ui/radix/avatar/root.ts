import { cva } from "class-variance-authority";

const root = cva(
  `relative
  inline-flex
  h-11
  w-11
  shrink-0
  select-none
  items-center
  justify-center
  overflow-hidden
  rounded-full
  align-middle`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "bg-neutral-100",
      },
    },
  },
);

export { root };
