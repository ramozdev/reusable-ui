import { BORDER } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `w-[300px]
  p-5
  data-[state=open]:transition-all
  data-[side=bottom]:animate-hover-card-slide-up-and-fade
  data-[side=right]:animate-hover-card-slide-left-and-fade
  data-[side=left]:animate-hover-card-slide-right-and-fade
  data-[side=top]:animate-hover-card-slide-down-and-fade`,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": `bg-white
        border-neutral-300`,
      },
    },
  },
);

export { content };
