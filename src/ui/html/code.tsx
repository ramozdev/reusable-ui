import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const code = cva(
  twMerge(
    `whitespace-nowrap
  px-1.5
  py-0.5
  bg-neutral-100
  text-neutral-900
  border-neutral-300
  dark:bg-neutral-800
  dark:text-neutral-100
  dark:border-neutral-700`,
    ROUNDED,
    BORDER,
  ),
  {
    variants: {
      variant: {
        default: "border-transparent text-white",
        outline: "text-white bg-transparent",
        ghost: "bg-transparent border-transparent ",
      },
      color: {
        brand: cx(
          `bg-brand-200
          text-brand-950
          dark:text-brand-100
          dark:bg-brand-950
           dark:border-brand-800 border-transparent border-b-2 border-r-2`,
        ),
        slate: cx(
          `bg-slate-200
          text-slate-950
          dark:text-slate-100
          dark:bg-slate-950
           dark:border-slate-800 border-transparent border-b-2 border-r-2`,
        ),
        gray: cx(
          `bg-gray-200
          text-gray-950
          dark:text-gray-100
          dark:bg-gray-950
           dark:border-gray-800 border-transparent border-b-2 border-r-2`,
        ),
        zinc: cx(
          `bg-zinc-200
          text-zinc-950
          dark:text-zinc-100
          dark:bg-zinc-950
           dark:border-zinc-800 border-transparent border-b-2 border-r-2`,
        ),
        neutral: cx(
          `bg-neutral-200
          text-neutral-950
          dark:text-neutral-100
          dark:bg-neutral-950
           dark:border-neutral-800 border-transparent border-b-2 border-r-2`,
        ),
        stone: cx(
          `bg-stone-200
          text-stone-950
          dark:text-stone-100
          dark:bg-stone-950
           dark:border-stone-800 border-transparent border-b-2 border-r-2`,
        ),
        red: cx(
          `bg-red-200
            text-red-950
            dark:text-red-100
            dark:bg-red-950
             dark:border-red-800 border-transparent border-b-2 border-r-2`,
        ),
        orange: cx(
          `bg-orange-200
          text-orange-950
          dark:text-orange-100
          dark:bg-orange-950
           dark:border-orange-800 border-transparent border-b-2 border-r-2`,
        ),
        amber: cx(
          `bg-amber-200
          text-amber-950
          dark:text-amber-100
          dark:bg-amber-950
           dark:border-amber-800 border-transparent border-b-2 border-r-2`,
        ),
        yellow: cx(
          `bg-yellow-200
          text-yellow-950
          dark:text-yellow-100
          dark:bg-yellow-950
           dark:border-yellow-800 border-transparent border-b-2 border-r-2`,
        ),
        lime: cx(
          `bg-lime-200
            text-lime-950
            dark:text-lime-100
            dark:bg-lime-950
             dark:border-lime-800 border-transparent border-b-2 border-r-2`,
        ),
        green: cx(
          `bg-green-200
          text-green-950
          dark:text-green-100
          dark:bg-green-950
           dark:border-green-800 border-transparent border-b-2 border-r-2`,
        ),
        emerald: cx(
          `bg-emerald-200
          text-emerald-950
          dark:text-emerald-100
          dark:bg-emerald-950
           dark:border-emerald-800 border-transparent border-b-2 border-r-2`,
        ),
        teal: cx(
          `bg-teal-200
          text-teal-950
          dark:text-teal-100
          dark:bg-teal-950
           dark:border-teal-800 border-transparent border-b-2 border-r-2`,
        ),
        cyan: cx(
          `bg-cyan-200
          text-cyan-950
          dark:text-cyan-100
          dark:bg-cyan-950
           dark:border-cyan-800 border-transparent border-b-2 border-r-2`,
        ),
        sky: cx(
          `bg-sky-200
            text-sky-950
            dark:text-sky-100
            dark:bg-sky-950
             dark:border-sky-800 border-transparent border-b-2 border-r-2`,
        ),
        blue: cx(
          `bg-blue-200
          text-blue-950
          dark:text-blue-100
          dark:bg-blue-950
           dark:border-blue-800 border-transparent border-b-2 border-r-2`,
        ),
        indigo: cx(
          `bg-indigo-200
          text-indigo-950
          dark:text-indigo-100
          dark:bg-indigo-950
           dark:border-indigo-800 border-transparent border-b-2 border-r-2`,
        ),
        violet: cx(
          `bg-violet-200
          text-violet-950
          dark:text-violet-100
          dark:bg-violet-950
           dark:border-violet-800 border-transparent border-b-2 border-r-2`,
        ),
        purple: cx(
          `bg-purple-200
          text-purple-950
          dark:text-purple-100
          dark:bg-purple-950
           dark:border-purple-800 border-transparent border-b-2 border-r-2`,
        ),
        fuchsia: cx(
          `bg-fuchsia-200
          text-fuchsia-950
          dark:text-fuchsia-100
          dark:bg-fuchsia-950
           dark:border-fuchsia-800 border-transparent border-b-2 border-r-2`,
        ),
        pink: cx(
          `bg-pink-200
          text-pink-950
          dark:text-pink-100
          dark:bg-pink-950
           dark:border-pink-800 border-transparent border-b-2 border-r-2`,
        ),
        rose: cx(
          `bg-rose-200
            text-rose-950
            dark:text-rose-100
            dark:bg-rose-950
             dark:border-rose-800 border-transparent border-b-2 border-r-2`,
        ),
        "white-black": cx(
          `bg-neutral-100
            text-black
            dark:bg-neutral-950
            dark:text-white`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "brand",
        variant: "default",
        className: `bg-brand-100
                  border-black
                  dark:border-brand-800
                  text-brand-900
                  dark:bg-brand-900
                  dark:text-brand-100`,
      },
      {
        color: "slate",
        variant: "default",
        className: `bg-slate-100
                  border-black
                  dark:border-slate-800
                  text-slate-900
                  dark:bg-slate-900
                  dark:text-slate-100`,
      },
      {
        color: "gray",
        variant: "default",
        className: `bg-gray-100
                  border-black
                  dark:border-gray-800
                  text-gray-900
                  dark:bg-gray-900
                  dark:text-gray-100`,
      },
      {
        color: "zinc",
        variant: "default",
        className: `bg-zinc-100
                  border-black
                  dark:border-zinc-800
                  text-zinc-900
                  dark:bg-zinc-900
                  dark:text-zinc-100`,
      },
      {
        color: "neutral",
        variant: "default",
        className: `bg-neutral-100
                  border-black
                  dark:border-neutral-800
                  text-neutral-900
                  dark:bg-neutral-900
                  dark:text-neutral-100`,
      },
      {
        color: "stone",
        variant: "default",
        className: `bg-stone-100
                  border-black
                  dark:border-stone-800
                  text-stone-900
                  dark:bg-stone-900
                  dark:text-stone-100`,
      },
      {
        color: "red",
        variant: "default",
        className: `bg-red-100
                  border-black
                  dark:border-red-800
                  text-red-900
                  dark:bg-red-900
                  dark:text-red-100`,
      },
      {
        color: "orange",
        variant: "default",
        className: `bg-orange-100
                  border-black
                  dark:border-orange-800
                  text-orange-900
                  dark:bg-orange-900
                  dark:text-orange-100`,
      },
      {
        color: "amber",
        variant: "default",
        className: `bg-amber-100
                  border-black
                  dark:border-amber-800
                  text-amber-900
                  dark:bg-amber-900
                  dark:text-amber-100`,
      },
      {
        color: "yellow",
        variant: "default",
        className: `bg-yellow-100
                  border-black
                  dark:border-yellow-800
                  text-yellow-900
                  dark:bg-yellow-900
                  dark:text-yellow-100`,
      },
      {
        color: "lime",
        variant: "default",
        className: `bg-lime-100
                  border-black
                  dark:border-lime-800
                  text-lime-900
                  dark:bg-lime-900
                  dark:text-lime-100`,
      },
      {
        color: "green",
        variant: "default",
        className: `bg-green-100
                  border-black
                  dark:border-green-800
                  text-green-900
                  dark:bg-green-900
                  dark:text-green-100`,
      },
      {
        color: "emerald",
        variant: "default",
        className: `bg-emerald-100
                  border-black
                  dark:border-emerald-800
                  text-emerald-900
                  dark:bg-emerald-900
                  dark:text-emerald-100`,
      },
      {
        color: "teal",
        variant: "default",
        className: `bg-teal-100
                  border-black
                  dark:border-teal-800
                  text-teal-900
                  dark:bg-teal-900
                  dark:text-teal-100`,
      },
      {
        color: "cyan",
        variant: "default",
        className: `bg-cyan-100
                  border-black
                  dark:border-cyan-800
                  text-cyan-900
                  dark:bg-cyan-900
                  dark:text-cyan-100`,
      },
      {
        color: "sky",
        variant: "default",
        className: `bg-sky-100
                  border-black
                  dark:border-sky-800
                  text-sky-900
                  dark:bg-sky-900
                  dark:text-sky-100`,
      },
      {
        color: "blue",
        variant: "default",
        className: `bg-blue-100
                  border-black
                  dark:border-blue-800
                  text-blue-900
                  dark:bg-blue-900
                  dark:text-blue-100`,
      },
      {
        color: "indigo",
        variant: "default",
        className: `bg-indigo-100
                  border-black
                  dark:border-indigo-800
                  text-indigo-900
                  dark:bg-indigo-900
                  dark:text-indigo-100`,
      },
      {
        color: "violet",
        variant: "default",
        className: `bg-violet-100
                  border-black
                  dark:border-violet-800
                  text-violet-900
                  dark:bg-violet-900
                  dark:text-violet-100`,
      },
      {
        color: "purple",
        variant: "default",
        className: `bg-purple-100
                  border-black
                  dark:border-purple-800
                  text-purple-900
                  dark:bg-purple-900
                  dark:text-purple-100`,
      },
      {
        color: "fuchsia",
        variant: "default",
        className: `bg-fuchsia-100
                  border-black
                  dark:border-fuchsia-800
                  text-fuchsia-900
                  dark:bg-fuchsia-900
                  dark:text-fuchsia-100`,
      },
      {
        color: "pink",
        variant: "default",
        className: `bg-pink-100
                  border-black
                  dark:border-pink-800
                  text-pink-900
                  dark:bg-pink-900
                  dark:text-pink-100`,
      },
      {
        color: "rose",
        variant: "default",
        className: `bg-rose-100
                  dark:border-rose-800
                  border-black
                  text-rose-900
                  dark:bg-rose-900
                  dark:text-rose-100`,
      },
      {
        color: "white-black",
        variant: "default",
        className: `bg-white/80
                  border-black
                  text-black
                  dark:bg-black/80
                  dark:text-white`,
      },
      // -------------OUTLINE-------------
      {
        color: "brand",
        variant: "outline",
        className: `bg-transparent
                  text-brand-900
                  dark:bg-transparent
                  border-black
                  dark:border-brand-800
                  dark:text-brand-100`,
      },
      {
        color: "slate",
        variant: "outline",
        className: `bg-transparent
                  text-slate-900
                  dark:bg-transparent
                  border-black
                  dark:border-slate-800
                  dark:text-slate-100`,
      },
      {
        color: "gray",
        variant: "outline",
        className: `bg-transparent
                  text-gray-900
                  dark:bg-transparent
                  border-black
                  dark:border-gray-800
                  dark:text-gray-100`,
      },
      {
        color: "zinc",
        variant: "outline",
        className: `bg-transparent
                  text-zinc-900
                  dark:bg-transparent
                  border-black
                  dark:border-zinc-800
                  dark:text-zinc-100`,
      },
      {
        color: "neutral",
        variant: "outline",
        className: `bg-transparent
                  text-neutral-900
                  dark:bg-transparent
                  border-black
                  dark:border-neutral-800
                  dark:text-neutral-100`,
      },
      {
        color: "stone",
        variant: "outline",
        className: `bg-transparent
                  text-stone-900
                  dark:bg-transparent
                  border-black
                  dark:border-stone-800
                  dark:text-stone-100`,
      },
      {
        color: "red",
        variant: "outline",
        className: `bg-transparent
                  text-red-900
                  dark:bg-transparent
                  border-black
                  dark:border-red-800
                  dark:text-red-100`,
      },
      {
        color: "orange",
        variant: "outline",
        className: `bg-transparent
                  text-orange-900
                  dark:bg-transparent
                  border-black
                  dark:border-orange-800
                  dark:text-orange-100`,
      },
      {
        color: "amber",
        variant: "outline",
        className: `bg-transparent
                  text-amber-900
                  dark:bg-transparent
                  border-black
                  dark:border-amber-800
                  dark:text-amber-100`,
      },
      {
        color: "yellow",
        variant: "outline",
        className: `bg-transparent
                  text-yellow-900
                  dark:bg-transparent
                  border-black
                  dark:border-yellow-800
                  dark:text-yellow-100`,
      },
      {
        color: "lime",
        variant: "outline",
        className: `bg-transparent
                  text-lime-900
                  dark:bg-transparent
                  border-black
                  dark:border-lime-800
                  dark:text-lime-100`,
      },
      {
        color: "green",
        variant: "outline",
        className: `bg-transparent
                  text-green-900
                  dark:bg-transparent
                  border-black
                  dark:border-green-800
                  dark:text-green-100`,
      },
      {
        color: "emerald",
        variant: "outline",
        className: `bg-transparent
                  text-emerald-900
                  dark:bg-transparent
                  border-black
                  dark:border-emerald-800
                  dark:text-emerald-100`,
      },
      {
        color: "teal",
        variant: "outline",
        className: `bg-transparent
                  text-teal-900
                  dark:bg-transparent
                  border-black
                  dark:border-teal-800
                  dark:text-teal-100`,
      },
      {
        color: "cyan",
        variant: "outline",
        className: `bg-transparent
                  text-cyan-900
                  dark:bg-transparent
                  border-black
                  dark:border-cyan-800
                  dark:text-cyan-100`,
      },
      {
        color: "sky",
        variant: "outline",
        className: `bg-transparent
                  text-sky-900
                  dark:bg-transparent
                  border-black
                  dark:border-sky-800
                  dark:text-sky-100`,
      },
      {
        color: "blue",
        variant: "outline",
        className: `bg-transparent
                  text-blue-900
                  dark:bg-transparent
                  border-black
                  dark:border-blue-800
                  dark:text-blue-100`,
      },
      {
        color: "indigo",
        variant: "outline",
        className: `bg-transparent
                  text-indigo-900
                  dark:bg-transparent
                  border-black
                  dark:border-indigo-800
                  dark:text-indigo-100`,
      },
      {
        color: "violet",
        variant: "outline",
        className: `bg-transparent
                  text-violet-900
                  dark:bg-transparent
                  border-black
                  dark:border-violet-800
                  dark:text-violet-100`,
      },
      {
        color: "purple",
        variant: "outline",
        className: `bg-transparent
                  text-purple-900
                  dark:bg-transparent
                  border-black
                  dark:border-purple-800
                  dark:text-purple-100`,
      },
      {
        color: "fuchsia",
        variant: "outline",
        className: `bg-transparent
                  text-fuchsia-900
                  dark:bg-transparent
                  border-black
                  dark:border-fuchsia-800
                  dark:text-fuchsia-100`,
      },
      {
        color: "pink",
        variant: "outline",
        className: `bg-transparent
                  text-pink-900
                  dark:bg-transparent
                  border-black
                  dark:border-pink-800
                  dark:text-pink-100`,
      },
      {
        color: "rose",
        variant: "outline",
        className: `bg-transparent
                  text-rose-900
                  dark:bg-transparent
                  border-black
                  dark:border-rose-800
                  dark:text-rose-100`,
      },
      {
        color: "white-black",
        variant: "outline",
        className: `bg-white/80
                  border-neutral-300
                  text-black
                  dark:bg-transparent
                  dark:border-neutral-800
                  dark:text-white`,
      },
      // ------------GHOST-------------
      {
        color: "brand",
        variant: "ghost",
        className: `text-brand-600 
                dark:text-brand-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "slate",
        variant: "ghost",
        className: `text-slate-600 
                dark:text-slate-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "gray",
        variant: "ghost",
        className: `text-gray-600 
                dark:text-gray-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "zinc",
        variant: "ghost",
        className: `text-zinc-600 
                dark:text-zinc-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "neutral",
        variant: "ghost",
        className: `text-neutral-600 
                dark:text-neutral-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "stone",
        variant: "ghost",
        className: `text-stone-600 
                dark:text-stone-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "red",
        variant: "ghost",
        className: `text-red-600 
                dark:text-red-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "orange",
        variant: "ghost",
        className: `text-orange-700 
                dark:text-orange-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "amber",
        variant: "ghost",
        className: `text-amber-700 
                dark:text-amber-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "yellow",
        variant: "ghost",
        className: `text-yellow-700 
                dark:text-yellow-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "lime",
        variant: "ghost",
        className: `text-lime-700 
                dark:text-lime-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "green",
        variant: "ghost",
        className: `text-green-700 
                dark:text-green-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "emerald",
        variant: "ghost",
        className: `text-emerald-700 
                dark:text-emerald-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "teal",
        variant: "ghost",
        className: `text-teal-700 
                dark:text-teal-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "cyan",
        variant: "ghost",
        className: `text-cyan-700 
                dark:text-cyan-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "sky",
        variant: "ghost",
        className: `text-sky-700 
                dark:text-sky-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "blue",
        variant: "ghost",
        className: `text-blue-700 
                dark:text-blue-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "indigo",
        variant: "ghost",
        className: `text-indigo-600 
                dark:text-indigo-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "violet",
        variant: "ghost",
        className: `text-violet-600 
                dark:text-violet-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "purple",
        variant: "ghost",
        className: `text-purple-600 
                dark:text-purple-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "fuchsia",
        variant: "ghost",
        className: `text-fuchsia-600 
                dark:text-fuchsia-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "pink",
        variant: "ghost",
        className: `text-pink-600 
                dark:text-pink-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "rose",
        variant: "ghost",
        className: `text-rose-600 
                dark:text-rose-200
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
      {
        color: "white-black",
        variant: "ghost",
        className: `text-black
                dark:text-white
                bg-transparent 
                border-transparent
                dark:bg-transparent
                dark:border-transparent`,
      },
    ],
  },
);

const Code = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof code>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <code
      {...props}
      ref={ref}
      className={twMerge(code({ variant, color }), className)}
    />
  );
});
Code.displayName = "Code";

export { code as codeVariants };

export default Code;
