import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <SwitchPrimitives.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
SwitchRoot.displayName = SwitchPrimitives.Root.displayName;

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Thumb>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Thumb> &
    VariantProps<typeof variants.thumb>
>(({ className, color, ...props }, ref) => (
  <SwitchPrimitives.Thumb
    {...props}
    ref={ref}
    className={twMerge(variants.thumb({ color }), className)}
  />
));
SwitchThumb.displayName = SwitchPrimitives.Thumb.displayName;

const Root = SwitchRoot;
const Thumb = SwitchThumb;

const Switch = { Root, Thumb };

export default Switch;
