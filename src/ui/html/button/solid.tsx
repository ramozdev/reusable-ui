import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalButtonStyles } from "./global-styles";
import { twMerge } from "tailwind-merge";

const solidButton = cva(globalButtonStyles, {
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
      default: "px-4 py-0.5",
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
        `dark:hover:bg-brand-800 hover:bg-brand-700 hover:text-white
          dark:hover:text-white dark:hover:border-brand-600 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-slate-800 hover:bg-slate-700 hover:text-white
        dark:hover:text-white
         dark:hover:border-slate-600 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-gray-800 hover:bg-gray-700 hover:text-white
        dark:hover:text-white
         dark:hover:border-gray-600 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-zinc-800 hover:bg-zinc-700 hover:text-white
        dark:hover:text-white
         dark:hover:border-zinc-600 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-neutral-800 hover:bg-neutral-700 hover:text-white
        dark:hover:text-white
         dark:hover:border-neutral-600 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-stone-800 hover:bg-stone-700 hover:text-white
        dark:hover:text-white
         dark:hover:border-stone-600 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-red-800 hover:bg-red-700 hover:text-white
        dark:hover:text-white
         dark:hover:border-red-700 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-orange-600 hover:bg-orange-500
        dark:hover:text-white hover:text-black
         dark:hover:border-orange-800 border-transparent border-b-2 border-r-2`,

        // FOCUS
        `focus:ring-orange-950
          dark:focus:ring-orange-300`,

        // ACTIVE
        `active:bg-orange-600`,
      ),
      amber: cx(
        // HOVER
        `dark:hover:bg-amber-600 hover:bg-amber-500
        dark:hover:text-white hover:text-black
         dark:hover:border-amber-800 border-transparent border-b-2 border-r-2`,

        // FOCUS
        `focus:ring-amber-950
          dark:focus:ring-amber-300`,

        // ACTIVE
        `active:bg-amber-600`,
      ),
      yellow: cx(
        // HOVER
        `dark:hover:bg-yellow-600 hover:bg-yellow-500
        dark:hover:text-white hover:text-black
         dark:hover:border-yellow-800 border-transparent border-b-2 border-r-2`,

        // FOCUS
        `focus:ring-yellow-950
          dark:focus:ring-yellow-300`,

        // ACTIVE
        `active:bg-yellow-600`,
      ),
      lime: cx(
        // HOVER
        `dark:hover:bg-lime-600 hover:bg-lime-500
        dark:hover:text-white hover:text-black
         dark:hover:border-lime-800 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-green-600 hover:bg-green-500
        dark:hover:text-white hover:text-black
         dark:hover:border-green-800 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-emerald-600 hover:bg-emerald-500
        dark:hover:text-white hover:text-black
         dark:hover:border-emerald-800 border-transparent border-b-2 border-r-2`,

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
        `dark:hover:bg-teal-600 hover:bg-teal-500
        dark:hover:text-white hover:text-black
         dark:hover:border-teal-800 border-transparent border-b-2 border-r-2`,

        // FOCUS
        `focus:ring-teal-950
          dark:focus:ring-teal-300`,

        // ACTIVE
        `active:bg-teal-600`,
      ),
      cyan: cx(
        // HOVER
        `dark:hover:bg-cyan-600 hover:bg-cyan-500
        dark:hover:text-white hover:text-black 
         dark:hover:border-cyan-800 border-transparent border-b-2 border-r-2`,

        // FOCUS
        `focus:ring-cyan-950
          dark:focus:ring-cyan-300`,

        // ACTIVE
        `active:bg-cyan-600`,
      ),
      sky: cx(
        // HOVER
        `hover:bg-sky-500 hover:text-black
         dark:hover:border-sky-950 border-transparent border-b-2 border-r-2`,

        // FOCUS
        `focus:ring-sky-950
          dark:focus:ring-sky-300`,

        // ACTIVE
        `active:bg-sky-600`,
      ),
      blue: cx(
        // HOVER
        `hover:bg-blue-500 dark:hover:text-white  dark:hover:border-blue-950 border-transparent border-b-2 border-r-2`,

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
        `hover:bg-indigo-700 hover:text-white
        dark:hover:text-white  dark:hover:border-indigo-950 border-transparent border-b-2 border-r-2`,

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
        ` hover:bg-violet-700 hover:text-white
         dark:hover:border-violet-950 border-transparent border-b-2 border-r-2`,

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
        `hover:bg-purple-700 hover:text-white
        dark:hover:text-white  dark:hover:border-purple-950 border-transparent border-b-2 border-r-2`,

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
        `hover:bg-fuchsia-700 hover:text-white
        dark:hover:text-white  dark:hover:border-fuchsia-950 border-transparent border-b-2 border-r-2`,

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
        `hover:bg-pink-700 hover:text-white
        dark:hover:text-white  dark:hover:border-pink-950 border-transparent border-b-2 border-r-2`,

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
        `hover:bg-rose-700 hover:text-white
        dark:hover:text-white  dark:hover:border-rose-950 border-transparent border-b-2 border-r-2`,

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
        `hover:bg-neutral-100
          hover:text-black
          dark:hover:bg-neutral-950
          dark:hover:text-white`,

        // FOCUS-VISIBLE
        `focus:ring-neutral-950
          dark:focus:ring-neutral-300`,

        // ACTIVE
        `active:bg-neutral-200
            active:text-black
            dark:active:text-white
            dark:active:bg-neutral-900`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "brand",
      variant: "default",
      className: `dark:bg-brand-700  
              bg-brand-600  
              border-black
              dark:border-brand-600 
              text-white`,
    },
    {
      color: "slate",
      variant: "default",
      className: `dark:bg-slate-700 
              bg-slate-600 
              border-black
              dark:border-slate-600`,
    },
    {
      color: "gray",
      variant: "default",
      className: `dark:bg-gray-700 
              bg-gray-600   
              border-black
              dark:border-gray-600`,
    },
    {
      color: "zinc",
      variant: "default",
      className: `dark:bg-zinc-700 
                bg-zinc-600   
                border-black
                dark:border-zinc-600`,
    },
    {
      color: "neutral",
      variant: "default",
      className: `dark:bg-neutral-700 
                bg-neutral-600   
                border-black
                dark:border-neutral-600`,
    },
    {
      color: "stone",
      variant: "default",
      className: `dark:bg-stone-700 
                bg-stone-600   
                border-black
                dark:border-stone-600`,
    },
    {
      color: "red",
      variant: "default",
      className: `dark:bg-red-700 
                bg-red-600   
                border-black
                dark:border-red-600`,
    },
    {
      color: "orange",
      variant: "default",
      className: `bg-orange-400 
                dark:bg-orange-500   
                border-black
                dark:border-orange-800
                dark:text-orange-100
                text-black`,
    },
    {
      color: "amber",
      variant: "default",
      className: `bg-amber-400 
                dark:bg-amber-500   
                border-black
                dark:border-amber-800
                dark:text-white
                text-black`,
    },
    {
      color: "yellow",
      variant: "default",
      className: `bg-yellow-400 
                dark:bg-yellow-500   
                border-black
                dark:border-yellow-800
                dark:text-white
                text-black`,
    },
    {
      color: "lime",
      variant: "default",
      className: `bg-lime-400 
                dark:bg-lime-500   
                border-black
                dark:border-lime-800
                dark:text-white
                text-black`,
    },
    {
      color: "green",
      variant: "default",
      className: `bg-green-400 
                dark:bg-green-500   
                border-black
                dark:border-green-800
                dark:text-white
                text-black`,
    },
    {
      color: "emerald",
      variant: "default",
      className: `bg-emerald-500
                text-white
                border-black
                dark:border-emerald-800`,
    },
    {
      color: "teal",
      variant: "default",
      className: `bg-teal-400
                text-black
                dark:text-white
                border-black
                dark:border-teal-800`,
    },
    {
      color: "cyan",
      variant: "default",
      className: `bg-cyan-400
                text-black
                dark:text-white
                border-black
                dark:border-cyan-800`,
    },
    {
      color: "sky",
      variant: "default",
      className: `bg-sky-400
                text-black
                border-black
                dark:border-sky-800`,
    },
    {
      color: "blue",
      variant: "default",
      className: `bg-blue-400
                text-black
                border-black
                dark:border-blue-800`,
    },
    {
      color: "indigo",
      variant: "default",
      className: `bg-indigo-400
                text-white
                border-black
                dark:border-indigo-800`,
    },
    {
      color: "violet",
      variant: "default",
      className: `bg-violet-400
                text-white
                border-black
                dark:border-violet-800`,
    },
    {
      color: "purple",
      variant: "default",
      className: `bg-purple-400
                text-black
                border-black
                dark:border-purple-800`,
    },
    {
      color: "fuchsia",
      variant: "default",
      className: `bg-fuchsia-400
                text-black
                border-black
                dark:border-fuchsia-800`,
    },
    {
      color: "pink",
      variant: "default",
      className: `bg-pink-400
                text-black
                border-black
                dark:border-pink-800`,
    },
    {
      color: "rose",
      variant: "default",
      className: `bg-rose-400
                text-black
                border-black
                dark:border-rose-800`,
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
      className: `bg-transparent
                border-black
                dark:text-brand-100
                text-brand-900
                dark:border-brand-600`,
    },
    {
      color: "slate",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-slate-100
                text-slate-900
                dark:border-slate-600`,
    },
    {
      color: "gray",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-gray-100
                text-gray-900
                dark:border-gray-600`,
    },
    {
      color: "zinc",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-zinc-100
                text-zinc-900
                dark:border-zinc-600`,
    },
    {
      color: "neutral",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-neutral-100
                text-neutral-900
                dark:border-neutral-600`,
    },
    {
      color: "stone",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-stone-100
                text-stone-900
                dark:border-stone-600`,
    },
    {
      color: "red",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-red-100
                text-red-900
                dark:border-red-600`,
    },
    {
      color: "orange",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-orange-100
                text-black
                dark:border-orange-800`,
    },
    {
      color: "amber",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-amber-100
                text-black
                dark:border-amber-800`,
    },
    {
      color: "yellow",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-yellow-100
                text-black
                dark:border-yellow-800`,
    },
    {
      color: "lime",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-lime-100
                text-black
                dark:border-lime-800`,
    },
    {
      color: "green",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-green-100
                text-black
                dark:border-green-800`,
    },
    {
      color: "emerald",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-emerald-100
                text-black
                dark:border-emerald-800`,
    },
    {
      color: "teal",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-teal-100
                text-black
                dark:border-teal-800`,
    },
    {
      color: "cyan",
      variant: "outline",
      className: `bg-transparent
                border-black
                dark:text-cyan-100
                text-black
                dark:border-cyan-800`,
    },
    {
      color: "sky",
      variant: "outline",
      className: `bg-transparent
                dark:text-sky-100
                text-sky-900
                border-black
                dark:border-sky-800`,
    },
    {
      color: "blue",
      variant: "outline",
      className: `bg-transparent
                dark:text-blue-100
                text-blue-900
                border-black
                dark:border-blue-800`,
    },
    {
      color: "indigo",
      variant: "outline",
      className: `bg-transparent
                dark:text-indigo-100
                text-indigo-900
                border-black
                dark:border-indigo-800`,
    },
    {
      color: "violet",
      variant: "outline",
      className: `bg-transparent
                dark:text-violet-100
                text-violet-900
                border-black
                dark:border-violet-800`,
    },
    {
      color: "purple",
      variant: "outline",
      className: `bg-transparent
                dark:text-purple-100
                text-purple-900
                border-black
                dark:border-purple-800`,
    },
    {
      color: "fuchsia",
      variant: "outline",
      className: `bg-transparent
                dark:text-fuchsia-100
                text-fuchsia-900
                border-black
                dark:border-fuchsia-800`,
    },
    {
      color: "pink",
      variant: "outline",
      className: `bg-transparent
                dark:text-pink-100
                text-pink-900
                border-black
                dark:border-pink-800`,
    },
    {
      color: "rose",
      variant: "outline",
      className: `bg-transparent
                dark:text-rose-100
                text-rose-900
                border-black
                dark:border-rose-800`,
    },
    {
      color: "white-black",
      variant: "outline",
      className: `bg-white
                text-black
                border-neutral-400
                dark:bg-black
                dark:text-white
                dark:border-neutral-800`,
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
            dark:text-orange-400`,
    },
    {
      color: "amber",
      variant: "ghost",
      className: `text-amber-700
            dark:text-amber-400`,
    },
    {
      color: "yellow",
      variant: "ghost",
      className: `text-yellow-700
      dark:text-yellow-400`,
    },
    {
      color: "lime",
      variant: "ghost",
      className: `text-lime-700
      dark:text-lime-400`,
    },
    {
      color: "green",
      variant: "ghost",
      className: `text-green-700
      dark:text-green-400`,
    },
    {
      color: "emerald",
      variant: "ghost",
      className: `text-emerald-700
      dark:text-emerald-400`,
    },
    {
      color: "teal",
      variant: "ghost",
      className: `text-teal-700
      dark:text-teal-400`,
    },
    {
      color: "cyan",
      variant: "ghost",
      className: `text-cyan-700
      dark:text-cyan-400`,
    },
    {
      color: "sky",
      variant: "ghost",
      className: `text-sky-700
            dark:text-sky-400`,
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
});

const SolidButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof solidButton>
>(({ className, size, variant, color, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={twMerge(solidButton({ size, color, variant }), className)}
    />
  );
});
SolidButton.displayName = "SolidButton";

const Solid = SolidButton;

export { Solid };
