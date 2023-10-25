import { cva, cx } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const trigger = cva(
  `group
  flex
  h-[45px]
  flex-1
  cursor-default
  items-center
  justify-between
  w-full
  px-5
  text-[15px]
  leading-none
  outline-none`,
  {
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-100`,

          // HOVER
          `hover:bg-neutral-200`,
        ),
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { trigger };
