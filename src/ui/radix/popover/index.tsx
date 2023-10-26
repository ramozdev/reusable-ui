"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const CONTENT_SIDE_OFFSET: PopoverPrimitive.PopoverContentProps["sideOffset"] = 5;
const CONTENT_ALIGN: PopoverPrimitive.PopoverContentProps["align"] = "center";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverPortal = PopoverPrimitive.Portal;

const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    VariantProps<typeof variants.content>
>(
  (
    {
      className,
      color,
      align = CONTENT_ALIGN,
      sideOffset = CONTENT_SIDE_OFFSET,
      ...props
    },
    ref,
  ) => (
    <PopoverPrimitive.Content
      {...props}
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={twMerge(variants.content({ color }), className)}
    />
  ),
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow> &
    VariantProps<typeof variants.arrow>
>(({ className, color, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    {...props}
    ref={ref}
    className={twMerge(variants.arrow({ color }), className)}
  />
));
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;

const Root = PopoverRoot;
const Trigger = PopoverTrigger;
const Anchor = PopoverAnchor;
const Content = PopoverContent;
const Arrow = PopoverArrow;
const Portal = PopoverPortal;
const Close = PopoverClose;

const Popover = { Root, Trigger, Anchor, Content, Arrow, Portal, Close };

export default Popover;
