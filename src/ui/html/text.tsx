import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const text = cva(twMerge(``), {
  defaultVariants: {
    variant: `default`,
    size: `default`,
  },
  variants: {
    variant: {
      default: ``,
    },
    size: {
      default: `text-base font-normal leading-7`,
      small: `text-sm font-medium leading-none`,
      large: `text-lg font-semibold`,
    },
  },
});

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <h1
    {...props}
    ref={ref}
    className={twMerge(
      `mb-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`,
      className,
    )}
  >
    {props.children}
  </h1>
));
H1.displayName = "H1";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <h2
    {...props}
    ref={ref}
    className={twMerge(
      `my-8 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0`,
      className,
    )}
  >
    {props.children}
  </h2>
));
H2.displayName = "H2";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <h3
    {...props}
    ref={ref}
    className={twMerge(
      `mb-4 mt-10 scroll-m-20 text-2xl font-semibold tracking-tight`,
      className,
    )}
  >
    {props.children}
  </h3>
));
H3.displayName = "H3";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <h4
    {...props}
    ref={ref}
    className={twMerge(
      `scroll-m-20 text-xl font-semibold tracking-tight`,
      className,
    )}
  >
    {props.children}
  </h4>
));
H4.displayName = "H4";

const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof text>
>(({ size, variant, className, ...props }, ref) => (
  <p
    {...props}
    ref={ref}
    className={twMerge(
      text({ size, variant }),
      ` my-6 leading-7 [&:not(:first-child)]:mt-6`,
      className,
    )}
  >
    {props.children}
  </p>
));
P.displayName = "P";

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.BlockquoteHTMLAttributes<HTMLQuoteElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <blockquote
    {...props}
    ref={ref}
    className={twMerge(`leading-7 [&:not(:first-child)]:mt-6`, className)}
  >
    {props.children}
  </blockquote>
));
Blockquote.displayName = "Blockquote";

const Ul = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <ul
    {...props}
    ref={ref}
    className={twMerge(`my-3 list-disc [&>li]:mt-2`, className)}
  >
    {props.children}
  </ul>
));
Ul.displayName = "Ul";

const Code = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <code
    {...props}
    ref={ref}
    className={twMerge(
      `bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`,
      className,
    )}
  >
    {props.children}
  </code>
));
Code.displayName = "Code";

const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <p
    {...props}
    ref={ref}
    className={twMerge(`text-muted-foreground text-xl`, className)}
  >
    {props.children}
  </p>
));
Lead.displayName = "Lead";

const Muted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof text>
>(({ className, ...props }, ref) => (
  <p
    {...props}
    ref={ref}
    className={twMerge(`text-muted-foreground text-sm`, className)}
  >
    {props.children}
  </p>
));
Muted.displayName = "Muted";

const Text = {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  Ul,
  Code,
  Lead,
  Muted,
};

export default Text;
