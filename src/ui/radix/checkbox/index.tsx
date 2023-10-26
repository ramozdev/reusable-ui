"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const CheckboxRoot = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <CheckboxPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
CheckboxRoot.displayName = CheckboxPrimitive.Root.displayName;

const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator> &
    VariantProps<typeof variants.indicator>
>(({ className, color, ...props }, ref) => (
  <CheckboxPrimitive.Indicator
    {...props}
    ref={ref}
    className={twMerge(variants.indicator({ color }), className)}
  />
));
CheckboxIndicator.displayName = CheckboxPrimitive.Indicator.displayName;

const Root = CheckboxRoot;
const Indicator = CheckboxIndicator;

const Checkbox = { Root, Indicator };

export default Checkbox;
