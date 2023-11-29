import { cva, cx } from "class-variance-authority";

const root = cva(
  `outline-none
  cursor-default
  relative 
  h-[25px]
  w-[42px]
  rounded-full
  transition
  disabled:pointer-events-none
  [-webkit-tap-highlight-color:rgba(0,0,0,0)]
  focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-2`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-neutral-500
          data-[state=checked]:hover:bg-neutral-600
          data-[state=checked]:focus-visible:bg-neutral-600
          data-[state=checked]:active:bg-neutral-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-neutral-500
          dark:data-[state=checked]:hover:bg-neutral-600
          dark:data-[state=checked]:focus-visible:bg-neutral-600
          dark:data-[state=checked]:active:bg-neutral-700`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
      },
    },
  },
);

export { root };
