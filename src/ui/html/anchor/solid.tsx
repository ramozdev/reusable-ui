import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalAnchorStyles } from "@/ui/html/anchor/global-styles";
import { twMerge } from "tailwind-merge";

const solidAnchor = cva(globalAnchorStyles, {
  defaultVariants: {
    variant: "default",
    color: "neutral",
    size: "medium",
  },
  variants: {
    variant: {
      default: "border-transparent text-white",
      outline: "text-white",
    },
    size: {
      medium: `px-4 py-1`,
      icon: `h-8
      w-8
      [&_>_svg]:h-4
      [&_>_svg]:w-4`,
    },
    color: {
      neutral: cx(
        // HOVER
        `hover:bg-neutral-700
          hover:text-white
          dark:hover:text-white`,

        // FOCUS-VISIBLE
        `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-300`,

        // ACTIVE
        `active:bg-neutral-800
          active:text-white
          dark:active:text-white`,
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
                border-neutral-800
                dark:border-neutral-400`,
    },
  ],
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
