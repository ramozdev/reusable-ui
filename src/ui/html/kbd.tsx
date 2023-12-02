import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const kbd = cva(
  twMerge(
    `whitespace-nowrap
  px-1.5
  mx-0.5`,
    BORDER,
    ROUNDED,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "neutral",
    },
    variants: {
      variant: {
        outline: ``,
        plane: "border-transparent",
        skeuomorphic: `border-b-4 shadow-sm`,
      },
      color: {
        brand: `bg-brand-100
          text-brand-900
          dark:bg-brand-950
          dark:text-brand-200`,
        slate: `bg-slate-100
          text-slate-900
          dark:bg-slate-950
          dark:text-slate-200`,
        gray: `bg-gray-100
          text-gray-900
          dark:bg-gray-950
          dark:text-gray-200`,
        zinc: `bg-zinc-100
          text-zinc-900
          dark:bg-zinc-950
          dark:text-zinc-200`,
        neutral: `bg-neutral-100
          text-neutral-900
          dark:bg-neutral-950
          dark:text-neutral-200`,
        stone: `bg-stone-100
          text-stone-900
          dark:bg-stone-950
          dark:text-stone-200`,
        red: `bg-red-100
          text-red-900
          dark:bg-red-950
          dark:text-red-200`,
        orange: `bg-orange-100
          text-orange-900
          dark:bg-orange-950
          dark:text-orange-200`,
        amber: `bg-amber-100
          text-amber-900
          dark:bg-amber-950
          dark:text-amber-200`,
        yellow: `bg-yellow-100
          text-yellow-900
          dark:bg-yellow-950
          dark:text-yellow-200`,
        lime: `bg-lime-100
          text-lime-900
          dark:bg-lime-950
          dark:text-lime-200`,
        green: `bg-green-100
          text-green-900
          dark:bg-green-950
          dark:text-green-200`,
        emerald: `bg-emerald-100
          text-emerald-900
          dark:bg-emerald-950
          dark:text-emerald-200`,
        teal: `bg-teal-100
          text-teal-900
          dark:bg-teal-950
          dark:text-teal-200`,
        cyan: `bg-cyan-100
          text-cyan-900
          dark:bg-cyan-950
          dark:text-cyan-200`,
        sky: `bg-sky-100
          text-sky-900
          dark:bg-sky-950
          dark:text-sky-200`,
        blue: `bg-blue-100
          text-blue-900
          dark:bg-blue-950
          dark:text-blue-200`,
        indigo: `bg-indigo-100
          text-indigo-900
          dark:bg-indigo-950
          dark:text-indigo-200`,
        violet: `bg-violet-100
          text-violet-900
          dark:bg-violet-950
          dark:text-violet-200`,
        purple: `bg-purple-100
          text-purple-900
          dark:bg-purple-950
          dark:text-purple-200`,
        fuchsia: `bg-fuchsia-100
          text-fuchsia-900
          dark:bg-fuchsia-950
          dark:text-fuchsia-200`,
        pink: `bg-pink-100
          text-pink-900
          dark:bg-pink-950
          dark:text-pink-200`,
        rose: `bg-rose-100
          text-rose-900
          dark:bg-rose-950
          dark:text-rose-200`,
        "white-black": `bg-white
          text-neutral-900
          dark:bg-black
          dark:text-neutral-200`,
      },
    },
    compoundVariants: [
      {
        color: "brand",
        variant: ["skeuomorphic", "outline"],
        className: `border-brand-300
                  dark:border-brand-800`,
      },
      {
        color: "slate",
        variant: ["skeuomorphic", "outline"],
        className: `border-slate-300
                  dark:border-slate-800`,
      },
      {
        color: "gray",
        variant: ["skeuomorphic", "outline"],
        className: `border-gray-300
                  dark:border-gray-800`,
      },
      {
        color: "zinc",
        variant: ["skeuomorphic", "outline"],
        className: `border-zinc-300
                  dark:border-zinc-800`,
      },
      {
        color: "neutral",
        variant: ["skeuomorphic", "outline"],
        className: `border-neutral-300
                  dark:border-neutral-800`,
      },
      {
        color: "stone",
        variant: ["skeuomorphic", "outline"],
        className: `border-stone-300
                  dark:border-stone-800`,
      },
      {
        color: "red",
        variant: ["skeuomorphic", "outline"],
        className: `border-red-300
                  dark:border-red-800`,
      },
      {
        color: "orange",
        variant: ["skeuomorphic", "outline"],
        className: `border-orange-300
                  dark:border-orange-800`,
      },
      {
        color: "amber",
        variant: ["skeuomorphic", "outline"],
        className: `border-amber-300
                  dark:border-amber-800`,
      },
      {
        color: "yellow",
        variant: ["skeuomorphic", "outline"],
        className: `border-yellow-300
                  dark:border-yellow-800`,
      },
      {
        color: "lime",
        variant: ["skeuomorphic", "outline"],
        className: `border-lime-300
                  dark:border-lime-800`,
      },
      {
        color: "green",
        variant: ["skeuomorphic", "outline"],
        className: `border-green-300
                  dark:border-green-800`,
      },
      {
        color: "emerald",
        variant: ["skeuomorphic", "outline"],
        className: `border-emerald-300
                  dark:border-emerald-800`,
      },
      {
        color: "teal",
        variant: ["skeuomorphic", "outline"],
        className: `border-teal-300
                  dark:border-teal-800`,
      },
      {
        color: "cyan",
        variant: ["skeuomorphic", "outline"],
        className: `border-cyan-300
                  dark:border-cyan-800`,
      },
      {
        color: "sky",
        variant: ["skeuomorphic", "outline"],
        className: `border-sky-300
                  dark:border-sky-800`,
      },
      {
        color: "blue",
        variant: ["skeuomorphic", "outline"],
        className: `border-blue-300
                  dark:border-blue-800`,
      },
      {
        color: "indigo",
        variant: ["skeuomorphic", "outline"],
        className: `border-indigo-300
                  dark:border-indigo-800`,
      },
      {
        color: "violet",
        variant: ["skeuomorphic", "outline"],
        className: `border-violet-300
                  dark:border-violet-800`,
      },
      {
        color: "purple",
        variant: ["skeuomorphic", "outline"],
        className: `border-purple-300
                  dark:border-purple-800`,
      },
      {
        color: "fuchsia",
        variant: ["skeuomorphic", "outline"],
        className: `border-fuchsia-300
                  dark:border-fuchsia-800`,
      },
      {
        color: "pink",
        variant: ["skeuomorphic", "outline"],
        className: `border-pink-300
                  dark:border-pink-800`,
      },
      {
        color: "rose",
        variant: ["skeuomorphic", "outline"],
        className: `border-rose-300
                  dark:border-rose-800`,
      },
      {
        color: "white-black",
        variant: ["skeuomorphic", "outline"],
        className: `border-neutral-300
        dark:border-neutral-800`,
      },
    ],
  },
);

const Kbd = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof kbd>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <kbd
      {...props}
      ref={ref}
      className={twMerge(kbd({ variant, color }), className)}
    />
  );
});
Kbd.displayName = "Kbd";

export { kbd };

export default Kbd;
