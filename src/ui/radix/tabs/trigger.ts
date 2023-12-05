import { cva } from "class-variance-authority";

const trigger = cva(
  `px-5
  h-[45px]
  flex-1
  flex
  items-center
  justify-center
  text-[15px]
  leading-none
  select-none
  first:rounded-tl-md
  last:rounded-tr-md
  data-[state=active]:focus:relative
  data-[state=active]:focus:ring-1
  outline-none
  cursor-default
  data-[disabled]:pointer-events-none
  data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        brand: `bg-brand-50
          text-brand-950
          hover:bg-brand-100
          data-[state=active]:focus:ring-brand-950
          dark:bg-brand-950
          dark:text-brand-50
          dark:hover:bg-brand-900
          dark:data-[state=active]:focus:ring-brand-300`,
        slate: `bg-slate-50
          text-slate-950
          hover:bg-slate-100
          data-[state=active]:focus:ring-slate-950
          dark:bg-slate-950
          dark:text-slate-50
          dark:hover:bg-slate-900
          dark:data-[state=active]:focus:ring-slate-300`,
        gray: `bg-gray-50
          text-gray-950
          hover:bg-gray-100
          data-[state=active]:focus:ring-gray-950
          dark:bg-gray-950
          dark:text-gray-50
          dark:hover:bg-gray-900
          dark:data-[state=active]:focus:ring-gray-300`,
        zinc: `bg-zinc-50
          text-zinc-950
          hover:bg-zinc-100
          data-[state=active]:focus:ring-zinc-950
          dark:bg-zinc-950
          dark:text-zinc-50
          dark:hover:bg-zinc-900
          dark:data-[state=active]:focus:ring-zinc-300`,
        neutral: `bg-neutral-50
          text-neutral-950
          hover:bg-neutral-100
          data-[state=active]:focus:ring-neutral-950
          dark:bg-neutral-950
          dark:text-neutral-50
          dark:hover:bg-neutral-900
          dark:data-[state=active]:focus:ring-neutral-300`,
        stone: `bg-stone-50
          text-stone-950
          hover:bg-stone-100
          data-[state=active]:focus:ring-stone-950
          dark:bg-stone-950
          dark:text-stone-50
          dark:hover:bg-stone-900
          dark:data-[state=active]:focus:ring-stone-300`,
        red: `bg-red-50
          text-red-950
          hover:bg-red-100
          data-[state=active]:focus:ring-red-950
          dark:bg-red-950
          dark:text-red-50
          dark:hover:bg-red-900
          dark:data-[state=active]:focus:ring-red-300`,
        orange: `bg-orange-50
          text-orange-950
          hover:bg-orange-100
          data-[state=active]:focus:ring-orange-950
          dark:bg-orange-950
          dark:text-orange-50
          dark:hover:bg-orange-900
          dark:data-[state=active]:focus:ring-orange-300`,
        amber: `bg-amber-50
          text-amber-950
          hover:bg-amber-100
          data-[state=active]:focus:ring-amber-950
          dark:bg-amber-950
          dark:text-amber-50
          dark:hover:bg-amber-900
          dark:data-[state=active]:focus:ring-amber-300`,
        yellow: `bg-yellow-50
          text-yellow-950
          hover:bg-yellow-100
          data-[state=active]:focus:ring-yellow-950
          dark:bg-yellow-950
          dark:text-yellow-50
          dark:hover:bg-yellow-900
          dark:data-[state=active]:focus:ring-yellow-300`,
        lime: `bg-lime-50
          text-lime-950
          hover:bg-lime-100
          data-[state=active]:focus:ring-lime-950
          dark:bg-lime-950
          dark:text-lime-50
          dark:hover:bg-lime-900
          dark:data-[state=active]:focus:ring-lime-300`,
        green: `bg-green-50
          text-green-950
          hover:bg-green-100
          data-[state=active]:focus:ring-green-950
          dark:bg-green-950
          dark:text-green-50
          dark:hover:bg-green-900
          dark:data-[state=active]:focus:ring-green-300`,
        emerald: `bg-emerald-50
          text-emerald-950
          hover:bg-emerald-100
          data-[state=active]:focus:ring-emerald-950
          dark:bg-emerald-950
          dark:text-emerald-50
          dark:hover:bg-emerald-900
          dark:data-[state=active]:focus:ring-emerald-300`,
        teal: `bg-teal-50
          text-teal-950
          hover:bg-teal-100
          data-[state=active]:focus:ring-teal-950
          dark:bg-teal-950
          dark:text-teal-50
          dark:hover:bg-teal-900
          dark:data-[state=active]:focus:ring-teal-300`,
        cyan: `bg-cyan-50
          text-cyan-950
          hover:bg-cyan-100
          data-[state=active]:focus:ring-cyan-950
          dark:bg-cyan-950
          dark:text-cyan-50
          dark:hover:bg-cyan-900
          dark:data-[state=active]:focus:ring-cyan-300`,
        sky: `bg-sky-50
          text-sky-950
          hover:bg-sky-100
          data-[state=active]:focus:ring-sky-950
          dark:bg-sky-950
          dark:text-sky-50
          dark:hover:bg-sky-900
          dark:data-[state=active]:focus:ring-sky-300`,
        blue: `bg-blue-50
          text-blue-950
          hover:bg-blue-100
          data-[state=active]:focus:ring-blue-950
          dark:bg-blue-950
          dark:text-blue-50
          dark:hover:bg-blue-900
          dark:data-[state=active]:focus:ring-blue-300`,
        indigo: `bg-indigo-50
          text-indigo-950
          hover:bg-indigo-100
          data-[state=active]:focus:ring-indigo-950
          dark:bg-indigo-950
          dark:text-indigo-50
          dark:hover:bg-indigo-900
          dark:data-[state=active]:focus:ring-indigo-300`,
        violet: `bg-violet-50
          text-violet-950
          hover:bg-violet-100
          data-[state=active]:focus:ring-violet-950
          dark:bg-violet-950
          dark:text-violet-50
          dark:hover:bg-violet-900
          dark:data-[state=active]:focus:ring-violet-300`,
        purple: `bg-purple-50
          text-purple-950
          hover:bg-purple-100
          data-[state=active]:focus:ring-purple-950
          dark:bg-purple-950
          dark:text-purple-50
          dark:hover:bg-purple-900
          dark:data-[state=active]:focus:ring-purple-300`,
        fuchsia: `bg-fuchsia-50
          text-fuchsia-950
          hover:bg-fuchsia-100
          data-[state=active]:focus:ring-fuchsia-950
          dark:bg-fuchsia-950
          dark:text-fuchsia-50
          dark:hover:bg-fuchsia-900
          dark:data-[state=active]:focus:ring-fuchsia-300`,
        pink: `bg-pink-50
          text-pink-950
          hover:bg-pink-100
          data-[state=active]:focus:ring-pink-950
          dark:bg-pink-950
          dark:text-pink-50
          dark:hover:bg-pink-900
          dark:data-[state=active]:focus:ring-pink-300`,
        rose: `bg-rose-50
          text-rose-950
          hover:bg-rose-100
          data-[state=active]:focus:ring-rose-950
          dark:bg-rose-950
          dark:text-rose-50
          dark:hover:bg-rose-900
          dark:data-[state=active]:focus:ring-rose-300`,
        "white-black": `bg-white
          text-neutral-950
          hover:bg-neutral-100
          data-[state=active]:focus:ring-neutral-950
          dark:bg-black
          dark:text-neutral-50
          dark:hover:bg-neutral-900
          dark:data-[state=active]:focus:ring-neutral-300`,
      },
    },
  },
);

export { trigger };
