import { cva, cx } from "class-variance-authority";

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
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-100`,

          // HOVER
          `hover:bg-neutral-200`,
        ),
      },
    },
  },
);

export { trigger };
