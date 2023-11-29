import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const underlineLinkVariants = cva(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
leading-none
rounded-sm
underline
hover:no-underline
focus:outline-none
focus-visible:ring-offset-4
focus-visible:ring-offset-white
focus-visible:ring-2`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        neutral: cx(
          `text-neutral-600
        dark:text-neutral-200`,

          // FOCUS
          `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-300`,
        ),
      },
    },
  },
);

const UnderlineLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> &
    VariantProps<typeof underlineLinkVariants>
>(({ className, color, ...props }, ref) => {
  return (
    <Link
      {...props}
      ref={ref}
      className={twMerge(underlineLinkVariants({ color }), className)}
    />
  );
});
UnderlineLink.displayName = "UnderlineLink";

const Underline = UnderlineLink;

export { Underline };
