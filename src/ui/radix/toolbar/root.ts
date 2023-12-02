import { ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
  w-full
  min-w-max
  p-3
  ring-1`,
    ROUNDED,
    SHADOW,
  ),
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        brand: `bg-brand-50
    text-brand-900
    ring-brand-300
    dark:bg-brand-950
    dark:text-brand-200
    dark:ring-brand-800`,
        slate: `bg-slate-50
    text-slate-900
    ring-slate-300
    dark:bg-slate-950
    dark:text-slate-200
    dark:ring-slate-800`,
        gray: `bg-gray-50
    text-gray-900
    ring-gray-300
    dark:bg-gray-950
    dark:text-gray-200
    dark:ring-gray-800`,
        zinc: `bg-zinc-50
    text-zinc-900
    ring-zinc-300
    dark:bg-zinc-950
    dark:text-zinc-200
    dark:ring-zinc-800`,
        neutral: `bg-neutral-50
    text-neutral-900
    ring-neutral-300
    dark:bg-neutral-950
    dark:text-neutral-200
    dark:ring-neutral-800`,
        stone: `bg-stone-50
    text-stone-900
    ring-stone-300
    dark:bg-stone-950
    dark:text-stone-200
    dark:ring-stone-800`,
        red: `bg-red-50
    text-red-900
    ring-red-300
    dark:bg-red-950
    dark:text-red-200
    dark:ring-red-800`,
        orange: `bg-orange-50
    text-orange-900
    ring-orange-300
    dark:bg-orange-950
    dark:text-orange-200
    dark:ring-orange-800`,
        amber: `bg-amber-50
    text-amber-900
    ring-amber-300
    dark:bg-amber-950
    dark:text-amber-200
    dark:ring-amber-800`,
        yellow: `bg-yellow-50
    text-yellow-900
    ring-yellow-300
    dark:bg-yellow-950
    dark:text-yellow-200
    dark:ring-yellow-800`,
        lime: `bg-lime-50
    text-lime-900
    ring-lime-300
    dark:bg-lime-950
    dark:text-lime-200
    dark:ring-lime-800`,
        green: `bg-green-50
    text-green-900
    ring-green-300
    dark:bg-green-950
    dark:text-green-200
    dark:ring-green-800`,
        emerald: `bg-emerald-50
    text-emerald-900
    ring-emerald-300
    dark:bg-emerald-950
    dark:text-emerald-200
    dark:ring-emerald-800`,
        teal: `bg-teal-50
    text-teal-900
    ring-teal-300
    dark:bg-teal-950
    dark:text-teal-200
    dark:ring-teal-800`,
        cyan: `bg-cyan-50
    text-cyan-900
    ring-cyan-300
    dark:bg-cyan-950
    dark:text-cyan-200
    dark:ring-cyan-800`,
        sky: `bg-sky-50
    text-sky-900
    ring-sky-300
    dark:bg-sky-950
    dark:text-sky-200
    dark:ring-sky-800`,
        blue: `bg-blue-50
    text-blue-900
    ring-blue-300
    dark:bg-blue-950
    dark:text-blue-200
    dark:ring-blue-800`,
        indigo: `bg-indigo-50
    text-indigo-900
    ring-indigo-300
    dark:bg-indigo-950
    dark:text-indigo-200
    dark:ring-indigo-800`,
        violet: `bg-violet-50
    text-violet-900
    ring-violet-300
    dark:bg-violet-950
    dark:text-violet-200
    dark:ring-violet-800`,
        purple: `bg-purple-50
    text-purple-900
    ring-purple-300
    dark:bg-purple-950
    dark:text-purple-200
    dark:ring-purple-800`,
        fuchsia: `bg-fuchsia-50
    text-fuchsia-900
    ring-fuchsia-300
    dark:bg-fuchsia-950
    dark:text-fuchsia-200
    dark:ring-fuchsia-800`,
        pink: `bg-pink-50
    text-pink-900
    ring-pink-300
    dark:bg-pink-950
    dark:text-pink-200
    dark:ring-pink-800`,
        rose: `bg-rose-50
    text-rose-900
    ring-rose-300
    dark:bg-rose-950
    dark:text-rose-200
    dark:ring-rose-800`,
        "white-black": `bg-white
    text-neutral-900
    ring-neutral-300
    dark:bg-black
    dark:text-neutral-200
    dark:ring-neutral-800`,
      },
    },
  },
);

export { root };
