import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const content = cva(
  twMerge(
    `select-none
  px-4
  py-3
  border
  text-[15px]
  leading-none
  will-change-[transform,opacity]
  data-[state=delayed-open]:data-[side=top]:animate-tooltip-slide-down-and-fade
  data-[state=delayed-open]:data-[side=right]:animate-tooltip-slide-left-and-fade
  data-[state=delayed-open]:data-[side=left]:animate-tooltip-slide-right-and-fade
  data-[state=delayed-open]:data-[side=bottom]:animate-tooltip-slide-up-and-fade`,
    ROUNDED,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `bg-brand-50
        border-brand-300
        text-brand-900
        dark:bg-brand-950
        dark:text-brand-200
        dark:border-brand-800`,
        slate: `bg-slate-50
        border-slate-300
        text-slate-900
        dark:bg-slate-950
        dark:text-slate-200
        dark:border-slate-800`,
        gray: `bg-gray-50
        border-gray-300
        text-gray-900
        dark:bg-gray-950
        dark:text-gray-200
        dark:border-gray-800`,
        zinc: `bg-zinc-50
        border-zinc-300
        text-zinc-900
        dark:bg-zinc-950
        dark:text-zinc-200
        dark:border-zinc-800`,
        neutral: `bg-neutral-50
        border-neutral-300
        text-neutral-900
        dark:bg-neutral-950
        dark:text-neutral-200
        dark:border-neutral-800`,
        stone: `bg-stone-50
        border-stone-300
        text-stone-900
        dark:bg-stone-950
        dark:text-stone-200
        dark:border-stone-800`,
        red: `bg-red-50
        border-red-300
        text-red-900
        dark:bg-red-950
        dark:text-red-200
        dark:border-red-800`,
        orange: `bg-orange-50
        border-orange-300
        text-orange-900
        dark:bg-orange-950
        dark:text-orange-200
        dark:border-orange-800`,
        amber: `bg-amber-50
        border-amber-300
        text-amber-900
        dark:bg-amber-950
        dark:text-amber-200
        dark:border-amber-800`,
        yellow: `bg-yellow-50
        border-yellow-300
        text-yellow-900
        dark:bg-yellow-950
        dark:text-yellow-200
        dark:border-yellow-800`,
        lime: `bg-lime-50
        border-lime-300
        text-lime-900
        dark:bg-lime-950
        dark:text-lime-200
        dark:border-lime-800`,
        green: `bg-green-50
        border-green-300
        text-green-900
        dark:bg-green-950
        dark:text-green-200
        dark:border-green-800`,
        emerald: `bg-emerald-50
        border-emerald-300
        text-emerald-900
        dark:bg-emerald-950
        dark:text-emerald-200
        dark:border-emerald-800`,
        teal: `bg-teal-50
        border-teal-300
        text-teal-900
        dark:bg-teal-950
        dark:text-teal-200
        dark:border-teal-800`,
        cyan: `bg-cyan-50
        border-cyan-300
        text-cyan-900
        dark:bg-cyan-950
        dark:text-cyan-200
        dark:border-cyan-800`,
        sky: `bg-sky-50
        border-sky-300
        text-sky-900
        dark:bg-sky-950
        dark:text-sky-200
        dark:border-sky-800`,
        blue: `bg-blue-50
        border-blue-300
        text-blue-900
        dark:bg-blue-950
        dark:text-blue-200
        dark:border-blue-800`,
        indigo: `bg-indigo-50
        border-indigo-300
        text-indigo-900
        dark:bg-indigo-950
        dark:text-indigo-200
        dark:border-indigo-800`,
        violet: `bg-violet-50
        border-violet-300
        text-violet-900
        dark:bg-violet-950
        dark:text-violet-200
        dark:border-violet-800`,
        purple: `bg-purple-50
        border-purple-300
        text-purple-900
        dark:bg-purple-950
        dark:text-purple-200
        dark:border-purple-800`,
        fuchsia: `bg-fuchsia-50
        border-fuchsia-300
        text-fuchsia-900
        dark:bg-fuchsia-950
        dark:text-fuchsia-200
        dark:border-fuchsia-800`,
        pink: `bg-pink-50
        border-pink-300
        text-pink-900
        dark:bg-pink-950
        dark:text-pink-200
        dark:border-pink-800`,
        rose: `bg-rose-50
        border-rose-300
        text-rose-900
        dark:bg-rose-950
        dark:text-rose-200
        dark:border-rose-800`,
        "white-black": `bg-white
        border-neutral-300
        text-neutral-900
        dark:bg-black
        dark:text-neutral-200
        dark:border-neutral-800`,
      },
    },
  },
);

export { content };
