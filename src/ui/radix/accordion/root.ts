import { ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(twMerge("w-[300px]", ROUNDED, SHADOW), {
  defaultVariants: {
    color: "white-black",
  },
  variants: {
    color: {
      "white-black": "bg-white",
    },
  },
});

export { root };
