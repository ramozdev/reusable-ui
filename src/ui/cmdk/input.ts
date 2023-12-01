import { cva, cx } from "class-variance-authority";

const input = cva(
  `appearance-none
  flex
  w-full
  rounded-t-md
  py-7
  px-5
  border-0
  transition
  focus:outline-none
  disabled:pointer-events-none
  disabled:opacity-75
  [color-scheme:white]
  dark:[color-scheme:dark]

  focus-visible:ring-offset-0
  focus-visible:ring-0
  
  focus-visible:invalid:bg-red-50
  focus-visible:invalid:text-red-900 
  focus-visible:invalid:placeholder:text-red-500

  dark:focus-visible:invalid:bg-red-950
  dark:focus-visible:invalid:text-red-100 
  dark:focus-visible:invalid:placeholder:text-red-300
  `,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: cx(
          `bg-brand-50
          text-brand-900
          dark:bg-brand-950
          dark:text-brand-100`,

          // PLACEHOLDER
          `placeholder:text-brand-500
          dark:placeholder:text-brand-400`,
        ),
        slate: cx(
          `bg-slate-50
          text-slate-900
          dark:bg-slate-950
          dark:text-slate-100`,

          // PLACEHOLDER
          `placeholder:text-slate-500
          dark:placeholder:text-slate-400`,
        ),
        gray: cx(
          `bg-gray-50
          text-gray-900
          dark:bg-gray-950
          dark:text-gray-100`,

          // PLACEHOLDER
          `placeholder:text-gray-500
          dark:placeholder:text-gray-400`,
        ),
        zinc: cx(
          `bg-zinc-50
          text-zinc-900
          dark:bg-zinc-950
          dark:text-zinc-100`,

          // PLACEHOLDER
          `placeholder:text-zinc-500
          dark:placeholder:text-zinc-400`,
        ),
        neutral: cx(
          `bg-neutral-50
          text-neutral-900
          dark:bg-neutral-950
          dark:text-neutral-100`,

          // PLACEHOLDER
          `placeholder:text-neutral-500
          dark:placeholder:text-neutral-400`,
        ),
        stone: cx(
          `bg-stone-50
          text-stone-900
          dark:bg-stone-950
          dark:text-stone-100`,

          // PLACEHOLDER
          `placeholder:text-stone-500
          dark:placeholder:text-stone-400`,
        ),
        red: cx(
          `bg-red-50
          text-red-900
          dark:bg-red-950
          dark:text-red-100`,

          // PLACEHOLDER
          `placeholder:text-red-500
          dark:placeholder:text-red-400`,
        ),
        orange: cx(
          `bg-orange-50
          text-orange-900
          dark:bg-orange-950
          dark:text-orange-100`,

          // PLACEHOLDER
          `placeholder:text-orange-600
          dark:placeholder:text-orange-400`,
        ),
        amber: cx(
          `bg-amber-50
          text-amber-900
          dark:bg-amber-950
          dark:text-amber-100`,

          // PLACEHOLDER
          `placeholder:text-amber-600
          dark:placeholder:text-amber-400`,
        ),
        yellow: cx(
          `bg-yellow-50
          text-yellow-900
          dark:bg-yellow-950
          dark:text-yellow-100`,

          // PLACEHOLDER
          `placeholder:text-yellow-600
          dark:placeholder:text-yellow-400`,
        ),
        lime: cx(
          `bg-lime-50
          text-lime-900
          dark:bg-lime-950
          dark:text-lime-100`,

          // PLACEHOLDER
          `placeholder:text-lime-600
          dark:placeholder:text-lime-400`,
        ),
        green: cx(
          `bg-green-50
          text-green-900
          dark:bg-green-950
          dark:text-green-100`,

          // PLACEHOLDER
          `placeholder:text-green-600
          dark:placeholder:text-green-400`,
        ),
        emerald: cx(
          `bg-emerald-50
          text-emerald-900
          dark:bg-emerald-950
          dark:text-emerald-100`,

          // PLACEHOLDER
          `placeholder:text-emerald-600
          dark:placeholder:text-emerald-400`,
        ),
        teal: cx(
          `bg-teal-50
          text-teal-900
          dark:bg-teal-950
          dark:text-teal-100`,

          // PLACEHOLDER
          `placeholder:text-teal-600
          dark:placeholder:text-teal-400`,
        ),
        cyan: cx(
          `bg-cyan-50
          text-cyan-900
          dark:bg-cyan-950
          dark:text-cyan-100`,

          // PLACEHOLDER
          `placeholder:text-cyan-600
          dark:placeholder:text-cyan-400`,
        ),
        sky: cx(
          `bg-sky-50
          text-sky-900
          dark:bg-sky-950
          dark:text-sky-100`,

          // PLACEHOLDER
          `placeholder:text-sky-600
          dark:placeholder:text-sky-400`,
        ),
        blue: cx(
          `bg-blue-50
        text-blue-900
        dark:bg-blue-950
        dark:text-blue-100`,

          // PLACEHOLDER
          `placeholder:text-blue-500
        dark:placeholder:text-blue-300`,
        ),
        indigo: cx(
          `bg-indigo-50
          text-indigo-900
          dark:bg-indigo-950
          dark:text-indigo-100`,

          // PLACEHOLDER
          `placeholder:text-indigo-500
          dark:placeholder:text-indigo-400`,
        ),
        violet: cx(
          `bg-violet-50
          text-violet-900
          dark:bg-violet-950
          dark:text-violet-100`,

          // PLACEHOLDER
          `placeholder:text-violet-500
          dark:placeholder:text-violet-400`,
        ),
        purple: cx(
          `bg-purple-50
          text-purple-900
          dark:bg-purple-950
          dark:text-purple-100`,

          // PLACEHOLDER
          `placeholder:text-purple-500
          dark:placeholder:text-purple-400`,
        ),
        fuchsia: cx(
          `bg-fuchsia-50
          text-fuchsia-900
          dark:bg-fuchsia-950
          dark:text-fuchsia-100`,

          // PLACEHOLDER
          `placeholder:text-fuchsia-500
          dark:placeholder:text-fuchsia-400`,
        ),
        pink: cx(
          `bg-pink-50
          text-pink-900
          dark:bg-pink-950
          dark:text-pink-100`,

          // PLACEHOLDER
          `placeholder:text-pink-500
          dark:placeholder:text-pink-400`,
        ),
        rose: cx(
          `bg-rose-50
          text-rose-900
          dark:bg-rose-950
          dark:text-rose-100`,

          // PLACEHOLDER
          `placeholder:text-rose-500
          dark:placeholder:text-rose-400`,
        ),
        "white-black": cx(
          `bg-white
          text-neutral-900
          dark:bg-black
          dark:text-neutral-100`,

          // PLACEHOLDER
          `placeholder:text-neutral-500
          dark:placeholder:text-neutral-400`,
        ),
      },
    },
  },
);

export { input };
