import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const trigger = cva(
  twMerge(
    `flex
  group
  items-center
  justify-center
  gap-1
  transition-colors
  px-3
  py-2
  outline-none  
select-none
text-sm
font-medium
leading-none`,
    ROUNDED,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: "hover:bg-brand-100 dark:hover:bg-brand-900",
        slate: "hover:bg-slate-100 dark:hover:bg-slate-900",
        gray: "hover:bg-gray-100 dark:hover:bg-gray-900",
        zinc: "hover:bg-zinc-100 dark:hover:bg-zinc-900",
        neutral: "hover:bg-neutral-100 dark:hover:bg-neutral-900",
        stone: "hover:bg-stone-100 dark:hover:bg-stone-900",
        red: "hover:bg-red-100 dark:hover:bg-red-900",
        orange: "hover:bg-orange-100 dark:hover:bg-orange-900",
        amber: "hover:bg-amber-100 dark:hover:bg-amber-900",
        yellow: "hover:bg-yellow-100 dark:hover:bg-yellow-900",
        lime: "hover:bg-lime-100 dark:hover:bg-lime-900",
        green: "hover:bg-green-100 dark:hover:bg-green-900",
        emerald: "hover:bg-emerald-100 dark:hover:bg-emerald-900",
        teal: "hover:bg-teal-100 dark:hover:bg-teal-900",
        cyan: "hover:bg-cyan-100 dark:hover:bg-cyan-900",
        sky: "hover:bg-sky-100 dark:hover:bg-sky-900",
        blue: "hover:bg-blue-100 dark:hover:bg-blue-900",
        indigo: "hover:bg-indigo-100 dark:hover:bg-indigo-900",
        violet: "hover:bg-violet-100 dark:hover:bg-violet-900",
        purple: "hover:bg-purple-100 dark:hover:bg-purple-900",
        fuchsia: "hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900",
        pink: "hover:bg-pink-100 dark:hover:bg-pink-900",
        rose: "hover:bg-rose-100 dark:hover:bg-rose-900",
        "white-black": "hover:bg-neutral-100 dark:hover:bg-neutral-900",
      },
    },
  },
);

export { trigger };
