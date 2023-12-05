import { cva } from "class-variance-authority";

const indicator = cva(
  `h-full
    w-full
    transition-transform
    duration-[660ms]
    ease-[cubic-bezier(0.65,0,0.35,1)]`,
  {
    defaultVariants: {
      color: "green",
    },
    variants: {
      color: {
        brand: "bg-brand-500 dark:bg-brand-600",
        slate: "bg-slate-500 dark:bg-slate-600",
        gray: "bg-gray-500 dark:bg-gray-600",
        zinc: "bg-zinc-500 dark:bg-zinc-600",
        neutral: "bg-neutral-500 dark:bg-neutral-600",
        stone: "bg-stone-500 dark:bg-stone-600",
        red: "bg-red-500 dark:bg-red-600",
        orange: "bg-orange-500 dark:bg-orange-600",
        amber: "bg-amber-500 dark:bg-amber-600",
        yellow: "bg-yellow-500 dark:bg-yellow-600",
        lime: "bg-lime-500 dark:bg-lime-600",
        green: "bg-green-500 dark:bg-green-600",
        emerald: "bg-emerald-500 dark:bg-emerald-600",
        teal: "bg-teal-500 dark:bg-teal-600",
        cyan: "bg-cyan-500 dark:bg-cyan-600",
        sky: "bg-sky-500 dark:bg-sky-600",
        blue: "bg-blue-500 dark:bg-blue-600",
        indigo: "bg-indigo-500 dark:bg-indigo-600",
        violet: "bg-violet-500 dark:bg-violet-600",
        purple: "bg-purple-500 dark:bg-purple-600",
        fuchsia: "bg-fuchsia-500 dark:bg-fuchsia-600",
        pink: "bg-pink-500 dark:bg-pink-600",
        rose: "bg-rose-500 dark:bg-rose-600",
        "white-black": "bg-black dark:bg-white",
      },
    },
  },
);

export { indicator };
