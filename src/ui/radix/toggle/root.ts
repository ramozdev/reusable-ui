import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
  select-none
  items-center
  justify-center
  h-8
  w-8
  [&_>_svg]:h-4
  [&_>_svg]:w-4
  outline-none
  transition
  data-[disabled]:pointer-events-none
  focus:ring-offset-2
  focus:ring-offset-white
  dark:focus:ring-offset-black
  focus:ring-2`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "blue",
    },
    variants: {
      color: {
        brand: cx(
          `bg-brand-50
        text-brand-900
        border-brand-300
        hover:border-brand-500
        focus:border-brand-500
        data-[state=on]:bg-brand-200
        data-[state=on]:text-brand-950
        data-[disabled]:text-brand-700
        data-[state=on]:border-brand-400
        hover:data-[state=on]:border-brand-900
        focus:data-[state=on]:border-brand-900
        dark:bg-brand-950
        dark:text-brand-100
        dark:border-brand-800
        dark:hover:border-brand-600 
        dark:focus:border-brand-600
        dark:data-[state=on]:bg-brand-800
        dark:data-[state=on]:text-brand-50
        dark:data-[disabled]:text-brand-400
        dark:data-[state=on]:border-brand-600
        dark:hover:data-[state=on]:border-brand-400
        dark:focus:data-[state=on]:border-brand-400`,

          // FOCUS
          `focus:ring-brand-950
        dark:focus:ring-brand-300`,
        ),
        slate: cx(
          `bg-slate-50
        text-slate-900
        border-slate-300
        hover:border-slate-500
        focus:border-slate-500
        data-[state=on]:bg-slate-200
        data-[state=on]:text-slate-950
        data-[disabled]:text-slate-700
        data-[state=on]:border-slate-400
        hover:data-[state=on]:border-slate-900
        focus:data-[state=on]:border-slate-900
        dark:bg-slate-950
        dark:text-slate-100
        dark:border-slate-800
        dark:hover:border-slate-600 
        dark:focus:border-slate-600
        dark:data-[state=on]:bg-slate-800
        dark:data-[state=on]:text-slate-50
        dark:data-[disabled]:text-slate-400
        dark:data-[state=on]:border-slate-600
        dark:hover:data-[state=on]:border-slate-400
        dark:focus:data-[state=on]:border-slate-400`,

          // FOCUS
          `focus:ring-slate-950
        dark:focus:ring-slate-300`,
        ),
        gray: cx(
          `bg-gray-50
        text-gray-900
        border-gray-300
        hover:border-gray-500
        focus:border-gray-500
        data-[state=on]:bg-gray-200
        data-[state=on]:text-gray-950
        data-[disabled]:text-gray-700
        data-[state=on]:border-gray-400
        hover:data-[state=on]:border-gray-900
        focus:data-[state=on]:border-gray-900
        dark:bg-gray-950
        dark:text-gray-100
        dark:border-gray-800
        dark:hover:border-gray-600 
        dark:focus:border-gray-600
        dark:data-[state=on]:bg-gray-800
        dark:data-[state=on]:text-gray-50
        dark:data-[disabled]:text-gray-400
        dark:data-[state=on]:border-gray-600
        dark:hover:data-[state=on]:border-gray-400
        dark:focus:data-[state=on]:border-gray-400`,

          // FOCUS
          `focus:ring-gray-950
        dark:focus:ring-gray-300`,
        ),
        zinc: cx(
          `bg-zinc-50
        text-zinc-900
        border-zinc-300
        hover:border-zinc-500
        focus:border-zinc-500
        data-[state=on]:bg-zinc-200
        data-[state=on]:text-zinc-950
        data-[disabled]:text-zinc-700
        data-[state=on]:border-zinc-400
        hover:data-[state=on]:border-zinc-900
        focus:data-[state=on]:border-zinc-900
        dark:bg-zinc-950
        dark:text-zinc-100
        dark:border-zinc-800
        dark:hover:border-zinc-600 
        dark:focus:border-zinc-600
        dark:data-[state=on]:bg-zinc-800
        dark:data-[state=on]:text-zinc-50
        dark:data-[disabled]:text-zinc-400
        dark:data-[state=on]:border-zinc-600
        dark:hover:data-[state=on]:border-zinc-400
        dark:focus:data-[state=on]:border-zinc-400`,

          // FOCUS
          `focus:ring-zinc-950
        dark:focus:ring-zinc-300`,
        ),
        neutral: cx(
          `bg-neutral-50
        text-neutral-900
        border-neutral-300
        hover:border-neutral-500
        focus:border-neutral-500
        data-[state=on]:bg-neutral-200
        data-[state=on]:text-neutral-950
        data-[disabled]:text-neutral-700
        data-[state=on]:border-neutral-400
        hover:data-[state=on]:border-neutral-900
        focus:data-[state=on]:border-neutral-900
        dark:bg-neutral-950
        dark:text-neutral-100
        dark:border-neutral-800
        dark:hover:border-neutral-600 
        dark:focus:border-neutral-600
        dark:data-[state=on]:bg-neutral-800
        dark:data-[state=on]:text-neutral-50
        dark:data-[disabled]:text-neutral-400
        dark:data-[state=on]:border-neutral-600
        dark:hover:data-[state=on]:border-neutral-400
        dark:focus:data-[state=on]:border-neutral-400`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
        stone: cx(
          `bg-stone-50
        text-stone-900
        border-stone-300
        hover:border-stone-500
        focus:border-stone-500
        data-[state=on]:bg-stone-200
        data-[state=on]:text-stone-950
        data-[disabled]:text-stone-700
        data-[state=on]:border-stone-400
        hover:data-[state=on]:border-stone-900
        focus:data-[state=on]:border-stone-900
        dark:bg-stone-950
        dark:text-stone-100
        dark:border-stone-800
        dark:hover:border-stone-600 
        dark:focus:border-stone-600
        dark:data-[state=on]:bg-stone-800
        dark:data-[state=on]:text-stone-50
        dark:data-[disabled]:text-stone-400
        dark:data-[state=on]:border-stone-600
        dark:hover:data-[state=on]:border-stone-400
        dark:focus:data-[state=on]:border-stone-400`,

          // FOCUS
          `focus:ring-stone-950
        dark:focus:ring-stone-300`,
        ),
        red: cx(
          `bg-red-50
        text-red-900
        border-red-300
        hover:border-red-500
        focus:border-red-500
        data-[state=on]:bg-red-200
        data-[state=on]:text-red-950
        data-[disabled]:text-red-700
        data-[state=on]:border-red-400
        hover:data-[state=on]:border-red-900
        focus:data-[state=on]:border-red-900
        dark:bg-red-950
        dark:text-red-100
        dark:border-red-800
        dark:hover:border-red-600 
        dark:focus:border-red-600
        dark:data-[state=on]:bg-red-800
        dark:data-[state=on]:text-red-50
        dark:data-[disabled]:text-red-400
        dark:data-[state=on]:border-red-600
        dark:hover:data-[state=on]:border-red-400
        dark:focus:data-[state=on]:border-red-400`,

          // FOCUS
          `focus:ring-red-950
        dark:focus:ring-red-300`,
        ),
        orange: cx(
          `bg-orange-50
        text-orange-900
        border-orange-300
        hover:border-orange-500
        focus:border-orange-500
        data-[state=on]:bg-orange-200
        data-[state=on]:text-orange-950
        data-[disabled]:text-orange-700
        data-[state=on]:border-orange-400
        hover:data-[state=on]:border-orange-900
        focus:data-[state=on]:border-orange-900
        dark:bg-orange-950
        dark:text-orange-100
        dark:border-orange-800
        dark:hover:border-orange-600 
        dark:focus:border-orange-600
        dark:data-[state=on]:bg-orange-800
        dark:data-[state=on]:text-orange-50
        dark:data-[disabled]:text-orange-400
        dark:data-[state=on]:border-orange-600
        dark:hover:data-[state=on]:border-orange-400
        dark:focus:data-[state=on]:border-orange-400`,

          // FOCUS
          `focus:ring-orange-950
        dark:focus:ring-orange-300`,
        ),
        amber: cx(
          `bg-amber-50
        text-amber-900
        border-amber-300
        hover:border-amber-500
        focus:border-amber-500
        data-[state=on]:bg-amber-200
        data-[state=on]:text-amber-950
        data-[disabled]:text-amber-700
        data-[state=on]:border-amber-400
        hover:data-[state=on]:border-amber-900
        focus:data-[state=on]:border-amber-900
        dark:bg-amber-950
        dark:text-amber-100
        dark:border-amber-800
        dark:hover:border-amber-600 
        dark:focus:border-amber-600
        dark:data-[state=on]:bg-amber-800
        dark:data-[state=on]:text-amber-50
        dark:data-[disabled]:text-amber-400
        dark:data-[state=on]:border-amber-600
        dark:hover:data-[state=on]:border-amber-400
        dark:focus:data-[state=on]:border-amber-400`,

          // FOCUS
          `focus:ring-amber-950
        dark:focus:ring-amber-300`,
        ),
        yellow: cx(
          `bg-yellow-50
        text-yellow-900
        border-yellow-300
        hover:border-yellow-500
        focus:border-yellow-500
        data-[state=on]:bg-yellow-200
        data-[state=on]:text-yellow-950
        data-[disabled]:text-yellow-700
        data-[state=on]:border-yellow-400
        hover:data-[state=on]:border-yellow-900
        focus:data-[state=on]:border-yellow-900
        dark:bg-yellow-950
        dark:text-yellow-100
        dark:border-yellow-800
        dark:hover:border-yellow-600 
        dark:focus:border-yellow-600
        dark:data-[state=on]:bg-yellow-800
        dark:data-[state=on]:text-yellow-50
        dark:data-[disabled]:text-yellow-400
        dark:data-[state=on]:border-yellow-600
        dark:hover:data-[state=on]:border-yellow-400
        dark:focus:data-[state=on]:border-yellow-400`,

          // FOCUS
          `focus:ring-yellow-950
        dark:focus:ring-yellow-300`,
        ),
        lime: cx(
          `bg-lime-50
        text-lime-900
        border-lime-300
        hover:border-lime-500
        focus:border-lime-500
        data-[state=on]:bg-lime-200
        data-[state=on]:text-lime-950
        data-[disabled]:text-lime-700
        data-[state=on]:border-lime-400
        hover:data-[state=on]:border-lime-900
        focus:data-[state=on]:border-lime-900
        dark:bg-lime-950
        dark:text-lime-100
        dark:border-lime-800
        dark:hover:border-lime-600 
        dark:focus:border-lime-600
        dark:data-[state=on]:bg-lime-800
        dark:data-[state=on]:text-lime-50
        dark:data-[disabled]:text-lime-400
        dark:data-[state=on]:border-lime-600
        dark:hover:data-[state=on]:border-lime-400
        dark:focus:data-[state=on]:border-lime-400`,

          // FOCUS
          `focus:ring-lime-950
        dark:focus:ring-lime-300`,
        ),
        green: cx(
          `bg-green-50
        text-green-900
        border-green-300
        hover:border-green-500
        focus:border-green-500
        data-[state=on]:bg-green-200
        data-[state=on]:text-green-950
        data-[disabled]:text-green-700
        data-[state=on]:border-green-400
        hover:data-[state=on]:border-green-900
        focus:data-[state=on]:border-green-900
        dark:bg-green-950
        dark:text-green-100
        dark:border-green-800
        dark:hover:border-green-600 
        dark:focus:border-green-600
        dark:data-[state=on]:bg-green-800
        dark:data-[state=on]:text-green-50
        dark:data-[disabled]:text-green-400
        dark:data-[state=on]:border-green-600
        dark:hover:data-[state=on]:border-green-400
        dark:focus:data-[state=on]:border-green-400`,

          // FOCUS
          `focus:ring-green-950
        dark:focus:ring-green-300`,
        ),
        emerald: cx(
          `bg-emerald-50
        text-emerald-900
        border-emerald-300
        hover:border-emerald-500
        focus:border-emerald-500
        data-[state=on]:bg-emerald-200
        data-[state=on]:text-emerald-950
        data-[disabled]:text-emerald-700
        data-[state=on]:border-emerald-400
        hover:data-[state=on]:border-emerald-900
        focus:data-[state=on]:border-emerald-900
        dark:bg-emerald-950
        dark:text-emerald-100
        dark:border-emerald-800
        dark:hover:border-emerald-600 
        dark:focus:border-emerald-600
        dark:data-[state=on]:bg-emerald-800
        dark:data-[state=on]:text-emerald-50
        dark:data-[disabled]:text-emerald-400
        dark:data-[state=on]:border-emerald-600
        dark:hover:data-[state=on]:border-emerald-400
        dark:focus:data-[state=on]:border-emerald-400`,

          // FOCUS
          `focus:ring-emerald-950
        dark:focus:ring-emerald-300`,
        ),
        teal: cx(
          `bg-teal-50
        text-teal-900
        border-teal-300
        hover:border-teal-500
        focus:border-teal-500
        data-[state=on]:bg-teal-200
        data-[state=on]:text-teal-950
        data-[disabled]:text-teal-700
        data-[state=on]:border-teal-400
        hover:data-[state=on]:border-teal-900
        focus:data-[state=on]:border-teal-900
        dark:bg-teal-950
        dark:text-teal-100
        dark:border-teal-800
        dark:hover:border-teal-600 
        dark:focus:border-teal-600
        dark:data-[state=on]:bg-teal-800
        dark:data-[state=on]:text-teal-50
        dark:data-[disabled]:text-teal-400
        dark:data-[state=on]:border-teal-600
        dark:hover:data-[state=on]:border-teal-400
        dark:focus:data-[state=on]:border-teal-400`,

          // FOCUS
          `focus:ring-teal-950
        dark:focus:ring-teal-300`,
        ),
        cyan: cx(
          `bg-cyan-50
        text-cyan-900
        border-cyan-300
        hover:border-cyan-500
        focus:border-cyan-500
        data-[state=on]:bg-cyan-200
        data-[state=on]:text-cyan-950
        data-[disabled]:text-cyan-700
        data-[state=on]:border-cyan-400
        hover:data-[state=on]:border-cyan-900
        focus:data-[state=on]:border-cyan-900
        dark:bg-cyan-950
        dark:text-cyan-100
        dark:border-cyan-800
        dark:hover:border-cyan-600 
        dark:focus:border-cyan-600
        dark:data-[state=on]:bg-cyan-800
        dark:data-[state=on]:text-cyan-50
        dark:data-[disabled]:text-cyan-400
        dark:data-[state=on]:border-cyan-600
        dark:hover:data-[state=on]:border-cyan-400
        dark:focus:data-[state=on]:border-cyan-400`,

          // FOCUS
          `focus:ring-cyan-950
        dark:focus:ring-cyan-300`,
        ),
        sky: cx(
          `bg-sky-50
        text-sky-900
        border-sky-300
        hover:border-sky-500
        focus:border-sky-500
        data-[state=on]:bg-sky-200
        data-[state=on]:text-sky-950
        data-[disabled]:text-sky-700
        data-[state=on]:border-sky-400
        hover:data-[state=on]:border-sky-900
        focus:data-[state=on]:border-sky-900
        dark:bg-sky-950
        dark:text-sky-100
        dark:border-sky-800
        dark:hover:border-sky-600 
        dark:focus:border-sky-600
        dark:data-[state=on]:bg-sky-800
        dark:data-[state=on]:text-sky-50
        dark:data-[disabled]:text-sky-400
        dark:data-[state=on]:border-sky-600
        dark:hover:data-[state=on]:border-sky-400
        dark:focus:data-[state=on]:border-sky-400`,

          // FOCUS
          `focus:ring-sky-950
        dark:focus:ring-sky-300`,
        ),
        blue: cx(
          `bg-blue-50
        text-blue-900
        border-blue-300
        hover:border-blue-500
        focus:border-blue-500
        data-[state=on]:bg-blue-200
        data-[state=on]:text-blue-950
        data-[disabled]:text-blue-700
        data-[state=on]:border-blue-400
        hover:data-[state=on]:border-blue-900
        focus:data-[state=on]:border-blue-900
        dark:bg-blue-950
        dark:text-blue-100
        dark:border-blue-800
        dark:hover:border-blue-600 
        dark:focus:border-blue-600
        dark:data-[state=on]:bg-blue-800
        dark:data-[state=on]:text-blue-50
        dark:data-[disabled]:text-blue-400
        dark:data-[state=on]:border-blue-600
        dark:hover:data-[state=on]:border-blue-400
        dark:focus:data-[state=on]:border-blue-400`,

          // FOCUS
          `focus:ring-blue-950
        dark:focus:ring-blue-300`,
        ),
        indigo: cx(
          `bg-indigo-50
        text-indigo-900
        border-indigo-300
        hover:border-indigo-500
        focus:border-indigo-500
        data-[state=on]:bg-indigo-200
        data-[state=on]:text-indigo-950
        data-[disabled]:text-indigo-700
        data-[state=on]:border-indigo-400
        hover:data-[state=on]:border-indigo-900
        focus:data-[state=on]:border-indigo-900
        dark:bg-indigo-950
        dark:text-indigo-100
        dark:border-indigo-800
        dark:hover:border-indigo-600 
        dark:focus:border-indigo-600
        dark:data-[state=on]:bg-indigo-800
        dark:data-[state=on]:text-indigo-50
        dark:data-[disabled]:text-indigo-400
        dark:data-[state=on]:border-indigo-600
        dark:hover:data-[state=on]:border-indigo-400
        dark:focus:data-[state=on]:border-indigo-400`,

          // FOCUS
          `focus:ring-indigo-950
        dark:focus:ring-indigo-300`,
        ),
        violet: cx(
          `bg-violet-50
        text-violet-900
        border-violet-300
        hover:border-violet-500
        focus:border-violet-500
        data-[state=on]:bg-violet-200
        data-[state=on]:text-violet-950
        data-[disabled]:text-violet-700
        data-[state=on]:border-violet-400
        hover:data-[state=on]:border-violet-900
        focus:data-[state=on]:border-violet-900
        dark:bg-violet-950
        dark:text-violet-100
        dark:border-violet-800
        dark:hover:border-violet-600 
        dark:focus:border-violet-600
        dark:data-[state=on]:bg-violet-800
        dark:data-[state=on]:text-violet-50
        dark:data-[disabled]:text-violet-400
        dark:data-[state=on]:border-violet-600
        dark:hover:data-[state=on]:border-violet-400
        dark:focus:data-[state=on]:border-violet-400`,

          // FOCUS
          `focus:ring-violet-950
        dark:focus:ring-violet-300`,
        ),
        purple: cx(
          `bg-purple-50
        text-purple-900
        border-purple-300
        hover:border-purple-500
        focus:border-purple-500
        data-[state=on]:bg-purple-200
        data-[state=on]:text-purple-950
        data-[disabled]:text-purple-700
        data-[state=on]:border-purple-400
        hover:data-[state=on]:border-purple-900
        focus:data-[state=on]:border-purple-900
        dark:bg-purple-950
        dark:text-purple-100
        dark:border-purple-800
        dark:hover:border-purple-600 
        dark:focus:border-purple-600
        dark:data-[state=on]:bg-purple-800
        dark:data-[state=on]:text-purple-50
        dark:data-[disabled]:text-purple-400
        dark:data-[state=on]:border-purple-600
        dark:hover:data-[state=on]:border-purple-400
        dark:focus:data-[state=on]:border-purple-400`,

          // FOCUS
          `focus:ring-purple-950
        dark:focus:ring-purple-300`,
        ),
        fuchsia: cx(
          `bg-fuchsia-50
        text-fuchsia-900
        border-fuchsia-300
        hover:border-fuchsia-500
        focus:border-fuchsia-500
        data-[state=on]:bg-fuchsia-200
        data-[state=on]:text-fuchsia-950
        data-[disabled]:text-fuchsia-700
        data-[state=on]:border-fuchsia-400
        hover:data-[state=on]:border-fuchsia-900
        focus:data-[state=on]:border-fuchsia-900
        dark:bg-fuchsia-950
        dark:text-fuchsia-100
        dark:border-fuchsia-800
        dark:hover:border-fuchsia-600 
        dark:focus:border-fuchsia-600
        dark:data-[state=on]:bg-fuchsia-800
        dark:data-[state=on]:text-fuchsia-50
        dark:data-[disabled]:text-fuchsia-400
        dark:data-[state=on]:border-fuchsia-600
        dark:hover:data-[state=on]:border-fuchsia-400
        dark:focus:data-[state=on]:border-fuchsia-400`,

          // FOCUS
          `focus:ring-fuchsia-950
        dark:focus:ring-fuchsia-300`,
        ),
        pink: cx(
          `bg-pink-50
        text-pink-900
        border-pink-300
        hover:border-pink-500
        focus:border-pink-500
        data-[state=on]:bg-pink-200
        data-[state=on]:text-pink-950
        data-[disabled]:text-pink-700
        data-[state=on]:border-pink-400
        hover:data-[state=on]:border-pink-900
        focus:data-[state=on]:border-pink-900
        dark:bg-pink-950
        dark:text-pink-100
        dark:border-pink-800
        dark:hover:border-pink-600 
        dark:focus:border-pink-600
        dark:data-[state=on]:bg-pink-800
        dark:data-[state=on]:text-pink-50
        dark:data-[disabled]:text-pink-400
        dark:data-[state=on]:border-pink-600
        dark:hover:data-[state=on]:border-pink-400
        dark:focus:data-[state=on]:border-pink-400`,

          // FOCUS
          `focus:ring-pink-950
        dark:focus:ring-pink-300`,
        ),
        rose: cx(
          `bg-rose-50
        text-rose-900
        border-rose-300
        hover:border-rose-500
        focus:border-rose-500
        data-[state=on]:bg-rose-200
        data-[state=on]:text-rose-950
        data-[disabled]:text-rose-700
        data-[state=on]:border-rose-400
        hover:data-[state=on]:border-rose-900
        focus:data-[state=on]:border-rose-900
        dark:bg-rose-950
        dark:text-rose-100
        dark:border-rose-800
        dark:hover:border-rose-600 
        dark:focus:border-rose-600
        dark:data-[state=on]:bg-rose-800
        dark:data-[state=on]:text-rose-50
        dark:data-[disabled]:text-rose-400
        dark:data-[state=on]:border-rose-600
        dark:hover:data-[state=on]:border-rose-400
        dark:focus:data-[state=on]:border-rose-400`,

          // FOCUS
          `focus:ring-rose-950
        dark:focus:ring-rose-300`,
        ),
        "white-black": cx(
          `bg-white
        text-neutral-900
        border-neutral-300
        hover:border-neutral-500
        focus:border-neutral-500
        data-[state=on]:bg-neutral-200
        data-[state=on]:text-neutral-950
        data-[disabled]:text-neutral-700
        data-[state=on]:border-neutral-400
        hover:data-[state=on]:border-neutral-900
        focus:data-[state=on]:border-neutral-900
        dark:bg-black
        dark:text-neutral-100
        dark:border-neutral-800
        dark:hover:border-neutral-600 
        dark:focus:border-neutral-600
        dark:data-[state=on]:bg-neutral-800
        dark:data-[state=on]:text-neutral-50
        dark:data-[disabled]:text-neutral-400
        dark:data-[state=on]:border-neutral-600
        dark:hover:data-[state=on]:border-neutral-400
        dark:focus:data-[state=on]:border-neutral-400`,

          // FOCUS
          `focus:ring-black
        dark:focus:ring-white`,
        ),
      },
    },
  },
);

export { root };
