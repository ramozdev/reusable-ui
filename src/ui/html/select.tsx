import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const select = cva(
  twMerge(
    `appearance-none
  block
  pr-9
  pl-3
  text-sm
  py-1
  leading-5
  m-px
  ease-in duration-75
  focus:outline-none
  disabled:pointer-events-none
  disabled:opacity-75
  
  focus-visible:invalid:bg-red-50
  focus-visible:invalid:text-red-900 
  focus-visible:invalid:border-red-900

  dark:focus-visible:invalid:bg-red-950
  dark:focus-visible:invalid:text-red-100 
  dark:focus-visible:invalid:border-red-300`,
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
        outline: `border-b-2 border-r-2`,
      },
      color: {
        brand: cx(
          `bg-brand-50
      text-brand-900
      dark:bg-brand-950
      dark:text-brand-100`,

          // FOCUS VISIBLE
          `focus-visible:border-brand-950
      dark:focus-visible:border-brand-300`,

          // FOCUS
          `focus:ring-brand-950
        dark:focus:ring-brand-300`,
        ),
        slate: cx(
          `bg-slate-50
      text-slate-900
      dark:bg-slate-950
      dark:text-slate-100`,

          // FOCUS VISIBLE
          `focus-visible:border-slate-950
      dark:focus-visible:border-slate-300`,

          // FOCUS
          `focus:ring-slate-950
        dark:focus:ring-slate-300`,
        ),
        gray: cx(
          `bg-gray-50
      text-gray-900
      dark:bg-gray-950
      dark:text-gray-100`,

          // FOCUS VISIBLE
          `focus-visible:border-gray-950
      dark:focus-visible:border-gray-300`,

          // FOCUS
          `focus:ring-gray-950
        dark:focus:ring-gray-300`,
        ),
        zinc: cx(
          `bg-zinc-50
      text-zinc-900
      dark:bg-zinc-950
      dark:text-zinc-100`,

          // FOCUS VISIBLE
          `focus-visible:border-zinc-950
      dark:focus-visible:border-zinc-300`,

          // FOCUS
          `focus:ring-zinc-950
        dark:focus:ring-zinc-300`,
        ),
        neutral: cx(
          `bg-neutral-50
      text-neutral-900
      dark:bg-neutral-950
      dark:text-neutral-100`,

          // FOCUS VISIBLE
          `focus-visible:border-neutral-950
      dark:focus-visible:border-neutral-300`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
        stone: cx(
          `bg-stone-50
      text-stone-900
      dark:bg-stone-950
      dark:text-stone-100`,

          // FOCUS VISIBLE
          `focus-visible:border-stone-950
      dark:focus-visible:border-stone-300`,

          // FOCUS
          `focus:ring-stone-950
        dark:focus:ring-stone-300`,
        ),
        red: cx(
          `bg-red-50
      text-red-900
      dark:bg-red-950
      dark:text-red-100`,

          // FOCUS VISIBLE
          `focus-visible:border-red-950
      dark:focus-visible:border-red-300`,

          // FOCUS
          `focus:ring-red-950
        dark:focus:ring-red-300`,
        ),
        orange: cx(
          `bg-orange-50
      text-orange-900
      dark:bg-orange-950
      dark:text-orange-100`,

          // FOCUS VISIBLE
          `focus-visible:border-orange-950
      dark:focus-visible:border-orange-300`,

          // FOCUS
          `focus:ring-orange-950
        dark:focus:ring-orange-300`,
        ),
        amber: cx(
          `bg-amber-50
      text-amber-900
      dark:bg-amber-950
      dark:text-amber-100`,

          // FOCUS VISIBLE
          `focus-visible:border-amber-950
      dark:focus-visible:border-amber-300`,

          // FOCUS
          `focus:ring-amber-950
        dark:focus:ring-amber-300`,
        ),
        yellow: cx(
          `bg-yellow-50
      text-yellow-900
      dark:bg-yellow-950
      dark:text-yellow-100`,

          // FOCUS VISIBLE
          `focus-visible:border-yellow-950
      dark:focus-visible:border-yellow-300`,

          // FOCUS
          `focus:ring-yellow-950
        dark:focus:ring-yellow-300`,
        ),
        lime: cx(
          `bg-lime-50
      text-lime-900
      dark:bg-lime-950
      dark:text-lime-100`,

          // FOCUS VISIBLE
          `focus-visible:border-lime-950
      dark:focus-visible:border-lime-300`,

          // FOCUS
          `focus:ring-lime-950
        dark:focus:ring-lime-300`,
        ),
        green: cx(
          `bg-green-50
      text-green-900
      dark:bg-green-950
      dark:text-green-100`,

          // FOCUS VISIBLE
          `focus-visible:border-green-950
      dark:focus-visible:border-green-300`,

          // FOCUS
          `focus:ring-green-950
        dark:focus:ring-green-300`,
        ),
        emerald: cx(
          `bg-emerald-50
      text-emerald-900
      dark:bg-emerald-950
      dark:text-emerald-100`,

          // FOCUS VISIBLE
          `focus-visible:border-emerald-950
      dark:focus-visible:border-emerald-300`,

          // FOCUS
          `focus:ring-emerald-950
        dark:focus:ring-emerald-300`,
        ),
        teal: cx(
          `bg-teal-50
      text-teal-900
      dark:bg-teal-950
      dark:text-teal-100`,

          // FOCUS VISIBLE
          `focus-visible:border-teal-950
      dark:focus-visible:border-teal-300`,

          // FOCUS
          `focus:ring-teal-950
        dark:focus:ring-teal-300`,
        ),
        cyan: cx(
          `bg-cyan-50
      text-cyan-900
      dark:bg-cyan-950
      dark:text-cyan-100`,

          // FOCUS VISIBLE
          `focus-visible:border-cyan-950
      dark:focus-visible:border-cyan-300`,

          // FOCUS
          `focus:ring-cyan-950
        dark:focus:ring-cyan-300`,
        ),
        sky: cx(
          `bg-sky-50
      text-sky-900
      dark:bg-sky-950
      dark:text-sky-100`,

          // FOCUS VISIBLE
          `focus-visible:border-sky-950
      dark:focus-visible:border-sky-300`,

          // FOCUS
          `focus:ring-sky-950
        dark:focus:ring-sky-300`,
        ),
        blue: cx(
          `bg-blue-50
      text-blue-900
      dark:bg-blue-950
      dark:text-blue-100`,

          // FOCUS VISIBLE
          `focus-visible:border-blue-950
      dark:focus-visible:border-blue-300`,

          // FOCUS
          `focus:ring-blue-950
        dark:focus:ring-blue-300`,
        ),
        indigo: cx(
          `bg-indigo-50
      text-indigo-900
      dark:bg-indigo-950
      dark:text-indigo-100`,

          // FOCUS VISIBLE
          `focus-visible:border-indigo-950
      dark:focus-visible:border-indigo-300`,

          // FOCUS
          `focus:ring-indigo-950
        dark:focus:ring-indigo-300`,
        ),
        violet: cx(
          `bg-violet-50
      text-violet-900
      dark:bg-violet-950
      dark:text-violet-100`,

          // FOCUS VISIBLE
          `focus-visible:border-violet-950
      dark:focus-visible:border-violet-300`,

          // FOCUS
          `focus:ring-violet-950
        dark:focus:ring-violet-300`,
        ),
        purple: cx(
          `bg-purple-50
      text-purple-900
      dark:bg-purple-950
      dark:text-purple-100`,

          // FOCUS VISIBLE
          `focus-visible:border-purple-950
      dark:focus-visible:border-purple-300`,

          // FOCUS
          `focus:ring-purple-950
        dark:focus:ring-purple-300`,
        ),
        fuchsia: cx(
          `bg-fuchsia-50
      text-fuchsia-900
      dark:bg-fuchsia-950
      dark:text-fuchsia-100`,

          // FOCUS VISIBLE
          `focus-visible:border-fuchsia-950
      dark:focus-visible:border-fuchsia-300`,

          // FOCUS
          `focus:ring-fuchsia-950
        dark:focus:ring-fuchsia-300`,
        ),
        pink: cx(
          `bg-pink-50
      text-pink-900
      dark:bg-pink-950
      dark:text-pink-100`,

          // FOCUS VISIBLE
          `focus-visible:border-pink-950
      dark:focus-visible:border-pink-300`,

          // FOCUS
          `focus:ring-pink-950
        dark:focus:ring-pink-300`,
        ),
        rose: cx(
          `bg-rose-50
      text-rose-900
      dark:bg-rose-950
      dark:text-rose-100`,

          // FOCUS VISIBLE
          `focus-visible:border-rose-950
      dark:focus-visible:border-rose-300`,

          // FOCUS
          `focus:ring-rose-950
        dark:focus:ring-rose-300`,
        ),
        "white-black": cx(
          `bg-white
      text-neutral-900
      dark:bg-black
      dark:text-neutral-100`,

          // FOCUS VISIBLE
          `focus-visible:border-neutral-950
      dark:focus-visible:border-neutral-300`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "brand",
        variant: "outline",
        className: `border-brand-300
          dark:border-brand-800`,
      },
      {
        color: "slate",
        variant: "outline",
        className: `border-slate-300
          dark:border-slate-800`,
      },
      {
        color: "gray",
        variant: "outline",
        className: `border-gray-300
          dark:border-gray-800`,
      },
      {
        color: "zinc",
        variant: "outline",
        className: `border-zinc-300
          dark:border-zinc-800`,
      },
      {
        color: "neutral",
        variant: "outline",
        className: `border-neutral-300
          dark:border-neutral-800`,
      },
      {
        color: "stone",
        variant: "outline",
        className: `border-stone-300
          dark:border-stone-800`,
      },
      {
        color: "red",
        variant: "outline",
        className: `border-red-300
          dark:border-red-800`,
      },
      {
        color: "orange",
        variant: "outline",
        className: `border-orange-300
          dark:border-orange-800`,
      },
      {
        color: "amber",
        variant: "outline",
        className: `border-amber-300
          dark:border-amber-800`,
      },
      {
        color: "yellow",
        variant: "outline",
        className: `border-yellow-300
          dark:border-yellow-800`,
      },
      {
        color: "lime",
        variant: "outline",
        className: `border-lime-300
          dark:border-lime-800`,
      },
      {
        color: "green",
        variant: "outline",
        className: `border-green-300
          dark:border-green-800`,
      },
      {
        color: "emerald",
        variant: "outline",
        className: `border-emerald-300
          dark:border-emerald-800`,
      },
      {
        color: "teal",
        variant: "outline",
        className: `border-teal-300
          dark:border-teal-800`,
      },
      {
        color: "cyan",
        variant: "outline",
        className: `border-cyan-300
          dark:border-cyan-800`,
      },
      {
        color: "sky",
        variant: "outline",
        className: `border-sky-300
          dark:border-sky-800`,
      },
      {
        color: "blue",
        variant: "outline",
        className: `border-blue-300
          dark:border-blue-800`,
      },
      {
        color: "indigo",
        variant: "outline",
        className: `border-indigo-300
          dark:border-indigo-800`,
      },
      {
        color: "violet",
        variant: "outline",
        className: `border-violet-300
          dark:border-violet-800`,
      },
      {
        color: "purple",
        variant: "outline",
        className: `border-purple-300
          dark:border-purple-800`,
      },
      {
        color: "fuchsia",
        variant: "outline",
        className: `border-fuchsia-300
          dark:border-fuchsia-800`,
      },
      {
        color: "pink",
        variant: "outline",
        className: `border-pink-300
          dark:border-pink-800`,
      },
      {
        color: "rose",
        variant: "outline",
        className: `border-rose-300
          dark:border-rose-800`,
      },
      {
        color: "white-black",
        variant: "outline",
        className: `border-neutral-300
          dark:border-neutral-800`,
      },
    ],
  },
);

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & VariantProps<typeof select>
>(({ className, color, variant, ...props }, ref) => {
  return (
    <select
      {...props}
      ref={ref}
      className={twMerge(select({ color, variant }), className)}
    />
  );
});
Select.displayName = "Select";

export { select };

export default Select;
