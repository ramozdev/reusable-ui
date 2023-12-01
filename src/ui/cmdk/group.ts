import { cva } from "class-variance-authority";

const group = cva(
  `overflow-hidden
  mx-2
  my-4
  
  [&_[cmdk-group-heading]]:px-2
  [&_[cmdk-group-heading]]:pb-1.5
  [&_[cmdk-group-heading]]:text-sm
  [&_[cmdk-group-heading]]:font-semibold`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `text-brand-700
          dark:text-brand-400
          [&_[cmdk-group-heading]]:text-brand-900
          [&_[cmdk-group-heading]]:dark:text-brand-300`,
        slate: `text-slate-700
          dark:text-slate-400
          [&_[cmdk-group-heading]]:text-slate-900
          [&_[cmdk-group-heading]]:dark:text-slate-300`,
        gray: `text-gray-700
          dark:text-gray-400
          [&_[cmdk-group-heading]]:text-gray-900
          [&_[cmdk-group-heading]]:dark:text-gray-300`,
        zinc: `text-zinc-700
          dark:text-zinc-400
          [&_[cmdk-group-heading]]:text-zinc-900
          [&_[cmdk-group-heading]]:dark:text-zinc-300`,
        neutral: `text-neutral-700
          dark:text-neutral-400
          [&_[cmdk-group-heading]]:text-neutral-900
          [&_[cmdk-group-heading]]:dark:text-neutral-300`,
        stone: `text-stone-700
          dark:text-stone-400
          [&_[cmdk-group-heading]]:text-stone-900
          [&_[cmdk-group-heading]]:dark:text-stone-300`,
        red: `text-red-700
          dark:text-red-400
          [&_[cmdk-group-heading]]:text-red-900
          [&_[cmdk-group-heading]]:dark:text-red-300`,
        orange: `text-orange-700
          dark:text-orange-400
          [&_[cmdk-group-heading]]:text-orange-900
          [&_[cmdk-group-heading]]:dark:text-orange-300`,
        amber: `text-amber-700
          dark:text-amber-400
          [&_[cmdk-group-heading]]:text-amber-900
          [&_[cmdk-group-heading]]:dark:text-amber-300`,
        yellow: `text-yellow-700
          dark:text-yellow-400
          [&_[cmdk-group-heading]]:text-yellow-900
          [&_[cmdk-group-heading]]:dark:text-yellow-300`,
        lime: `text-lime-700
          dark:text-lime-400
          [&_[cmdk-group-heading]]:text-lime-900
          [&_[cmdk-group-heading]]:dark:text-lime-300`,
        green: `text-green-700
          dark:text-green-400
          [&_[cmdk-group-heading]]:text-green-900
          [&_[cmdk-group-heading]]:dark:text-green-300`,
        emerald: `text-emerald-700
          dark:text-emerald-400
          [&_[cmdk-group-heading]]:text-emerald-900
          [&_[cmdk-group-heading]]:dark:text-emerald-300`,
        teal: `text-teal-700
          dark:text-teal-400
          [&_[cmdk-group-heading]]:text-teal-900
          [&_[cmdk-group-heading]]:dark:text-teal-300`,
        cyan: `text-cyan-700
          dark:text-cyan-400
          [&_[cmdk-group-heading]]:text-cyan-900
          [&_[cmdk-group-heading]]:dark:text-cyan-300`,
        sky: `text-sky-700
          dark:text-sky-400
          [&_[cmdk-group-heading]]:text-sky-900
          [&_[cmdk-group-heading]]:dark:text-sky-300`,
        blue: `text-blue-700
          dark:text-blue-400
          [&_[cmdk-group-heading]]:text-blue-900
          [&_[cmdk-group-heading]]:dark:text-blue-300`,
        indigo: `text-indigo-700
          dark:text-indigo-400
          [&_[cmdk-group-heading]]:text-indigo-900
          [&_[cmdk-group-heading]]:dark:text-indigo-300`,
        violet: `text-violet-700
          dark:text-violet-400
          [&_[cmdk-group-heading]]:text-violet-900
          [&_[cmdk-group-heading]]:dark:text-violet-300`,
        purple: `text-purple-700
          dark:text-purple-400
          [&_[cmdk-group-heading]]:text-purple-900
          [&_[cmdk-group-heading]]:dark:text-purple-300`,
        fuchsia: `text-fuchsia-700
          dark:text-fuchsia-400
          [&_[cmdk-group-heading]]:text-fuchsia-900
          [&_[cmdk-group-heading]]:dark:text-fuchsia-300`,
        pink: `text-pink-700
          dark:text-pink-400
          [&_[cmdk-group-heading]]:text-pink-900
          [&_[cmdk-group-heading]]:dark:text-pink-300`,
        rose: `text-rose-700
          dark:text-rose-400
          [&_[cmdk-group-heading]]:text-rose-900
          [&_[cmdk-group-heading]]:dark:text-rose-300`,
        "white-black": `text-black
          dark:text-white
          [&_[cmdk-group-heading]]:text-black
          [&_[cmdk-group-heading]]:dark:text-white`,
      },
    },
  },
);

export { group };
