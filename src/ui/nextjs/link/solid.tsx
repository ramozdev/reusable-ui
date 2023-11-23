import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalLinkStyles } from "@/ui/nextjs/link/global-styles";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const solidLinkVariants = cva(globalLinkStyles, {
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
      medium: `px-5 h-10`,
      icon: `h-6 w-6`,
    },
    color: {
      neutral: cx(
        // HOVER
        `hover:bg-neutral-700
          hover:text-white
          dark:hover:bg-neutral-500
          dark:hover:text-white`,

        // FOCUS-VISIBLE
        `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-500`,

        // ACTIVE
        `active:bg-neutral-800
          active:text-white
          dark:active:bg-neutral-600
            dark:active:text-white`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-600 dark:bg-neutral-500`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-600
                border-neutral-800
                dark:bg-neutral-500
                dark:border-neutral-700`,
    },
  ],
});

const SolidLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> &
    VariantProps<typeof solidLinkVariants>
>(({ className, size, variant, color, ...props }, ref) => {
  return (
    <Link
      {...props}
      ref={ref}
      className={twMerge(
        solidLinkVariants({ size, color, variant }),
        className,
      )}
    />
  );
});
SolidLink.displayName = "SolidLink";

const Solid = SolidLink;

export { Solid };
