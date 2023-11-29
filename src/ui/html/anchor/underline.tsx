import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const underlineAnchor = cva(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
leading-none
underline-offset-2	
underline-none
hover:underline
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

const UnderlineAnchor = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof underlineAnchor>
>(({ className, color, ...props }, ref) => {
  return (
    <a
      {...props}
      ref={ref}
      className={twMerge(underlineAnchor({ color }), className)}
    />
  );
});
UnderlineAnchor.displayName = "UnderlineAnchor";

const Underline = UnderlineAnchor;

export { Underline };
