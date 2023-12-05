import { cva } from "class-variance-authority";

const viewport = cva(
  `data-[state=open]:animate-navigation-menu-scale-in
  data-[state=closed]:animate-navigation-menu-scale-out
  relative
  mt-[10px]
  h-[var(--radix-navigation-menu-viewport-height)]
  w-full
  origin-[top_center]
  overflow-hidden
  rounded-[6px]
  transition-[width,_height]
  duration-300
  sm:w-[var(--radix-navigation-menu-viewport-width)]`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        brand: "bg-brand-50 dark:bg-brand-950",
        slate: "bg-slate-50 dark:bg-slate-950",
        gray: "bg-gray-50 dark:bg-gray-950",
        zinc: "bg-zinc-50 dark:bg-zinc-950",
        neutral: "bg-neutral-50 dark:bg-neutral-950",
        stone: "bg-stone-50 dark:bg-stone-950",
        red: "bg-red-50 dark:bg-red-950",
        orange: "bg-orange-50 dark:bg-orange-950",
        amber: "bg-amber-50 dark:bg-amber-950",
        yellow: "bg-yellow-50 dark:bg-yellow-950",
        lime: "bg-lime-50 dark:bg-lime-950",
        green: "bg-green-50 dark:bg-green-950",
        emerald: "bg-emerald-50 dark:bg-emerald-950",
        teal: "bg-teal-50 dark:bg-teal-950",
        cyan: "bg-cyan-50 dark:bg-cyan-950",
        sky: "bg-sky-50 dark:bg-sky-950",
        blue: "bg-blue-50 dark:bg-blue-950",
        indigo: "bg-indigo-50 dark:bg-indigo-950",
        violet: "bg-violet-50 dark:bg-violet-950",
        purple: "bg-purple-50 dark:bg-purple-950",
        fuchsia: "bg-fuchsia-50 dark:bg-fuchsia-950",
        pink: "bg-pink-50 dark:bg-pink-950",
        rose: "bg-rose-50 dark:bg-rose-950",
        "white-black": "bg-white dark:bg-black",
      },
    },
  },
);

export { viewport };
