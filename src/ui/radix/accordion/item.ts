import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "white-black";

const item = cva(
  `mt-px
    overflow-hidden
    first:mt-0
    first:rounded-t
    last:rounded-b
    focus-within:relative
    focus-within:z-10
    focus-within:shadow-[0_0_0_2px]`,
  {
    variants: {
      color: {
        "white-black": `focus-within:shadow-black`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { item };
