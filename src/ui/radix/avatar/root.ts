import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

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
    variants: {
      color: {
        neutral: "bg-neutral-100",
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };
