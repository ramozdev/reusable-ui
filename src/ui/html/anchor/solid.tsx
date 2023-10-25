import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalAnchorStyles } from "@/ui/html/anchor/global-styles";
import { twMerge } from "tailwind-merge";

const DEFAULT_VARIANT = "default";
const DEFAULT_SIZE = "medium";
const DEFAULT_COLOR = "neutral";

const solidAnchor = cva(globalAnchorStyles, {
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
        `hover:bg-neutral-700
          hover:text-white`,

        // FOCUS-VISIBLE
        `focus-visible:ring-neutral-950`,

        // ACTIVE
        `active:bg-neutral-800
          active:text-white`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-600`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-600
                border-neutral-800`,
    },
  ],
  defaultVariants: {
    variant: DEFAULT_VARIANT,
    color: DEFAULT_COLOR,
    size: DEFAULT_SIZE,
  },
});

const SolidAnchor = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof solidAnchor>
>(({ className, size, variant, color, ...props }, ref) => {
  return (
    <a
      {...props}
      ref={ref}
      className={twMerge(solidAnchor({ size, color, variant }), className)}
    />
  );
});
SolidAnchor.displayName = "SolidAnchor";

const Solid = SolidAnchor;

export { Solid };
