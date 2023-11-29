import { cva } from "class-variance-authority";

const corner = cva("", {
  defaultVariants: {
    color: "white-black",
  },
  variants: {
    color: {
      "white-black": "bg-white dark:bg-black",
    },
  },
});

export { corner };
