import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `peer
  flex
  h-6
  w-6 
  shrink-0
  items-center
  justify-center
  outline-none 
  transition
  duration-100
  focus:outline-none
  disabled:pointer-events-none
  disabled:opacity-75
  data-[disabled]:pointer-events-none
  focus:ring-offset-2
  focus:ring-offset-white
  dark:focus:ring-offset-black
  focus:ring-2`,
    ROUNDED,
    BORDER,
    SHADOW,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: cx(
          `bg-brand-50
          border-brand-300
          hover:border-brand-500
          data-[disabled]:border-brand-200 
          focus:border-brand-500
          focus-visible:border-brand-500
          active:border-brand-900
          dark:bg-brand-950
          dark:border-brand-800
          dark:hover:bg-brand-950
          dark:hover:border-brand-600 
          dark:focus:border-brand-600
          dark:focus-visible:border-brand-600 
          dark:active:border-brand-500
          dark:data-[disabled]:border-brand-800`,

          // FOCUS
          `focus:ring-brand-950
        dark:focus:ring-brand-300`,
        ),
        slate: cx(
          `bg-slate-50
          border-slate-300
          hover:border-slate-500
          data-[disabled]:border-slate-200 
          focus:border-slate-500
          focus-visible:border-slate-500
          active:border-slate-900
          dark:bg-slate-950
          dark:border-slate-800
          dark:hover:bg-slate-950
          dark:hover:border-slate-600 
          dark:focus:border-slate-600
          dark:focus-visible:border-slate-600 
          dark:active:border-slate-500
          dark:data-[disabled]:border-slate-800`,

          // FOCUS
          `focus:ring-slate-950
        dark:focus:ring-slate-300`,
        ),
        gray: cx(
          `bg-gray-50
          border-gray-300
          hover:border-gray-500
          data-[disabled]:border-gray-200 
          focus:border-gray-500
          focus-visible:border-gray-500
          active:border-gray-900
          dark:bg-gray-950
          dark:border-gray-800
          dark:hover:bg-gray-950
          dark:hover:border-gray-600 
          dark:focus:border-gray-600
          dark:focus-visible:border-gray-600 
          dark:active:border-gray-500
          dark:data-[disabled]:border-gray-800`,

          // FOCUS
          `focus:ring-gray-950
        dark:focus:ring-gray-300`,
        ),
        zinc: cx(
          `bg-zinc-50
          border-zinc-300
          hover:border-zinc-500
          data-[disabled]:border-zinc-200 
          focus:border-zinc-500
          focus-visible:border-zinc-500
          active:border-zinc-900
          dark:bg-zinc-950
          dark:border-zinc-800
          dark:hover:bg-zinc-950
          dark:hover:border-zinc-600 
          dark:focus:border-zinc-600
          dark:focus-visible:border-zinc-600 
          dark:active:border-zinc-500
          dark:data-[disabled]:border-zinc-800`,

          // FOCUS
          `focus:ring-zinc-950
        dark:focus:ring-zinc-300`,
        ),
        neutral: cx(
          `bg-neutral-50
          border-neutral-300
          hover:border-neutral-500
          data-[disabled]:border-neutral-200 
          focus:border-neutral-500
          focus-visible:border-neutral-500
          active:border-neutral-900
          dark:bg-neutral-950
          dark:border-neutral-800
          dark:hover:bg-neutral-950
          dark:hover:border-neutral-600 
          dark:focus:border-neutral-600
          dark:focus-visible:border-neutral-600 
          dark:active:border-neutral-500
          dark:data-[disabled]:border-neutral-800`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
        stone: cx(
          `bg-stone-50
          border-stone-300
          hover:border-stone-500
          data-[disabled]:border-stone-200 
          focus:border-stone-500
          focus-visible:border-stone-500
          active:border-stone-900
          dark:bg-stone-950
          dark:border-stone-800
          dark:hover:bg-stone-950
          dark:hover:border-stone-600 
          dark:focus:border-stone-600
          dark:focus-visible:border-stone-600 
          dark:active:border-stone-500
          dark:data-[disabled]:border-stone-800`,

          // FOCUS
          `focus:ring-stone-950
        dark:focus:ring-stone-300`,
        ),
        red: cx(
          `bg-red-50
          border-red-300
          hover:border-red-500
          data-[disabled]:border-red-200 
          focus:border-red-500
          focus-visible:border-red-500
          active:border-red-900
          dark:bg-red-950
          dark:border-red-800
          dark:hover:bg-red-950
          dark:hover:border-red-600 
          dark:focus:border-red-600
          dark:focus-visible:border-red-600 
          dark:active:border-red-500
          dark:data-[disabled]:border-red-800`,

          // FOCUS
          `focus:ring-red-950
        dark:focus:ring-red-300`,
        ),
        orange: cx(
          `bg-orange-50
          border-orange-300
          hover:border-orange-500
          data-[disabled]:border-orange-200 
          focus:border-orange-500
          focus-visible:border-orange-500
          active:border-orange-900
          dark:bg-orange-950
          dark:border-orange-800
          dark:hover:bg-orange-950
          dark:hover:border-orange-600 
          dark:focus:border-orange-600
          dark:focus-visible:border-orange-600 
          dark:active:border-orange-500
          dark:data-[disabled]:border-orange-800`,

          // FOCUS
          `focus:ring-orange-950
        dark:focus:ring-orange-300`,
        ),
        amber: cx(
          `bg-amber-50
          border-amber-300
          hover:border-amber-500
          data-[disabled]:border-amber-200 
          focus:border-amber-500
          focus-visible:border-amber-500
          active:border-amber-900
          dark:bg-amber-950
          dark:border-amber-800
          dark:hover:bg-amber-950
          dark:hover:border-amber-600 
          dark:focus:border-amber-600
          dark:focus-visible:border-amber-600 
          dark:active:border-amber-500
          dark:data-[disabled]:border-amber-800`,

          // FOCUS
          `focus:ring-amber-950
        dark:focus:ring-amber-300`,
        ),
        yellow: cx(
          `bg-yellow-50
          border-yellow-300
          hover:border-yellow-500
          data-[disabled]:border-yellow-200 
          focus:border-yellow-500
          focus-visible:border-yellow-500
          active:border-yellow-900
          dark:bg-yellow-950
          dark:border-yellow-800
          dark:hover:bg-yellow-950
          dark:hover:border-yellow-600 
          dark:focus:border-yellow-600
          dark:focus-visible:border-yellow-600 
          dark:active:border-yellow-500
          dark:data-[disabled]:border-yellow-800`,

          // FOCUS
          `focus:ring-yellow-950
        dark:focus:ring-yellow-300`,
        ),
        lime: cx(
          `bg-lime-50
          border-lime-300
          hover:border-lime-500
          data-[disabled]:border-lime-200 
          focus:border-lime-500
          focus-visible:border-lime-500
          active:border-lime-900
          dark:bg-lime-950
          dark:border-lime-800
          dark:hover:bg-lime-950
          dark:hover:border-lime-600 
          dark:focus:border-lime-600
          dark:focus-visible:border-lime-600 
          dark:active:border-lime-500
          dark:data-[disabled]:border-lime-800`,

          // FOCUS
          `focus:ring-lime-950
        dark:focus:ring-lime-300`,
        ),
        green: cx(
          `bg-green-50
          border-green-300
          hover:border-green-500
          data-[disabled]:border-green-200 
          focus:border-green-500
          focus-visible:border-green-500
          active:border-green-900
          dark:bg-green-950
          dark:border-green-800
          dark:hover:bg-green-950
          dark:hover:border-green-600 
          dark:focus:border-green-600
          dark:focus-visible:border-green-600 
          dark:active:border-green-500
          dark:data-[disabled]:border-green-800`,

          // FOCUS
          `focus:ring-green-950
        dark:focus:ring-green-300`,
        ),
        emerald: cx(
          `bg-emerald-50
          border-emerald-300
          hover:border-emerald-500
          data-[disabled]:border-emerald-200 
          focus:border-emerald-500
          focus-visible:border-emerald-500
          active:border-emerald-900
          dark:bg-emerald-950
          dark:border-emerald-800
          dark:hover:bg-emerald-950
          dark:hover:border-emerald-600 
          dark:focus:border-emerald-600
          dark:focus-visible:border-emerald-600 
          dark:active:border-emerald-500
          dark:data-[disabled]:border-emerald-800`,

          // FOCUS
          `focus:ring-emerald-950
        dark:focus:ring-emerald-300`,
        ),
        teal: cx(
          `bg-teal-50
          border-teal-300
          hover:border-teal-500
          data-[disabled]:border-teal-200 
          focus:border-teal-500
          focus-visible:border-teal-500
          active:border-teal-900
          dark:bg-teal-950
          dark:border-teal-800
          dark:hover:bg-teal-950
          dark:hover:border-teal-600 
          dark:focus:border-teal-600
          dark:focus-visible:border-teal-600 
          dark:active:border-teal-500
          dark:data-[disabled]:border-teal-800`,

          // FOCUS
          `focus:ring-teal-950
        dark:focus:ring-teal-300`,
        ),
        cyan: cx(
          `bg-cyan-50
          border-cyan-300
          hover:border-cyan-500
          data-[disabled]:border-cyan-200 
          focus:border-cyan-500
          focus-visible:border-cyan-500
          active:border-cyan-900
          dark:bg-cyan-950
          dark:border-cyan-800
          dark:hover:bg-cyan-950
          dark:hover:border-cyan-600 
          dark:focus:border-cyan-600
          dark:focus-visible:border-cyan-600 
          dark:active:border-cyan-500
          dark:data-[disabled]:border-cyan-800`,

          // FOCUS
          `focus:ring-cyan-950
        dark:focus:ring-cyan-300`,
        ),
        sky: cx(
          `bg-sky-50
          border-sky-300
          hover:border-sky-500
          data-[disabled]:border-sky-200 
          focus:border-sky-500
          focus-visible:border-sky-500
          active:border-sky-900
          dark:bg-sky-950
          dark:border-sky-800
          dark:hover:bg-sky-950
          dark:hover:border-sky-600 
          dark:focus:border-sky-600
          dark:focus-visible:border-sky-600 
          dark:active:border-sky-500
          dark:data-[disabled]:border-sky-800`,

          // FOCUS
          `focus:ring-sky-950
        dark:focus:ring-sky-300`,
        ),
        blue: cx(
          `bg-blue-50
          border-blue-300
          hover:border-blue-500
          data-[disabled]:border-blue-200 
          focus:border-blue-500
          focus-visible:border-blue-500
          active:border-blue-900
          dark:bg-blue-950
          dark:border-blue-800
          dark:hover:bg-blue-950
          dark:hover:border-blue-600 
          dark:focus:border-blue-600
          dark:focus-visible:border-blue-600 
          dark:active:border-blue-500
          dark:data-[disabled]:border-blue-800`,

          // FOCUS
          `focus:ring-blue-950
        dark:focus:ring-blue-300`,
        ),
        indigo: cx(
          `bg-indigo-50
          border-indigo-300
          hover:border-indigo-500
          data-[disabled]:border-indigo-200 
          focus:border-indigo-500
          focus-visible:border-indigo-500
          active:border-indigo-900
          dark:bg-indigo-950
          dark:border-indigo-800
          dark:hover:bg-indigo-950
          dark:hover:border-indigo-600 
          dark:focus:border-indigo-600
          dark:focus-visible:border-indigo-600 
          dark:active:border-indigo-500
          dark:data-[disabled]:border-indigo-800`,

          // FOCUS
          `focus:ring-indigo-950
        dark:focus:ring-indigo-300`,
        ),
        violet: cx(
          `bg-violet-50
          border-violet-300
          hover:border-violet-500
          data-[disabled]:border-violet-200 
          focus:border-violet-500
          focus-visible:border-violet-500
          active:border-violet-900
          dark:bg-violet-950
          dark:border-violet-800
          dark:hover:bg-violet-950
          dark:hover:border-violet-600 
          dark:focus:border-violet-600
          dark:focus-visible:border-violet-600 
          dark:active:border-violet-500
          dark:data-[disabled]:border-violet-800`,

          // FOCUS
          `focus:ring-violet-950
        dark:focus:ring-violet-300`,
        ),
        purple: cx(
          `bg-purple-50
          border-purple-300
          hover:border-purple-500
          data-[disabled]:border-purple-200 
          focus:border-purple-500
          focus-visible:border-purple-500
          active:border-purple-900
          dark:bg-purple-950
          dark:border-purple-800
          dark:hover:bg-purple-950
          dark:hover:border-purple-600 
          dark:focus:border-purple-600
          dark:focus-visible:border-purple-600 
          dark:active:border-purple-500
          dark:data-[disabled]:border-purple-800`,

          // FOCUS
          `focus:ring-purple-950
        dark:focus:ring-purple-300`,
        ),
        fuchsia: cx(
          `bg-fuchsia-50
          border-fuchsia-300
          hover:border-fuchsia-500
          data-[disabled]:border-fuchsia-200 
          focus:border-fuchsia-500
          focus-visible:border-fuchsia-500
          active:border-fuchsia-900
          dark:bg-fuchsia-950
          dark:border-fuchsia-800
          dark:hover:bg-fuchsia-950
          dark:hover:border-fuchsia-600 
          dark:focus:border-fuchsia-600
          dark:focus-visible:border-fuchsia-600 
          dark:active:border-fuchsia-500
          dark:data-[disabled]:border-fuchsia-800`,

          // FOCUS
          `focus:ring-fuchsia-950
        dark:focus:ring-fuchsia-300`,
        ),
        pink: cx(
          `bg-pink-50
          border-pink-300
          hover:border-pink-500
          data-[disabled]:border-pink-200 
          focus:border-pink-500
          focus-visible:border-pink-500
          active:border-pink-900
          dark:bg-pink-950
          dark:border-pink-800
          dark:hover:bg-pink-950
          dark:hover:border-pink-600 
          dark:focus:border-pink-600
          dark:focus-visible:border-pink-600 
          dark:active:border-pink-500
          dark:data-[disabled]:border-pink-800`,

          // FOCUS
          `focus:ring-pink-950
        dark:focus:ring-pink-300`,
        ),
        rose: cx(
          `bg-rose-50
          border-rose-300
          hover:border-rose-500
          data-[disabled]:border-rose-200 
          focus:border-rose-500
          focus-visible:border-rose-500
          active:border-rose-900
          dark:bg-rose-950
          dark:border-rose-800
          dark:hover:bg-rose-950
          dark:hover:border-rose-600 
          dark:focus:border-rose-600
          dark:focus-visible:border-rose-600 
          dark:active:border-rose-500
          dark:data-[disabled]:border-rose-800`,

          // FOCUS
          `focus:ring-rose-950
        dark:focus:ring-rose-300`,
        ),
        "white-black": cx(
          `bg-white
          border-neutral-300
          hover:border-neutral-500
          data-[disabled]:border-neutral-200 
          focus:border-neutral-500
          focus-visible:border-neutral-500
          active:border-neutral-900
          dark:bg-black
          dark:border-neutral-800
          dark:hover:bg-black
          dark:hover:border-neutral-600 
          dark:focus:border-neutral-600
          dark:focus-visible:border-neutral-600 
          dark:active:border-neutral-500
          dark:data-[disabled]:border-neutral-800`,

          // FOCUS
          `focus:ring-black
        dark:focus:ring-white`,
        ),
      },
    },
  },
);

export { root };
