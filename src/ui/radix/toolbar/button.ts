import { BORDER, ROUNDED } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "neutral";
const DEFAULT_VARIANT = "default";
const DEFAULT_SIZE = "medium";

const button = cva(
  twMerge(
    `group
  inline-flex
  select-none
  items-center
  justify-center
  leading-none
  transition
  m-px
  focus:outline-none
  focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-2`,
    ROUNDED,
    BORDER,
  ),
  {
    variants: {
      variant: {
        default: "border-transparent text-white",
        outline: "text-white",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        small: `px-3 h-7`,
        medium: `px-5 h-10`,
        large: `px-7 h-12`,
        "icon-small": `h-4 w-4`,
        "icon-medium": `h-6 w-6`,
        "icon-large": `h-10 w-10`,
      },
      color: {
        neutral: cx(
          // HOVER
          `hover:bg-neutral-700
          hover:text-white`,

          // FOCUS
          `focus:ring-neutral-950`,

          // ACTIVE
          `active:bg-neutral-800
          active:text-white`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: "default",
        className: `bg-neutral-600`,
      },
      // -------------OUTLINE-------------
      {
        color: "neutral",
        variant: "outline",
        className: `bg-neutral-600
                border-neutral-800`,
      },
      // ------------GHOST-------------
      {
        color: "neutral",
        variant: "ghost",
        className: `text-neutral-700`,
      },
    ],
    defaultVariants: {
      variant: DEFAULT_VARIANT,
      color: DEFAULT_COLOR,
      size: DEFAULT_SIZE,
    },
  },
);

export { button };
