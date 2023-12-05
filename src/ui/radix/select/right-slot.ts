import { cva } from "class-variance-authority";

const rightSlot = cva(
  `ml-auto
  pl-5`,
  {
    defaultVariants: {
      color: "blue",
    },
    variants: {
      color: {
        brand: "text-brand-900 dark:text-brand-100",
        slate: "text-slate-900 dark:text-slate-100",
        gray: "text-gray-900 dark:text-gray-100",
        zinc: "text-zinc-900 dark:text-zinc-100",
        neutral: "text-neutral-900 dark:text-neutral-100",
        stone: "text-stone-900 dark:text-stone-100",
        red: "text-red-900 dark:text-red-100",
        orange: "text-orange-900 dark:text-orange-100",
        amber: "text-amber-900 dark:text-amber-100",
        yellow: "text-yellow-900 dark:text-yellow-100",
        lime: "text-lime-900 dark:text-lime-100",
        green: "text-green-900 dark:text-green-100",
        emerald: "text-emerald-900 dark:text-emerald-100",
        teal: "text-teal-900 dark:text-teal-100",
        cyan: "text-cyan-900 dark:text-cyan-100",
        sky: "text-sky-900 dark:text-sky-100",
        blue: "text-blue-900 dark:text-blue-100",
        indigo: "text-indigo-900 dark:text-indigo-100",
        violet: "text-violet-900 dark:text-violet-100",
        purple: "text-purple-900 dark:text-purple-100",
        fuchsia: "text-fuchsia-900 dark:text-fuchsia-100",
        pink: "text-pink-900 dark:text-pink-100",
        rose: "text-rose-900 dark:text-rose-100",
        "white-black": "text-black dark:text-white",
      },
    },
  },
);

export { rightSlot };
