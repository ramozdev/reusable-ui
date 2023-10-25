"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

// CONTENT_SIDE_OFFSET is the default value for the `sideOffset` prop
const CONTENT_SIDE_OFFSET: TooltipPrimitive.TooltipContentProps["sideOffset"] = 5;

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipPortal = TooltipPrimitive.Portal;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, sideOffset = CONTENT_SIDE_OFFSET, color, ...props }, ref) => (
  <TooltipPrimitive.Content
    {...props}
    ref={ref}
    sideOffset={sideOffset}
    className={twMerge(variants.content({ color }), className)}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> &
    VariantProps<typeof variants.arrow>
>(({ className, color, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    {...props}
    ref={ref}
    className={twMerge(variants.arrow({ color }), className)}
  />
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

const Root = Tooltip;
const Trigger = TooltipTrigger;
const Content = TooltipContent;
const Arrow = TooltipArrow;
const Portal = TooltipPortal;
const Provider = TooltipProvider;

export { Root, Trigger, Content, Arrow, Portal, Provider };
