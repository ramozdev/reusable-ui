import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const card = cva(
  twMerge(
    `w-full
  p-4
  m-px`,
    BORDER,
    SHADOW,
    ROUNDED,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "neutral",
    },
    variants: {
      variant: {
        outline: "",
        plane: "border-transparent",
      },
      color: {
        brand: "bg-brand-50 dark:bg-brand-950",
        slate: "bg-slate-50 dark:bg-slate-950",
        gray: "bg-gray-50 dark:bg-gray-950",
        zinc: "bg-zinc-50 dark:bg-zinc-950",
        neutral: "bg-neutral-50 dark:bg-neutral-950",
        stone: "bg-stone-50 dark:bg-stone-950",
        red: "bg-red-50 dark:bg-red-950",
        orange: "bg-orange-50 dark:bg-orange-950",
        amber: "bg-amber-50 dark:bg-amber-950",
        yellow: "bg-yellow-50 dark:bg-yellow-950",
        lime: "bg-lime-50 dark:bg-lime-950",
        green: "bg-green-50 dark:bg-green-950",
        emerald: "bg-emerald-50 dark:bg-emerald-950",
        teal: "bg-teal-50 dark:bg-teal-950",
        cyan: "bg-cyan-50 dark:bg-cyan-950",
        sky: "bg-sky-50 dark:bg-sky-950",
        blue: "bg-blue-50 dark:bg-blue-950",
        indigo: "bg-indigo-50 dark:bg-indigo-950",
        violet: "bg-violet-50 dark:bg-violet-950",
        purple: "bg-purple-50 dark:bg-purple-950",
        fuchsia: "bg-fuchsia-50 dark:bg-fuchsia-950",
        pink: "bg-pink-50 dark:bg-pink-950",
        rose: "bg-rose-50 dark:bg-rose-950",
        "white-black": "bg-white dark:bg-black",
      },
    },
    compoundVariants: [
      {
        color: "brand",
        variant: "outline",
        className: "border-brand-300 dark:border-brand-800",
      },
      {
        color: "slate",
        variant: "outline",
        className: "border-slate-300 dark:border-slate-800",
      },
      {
        color: "gray",
        variant: "outline",
        className: "border-gray-300 dark:border-gray-800",
      },
      {
        color: "zinc",
        variant: "outline",
        className: "border-zinc-300 dark:border-zinc-800",
      },
      {
        color: "neutral",
        variant: "outline",
        className: "border-neutral-300 dark:border-neutral-800",
      },
      {
        color: "stone",
        variant: "outline",
        className: "border-stone-300 dark:border-stone-800",
      },
      {
        color: "red",
        variant: "outline",
        className: "border-red-300 dark:border-red-800",
      },
      {
        color: "orange",
        variant: "outline",
        className: "border-orange-300 dark:border-orange-800",
      },
      {
        color: "amber",
        variant: "outline",
        className: "border-amber-300 dark:border-amber-800",
      },
      {
        color: "yellow",
        variant: "outline",
        className: "border-yellow-300 dark:border-yellow-800",
      },
      {
        color: "lime",
        variant: "outline",
        className: "border-lime-300 dark:border-lime-800",
      },
      {
        color: "green",
        variant: "outline",
        className: "border-green-300 dark:border-green-800",
      },
      {
        color: "emerald",
        variant: "outline",
        className: "border-emerald-300 dark:border-emerald-800",
      },
      {
        color: "teal",
        variant: "outline",
        className: "border-teal-300 dark:border-teal-800",
      },
      {
        color: "cyan",
        variant: "outline",
        className: "border-cyan-300 dark:border-cyan-800",
      },
      {
        color: "sky",
        variant: "outline",
        className: "border-sky-300 dark:border-sky-800",
      },
      {
        color: "blue",
        variant: "outline",
        className: "border-blue-300 dark:border-blue-800",
      },
      {
        color: "indigo",
        variant: "outline",
        className: "border-indigo-300 dark:border-indigo-800",
      },
      {
        color: "violet",
        variant: "outline",
        className: "border-violet-300 dark:border-violet-800",
      },
      {
        color: "purple",
        variant: "outline",
        className: "border-purple-300 dark:border-purple-800",
      },
      {
        color: "fuchsia",
        variant: "outline",
        className: "border-fuchsia-300 dark:border-fuchsia-800",
      },
      {
        color: "pink",
        variant: "outline",
        className: "border-pink-300 dark:border-pink-800",
      },
      {
        color: "rose",
        variant: "outline",
        className: "border-rose-300 dark:border-rose-800",
      },
      {
        color: "white-black",
        variant: "outline",
        className: "border-neutral-300 dark:border-neutral-800",
      },
    ],
  },
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof card>
>(({ className, color, variant, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(card({ variant, color }), className)}
    />
  );
});
Card.displayName = "Card";

export { card };

export default Card;
