import { cva } from "class-variance-authority";

const root = cva(
  `relative
  inline-flex
  h-8
  w-8
  shrink-0
  select-none
  items-center
  justify-center
  overflow-hidden
  rounded-full
  align-middle`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: "bg-brand-100 dark:bg-brand-900",
        slate: "bg-slate-100 dark:bg-slate-900",
        gray: "bg-gray-100 dark:bg-gray-900",
        zinc: "bg-zinc-100 dark:bg-zinc-900",
        neutral: "bg-neutral-100 dark:bg-neutral-900",
        stone: "bg-stone-100 dark:bg-stone-900",
        red: "bg-red-100 dark:bg-red-900",
        orange: "bg-orange-100 dark:bg-orange-900",
        amber: "bg-amber-100 dark:bg-amber-900",
        yellow: "bg-yellow-100 dark:bg-yellow-900",
        lime: "bg-lime-100 dark:bg-lime-900",
        green: "bg-green-100 dark:bg-green-900",
        emerald: "bg-emerald-100 dark:bg-emerald-900",
        teal: "bg-teal-100 dark:bg-teal-900",
        cyan: "bg-cyan-100 dark:bg-cyan-900",
        sky: "bg-sky-100 dark:bg-sky-900",
        blue: "bg-blue-100 dark:bg-blue-900",
        indigo: "bg-indigo-100 dark:bg-indigo-900",
        violet: "bg-violet-100 dark:bg-violet-900",
        purple: "bg-purple-100 dark:bg-purple-900",
        fuchsia: "bg-fuchsia-100 dark:bg-fuchsia-900",
        pink: "bg-pink-100 dark:bg-pink-900",
        rose: "bg-rose-100 dark:bg-rose-900",
        "white-black": "bg-white dark:bg-black",
      },
    },
  },
);

export { root };
