import { cva } from "class-variance-authority";

const separator = cva(`h-px`, {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      brand: "bg-brand-200 dark:bg-brand-800",
      slate: "bg-slate-200 dark:bg-slate-800",
      gray: "bg-gray-200 dark:bg-gray-800",
      zinc: "bg-zinc-200 dark:bg-zinc-800",
      neutral: "bg-neutral-200 dark:bg-neutral-800",
      stone: "bg-stone-200 dark:bg-stone-800",
      red: "bg-red-200 dark:bg-red-800",
      orange: "bg-orange-200 dark:bg-orange-800",
      amber: "bg-amber-200 dark:bg-amber-800",
      yellow: "bg-yellow-200 dark:bg-yellow-800",
      lime: "bg-lime-200 dark:bg-lime-800",
      green: "bg-green-200 dark:bg-green-800",
      emerald: "bg-emerald-200 dark:bg-emerald-800",
      teal: "bg-teal-200 dark:bg-teal-800",
      cyan: "bg-cyan-200 dark:bg-cyan-800",
      sky: "bg-sky-200 dark:bg-sky-800",
      blue: "bg-blue-200 dark:bg-blue-800",
      indigo: "bg-indigo-200 dark:bg-indigo-800",
      violet: "bg-violet-200 dark:bg-violet-800",
      purple: "bg-purple-200 dark:bg-purple-800",
      fuchsia: "bg-fuchsia-200 dark:bg-fuchsia-800",
      pink: "bg-pink-200 dark:bg-pink-800",
      rose: "bg-rose-200 dark:bg-rose-800",
      "white-black": "bg-black/40 dark:bg-white/40",
    },
  },
});

export { separator };
