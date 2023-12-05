import { ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const listItem = cva("", {
  defaultVariants: {
    variant: "default",
    color: "white-black",
  },
  variants: {
    variant: {
      default: twMerge(
        `block
      select-none
      p-3
      text-sm
      leading-none
      no-underline
      outline-none
      transition-colors`,
        ROUNDED,
      ),
      spotlight: twMerge(
        `flex
      h-full
      w-full
      select-none
      flex-col
      justify-end
      bg-gradient-to-t
      p-[25px]
      no-underline
      outline-none`,
        ROUNDED,
      ),
    },
    color: {
      brand: "",
      slate: "",
      gray: "",
      zinc: "",
      neutral: "",
      stone: "",
      red: "",
      orange: "",
      amber: "",
      yellow: "",
      lime: "",
      green: "",
      emerald: "",
      teal: "",
      cyan: "",
      sky: "",
      blue: "",
      indigo: "",
      violet: "",
      purple: "",
      fuchsia: "",
      pink: "",
      rose: "",
      "white-black": "",
    },
  },
  compoundVariants: [
    {
      color: "brand",
      variant: "default",
      className: `bg-brand-50
            hover:bg-brand-200
            dark:bg-brand-950
            dark:hover:bg-brand-900`,
    },
    {
      color: "slate",
      variant: "default",
      className: `bg-slate-50
            hover:bg-slate-200
            dark:bg-slate-950
            dark:hover:bg-slate-900`,
    },
    {
      color: "gray",
      variant: "default",
      className: `bg-gray-50
            hover:bg-gray-200
            dark:bg-gray-950
            dark:hover:bg-gray-900`,
    },
    {
      color: "zinc",
      variant: "default",
      className: `bg-zinc-50
            hover:bg-zinc-200
            dark:bg-zinc-950
            dark:hover:bg-zinc-900`,
    },
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-50
            hover:bg-neutral-200
            dark:bg-neutral-950
            dark:hover:bg-neutral-900`,
    },
    {
      color: "stone",
      variant: "default",
      className: `bg-stone-50
            hover:bg-stone-200
            dark:bg-stone-950
            dark:hover:bg-stone-900`,
    },
    {
      color: "red",
      variant: "default",
      className: `bg-red500
            hoverbg-red-200:
            dark:bg-red-950
            dark:hover:bg-red-900`,
    },
    {
      color: "orange",
      variant: "default",
      className: `bg-orange-50
            hover:bg-orange-200
            dark:bg-orange-950
            dark:hover:bg-orange-900`,
    },
    {
      color: "amber",
      variant: "default",
      className: `bg-amber-50
            hover:bg-amber-200
            dark:bg-amber-950
            dark:hover:bg-amber-900`,
    },
    {
      color: "yellow",
      variant: "default",
      className: `bg-yellow-50
            hover:bg-yellow-200
            dark:bg-yellow-950
            dark:hover:bg-yellow-900`,
    },
    {
      color: "lime",
      variant: "default",
      className: `bg-lime-50
            hover:bg-lime-200
            dark:bg-lime-950
            dark:hover:bg-lime-900`,
    },
    {
      color: "green",
      variant: "default",
      className: `bg-green-50
            hover:bg-green-200
            dark:bg-green-950
            dark:hover:bg-green-900`,
    },
    {
      color: "emerald",
      variant: "default",
      className: `bg-emerald-50
            hover:bg-emerald-200
            dark:bg-emerald-950
            dark:hover:bg-emerald-900`,
    },
    {
      color: "teal",
      variant: "default",
      className: `bg-teal-50
            hover:bg-teal-200
            dark:bg-teal-950
            dark:hover:bg-teal-900`,
    },
    {
      color: "cyan",
      variant: "default",
      className: `bg-cyan-50
            hover:bg-cyan-200
            dark:bg-cyan-950
            dark:hover:bg-cyan-900`,
    },
    {
      color: "sky",
      variant: "default",
      className: `bg-sky500
            hoverbg-sky-200:
            dark:bg-sky-950
            dark:hover:bg-sky-900`,
    },
    {
      color: "blue",
      variant: "default",
      className: `bg-blue-50
            hover:bg-blue-200
            dark:bg-blue-950
            dark:hover:bg-blue-900`,
    },
    {
      color: "indigo",
      variant: "default",
      className: `bg-indigo-50
            hover:bg-indigo-200
            dark:bg-indigo-950
            dark:hover:bg-indigo-900`,
    },
    {
      color: "violet",
      variant: "default",
      className: `bg-violet-50
            hover:bg-violet-200
            dark:bg-violet-950
            dark:hover:bg-violet-900`,
    },
    {
      color: "purple",
      variant: "default",
      className: `bg-purple-50
            hover:bg-purple-200
            dark:bg-purple-950
            dark:hover:bg-purple-900`,
    },
    {
      color: "fuchsia",
      variant: "default",
      className: `bg-fuchsia-50
            hover:bg-fuchsia-200
            dark:bg-fuchsia-950
            dark:hover:bg-fuchsia-900`,
    },
    {
      color: "pink",
      variant: "default",
      className: `bg-pink-50
            hover:bg-pink-200
            dark:bg-pink-950
            dark:hover:bg-pink-900`,
    },
    {
      color: "rose",
      variant: "default",
      className: `bg-rose-50
            hover:bg-rose-200
            dark:bg-rose-950
            dark:hover:bg-rose-900`,
    },
    {
      color: "white-black",
      variant: "default",
      className: `bg-white
            hover:bg-neutral-100
            dark:bg-black
            dark:hover:bg-neutral-900`,
    },
    // --------------------
    // Spotlight
    // --------------------
    {
      color: "brand",
      variant: "spotlight",
      className: `from-brand-200
    to-brand-400
    dark:from-brand-950
    dark:to-brand-600`,
    },
    {
      color: "slate",
      variant: "spotlight",
      className: `from-slate-200
    to-slate-400
    dark:from-slate-950
    dark:to-slate-600`,
    },
    {
      color: "gray",
      variant: "spotlight",
      className: `from-gray-200
    to-gray-400
    dark:from-gray-950
    dark:to-gray-600`,
    },
    {
      color: "zinc",
      variant: "spotlight",
      className: `from-zinc-200
    to-zinc-400
    dark:from-zinc-950
    dark:to-zinc-600`,
    },
    {
      color: "neutral",
      variant: "spotlight",
      className: `from-neutral-200
    to-neutral-400
    dark:from-neutral-950
    dark:to-neutral-600`,
    },
    {
      color: "stone",
      variant: "spotlight",
      className: `from-stone-200
    to-stone-400
    dark:from-stone-950
    dark:to-stone-600`,
    },
    {
      color: "red",
      variant: "spotlight",
      className: `from-red-200
    to-red-400
    dark:from-red-950
    dark:to-red-600`,
    },
    {
      color: "orange",
      variant: "spotlight",
      className: `from-orange-200
    to-orange-400
    dark:from-orange-950
    dark:to-orange-600`,
    },
    {
      color: "amber",
      variant: "spotlight",
      className: `from-amber-200
    to-amber-400
    dark:from-amber-950
    dark:to-amber-600`,
    },
    {
      color: "yellow",
      variant: "spotlight",
      className: `from-yellow-200
    to-yellow-400
    dark:from-yellow-950
    dark:to-yellow-600`,
    },
    {
      color: "lime",
      variant: "spotlight",
      className: `from-lime-200
    to-lime-400
    dark:from-lime-950
    dark:to-lime-600`,
    },
    {
      color: "green",
      variant: "spotlight",
      className: `from-green-200
    to-green-400
    dark:from-green-950
    dark:to-green-600`,
    },
    {
      color: "emerald",
      variant: "spotlight",
      className: `from-emerald-200
    to-emerald-400
    dark:from-emerald-950
    dark:to-emerald-600`,
    },
    {
      color: "teal",
      variant: "spotlight",
      className: `from-teal-200
    to-teal-400
    dark:from-teal-950
    dark:to-teal-600`,
    },
    {
      color: "cyan",
      variant: "spotlight",
      className: `from-cyan-200
    to-cyan-400
    dark:from-cyan-950
    dark:to-cyan-600`,
    },
    {
      color: "sky",
      variant: "spotlight",
      className: `from-sky-200
    to-sky-400
    dark:from-sky-950
    dark:to-sky-600`,
    },
    {
      color: "blue",
      variant: "spotlight",
      className: `from-blue-200
    to-blue-400
    dark:from-blue-950
    dark:to-blue-600`,
    },
    {
      color: "indigo",
      variant: "spotlight",
      className: `from-indigo-200
    to-indigo-400
    dark:from-indigo-950
    dark:to-indigo-600`,
    },
    {
      color: "violet",
      variant: "spotlight",
      className: `from-violet-200
    to-violet-400
    dark:from-violet-950
    dark:to-violet-600`,
    },
    {
      color: "purple",
      variant: "spotlight",
      className: `from-purple-200
    to-purple-400
    dark:from-purple-950
    dark:to-purple-600`,
    },
    {
      color: "fuchsia",
      variant: "spotlight",
      className: `from-fuchsia-200
    to-fuchsia-400
    dark:from-fuchsia-950
    dark:to-fuchsia-600`,
    },
    {
      color: "pink",
      variant: "spotlight",
      className: `from-pink-200
    to-pink-400
    dark:from-pink-950
    dark:to-pink-600`,
    },
    {
      color: "rose",
      variant: "spotlight",
      className: `from-rose-200
    to-rose-400
    dark:from-rose-950
    dark:to-rose-600`,
    },
    {
      color: "white-black",
      variant: "spotlight",
      className: `from-white
    to-black
    dark:from-black
    dark:to-white`,
    },
  ],
});

export { listItem };
