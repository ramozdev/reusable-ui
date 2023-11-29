import { cva } from "class-variance-authority";

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
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": `focus-within:shadow-black
        dark:focus-within:shadow-white`,
      },
    },
  },
);

export { item };
