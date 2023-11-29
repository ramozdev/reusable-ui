import { cva, cx } from "class-variance-authority";

const link = cva(
  `group
inline-flex
select-none
items-center
justify-center
leading-none
rounded-sm
hover:underline
focus:outline-none
focus:ring-offset-4
focus:ring-offset-white
focus:ring-2`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `text-neutral-600
        dark:text-neutral-200`,

          // FOCUS
          `focus:ring-neutral-950
          dark:focus:ring-neutral-300`,
        ),
      },
    },
  },
);

export { link };
