import { cva } from "class-variance-authority";

const indicator = cva(
  `flex
  items-center
  justify-center
  [&_>_svg]:h-5
  [&_>_svg]:w-5`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `text-neutral-950
          data-[disabled]:text-neutral-700 `,
      },
    },
  },
);

export { indicator };
