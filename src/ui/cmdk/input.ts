import { cva, cx } from "class-variance-authority";

const input = cva(
  `appearance-none
  flex
  w-full
  rounded-t-md
  py-7
  px-5
  border-0
  transition
  focus:outline-none
  [color-scheme:white]
  focus-visible:ring-offset-0
  focus-visible:ring-0`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-50
          text-neutral-900`,

          // PLACEHOLDER
          `placeholder:text-neutral-500`,
        ),
      },
    },
  },
);

export { input };
