import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const track = cva(
  `relative
  flex-1
  rounded-full
  ring-1
  data-[orientation=horizontal]:h-[3px]
  data-[orientation=vertical]:w-[3px]
  grow`,
  {
    variants: {
      color: {
        neutral: `bg-neutral-50
        ring-neutral-300`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { track };
