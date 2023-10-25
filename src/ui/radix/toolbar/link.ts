import { cva, cx } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

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
    variants: {
      color: {
        neutral: cx(
          `text-neutral-600`,

          // FOCUS
          `focus:ring-neutral-950`,
        ),
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { link };
