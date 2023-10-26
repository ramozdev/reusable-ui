import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";
import { ROUNDED } from "@/ui/globals";

const ScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    {...props}
    ref={ref}
    className={twMerge(
      `h-full
    w-full
    p-4`,
      ROUNDED,
      className,
    )}
  />
));
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar> &
    VariantProps<typeof variants.scrollbar>
>(({ className, color, ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    {...props}
    ref={ref}
    className={twMerge(variants.scrollbar({ color }), className)}
  />
));
ScrollAreaScrollbar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

const ScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Thumb> &
    VariantProps<typeof variants.thumb>
>(({ className, color, ...props }, ref) => (
  <ScrollAreaPrimitive.Thumb
    {...props}
    ref={ref}
    className={twMerge(variants.thumb({ color }), className)}
  />
));
ScrollAreaThumb.displayName = ScrollAreaPrimitive.Thumb.displayName;

const ScrollAreaCorner = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Corner>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Corner> &
    VariantProps<typeof variants.corner>
>(({ className, color, ...props }, ref) => (
  <ScrollAreaPrimitive.Corner
    {...props}
    ref={ref}
    className={twMerge(variants.corner({ color }), className)}
  />
));
ScrollAreaCorner.displayName = ScrollAreaPrimitive.Corner.displayName;

const Root = ScrollAreaRoot;
const Viewport = ScrollAreaViewport;
const Scrollbar = ScrollAreaScrollbar;
const Thumb = ScrollAreaThumb;
const Corner = ScrollAreaCorner;

const ScrollArea = { Root, Viewport, Scrollbar, Thumb, Corner };

export default ScrollArea;
