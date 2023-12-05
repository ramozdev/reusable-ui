import { cva, cx } from "class-variance-authority";

const root = cva(
  `outline-none
  cursor-default
  relative 
  h-[25px]
  w-[42px]
  rounded-full
  transition
  disabled:pointer-events-none
  [-webkit-tap-highlight-color:rgba(0,0,0,0)]
  focus:ring-offset-2
  focus:ring-offset-white
  dark:focus:ring-offset-black
  focus:ring-2`,
  {
    defaultVariants: {
      color: "blue",
    },
    variants: {
      color: {
        brand: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-brand-500
          data-[state=checked]:hover:bg-brand-600
          data-[state=checked]:focus-visible:bg-brand-600
          data-[state=checked]:active:bg-brand-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-brand-500
          dark:data-[state=checked]:hover:bg-brand-600
          dark:data-[state=checked]:focus-visible:bg-brand-600
          dark:data-[state=checked]:active:bg-brand-700`,

          // FOCUS
          `focus:ring-brand-950
        dark:focus:ring-brand-300`,
        ),
        slate: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-slate-500
          data-[state=checked]:hover:bg-slate-600
          data-[state=checked]:focus-visible:bg-slate-600
          data-[state=checked]:active:bg-slate-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-slate-500
          dark:data-[state=checked]:hover:bg-slate-600
          dark:data-[state=checked]:focus-visible:bg-slate-600
          dark:data-[state=checked]:active:bg-slate-700`,

          // FOCUS
          `focus:ring-slate-950
        dark:focus:ring-slate-300`,
        ),
        gray: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-gray-500
          data-[state=checked]:hover:bg-gray-600
          data-[state=checked]:focus-visible:bg-gray-600
          data-[state=checked]:active:bg-gray-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-gray-500
          dark:data-[state=checked]:hover:bg-gray-600
          dark:data-[state=checked]:focus-visible:bg-gray-600
          dark:data-[state=checked]:active:bg-gray-700`,

          // FOCUS
          `focus:ring-gray-950
        dark:focus:ring-gray-300`,
        ),
        zinc: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-zinc-500
          data-[state=checked]:hover:bg-zinc-600
          data-[state=checked]:focus-visible:bg-zinc-600
          data-[state=checked]:active:bg-zinc-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-zinc-500
          dark:data-[state=checked]:hover:bg-zinc-600
          dark:data-[state=checked]:focus-visible:bg-zinc-600
          dark:data-[state=checked]:active:bg-zinc-700`,

          // FOCUS
          `focus:ring-zinc-950
        dark:focus:ring-zinc-300`,
        ),
        neutral: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-neutral-500
          data-[state=checked]:hover:bg-neutral-600
          data-[state=checked]:focus-visible:bg-neutral-600
          data-[state=checked]:active:bg-neutral-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-neutral-500
          dark:data-[state=checked]:hover:bg-neutral-600
          dark:data-[state=checked]:focus-visible:bg-neutral-600
          dark:data-[state=checked]:active:bg-neutral-700`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
        stone: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-stone-500
          data-[state=checked]:hover:bg-stone-600
          data-[state=checked]:focus-visible:bg-stone-600
          data-[state=checked]:active:bg-stone-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-stone-500
          dark:data-[state=checked]:hover:bg-stone-600
          dark:data-[state=checked]:focus-visible:bg-stone-600
          dark:data-[state=checked]:active:bg-stone-700`,

          // FOCUS
          `focus:ring-stone-950
        dark:focus:ring-stone-300`,
        ),
        red: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-red-500
          data-[state=checked]:hover:bg-red-600
          data-[state=checked]:focus-visible:bg-red-600
          data-[state=checked]:active:bg-red-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-red-500
          dark:data-[state=checked]:hover:bg-red-600
          dark:data-[state=checked]:focus-visible:bg-red-600
          dark:data-[state=checked]:active:bg-red-700`,

          // FOCUS
          `focus:ring-red-950
        dark:focus:ring-red-300`,
        ),
        orange: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-orange-500
          data-[state=checked]:hover:bg-orange-600
          data-[state=checked]:focus-visible:bg-orange-600
          data-[state=checked]:active:bg-orange-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-orange-500
          dark:data-[state=checked]:hover:bg-orange-600
          dark:data-[state=checked]:focus-visible:bg-orange-600
          dark:data-[state=checked]:active:bg-orange-700`,

          // FOCUS
          `focus:ring-orange-950
        dark:focus:ring-orange-300`,
        ),
        amber: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-amber-500
          data-[state=checked]:hover:bg-amber-600
          data-[state=checked]:focus-visible:bg-amber-600
          data-[state=checked]:active:bg-amber-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-amber-500
          dark:data-[state=checked]:hover:bg-amber-600
          dark:data-[state=checked]:focus-visible:bg-amber-600
          dark:data-[state=checked]:active:bg-amber-700`,

          // FOCUS
          `focus:ring-amber-950
        dark:focus:ring-amber-300`,
        ),
        yellow: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-yellow-500
          data-[state=checked]:hover:bg-yellow-600
          data-[state=checked]:focus-visible:bg-yellow-600
          data-[state=checked]:active:bg-yellow-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-yellow-500
          dark:data-[state=checked]:hover:bg-yellow-600
          dark:data-[state=checked]:focus-visible:bg-yellow-600
          dark:data-[state=checked]:active:bg-yellow-700`,

          // FOCUS
          `focus:ring-yellow-950
        dark:focus:ring-yellow-300`,
        ),
        lime: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-lime-500
          data-[state=checked]:hover:bg-lime-600
          data-[state=checked]:focus-visible:bg-lime-600
          data-[state=checked]:active:bg-lime-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-lime-500
          dark:data-[state=checked]:hover:bg-lime-600
          dark:data-[state=checked]:focus-visible:bg-lime-600
          dark:data-[state=checked]:active:bg-lime-700`,

          // FOCUS
          `focus:ring-lime-950
        dark:focus:ring-lime-300`,
        ),
        green: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-green-500
          data-[state=checked]:hover:bg-green-600
          data-[state=checked]:focus-visible:bg-green-600
          data-[state=checked]:active:bg-green-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-green-500
          dark:data-[state=checked]:hover:bg-green-600
          dark:data-[state=checked]:focus-visible:bg-green-600
          dark:data-[state=checked]:active:bg-green-700`,

          // FOCUS
          `focus:ring-green-950
        dark:focus:ring-green-300`,
        ),
        emerald: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-emerald-500
          data-[state=checked]:hover:bg-emerald-600
          data-[state=checked]:focus-visible:bg-emerald-600
          data-[state=checked]:active:bg-emerald-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-emerald-500
          dark:data-[state=checked]:hover:bg-emerald-600
          dark:data-[state=checked]:focus-visible:bg-emerald-600
          dark:data-[state=checked]:active:bg-emerald-700`,

          // FOCUS
          `focus:ring-emerald-950
        dark:focus:ring-emerald-300`,
        ),
        teal: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-teal-500
          data-[state=checked]:hover:bg-teal-600
          data-[state=checked]:focus-visible:bg-teal-600
          data-[state=checked]:active:bg-teal-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-teal-500
          dark:data-[state=checked]:hover:bg-teal-600
          dark:data-[state=checked]:focus-visible:bg-teal-600
          dark:data-[state=checked]:active:bg-teal-700`,

          // FOCUS
          `focus:ring-teal-950
        dark:focus:ring-teal-300`,
        ),
        cyan: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-cyan-500
          data-[state=checked]:hover:bg-cyan-600
          data-[state=checked]:focus-visible:bg-cyan-600
          data-[state=checked]:active:bg-cyan-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-cyan-500
          dark:data-[state=checked]:hover:bg-cyan-600
          dark:data-[state=checked]:focus-visible:bg-cyan-600
          dark:data-[state=checked]:active:bg-cyan-700`,

          // FOCUS
          `focus:ring-cyan-950
        dark:focus:ring-cyan-300`,
        ),
        sky: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-sky-500
          data-[state=checked]:hover:bg-sky-600
          data-[state=checked]:focus-visible:bg-sky-600
          data-[state=checked]:active:bg-sky-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-sky-500
          dark:data-[state=checked]:hover:bg-sky-600
          dark:data-[state=checked]:focus-visible:bg-sky-600
          dark:data-[state=checked]:active:bg-sky-700`,

          // FOCUS
          `focus:ring-sky-950
        dark:focus:ring-sky-300`,
        ),
        blue: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-blue-500
          data-[state=checked]:hover:bg-blue-600
          data-[state=checked]:focus-visible:bg-blue-600
          data-[state=checked]:active:bg-blue-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-blue-500
          dark:data-[state=checked]:hover:bg-blue-600
          dark:data-[state=checked]:focus-visible:bg-blue-600
          dark:data-[state=checked]:active:bg-blue-700`,

          // FOCUS
          `focus:ring-blue-950
        dark:focus:ring-blue-300`,
        ),
        indigo: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-indigo-500
          data-[state=checked]:hover:bg-indigo-600
          data-[state=checked]:focus-visible:bg-indigo-600
          data-[state=checked]:active:bg-indigo-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-indigo-500
          dark:data-[state=checked]:hover:bg-indigo-600
          dark:data-[state=checked]:focus-visible:bg-indigo-600
          dark:data-[state=checked]:active:bg-indigo-700`,

          // FOCUS
          `focus:ring-indigo-950
        dark:focus:ring-indigo-300`,
        ),
        violet: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-violet-500
          data-[state=checked]:hover:bg-violet-600
          data-[state=checked]:focus-visible:bg-violet-600
          data-[state=checked]:active:bg-violet-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-violet-500
          dark:data-[state=checked]:hover:bg-violet-600
          dark:data-[state=checked]:focus-visible:bg-violet-600
          dark:data-[state=checked]:active:bg-violet-700`,

          // FOCUS
          `focus:ring-violet-950
        dark:focus:ring-violet-300`,
        ),
        purple: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-purple-500
          data-[state=checked]:hover:bg-purple-600
          data-[state=checked]:focus-visible:bg-purple-600
          data-[state=checked]:active:bg-purple-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-purple-500
          dark:data-[state=checked]:hover:bg-purple-600
          dark:data-[state=checked]:focus-visible:bg-purple-600
          dark:data-[state=checked]:active:bg-purple-700`,

          // FOCUS
          `focus:ring-purple-950
        dark:focus:ring-purple-300`,
        ),
        fuchsia: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-fuchsia-500
          data-[state=checked]:hover:bg-fuchsia-600
          data-[state=checked]:focus-visible:bg-fuchsia-600
          data-[state=checked]:active:bg-fuchsia-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-fuchsia-500
          dark:data-[state=checked]:hover:bg-fuchsia-600
          dark:data-[state=checked]:focus-visible:bg-fuchsia-600
          dark:data-[state=checked]:active:bg-fuchsia-700`,

          // FOCUS
          `focus:ring-fuchsia-950
        dark:focus:ring-fuchsia-300`,
        ),
        pink: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-pink-500
          data-[state=checked]:hover:bg-pink-600
          data-[state=checked]:focus-visible:bg-pink-600
          data-[state=checked]:active:bg-pink-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-pink-500
          dark:data-[state=checked]:hover:bg-pink-600
          dark:data-[state=checked]:focus-visible:bg-pink-600
          dark:data-[state=checked]:active:bg-pink-700`,

          // FOCUS
          `focus:ring-pink-950
        dark:focus:ring-pink-300`,
        ),
        rose: cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-rose-500
          data-[state=checked]:hover:bg-rose-600
          data-[state=checked]:focus-visible:bg-rose-600
          data-[state=checked]:active:bg-rose-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-rose-500
          dark:data-[state=checked]:hover:bg-rose-600
          dark:data-[state=checked]:focus-visible:bg-rose-600
          dark:data-[state=checked]:active:bg-rose-700`,

          // FOCUS
          `focus:ring-rose-950
        dark:focus:ring-rose-300`,
        ),
        "white-black": cx(
          `bg-neutral-200
          hover:bg-neutral-300
          focus-visible:bg-neutral-400
          active:bg-neutral-500
          data-[state=checked]:bg-blue-500
          data-[state=checked]:hover:bg-blue-600
          data-[state=checked]:focus-visible:bg-blue-600
          data-[state=checked]:active:bg-blue-700
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-600
          dark:active:bg-neutral-700 
          dark:disabled:text-neutral-500
          dark:data-[state=checked]:bg-blue-500
          dark:data-[state=checked]:hover:bg-blue-600
          dark:data-[state=checked]:focus-visible:bg-blue-600
          dark:data-[state=checked]:active:bg-blue-700`,

          // FOCUS
          `focus:ring-black
        dark:focus:ring-white`,
        ),
      },
    },
  },
);

export { root };
