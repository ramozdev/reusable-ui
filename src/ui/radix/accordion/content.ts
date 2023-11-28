import { cva } from "class-variance-authority";

const content = cva(
  `text-[15px]
  data-[state=closed]:animate-accordion-slide-up
  data-[state=open]:animate-accordion-slide-down`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `
          text-neutral-950
          dark:text-neutral-50
          bg-neutral-50
          dark:bg-neutral-800 
          `,
      },
    },
  },
);

export { content };
