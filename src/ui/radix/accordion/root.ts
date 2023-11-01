import { ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white-black";

const root = cva(twMerge("w-[300px]", ROUNDED, SHADOW), {
  variants: {
    color: {
      "white-black": "bg-white",
    },
  },
  defaultVariants: {
    color: DEFAULT_COLOR,
  },
});

export { root };
