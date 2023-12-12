import { BORDER, ROUNDED } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  twMerge(
    `group
  inline-flex
  select-none
  items-center
  justify-center
  transition
  m-px
  text-sm
  leading-5
  focus:outline-none
  disabled:pointer-events-none
  disabled:opacity-75
  focus:ring-offset-2
  focus:ring-offset-white
  dark:focus:ring-offset-black
  focus:ring-2`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      variant: "default",
      color: "neutral",
      size: "default",
    },
    variants: {
      variant: {
        default: "border-transparent text-white",
        outline: "text-white",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        sm: "px-3 h-7",
        default: "px-4 py-1",
        lg: "px-7 py-4",
        "icon-sm": `h-4 w-4`,
        icon: `h-8
        w-8
        [&_>_svg]:h-4
        [&_>_svg]:w-4`,
        "icon-lg": `h-10 w-10`,
      },
      color: {
        brand: cx(
          // HOVER
          `hover:bg-brand-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-brand-950
          dark:focus:ring-brand-300`,

          // ACTIVE
          `active:bg-brand-800
          active:text-white
          dark:active:text-white`,
        ),
        slate: cx(
          // HOVER
          `hover:bg-slate-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-slate-950
          dark:focus:ring-slate-300`,

          // ACTIVE
          `active:bg-slate-800
          active:text-white
          dark:active:text-white`,
        ),
        gray: cx(
          // HOVER
          `hover:bg-gray-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-gray-950
          dark:focus:ring-gray-300`,

          // ACTIVE
          `active:bg-gray-800
          active:text-white
          dark:active:text-white`,
        ),
        zinc: cx(
          // HOVER
          `hover:bg-zinc-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-zinc-950
          dark:focus:ring-zinc-300`,

          // ACTIVE
          `active:bg-zinc-800
          active:text-white
          dark:active:text-white`,
        ),
        neutral: cx(
          // HOVER
          `hover:bg-neutral-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-neutral-950
          dark:focus:ring-neutral-300`,

          // ACTIVE
          `active:bg-neutral-800
          active:text-white
          dark:active:text-white`,
        ),
        stone: cx(
          // HOVER
          `hover:bg-stone-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-stone-950
          dark:focus:ring-stone-300`,

          // ACTIVE
          `active:bg-stone-800
          active:text-white
          dark:active:text-white`,
        ),
        red: cx(
          // HOVER
          `hover:bg-red-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-red-950
          dark:focus:ring-red-300`,

          // ACTIVE
          `active:bg-red-800
          active:text-white
          dark:active:text-white`,
        ),
        orange: cx(
          // HOVER
          `hover:bg-orange-500`,

          // FOCUS
          `focus:ring-orange-950
          dark:focus:ring-orange-300`,

          // ACTIVE
          `active:bg-orange-600`,
        ),
        amber: cx(
          // HOVER
          `hover:bg-amber-500`,

          // FOCUS
          `focus:ring-amber-950
          dark:focus:ring-amber-300`,

          // ACTIVE
          `active:bg-amber-600`,
        ),
        yellow: cx(
          // HOVER
          `hover:bg-yellow-500`,

          // FOCUS
          `focus:ring-yellow-950
          dark:focus:ring-yellow-300`,

          // ACTIVE
          `active:bg-yellow-600`,
        ),
        lime: cx(
          // HOVER
          `hover:bg-lime-600`,

          // FOCUS
          `focus:ring-lime-950
          dark:focus:ring-lime-300`,

          // ACTIVE
          `active:bg-lime-700
          active:text-white
          dark:active:text-white`,
        ),
        green: cx(
          // HOVER
          `hover:bg-green-600`,

          // FOCUS
          `focus:ring-green-950
          dark:focus:ring-green-300`,

          // ACTIVE
          `active:bg-green-700
          active:text-white
          dark:active:text-white`,
        ),
        emerald: cx(
          // HOVER
          `hover:bg-emerald-600`,

          // FOCUS
          `focus:ring-emerald-950
          dark:focus:ring-emerald-300`,

          // ACTIVE
          `active:bg-emerald-700
          active:text-white
          dark:active:text-white`,
        ),
        teal: cx(
          // HOVER
          `hover:bg-teal-500`,

          // FOCUS
          `focus:ring-teal-950
          dark:focus:ring-teal-300`,

          // ACTIVE
          `active:bg-teal-600`,
        ),
        cyan: cx(
          // HOVER
          `hover:bg-cyan-500`,

          // FOCUS
          `focus:ring-cyan-950
          dark:focus:ring-cyan-300`,

          // ACTIVE
          `active:bg-cyan-600`,
        ),
        sky: cx(
          // HOVER
          `hover:bg-sky-500`,

          // FOCUS
          `focus:ring-sky-950
          dark:focus:ring-sky-300`,

          // ACTIVE
          `active:bg-sky-600`,
        ),
        blue: cx(
          // HOVER
          `hover:bg-blue-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-blue-950
          dark:focus:ring-blue-300`,

          // ACTIVE
          `active:bg-blue-800
          active:text-white
          dark:active:text-white`,
        ),
        indigo: cx(
          // HOVER
          `hover:bg-indigo-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-indigo-950
          dark:focus:ring-indigo-300`,

          // ACTIVE
          `active:bg-indigo-800
          active:text-white
          dark:active:text-white`,
        ),
        violet: cx(
          // HOVER
          `hover:bg-violet-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-violet-950
          dark:focus:ring-violet-300`,

          // ACTIVE
          `active:bg-violet-800
          active:text-white
          dark:active:text-white`,
        ),
        purple: cx(
          // HOVER
          `hover:bg-purple-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-purple-950
          dark:focus:ring-purple-300`,

          // ACTIVE
          `active:bg-purple-800
          active:text-white
          dark:active:text-white`,
        ),
        fuchsia: cx(
          // HOVER
          `hover:bg-fuchsia-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-fuchsia-950
          dark:focus:ring-fuchsia-300`,

          // ACTIVE
          `active:bg-fuchsia-800
          active:text-white
          dark:active:text-white`,
        ),
        pink: cx(
          // HOVER
          `hover:bg-pink-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-pink-950
          dark:focus:ring-pink-300`,

          // ACTIVE
          `active:bg-pink-800
          active:text-white
          dark:active:text-white`,
        ),
        rose: cx(
          // HOVER
          `hover:bg-rose-700
          hover:text-white
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-rose-950
          dark:focus:ring-rose-300`,

          // ACTIVE
          `active:bg-rose-800
          active:text-white
          dark:active:text-white`,
        ),
        "white-black": cx(
          // HOVER
          `hover:white/80
          hover:text-black
          dark:hover:black/80
          dark:hover:text-white`,

          // FOCUS
          `focus:ring-black
          dark:focus:ring-white`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "brand",
        variant: "default",
        className: `bg-brand-600`,
      },
      {
        color: "slate",
        variant: "default",
        className: `bg-slate-600`,
      },
      {
        color: "gray",
        variant: "default",
        className: `bg-gray-600`,
      },
      {
        color: "zinc",
        variant: "default",
        className: `bg-zinc-600`,
      },
      {
        color: "neutral",
        variant: "default",
        className: `bg-neutral-600`,
      },
      {
        color: "stone",
        variant: "default",
        className: `bg-stone-600`,
      },
      {
        color: "red",
        variant: "default",
        className: `bg-red-600`,
      },
      {
        color: "orange",
        variant: "default",
        className: `bg-orange-400
            text-black`,
      },
      {
        color: "amber",
        variant: "default",
        className: `bg-amber-400
            text-black`,
      },
      {
        color: "yellow",
        variant: "default",
        className: `bg-yellow-400
                text-black`,
      },
      {
        color: "lime",
        variant: "default",
        className: `bg-lime-500
                text-black`,
      },
      {
        color: "green",
        variant: "default",
        className: `bg-green-500
              text-black`,
      },
      {
        color: "emerald",
        variant: "default",
        className: `bg-emerald-500
      text-black`,
      },
      {
        color: "teal",
        variant: "default",
        className: `bg-teal-400
              text-black`,
      },
      {
        color: "cyan",
        variant: "default",
        className: `bg-cyan-400
                text-black`,
      },
      {
        color: "sky",
        variant: "default",
        className: `bg-sky-400
                 text-black`,
      },
      {
        color: "blue",
        variant: "default",
        className: `bg-blue-600`,
      },
      {
        color: "indigo",
        variant: "default",
        className: `bg-indigo-600`,
      },
      {
        color: "violet",
        variant: "default",
        className: `bg-violet-600`,
      },
      {
        color: "purple",
        variant: "default",
        className: `bg-purple-600`,
      },
      {
        color: "fuchsia",
        variant: "default",
        className: `bg-fuchsia-600`,
      },
      {
        color: "pink",
        variant: "default",
        className: `bg-pink-600`,
      },
      {
        color: "rose",
        variant: "default",
        className: `bg-rose-600`,
      },
      {
        color: "white-black",
        variant: "default",
        className: `bg-white
                text-black
                dark:bg-black
                dark:text-white`,
      },
      // -------------OUTLINE-------------
      {
        color: "brand",
        variant: "outline",
        className: `bg-brand-600
                border-brand-800
                dark:border-brand-400`,
      },
      {
        color: "slate",
        variant: "outline",
        className: `bg-slate-600
                border-slate-800
                dark:border-slate-400`,
      },
      {
        color: "gray",
        variant: "outline",
        className: `bg-gray-600
                border-gray-800
                dark:border-gray-400`,
      },
      {
        color: "zinc",
        variant: "outline",
        className: `bg-zinc-600
                border-zinc-800
                dark:border-zinc-400`,
      },
      {
        color: "neutral",
        variant: "outline",
        className: `bg-neutral-600
                border-neutral-800
                dark:border-neutral-400`,
      },
      {
        color: "stone",
        variant: "outline",
        className: `bg-stone-600
                border-stone-800
                dark:border-stone-400`,
      },
      {
        color: "red",
        variant: "outline",
        className: `bg-red-600
                border-red-800
                dark:border-red-400`,
      },
      {
        color: "orange",
        variant: "outline",
        className: `bg-orange-400
                text-black
                border-orange-800
                dark:border-orange-300`,
      },
      {
        color: "amber",
        variant: "outline",
        className: `bg-amber-400
                text-black
                border-amber-800
                dark:border-amber-300`,
      },
      {
        color: "yellow",
        variant: "outline",
        className: `bg-yellow-400
                text-black
                border-yellow-800
                dark:border-yellow-300`,
      },
      {
        color: "lime",
        variant: "outline",
        className: `bg-lime-500
                text-black
                border-lime-800
                dark:border-lime-300`,
      },
      {
        color: "green",
        variant: "outline",
        className: `bg-green-500
                text-black
                border-green-800
                dark:border-green-300`,
      },
      {
        color: "emerald",
        variant: "outline",
        className: `bg-emerald-500
                text-black
                border-emerald-800
                dark:border-emerald-300`,
      },
      {
        color: "teal",
        variant: "outline",
        className: `bg-teal-400
                text-black
                border-teal-800
                dark:border-teal-300`,
      },
      {
        color: "cyan",
        variant: "outline",
        className: `bg-cyan-400
                text-black
                border-cyan-800
                dark:border-cyan-300`,
      },
      {
        color: "sky",
        variant: "outline",
        className: `bg-sky-400
              text-black
                border-sky-800
                dark:border-sky-400`,
      },
      {
        color: "blue",
        variant: "outline",
        className: `bg-blue-600
                border-blue-800
                dark:border-blue-400`,
      },
      {
        color: "indigo",
        variant: "outline",
        className: `bg-indigo-600
                border-indigo-800
                dark:border-indigo-400`,
      },
      {
        color: "violet",
        variant: "outline",
        className: `bg-violet-600
                border-violet-800
                dark:border-violet-400`,
      },
      {
        color: "purple",
        variant: "outline",
        className: `bg-purple-600
                border-purple-800
                dark:border-purple-400`,
      },
      {
        color: "fuchsia",
        variant: "outline",
        className: `bg-fuchsia-600
                border-fuchsia-800
                dark:border-fuchsia-400`,
      },
      {
        color: "pink",
        variant: "outline",
        className: `bg-pink-600
                border-pink-800
                dark:border-pink-400`,
      },
      {
        color: "rose",
        variant: "outline",
        className: `bg-rose-600
                border-rose-800
                dark:border-rose-400`,
      },
      {
        color: "white-black",
        variant: "outline",
        className: `bg-white
                text-black
                border-black
                dark:bg-black
                dark:text-white
                dark:border-white`,
      },
      // ------------GHOST-------------
      {
        color: "brand",
        variant: "ghost",
        className: `text-brand-700
            dark:text-brand-400`,
      },
      {
        color: "slate",
        variant: "ghost",
        className: `text-slate-700
            dark:text-slate-400`,
      },
      {
        color: "gray",
        variant: "ghost",
        className: `text-gray-700
            dark:text-gray-400`,
      },
      {
        color: "zinc",
        variant: "ghost",
        className: `text-zinc-700
            dark:text-zinc-400`,
      },
      {
        color: "neutral",
        variant: "ghost",
        className: `text-neutral-700
            dark:text-neutral-400`,
      },
      {
        color: "stone",
        variant: "ghost",
        className: `text-stone-700
            dark:text-stone-400`,
      },
      {
        color: "red",
        variant: "ghost",
        className: `text-red-700
            dark:text-red-400`,
      },
      {
        color: "orange",
        variant: "ghost",
        className: `text-orange-700
            dark:text-orange-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "amber",
        variant: "ghost",
        className: `text-amber-700
            dark:text-amber-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "yellow",
        variant: "ghost",
        className: `text-yellow-700
            dark:text-yellow-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "lime",
        variant: "ghost",
        className: `text-lime-700
            dark:text-lime-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "green",
        variant: "ghost",
        className: `text-green-700
            dark:text-green-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "emerald",
        variant: "ghost",
        className: `text-emerald-700
            dark:text-emerald-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "teal",
        variant: "ghost",
        className: `text-teal-700
            dark:text-teal-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "cyan",
        variant: "ghost",
        className: `text-cyan-700
            dark:text-cyan-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "sky",
        variant: "ghost",
        className: `text-sky-700
            dark:text-sky-400
            hover:text-black
            dark:hover:text-black`,
      },
      {
        color: "blue",
        variant: "ghost",
        className: `text-blue-700
            dark:text-blue-400`,
      },
      {
        color: "indigo",
        variant: "ghost",
        className: `text-indigo-700
            dark:text-indigo-400`,
      },
      {
        color: "violet",
        variant: "ghost",
        className: `text-violet-700
            dark:text-violet-400`,
      },
      {
        color: "purple",
        variant: "ghost",
        className: `text-purple-700
            dark:text-purple-400`,
      },
      {
        color: "fuchsia",
        variant: "ghost",
        className: `text-fuchsia-700
            dark:text-fuchsia-400`,
      },
      {
        color: "pink",
        variant: "ghost",
        className: `text-pink-700
            dark:text-pink-400`,
      },
      {
        color: "rose",
        variant: "ghost",
        className: `text-rose-700
            dark:text-rose-400`,
      },
      {
        color: "white-black",
        variant: "ghost",
        className: `text-black
              dark:text-white`,
      },
    ],
  },
);

export { button };
