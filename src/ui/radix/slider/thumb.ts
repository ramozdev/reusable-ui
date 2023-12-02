import { cva, cx } from "class-variance-authority";

const thumb = cva(
  `block
    h-5
    w-5
    rounded-full
    outline-none
    border-2
    border-transparent
    transition
    focus:outline-none
    disabled:pointer-events-none
    focus:ring-offset-2
    focus:ring-offset-white
    dark:focus:ring-offset-black
    focus:ring-2`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: cx(
          `bg-brand-500
    hover:border-brand-600
    dark:bg-brand-600
    dark:hover:border-brand-400`,

          // FOCUS
          `focus:ring-brand-950
        dark:focus:ring-brand-300`,
        ),
        slate: cx(
          `bg-slate-800
    hover:border-slate-600
    dark:bg-slate-200
    dark:hover:border-slate-400`,

          // FOCUS
          `focus:ring-slate-950
        dark:focus:ring-slate-300`,
        ),
        gray: cx(
          `bg-gray-800
    hover:border-gray-600
    dark:bg-gray-200
    dark:hover:border-gray-400`,

          // FOCUS
          `focus:ring-gray-950
        dark:focus:ring-gray-300`,
        ),
        zinc: cx(
          `bg-zinc-800
    hover:border-zinc-600
    dark:bg-zinc-200
    dark:hover:border-zinc-400`,

          // FOCUS
          `focus:ring-zinc-950
        dark:focus:ring-zinc-300`,
        ),
        neutral: cx(
          `bg-neutral-800
    hover:border-neutral-600
    dark:bg-neutral-200
    dark:hover:border-neutral-400`,

          // FOCUS
          `focus:ring-neutral-950
        dark:focus:ring-neutral-300`,
        ),
        stone: cx(
          `bg-stone-800
    hover:border-stone-600
    dark:bg-stone-200
    dark:hover:border-stone-400`,

          // FOCUS
          `focus:ring-stone-950
        dark:focus:ring-stone-300`,
        ),
        red: cx(
          `bg-red-500
    hover:border-red-600
    dark:bg-red-600
    dark:hover:border-red-400`,

          // FOCUS
          `focus:ring-red-950
        dark:focus:ring-red-300`,
        ),
        orange: cx(
          `bg-orange-500
    hover:border-orange-600
    dark:bg-orange-600
    dark:hover:border-orange-400`,

          // FOCUS
          `focus:ring-orange-950
        dark:focus:ring-orange-300`,
        ),
        amber: cx(
          `bg-amber-500
    hover:border-amber-600
    dark:bg-amber-600
    dark:hover:border-amber-400`,

          // FOCUS
          `focus:ring-amber-950
        dark:focus:ring-amber-300`,
        ),
        yellow: cx(
          `bg-yellow-500
    hover:border-yellow-600
    dark:bg-yellow-600
    dark:hover:border-yellow-400`,

          // FOCUS
          `focus:ring-yellow-950
        dark:focus:ring-yellow-300`,
        ),
        lime: cx(
          `bg-lime-500
    hover:border-lime-600
    dark:bg-lime-600
    dark:hover:border-lime-400`,

          // FOCUS
          `focus:ring-lime-950
        dark:focus:ring-lime-300`,
        ),
        green: cx(
          `bg-green-500
    hover:border-green-600
    dark:bg-green-600
    dark:hover:border-green-400`,

          // FOCUS
          `focus:ring-green-950
        dark:focus:ring-green-300`,
        ),
        emerald: cx(
          `bg-emerald-500
    hover:border-emerald-600
    dark:bg-emerald-600
    dark:hover:border-emerald-400`,

          // FOCUS
          `focus:ring-emerald-950
        dark:focus:ring-emerald-300`,
        ),
        teal: cx(
          `bg-teal-500
    hover:border-teal-600
    dark:bg-teal-600
    dark:hover:border-teal-400`,

          // FOCUS
          `focus:ring-teal-950
        dark:focus:ring-teal-300`,
        ),
        cyan: cx(
          `bg-cyan-500
    hover:border-cyan-600
    dark:bg-cyan-600
    dark:hover:border-cyan-400`,

          // FOCUS
          `focus:ring-cyan-950
        dark:focus:ring-cyan-300`,
        ),
        sky: cx(
          `bg-sky-500
    hover:border-sky-600
    dark:bg-sky-600
    dark:hover:border-sky-400`,

          // FOCUS
          `focus:ring-sky-950
        dark:focus:ring-sky-300`,
        ),
        blue: cx(
          `bg-blue-500
    hover:border-blue-600
    dark:bg-blue-600
    dark:hover:border-blue-400`,

          // FOCUS
          `focus:ring-blue-950
        dark:focus:ring-blue-300`,
        ),
        indigo: cx(
          `bg-indigo-500
    hover:border-indigo-600
    dark:bg-indigo-600
    dark:hover:border-indigo-400`,

          // FOCUS
          `focus:ring-indigo-950
        dark:focus:ring-indigo-300`,
        ),
        violet: cx(
          `bg-violet-500
    hover:border-violet-600
    dark:bg-violet-600
    dark:hover:border-violet-400`,

          // FOCUS
          `focus:ring-violet-950
        dark:focus:ring-violet-300`,
        ),
        purple: cx(
          `bg-purple-500
    hover:border-purple-600
    dark:bg-purple-600
    dark:hover:border-purple-400`,

          // FOCUS
          `focus:ring-purple-950
        dark:focus:ring-purple-300`,
        ),
        fuchsia: cx(
          `bg-fuchsia-500
    hover:border-fuchsia-600
    dark:bg-fuchsia-600
    dark:hover:border-fuchsia-400`,

          // FOCUS
          `focus:ring-fuchsia-950
        dark:focus:ring-fuchsia-300`,
        ),
        pink: cx(
          `bg-pink-500
    hover:border-pink-600
    dark:bg-pink-600
    dark:hover:border-pink-400`,

          // FOCUS
          `focus:ring-pink-950
        dark:focus:ring-pink-300`,
        ),
        rose: cx(
          `bg-rose-500
    hover:border-rose-600
    dark:bg-rose-600
    dark:hover:border-rose-400`,

          // FOCUS
          `focus:ring-rose-950
        dark:focus:ring-rose-300`,
        ),
        "white-black": cx(
          `bg-black
          hover:border-neutral-600
          dark:bg-white
          dark:hover:border-neutral-400`,

          // FOCUS
          `focus:ring-black
        dark:focus:ring-white`,
        ),
      },
    },
  },
);

export { thumb };
