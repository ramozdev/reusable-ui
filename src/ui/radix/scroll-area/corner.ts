import { cva } from "class-variance-authority";

const corner = cva("", {
  defaultVariants: {
    color: "white-black",
  },
  variants: {
    color: {
      "white-black": "bg-white",
    },
  },
});

export { corner };
