import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
  h-[80vh]
  md:h-[60vh]
  w-[95vw]
  md:w-[75vh]
  flex-col
  overflow-hidden
  
  [&_[cmdk-group-heading]]:px-2
  [&_[cmdk-group-heading]]:font-medium
  [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0
  [&_[cmdk-group]]:px-2
  [&_[cmdk-input-wrapper]_svg]:h-5
  [&_[cmdk-input-wrapper]_svg]:w-5
  [&_[cmdk-input]]:h-12
  [&_[cmdk-item]]:px-2
  [&_[cmdk-item]]:py-3
  [&_[cmdk-item]_svg]:h-5
  [&_[cmdk-item]_svg]:w-5`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: `bg-neutral-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-neutral-200`,
      },
    },
  },
);

export { root };
