import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white_black";
const DEFAULT_VARIANT = "default";

const listItem = cva("", {
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
      white_black: "",
    },
  },
  compoundVariants: [
    {
      color: "white_black",
      variant: "default",
      className: `bg-white
            hover:bg-neutral-100`,
    },
    // --------------------
    // Spotlight
    // --------------------
    {
      color: "white_black",
      variant: "spotlight",
      className: `from-white
    to-black`,
    },
  ],
  defaultVariants: {
    variant: DEFAULT_VARIANT,
    color: DEFAULT_COLOR,
  },
});

export { listItem };
