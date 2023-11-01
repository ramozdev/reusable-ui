import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const listItem = cva("", {
  defaultVariants: {
    variant: "default",
    color: "white-black",
  },
  variants: {
    variant: {
      default: twMerge(
        `block
      select-none
      p-3
      text-[15px]
      leading-none
      no-underline
      outline-none
      transition-colors`,
        ROUNDED,
      ),
      spotlight: twMerge(
        `flex
      h-full
      w-full
      select-none
      flex-col
      justify-end
      bg-gradient-to-t
      p-[25px]
      no-underline
      outline-none`,
        ROUNDED,
      ),
    },
    color: {
      "white-black": "",
    },
  },
  compoundVariants: [
    {
      color: "white-black",
      variant: "default",
      className: `bg-white
            hover:bg-neutral-100`,
    },
    // --------------------
    // Spotlight
    // --------------------
    {
      color: "white-black",
      variant: "spotlight",
      className: `from-white
    to-black`,
    },
  ],
});

export { listItem };
