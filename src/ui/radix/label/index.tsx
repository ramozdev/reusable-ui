import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const LabelRoot = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, required, color, ...props }, ref) => (
  <LabelPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ required, color }), className)}
  />
));
LabelRoot.displayName = LabelPrimitive.Root.displayName;

const Root = LabelRoot;

const Label = { Root };

export default Label;
