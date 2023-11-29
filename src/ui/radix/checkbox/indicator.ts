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
          data-[disabled]:text-neutral-700 
          dark:text-neutral-200
          dark:data-[disabled]:text-neutral-300`,
      },
    },
  },
);

export { indicator };
