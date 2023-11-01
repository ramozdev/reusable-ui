import { cva } from "class-variance-authority";

const content = cva(
  `grow
  p-5
  rounded-b-md
  outline-none
  focus:ring-1`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": `bg-white
          focus:ring-neutral-950`,
      },
    },
  },
);

export { content };
