import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const ProgressRoot = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <ProgressPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
ProgressRoot.displayName = ProgressPrimitive.Root.displayName;

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator> &
    VariantProps<typeof variants.indicator>
>(({ className, color, ...props }, ref) => (
  <ProgressPrimitive.Indicator
    {...props}
    ref={ref}
    className={twMerge(variants.indicator({ color }), className)}
  />
));
ProgressIndicator.displayName = ProgressPrimitive.Indicator.displayName;

const Root = ProgressRoot;
const Indicator = ProgressIndicator;

const Progress = { Root, Indicator };

export default Progress;
