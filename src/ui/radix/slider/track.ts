import { cva } from "class-variance-authority";

const track = cva(
  `relative
  flex-1
  rounded-full
  ring-1
  data-[orientation=horizontal]:h-[3px]
  data-[orientation=vertical]:w-[3px]
  grow`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `bg-neutral-50
        ring-neutral-300
        dark:bg-neutral-950
        dark:ring-neutral-800`,
      },
    },
  },
);

export { track };
