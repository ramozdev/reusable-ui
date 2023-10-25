import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalLinkStyles } from "@/ui/nextjs/link/global-styles";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const DEFAULT_VARIANT = "default";
const DEFAULT_SIZE = "medium";
const DEFAULT_COLOR = "neutral";

const subtleLink = cva(globalLinkStyles, {
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

const SubtleLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & VariantProps<typeof subtleLink>
>(({ className, size, color, variant, ...props }, ref) => {
  return (
    <Link
      {...props}
      ref={ref}
      className={twMerge(subtleLink({ size, color, variant }), className)}
    />
  );
});
SubtleLink.displayName = "SubtleLink";

const Subtle = SubtleLink;

export { Subtle };
