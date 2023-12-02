import { cva } from "class-variance-authority";

const title = cva("mb-2 text-lg font-semibold", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      brand: "text-brand-900 dark:text-brand-200",
      slate: "text-slate-900 dark:text-slate-200",
      gray: "text-gray-900 dark:text-gray-200",
      zinc: "text-zinc-900 dark:text-zinc-200",
      neutral: "text-neutral-900 dark:text-neutral-200",
      stone: "text-stone-900 dark:text-stone-200",
      red: "text-red-900 dark:text-red-200",
      orange: "text-orange-900 dark:text-orange-200",
      amber: "text-amber-900 dark:text-amber-200",
      yellow: "text-yellow-900 dark:text-yellow-200",
      lime: "text-lime-900 dark:text-lime-200",
      green: "text-green-900 dark:text-green-200",
      emerald: "text-emerald-900 dark:text-emerald-200",
      teal: "text-teal-900 dark:text-teal-200",
      cyan: "text-cyan-900 dark:text-cyan-200",
      sky: "text-sky-900 dark:text-sky-200",
      blue: "text-blue-900 dark:text-blue-200",
      indigo: "text-indigo-900 dark:text-indigo-200",
      violet: "text-violet-900 dark:text-violet-200",
      purple: "text-purple-900 dark:text-purple-200",
      fuchsia: "text-fuchsia-900 dark:text-fuchsia-200",
      pink: "text-pink-900 dark:text-pink-200",
      rose: "text-rose-900 dark:text-rose-200",
      "white-black": "text-neutral-900 dark:text-neutral-200",
    },
  },
});

export { title };
