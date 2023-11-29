import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalAnchorStyles } from "@/ui/html/anchor/global-styles";
import { twMerge } from "tailwind-merge";

const subtleAnchor = cva(globalAnchorStyles, {
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
        `hover:bg-neutral-200
          hover:text-neutral-950
          dark:hover:text-neutral-100
          dark:hover:bg-neutral-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-200`,

        // ACTIVE
        `active:bg-neutral-300
          active:text-neutral-950
          dark:active:text-neutral-100
          dark:active:bg-neutral-800`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-100
                text-neutral-900
                dark:bg-neutral-950
                dark:text-neutral-100`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-100
          border-neutral-300
          text-neutral-900
          dark:bg-neutral-950
          dark:border-neutral-800
          dark:text-neutral-100`,
    },
  ],
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
