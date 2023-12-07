// ▲
// ▼

import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const numberDisplay = cva(twMerge(``), {
  defaultVariants: {
    color: "green",
  },
  variants: {
    color: {
      neutral: cx(
        `text-gray-900
          dark:text-gray-100`,
      ),
      green: cx(
        `text-green-500
          dark:text-green-400`,
      ),
      red: cx(
        `text-red-500
            dark:text-red-400`,
      ),
    },
  },
});

const Display = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof numberDisplay> & {
      value: number;
    }
>(({ className, color, value, ...props }, ref) => {
  const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);

    const symbol = number > 0 ? "▲" : "▼";

    return `${symbol} ${formattedNumber}%`;
  };

  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(numberDisplay({ color }), className)}
    >
      {value <= 0 ? (
        <p className={twMerge(numberDisplay({ color: "red" }))}>
          {formatNumber(value)}
        </p>
      ) : (
        <p className={twMerge(numberDisplay({ color: "green" }))}>
          {formatNumber(value)}
        </p>
      )}
    </div>
  );
});

Display.displayName = "Display";

const Currency = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof numberDisplay> & {
      value: number;
    }
>(({ className, color, value, ...props }, ref) => {
  const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 9,
      style: "currency",
      currency: "USD",
      notation: "standard",
    }).format(number);

    return `${formattedNumber}`;
  };

  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(numberDisplay({ color }), className)}
    >
      <p className={twMerge(numberDisplay({ color: "neutral" }))}>
        {formatNumber(value)}
      </p>
    </div>
  );
});

Currency.displayName = "Currency";

const Number = {
  Display,
  Currency,
};

export default Number;
