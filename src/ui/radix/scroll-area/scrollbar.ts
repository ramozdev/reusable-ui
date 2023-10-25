import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "white_black";

const scrollbar = cva(
  `flex
select-none
touch-none
p-0.5
bg-blackA6
transition-colors
duration-[160ms]
ease-out
data-[orientation=vertical]:w-2.5
data-[orientation=horizontal]:flex-col
data-[orientation=horizontal]:h-2.5`,
  {
    variants: {
      color: {
        white_black: `bg-white
        hover:bg-neutral-200`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { scrollbar };
