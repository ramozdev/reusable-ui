import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const indicator = cva(
  `flex
  items-center
  justify-center
  [&_>_svg]:h-5
  [&_>_svg]:w-5`,
  {
    variants: {
      color: {
        neutral: `text-neutral-950
          data-[disabled]:text-neutral-700 `,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { indicator };
