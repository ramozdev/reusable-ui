import { cva } from "class-variance-authority";

const indicator = cva(
  `relative
  flex
  h-full
  w-full
  items-center
  justify-center
  after:block
  after:h-3
  after:w-3
  after:rounded-full
  after:content-['']`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "after:bg-neutral-900",
      },
    },
  },
);

export { indicator };
