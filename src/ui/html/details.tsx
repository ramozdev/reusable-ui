import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const detailsVariants = cva(``, {
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

const Details = React.forwardRef<
  HTMLDetailsElement,
  React.DetailsHTMLAttributes<HTMLDetailsElement> &
    VariantProps<typeof detailsVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <details
      {...props}
      ref={ref}
      className={twMerge(detailsVariants({ variant }), className)}
    />
  );
});
Details.displayName = "Details";

const summaryVariants = cva(``, {
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
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof summaryVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <summary
      {...props}
      ref={ref}
      className={twMerge(summaryVariants({ variant }), className)}
    />
  );
});
DetailsSummary.displayName = "DetailsSummary";

const Root = Details;
const Summary = DetailsSummary;

export { Root, Summary, summaryVariants, detailsVariants };
