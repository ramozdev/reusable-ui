import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalAnchorStyles } from "@/ui/html/anchor/global-styles";
import { twMerge } from "tailwind-merge";

const DEFAULT_VARIANT = "default";
const DEFAULT_SIZE = "medium";
const DEFAULT_COLOR = "neutral";

const subtleAnchor = cva(globalAnchorStyles, {
  variants: {
    variant: {
      default: "border-transparent text-white",
      outline: "text-white",
    },
    size: {
      medium: `px-5 h-10`,
      icon: `h-6 w-6`,
    },
    color: {
      neutral: cx(
        // HOVER
        `hover:bg-neutral-200
          hover:text-neutral-950`,

        // FOCUS-VISIBLE
        `focus-visible:ring-neutral-950`,

        // ACTIVE
        `active:bg-neutral-300
          active:text-neutral-950`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-100
                text-neutral-900`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-100
                border-neutral-300
                text-neutral-900`,
    },
  ],
  defaultVariants: {
    variant: DEFAULT_VARIANT,
    color: DEFAULT_COLOR,
    size: DEFAULT_SIZE,
  },
});

const SubtleAnchor = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof subtleAnchor>
>(({ className, size, color, variant, ...props }, ref) => {
  return (
    <a
      {...props}
      ref={ref}
      className={twMerge(subtleAnchor({ size, color, variant }), className)}
    />
  );
});
SubtleAnchor.displayName = "SubtleAnchor";

const Subtle = SubtleAnchor;

export { Subtle };
