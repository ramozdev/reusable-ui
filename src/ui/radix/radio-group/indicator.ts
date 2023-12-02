import { cva } from "class-variance-authority";

const indicator = cva(
  `relative
  flex
  h-full
  w-full
  items-center
  justify-center
  after:block
  after:h-3
  after:w-3
  after:rounded-full
  after:content-['']`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: "after:bg-brand-900 dark:after:bg-brand-200",
        slate: "after:bg-slate-900 dark:after:bg-slate-200",
        gray: "after:bg-gray-900 dark:after:bg-gray-200",
        zinc: "after:bg-zinc-900 dark:after:bg-zinc-200",
        neutral: "after:bg-neutral-900 dark:after:bg-neutral-200",
        stone: "after:bg-stone-900 dark:after:bg-stone-200",
        red: "after:bg-red-900 dark:after:bg-red-200",
        orange: "after:bg-orange-900 dark:after:bg-orange-200",
        amber: "after:bg-amber-900 dark:after:bg-amber-200",
        yellow: "after:bg-yellow-900 dark:after:bg-yellow-200",
        lime: "after:bg-lime-900 dark:after:bg-lime-200",
        green: "after:bg-green-900 dark:after:bg-green-200",
        emerald: "after:bg-emerald-900 dark:after:bg-emerald-200",
        teal: "after:bg-teal-900 dark:after:bg-teal-200",
        cyan: "after:bg-cyan-900 dark:after:bg-cyan-200",
        sky: "after:bg-sky-900 dark:after:bg-sky-200",
        blue: "after:bg-blue-900 dark:after:bg-blue-200",
        indigo: "after:bg-indigo-900 dark:after:bg-indigo-200",
        violet: "after:bg-violet-900 dark:after:bg-violet-200",
        purple: "after:bg-purple-900 dark:after:bg-purple-200",
        fuchsia: "after:bg-fuchsia-900 dark:after:bg-fuchsia-200",
        pink: "after:bg-pink-900 dark:after:bg-pink-200",
        rose: "after:bg-rose-900 dark:after:bg-rose-200",
        "white-black": "after:bg-black dark:after:bg-white",
      },
    },
  },
);

export { indicator };
