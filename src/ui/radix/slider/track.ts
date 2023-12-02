import { cva } from "class-variance-authority";

const track = cva(
  `relative
  flex-1
  rounded-full
  ring-1
  data-[orientation=horizontal]:h-[3px]
  data-[orientation=vertical]:w-[3px]
  grow`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `bg-brand-50
        ring-brand-300
        dark:bg-brand-950
        dark:ring-brand-800`,
        slate: `bg-slate-50
        ring-slate-300
        dark:bg-slate-950
        dark:ring-slate-800`,
        gray: `bg-gray-50
        ring-gray-300
        dark:bg-gray-950
        dark:ring-gray-800`,
        zinc: `bg-zinc-50
        ring-zinc-300
        dark:bg-zinc-950
        dark:ring-zinc-800`,
        neutral: `bg-neutral-50
        ring-neutral-300
        dark:bg-neutral-950
        dark:ring-neutral-800`,
        stone: `bg-stone-50
        ring-stone-300
        dark:bg-stone-950
        dark:ring-stone-800`,
        red: `bg-red-50
        ring-red-300
        dark:bg-red-950
        dark:ring-red-800`,
        orange: `bg-orange-50
        ring-orange-300
        dark:bg-orange-950
        dark:ring-orange-800`,
        amber: `bg-amber-50
        ring-amber-300
        dark:bg-amber-950
        dark:ring-amber-800`,
        yellow: `bg-yellow-50
        ring-yellow-300
        dark:bg-yellow-950
        dark:ring-yellow-800`,
        lime: `bg-lime-50
        ring-lime-300
        dark:bg-lime-950
        dark:ring-lime-800`,
        green: `bg-green-50
        ring-green-300
        dark:bg-green-950
        dark:ring-green-800`,
        emerald: `bg-emerald-50
        ring-emerald-300
        dark:bg-emerald-950
        dark:ring-emerald-800`,
        teal: `bg-teal-50
        ring-teal-300
        dark:bg-teal-950
        dark:ring-teal-800`,
        cyan: `bg-cyan-50
        ring-cyan-300
        dark:bg-cyan-950
        dark:ring-cyan-800`,
        sky: `bg-sky-50
        ring-sky-300
        dark:bg-sky-950
        dark:ring-sky-800`,
        blue: `bg-blue-50
        ring-blue-300
        dark:bg-blue-950
        dark:ring-blue-800`,
        indigo: `bg-indigo-50
        ring-indigo-300
        dark:bg-indigo-950
        dark:ring-indigo-800`,
        violet: `bg-violet-50
        ring-violet-300
        dark:bg-violet-950
        dark:ring-violet-800`,
        purple: `bg-purple-50
        ring-purple-300
        dark:bg-purple-950
        dark:ring-purple-800`,
        fuchsia: `bg-fuchsia-50
        ring-fuchsia-300
        dark:bg-fuchsia-950
        dark:ring-fuchsia-800`,
        pink: `bg-pink-50
        ring-pink-300
        dark:bg-pink-950
        dark:ring-pink-800`,
        rose: `bg-rose-50
        ring-rose-300
        dark:bg-rose-950
        dark:ring-rose-800`,
        "white-black": `bg-white
        ring-neutral-300
        dark:bg-black 
        dark:ring-neutral-800`,
      },
    },
  },
);

export { track };
