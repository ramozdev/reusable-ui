import { cva } from "class-variance-authority";

const scrollbar = cva(
  `flex
select-none
touch-none
p-0.5
transition-colors
duration-[160ms]
ease-out
data-[orientation=vertical]:w-2.5
data-[orientation=horizontal]:flex-col
data-[orientation=horizontal]:h-2.5`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        brand: `bg-brand-50
        hover:bg-brand-200 
        dark:bg-brand-950 
        dark:hover:bg-brand-900`,
        slate: `bg-slate-50
        hover:bg-slate-200 
        dark:bg-slate-950 
        dark:hover:bg-slate-900`,
        gray: `bg-gray-50
        hover:bg-gray-200 
        dark:bg-gray-950 
        dark:hover:bg-gray-900`,
        zinc: `bg-zinc-50
        hover:bg-zinc-200 
        dark:bg-zinc-950 
        dark:hover:bg-zinc-900`,
        neutral: `bg-neutral-50
        hover:bg-neutral-200 
        dark:bg-neutral-950 
        dark:hover:bg-neutral-900`,
        stone: `bg-stone-50
        hover:bg-stone-200 
        dark:bg-stone-950 
        dark:hover:bg-stone-900`,
        red: `bg-red-50
        hover:bg-red-200 
        dark:bg-red-950 
        dark:hover:bg-red-900`,
        orange: `bg-orange-50
        hover:bg-orange-200 
        dark:bg-orange-950 
        dark:hover:bg-orange-900`,
        amber: `bg-amber-50
        hover:bg-amber-200 
        dark:bg-amber-950 
        dark:hover:bg-amber-900`,
        yellow: `bg-yellow-50
        hover:bg-yellow-200 
        dark:bg-yellow-950 
        dark:hover:bg-yellow-900`,
        lime: `bg-lime-50
        hover:bg-lime-200 
        dark:bg-lime-950 
        dark:hover:bg-lime-900`,
        green: `bg-green-50
        hover:bg-green-200 
        dark:bg-green-950 
        dark:hover:bg-green-900`,
        emerald: `bg-emerald-50
        hover:bg-emerald-200 
        dark:bg-emerald-950 
        dark:hover:bg-emerald-900`,
        teal: `bg-teal-50
        hover:bg-teal-200 
        dark:bg-teal-950 
        dark:hover:bg-teal-900`,
        cyan: `bg-cyan-50
        hover:bg-cyan-200 
        dark:bg-cyan-950 
        dark:hover:bg-cyan-900`,
        sky: `bg-sky-50
        hover:bg-sky-200 
        dark:bg-sky-950 
        dark:hover:bg-sky-900`,
        blue: `bg-blue-50
        hover:bg-blue-200 
        dark:bg-blue-950 
        dark:hover:bg-blue-900`,
        indigo: `bg-indigo-50
        hover:bg-indigo-200 
        dark:bg-indigo-950 
        dark:hover:bg-indigo-900`,
        violet: `bg-violet-50
        hover:bg-violet-200 
        dark:bg-violet-950 
        dark:hover:bg-violet-900`,
        purple: `bg-purple-50
        hover:bg-purple-200 
        dark:bg-purple-950 
        dark:hover:bg-purple-900`,
        fuchsia: `bg-fuchsia-50
        hover:bg-fuchsia-200 
        dark:bg-fuchsia-950 
        dark:hover:bg-fuchsia-900`,
        pink: `bg-pink-50
        hover:bg-pink-200 
        dark:bg-pink-950 
        dark:hover:bg-pink-900`,
        rose: `bg-rose-50
        hover:bg-rose-200 
        dark:bg-rose-950 
        dark:hover:bg-rose-900`,
        "white-black": `bg-white
        hover:bg-neutral-200 
        dark:bg-black
        dark:hover:bg-neutral-900`,
      },
    },
  },
);

export { scrollbar };
