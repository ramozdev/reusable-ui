import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const details = cva(``, {
  variants: {
    variant: {
      default: "",
      outline: `bg-transparent`,
    },
  },
  defaultVariants: {
    variant: `default`,
  },
});

const DetailsRoot = React.forwardRef<
  HTMLDetailsElement,
  React.DetailsHTMLAttributes<HTMLDetailsElement> & VariantProps<typeof details>
>(({ className, variant, ...props }, ref) => {
  return (
    <details
      {...props}
      ref={ref}
      className={twMerge(details({ variant }), className)}
    />
  );
});
DetailsRoot.displayName = "Details";

const summary = cva(``, {
  variants: {
    variant: {
      default: "",
      outline: `bg-transparent`,
    },
  },
  defaultVariants: {
    variant: `default`,
  },
});

const DetailsSummary = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof summary>
>(({ className, variant, ...props }, ref) => {
  return (
    <summary
      {...props}
      ref={ref}
      className={twMerge(summary({ variant }), className)}
    />
  );
});
DetailsSummary.displayName = "DetailsSummary";

const Root = DetailsRoot;
const Summary = DetailsSummary;

const Details = { Root, Summary };

export { summary as summaryVariants, details as detailsVariants };

export default Details;
