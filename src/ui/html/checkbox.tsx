import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";

const checkbox = cva(
  twMerge(
    `focus:ring-offset-2
  focus:ring-offset-white
  dark:focus:ring-offset-black
  focus:ring-2
  ease-in 
  duration-100

  w-5
  h-5

  m-px
  focus:outline-none
  disabled:pointer-events-none
  disabled:opacity-75`,
    ROUNDED,
    BORDER,
    SHADOW,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "neutral",
    },
    variants: {
      variant: {
        outline: "hover:border-b-2 hover:border-r-2 ",
        plane: "border-transparent",
      },
      color: {
        brand: cx(
          `bg-brand-50
      dark:bg-brand-950`,

          // CHECKED
          `checked:text-brand-500
        dark:checked:text-brand-900`,

          // HOVER CHECKED
          `hover:checked:text-brand-700
      dark:hover:checked:text-brand-900`,

          // FOCUS
          `focus:ring-brand-950
        dark:focus:ring-brand-300`,
        ),
        slate: cx(
          `bg-slate-50
      dark:bg-slate-950`,

          // CHECKED
          `checked:text-slate-500
        dark:checked:text-slate-900`,

          // HOVER CHECKED
          `hover:checked:text-slate-700
      dark:hover:checked:text-slate-900`,

          // FOCUS
          `focus:ring-slate-950
        dark:focus:ring-slate-300`,
        ),
        gray: cx(
          `bg-gray-50
      dark:bg-gray-950`,

          // CHECKED
          `checked:text-gray-500
        dark:checked:text-gray-900`,

          // HOVER CHECKED
          `hover:checked:text-gray-700
      dark:hover:checked:text-gray-900`,

          // FOCUS
          `focus:ring-gray-950
        dark:focus:ring-gray-300`,
        ),
        zinc: cx(
          `bg-zinc-50
      dark:bg-zinc-950`,

          // CHECKED
          `checked:text-zinc-500
        dark:checked:text-zinc-900`,

          // HOVER CHECKED
          `hover:checked:text-zinc-700
      dark:hover:checked:text-zinc-900`,

          // FOCUS
          `focus:ring-zinc-950
        dark:focus:ring-zinc-300`,
        ),
        neutral: cx(
          `bg-neutral-50
      dark:bg-neutral-950`,

          // CHECKED
          `checked:text-neutral-500
        dark:checked:text-neutral-900`,

          // HOVER CHECKED
          `hover:checked:text-neutral-700
      dark:hover:checked:text-neutral-900`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
        stone: cx(
          `bg-stone-50
      dark:bg-stone-950`,

          // CHECKED
          `checked:text-stone-500
        dark:checked:text-stone-900`,

          // HOVER CHECKED
          `hover:checked:text-stone-700
      dark:hover:checked:text-stone-900`,

          // FOCUS
          `focus:ring-stone-950
        dark:focus:ring-stone-300`,
        ),
        red: cx(
          `bg-red-50
      dark:bg-red-950`,

          // CHECKED
          `checked:text-red-500
        dark:checked:text-red-900`,

          // HOVER CHECKED
          `hover:checked:text-red-700
      dark:hover:checked:text-red-900`,

          // FOCUS
          `focus:ring-red-950
        dark:focus:ring-red-300`,
        ),
        orange: cx(
          `bg-orange-50
      dark:bg-orange-950`,

          // CHECKED
          `checked:text-orange-500
        dark:checked:text-orange-900`,

          // HOVER CHECKED
          `hover:checked:text-orange-700
      dark:hover:checked:text-orange-900`,

          // FOCUS
          `focus:ring-orange-950
        dark:focus:ring-orange-300`,
        ),
        amber: cx(
          `bg-amber-50
      dark:bg-amber-950`,

          // CHECKED
          `checked:text-amber-500
        dark:checked:text-amber-900`,

          // HOVER CHECKED
          `hover:checked:text-amber-700
      dark:hover:checked:text-amber-900`,

          // FOCUS
          `focus:ring-amber-950
        dark:focus:ring-amber-300`,
        ),
        yellow: cx(
          `bg-yellow-50
      dark:bg-yellow-950`,

          // CHECKED
          `checked:text-yellow-500
        dark:checked:text-yellow-900`,

          // HOVER CHECKED
          `hover:checked:text-yellow-700
      dark:hover:checked:text-yellow-900`,

          // FOCUS
          `focus:ring-yellow-950
        dark:focus:ring-yellow-300`,
        ),
        lime: cx(
          `bg-lime-50
      dark:bg-lime-950`,

          // CHECKED
          `checked:text-lime-500
        dark:checked:text-lime-900`,

          // HOVER CHECKED
          `hover:checked:text-lime-700
      dark:hover:checked:text-lime-900`,

          // FOCUS
          `focus:ring-lime-950
        dark:focus:ring-lime-300`,
        ),
        green: cx(
          `bg-green-50
      dark:bg-green-950`,

          // CHECKED
          `checked:text-green-500
        dark:checked:text-green-900`,

          // HOVER CHECKED
          `hover:checked:text-green-700
      dark:hover:checked:text-green-900`,

          // FOCUS
          `focus:ring-green-950
        dark:focus:ring-green-300`,
        ),
        emerald: cx(
          `bg-emerald-50
      dark:bg-emerald-950`,

          // CHECKED
          `checked:text-emerald-500
        dark:checked:text-emerald-900`,

          // HOVER CHECKED
          `hover:checked:text-emerald-700
      dark:hover:checked:text-emerald-900`,

          // FOCUS
          `focus:ring-emerald-950
        dark:focus:ring-emerald-300`,
        ),
        teal: cx(
          `bg-teal-50
      dark:bg-teal-950`,

          // CHECKED
          `checked:text-teal-500
        dark:checked:text-teal-900`,

          // HOVER CHECKED
          `hover:checked:text-teal-700
      dark:hover:checked:text-teal-900`,

          // FOCUS
          `focus:ring-teal-950
        dark:focus:ring-teal-300`,
        ),
        cyan: cx(
          `bg-cyan-50
      dark:bg-cyan-950`,

          // CHECKED
          `checked:text-cyan-500
        dark:checked:text-cyan-900`,

          // HOVER CHECKED
          `hover:checked:text-cyan-700
      dark:hover:checked:text-cyan-900`,

          // FOCUS
          `focus:ring-cyan-950
        dark:focus:ring-cyan-300`,
        ),
        sky: cx(
          `bg-sky-50
      dark:bg-sky-950`,

          // CHECKED
          `checked:text-sky-500
        dark:checked:text-sky-900`,

          // HOVER CHECKED
          `hover:checked:text-sky-700
      dark:hover:checked:text-sky-900`,

          // FOCUS
          `focus:ring-sky-950
        dark:focus:ring-sky-300`,
        ),
        blue: cx(
          `bg-blue-50
      dark:bg-blue-950`,

          // CHECKED
          `checked:text-blue-500
        dark:checked:text-blue-900`,

          // HOVER CHECKED
          `hover:checked:text-blue-700
      dark:hover:checked:text-blue-900`,

          // FOCUS
          `focus:ring-blue-950
        dark:focus:ring-blue-300`,
        ),
        indigo: cx(
          `bg-indigo-50
      dark:bg-indigo-950`,

          // CHECKED
          `checked:text-indigo-500
        dark:checked:text-indigo-900`,

          // HOVER CHECKED
          `hover:checked:text-indigo-700
      dark:hover:checked:text-indigo-900`,

          // FOCUS
          `focus:ring-indigo-950
        dark:focus:ring-indigo-300`,
        ),
        violet: cx(
          `bg-violet-50
      dark:bg-violet-950`,

          // CHECKED
          `checked:text-violet-500
        dark:checked:text-violet-900`,

          // HOVER CHECKED
          `hover:checked:text-violet-700
      dark:hover:checked:text-violet-900`,

          // FOCUS
          `focus:ring-violet-950
        dark:focus:ring-violet-300`,
        ),
        purple: cx(
          `bg-purple-50
      dark:bg-purple-950`,

          // CHECKED
          `checked:text-purple-500
        dark:checked:text-purple-900`,

          // HOVER CHECKED
          `hover:checked:text-purple-700
      dark:hover:checked:text-purple-900`,

          // FOCUS
          `focus:ring-purple-950
        dark:focus:ring-purple-300`,
        ),
        fuchsia: cx(
          `bg-fuchsia-50
      dark:bg-fuchsia-950`,

          // CHECKED
          `checked:text-fuchsia-500
        dark:checked:text-fuchsia-900`,

          // HOVER CHECKED
          `hover:checked:text-fuchsia-700
      dark:hover:checked:text-fuchsia-900`,

          // FOCUS
          `focus:ring-fuchsia-950
        dark:focus:ring-fuchsia-300`,
        ),
        pink: cx(
          `bg-pink-50
      dark:bg-pink-950`,

          // CHECKED
          `checked:text-pink-500
        dark:checked:text-pink-900`,

          // HOVER CHECKED
          `hover:checked:text-pink-700
      dark:hover:checked:text-pink-900`,

          // FOCUS
          `focus:ring-pink-950
        dark:focus:ring-pink-300`,
        ),
        rose: cx(
          `bg-rose-50
      dark:bg-rose-950`,

          // CHECKED
          `checked:text-rose-500
        dark:checked:text-rose-900`,

          // HOVER CHECKED
          `hover:checked:text-rose-700
      dark:hover:checked:text-rose-900`,

          // FOCUS
          `focus:ring-rose-950
        dark:focus:ring-rose-300`,
        ),
        "white-black": cx(
          `bg-white
      dark:bg-black`,

          // CHECKED
          `checked:text-neutral-500
        dark:checked:text-neutral-900`,

          // HOVER CHECKED
          `hover:checked:text-neutral-700
      dark:hover:checked:text-neutral-900`,

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

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof checkbox>
>(({ className, color, variant, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="checkbox"
      className={twMerge(checkbox({ color, variant }), className)}
    />
  );
});
Checkbox.displayName = "Checkbox";

export { checkbox };

export default Checkbox;
