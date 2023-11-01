import { cva } from "class-variance-authority";

const group = cva(
  `overflow-hidden
  mx-2
  my-4
  [&_[cmdk-group-heading]]:px-2
  [&_[cmdk-group-heading]]:pb-1.5
  [&_[cmdk-group-heading]]:text-sm
  [&_[cmdk-group-heading]]:font-semibold`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `text-neutral-700
          [&_[cmdk-group-heading]]:text-neutral-900`,
      },
    },
  },
);

export { group };
