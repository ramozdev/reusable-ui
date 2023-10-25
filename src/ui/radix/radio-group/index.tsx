"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      {...props}
      ref={ref}
      className={twMerge(`flex flex-col gap-3`, className)}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      {...props}
      ref={ref}
      className={twMerge(variants.item({ color }), className)}
    />
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator> &
    VariantProps<typeof variants.indicator>
>(({ className, color, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator
      {...props}
      ref={ref}
      className={twMerge(variants.indicator({ color }), className)}
    />
  );
});
RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName;

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  React.ComponentPropsWithoutRef<typeof RadioGroupItem>
>((props, ref) => (
  <RadioGroupItem {...props} ref={ref}>
    <RadioGroupIndicator />
  </RadioGroupItem>
));
Radio.displayName = "Radio";

const Root = RadioGroup;
const Item = RadioGroupItem;
const Indicator = RadioGroupIndicator;

export { Root, Item, Indicator, Radio };
