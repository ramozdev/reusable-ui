import { cva } from "class-variance-authority";

const label = cva(
  `mb-1
  pl-2
  pt-1
  font-medium`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: "text-brand-900 dark:text-brand-300",
        slate: "text-slate-900 dark:text-slate-300",
        gray: "text-gray-900 dark:text-gray-300",
        zinc: "text-zinc-900 dark:text-zinc-300",
        neutral: "text-neutral-900 dark:text-neutral-300",
        stone: "text-stone-900 dark:text-stone-300",
        red: "text-red-900 dark:text-red-300",
        orange: "text-orange-900 dark:text-orange-300",
        amber: "text-amber-900 dark:text-amber-300",
        yellow: "text-yellow-900 dark:text-yellow-300",
        lime: "text-lime-900 dark:text-lime-300",
        green: "text-green-900 dark:text-green-300",
        emerald: "text-emerald-900 dark:text-emerald-300",
        teal: "text-teal-900 dark:text-teal-300",
        cyan: "text-cyan-900 dark:text-cyan-300",
        sky: "text-sky-900 dark:text-sky-300",
        blue: "text-blue-900 dark:text-blue-300",
        indigo: "text-indigo-900 dark:text-indigo-300",
        violet: "text-violet-900 dark:text-violet-300",
        purple: "text-purple-900 dark:text-purple-300",
        fuchsia: "text-fuchsia-900 dark:text-fuchsia-300",
        pink: "text-pink-900 dark:text-pink-300",
        rose: "text-rose-900 dark:text-rose-300",
        "white-black": "text-black dark:text-white",
      },
    },
  },
);

export { label };
