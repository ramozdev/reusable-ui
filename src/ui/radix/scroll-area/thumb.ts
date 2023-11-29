import { cva } from "class-variance-authority";

const thumb = cva(
  `relative
  flex-1 
  rounded-[var(--scrollbar-size)]
  before:absolute
  before:left-1/2
  before:top-1/2
  before:h-full
  before:min-h-[44px]
  before:w-full
  before:min-w-[44px]
  before:-translate-x-1/2
  before:-translate-y-1/2
  before:content-['']`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: "bg-neutral-500 dark:bg-neutral-600",
      },
    },
  },
);

export { thumb };
