import { cva } from "class-variance-authority";

const DEFAULT_COLOR = "neutral";

const group = cva(
  `overflow-hidden
  mx-2
  my-4
  [&_[cmdk-group-heading]]:px-2
  [&_[cmdk-group-heading]]:pb-1.5
  [&_[cmdk-group-heading]]:text-sm
  [&_[cmdk-group-heading]]:font-semibold`,
  {
    variants: {
      color: {
        neutral: `text-neutral-700
          [&_[cmdk-group-heading]]:text-neutral-900`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { group };
