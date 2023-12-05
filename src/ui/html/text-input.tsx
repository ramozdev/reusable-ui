import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const input = cva(
  twMerge(
    `appearance-none
      block
      w-[260px]
      px-3
      peer
      text-sm
      py-1
      leading-5
      m-px
      transition
      focus:ring-0
      focus:outline-none
      disabled:pointer-events-none
      disabled:opacity-75
      [color-scheme:white]
      dark:[color-scheme:dark]
      
      focus-visible:invalid:bg-red-50
      focus-visible:invalid:text-red-900 
      focus-visible:invalid:placeholder:text-red-500
      focus-visible:invalid:border-red-900

      dark:focus-visible:invalid:bg-red-950
      dark:focus-visible:invalid:text-red-100 
      dark:focus-visible:invalid:placeholder:text-red-300
      dark:focus-visible:invalid:border-red-300`,

    // focus-visible:valid:bg-green-50
    // focus-visible:valid:text-green-900
    // focus-visible:valid:placeholder:text-green-500
    // focus-visible:valid:border-green-900

    // dark:focus-visible:valid:dark:bg-green-950
    // dark:focus-visible:valid:dark:text-green-100
    // dark:focus-visible:valid:placeholder:text-green-300
    // dark:focus-visible:valid:border-green-300
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "neutral",
    },
    variants: {
      variant: {
        outline: "",
        plane: "border-transparent",
      },
      file: {
        true: `
      file:ml-0.5
      file:mr-4 
      file:py-2 
      file:px-3
      file:rounded-md
      file:border-0
      file:font-medium
      file:bg-neutral-100
      file:text-neutral-900`,
      },
      color: {
        neutral: cx(
          `bg-neutral-50
          text-neutral-900
          dark:bg-neutral-800
          dark:text-neutral-100`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: "outline",
        className: `border-neutral-300 dark:border-neutral-700`,
      },
    ],
  },
);

const TextInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof input> & {
      validation?: string;
      caption?: string;
    }
>(
  (
    {
      className,
      color,
      variant,
      file,
      validation,
      caption,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="space-y-2">
        <label className="text-neutral-900 dark:text-neutral-50">
          {children}
        </label>
        <input
          {...props}
          ref={ref}
          className={twMerge(input({ color, variant, file }), className)}
        />
        {!!caption && caption.length > 0 && (
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {caption}
          </div>
        )}
        <div className="invisible text-sm text-red-600 peer-invalid:visible">
          {validation}
        </div>
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
