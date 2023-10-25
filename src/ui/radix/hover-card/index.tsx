"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const CONTENT_SIDE_OFFSET: HoverCardPrimitive.HoverCardContentProps["sideOffset"] = 5;
const CONTENT_ALIGN: HoverCardPrimitive.HoverCardContentProps["align"] =
  "center";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardPortal = HoverCardPrimitive.Portal;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> &
    VariantProps<typeof variants.content>
>(
  (
    {
      className,
      align = CONTENT_ALIGN,
      sideOffset = CONTENT_SIDE_OFFSET,
      color,
      ...props
    },
    ref,
  ) => (
    <HoverCardPrimitive.Content
      {...props}
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={twMerge(variants.content({ color }), className)}
    />
  ),
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

const HoverCardArrow = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow> &
    VariantProps<typeof variants.arrow>
>(({ className, color, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    {...props}
    ref={ref}
    className={twMerge(variants.arrow({ color }), className)}
  />
));
HoverCardArrow.displayName = HoverCardPrimitive.Arrow.displayName;

const Root = HoverCard;
const Trigger = HoverCardTrigger;
const Content = HoverCardContent;
const Arrow = HoverCardArrow;
const Portal = HoverCardPortal;

export { Root, Trigger, Content, Arrow, Portal };
